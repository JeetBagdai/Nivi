# Nivi | Flight Simulator for Financial Freedom

Nivi is an interactive educational platform designed to build investor intuition through behavioral psychology and market simulations. 

It leverages advanced AI logic (Groq API) combined with historical market scenarios to teach risk tolerance during events like the 2008 crash or the 2020 pandemic.

## 🚀 Getting Started

The application is built locally and comprises an optimized frontend (`nivi.html`) paired with a Python FastAPI backend acting as our localized hardware-accelerated scoring and LLM proxy system.

### 1. Requirements
Ensure you have the following installed on your target machine:
- Python 3.9+
- A modern browser

### 2. Setup your Environment Profile (.env)
We use a hidden environment variable file to securely process API keys locally rather than exposing them within the frontend javascript.

Copy the `.env.example` file and configure it:
```bash
cp .env.example .env
```
Inside `.env`, insert your Groq API Authentication keys.

### 3. Install Python Dependencies
Run the following native pipeline to configure the Nivi FastAPI LLM router and ROCm PyTorch endpoint natively:

```bash
pip install -r requirements.txt
```
> *Alternatively, for direct installation: `pip install fastapi uvicorn pydantic python-dotenv httpx` and standard PyTorch.*

### 4. Running the Backend microservice
Navigate to the root directory and initiate the service via Uvicorn (FastAPI runner). This will establish `http://localhost:8000` which the Frontend communicates with sequentially.

```bash
python rocm_service.py
```
*(Or optionally: `uvicorn rocm_service:app --reload`)*

### 5. Running the Application
Finally, since `nivi.html` is structured as a static native HTML deployment, you can load the GUI directly by opening `nivi.html` in your browser. Alternatively, serve it via any live-server protocol.
