# Nivi | Powered by AMD ROCm™ & PyTorch

Nivi is an interactive educational platform designed to build investor intuition through behavioral psychology and market simulations. 

It leverages **advanced AI logic (Groq API)** combined with historical market scenarios to teach risk tolerance during events like the 2008 crash or the 2020 pandemic.

Crucially, **Nivi's Behavioral Scoring Engine is relentlessly hardware-accelerated using AMD ROCm™ and PyTorch**. This allows the backend to utilize the massive parallel compute capabilities of AMD Radeon™ GPUs, guaranteeing blistering fast neural network inferences for dynamic user behavioral profiling.

## 🚀 Getting Started

The application is built locally and comprises an optimized frontend (`nivi.html`) paired with a Python FastAPI backend acting as our localized **AMD ROCm™ compute powerhouse** and LLM proxy system.

### 1. Requirements
Ensure you have the following installed on your target machine:
- Python 3.9+
- A modern browser
- **Operating System:** Linux / Ubuntu (via WSL2 on Windows) for native AMD ROCm™ compatibility.
- **Hardware:** A compatible AMD Radeon™ GPU to unlock the full potential of ROCm PyTorch.

### 2. Setup your Environment Profile (.env)
We use a hidden environment variable file to securely process API keys locally.

Copy the `.env.example` file and configure it:
```bash
cp .env.example .env
```
Inside `.env`, insert your Groq API Authentication keys.

### 3. Install Python Dependencies & AMD ROCm™ PyTorch
Run the following native pipeline to configure the Nivi FastAPI LLM router and prepare the **ROCm PyTorch** endpoint natively:

```bash
pip install -r requirements.txt
```

> **🔥 CRITICAL AMD ROCm™ SETUP:** To enable true hardware acceleration on your AMD GPU, you *must* install the specific ROCm PyTorch wheel for your environment. For example (ROCm 6.0):
> ```bash
> pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm6.0
> ```

### 4. Running the Backend ROCm Microservice
Navigate to the root directory and initiate the service via Uvicorn (FastAPI runner). This fires up the PyTorch tensors and establishes `http://localhost:8000` which the Frontend communicates with sequentially.

```bash
python rocm_service.py
```
*(Or optionally: `uvicorn rocm_service:app --reload`)*

### 5. Running the Application
Finally, since `nivi.html` is structured as a static native HTML deployment, you can load the GUI directly by opening `nivi.html` in your browser. Complete a module to watch the AMD ROCm™ PyTorch behavioral scoring model in action in real-time!
