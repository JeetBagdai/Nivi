from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import torch
import torch.nn as nn
import uvicorn

app = FastAPI(title="Nivi Behavioral Points (ROCm PyTorch)")

# Allow CORS so nivi.html can call this endpoint
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 1. Define Model Architecture
class BehavioralScorer(nn.Module):
    def __init__(self):
        super().__init__()
        # Input: [time_spent, quiz_score]
        self.fc1 = nn.Linear(2, 8)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(8, 1)

    def forward(self, x):
        x = self.fc1(x)
        x = self.relu(x)
        x = self.fc2(x)
        return x

# 2. Setup Device for AMD ROCm via PyTorch
# In ROCm PyTorch build, torch.cuda.is_available() is True when an AMD GPU is available via HIP
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
print(f"Using device: {device} for behavioral scoring.")

# 3. Initialize Model and move to device
model = BehavioralScorer().to(device)

# Load mock weights so the output makes sense logically
with torch.no_grad():
    # Weights mimicking: time (slightly positive impact up to a point) + higher quiz score (strong positive impact)
    model.fc1.weight.copy_(torch.tensor([
        [ 0.01,  1.0], 
        [ 0.02,  2.0], 
        [-0.01,  0.5], 
        [ 0.00,  1.0], 
        [ 0.01,  1.5], 
        [ 0.03,  2.5], 
        [ 0.02, -0.5], 
        [ 0.01,  0.0]
    ]))
    model.fc1.bias.copy_(torch.zeros(8))
    model.fc2.weight.copy_(torch.tensor([[1.0, 1.5, 0.5, 1.0, 1.2, 2.0, 0.0, 0.5]]))
    model.fc2.bias.copy_(torch.tensor([2.0]))

class BehaviorRequest(BaseModel):
    time_spent: float
    quiz_score: float

@app.post("/behavior")
def compute_points(req: BehaviorRequest):
    # Calculate behavior points based on time spent and quiz score
    
    # Cap time_spent to 300 seconds (5 minutes) mapping for the model
    time_capped = min(req.time_spent, 300.0)
    
    # Process through ROCm PyTorch model
    input_tensor = torch.tensor([[time_capped, req.quiz_score]], dtype=torch.float32).to(device)
    
    with torch.no_grad():
        output = model(input_tensor)
        
    score_raw = output.item()
    
    # Map raw model output to a 1 to 15 points scale
    points = max(1, min(15, int(score_raw)))
    
    print(f"Computed Points: {points} (Time: {req.time_spent}s, Score: {req.quiz_score})")
    
    return {"points": points, "device_used": str(device)}

if __name__ == "__main__":
    uvicorn.run("rocm_service:app", host="0.0.0.0", port=8000, reload=True)
