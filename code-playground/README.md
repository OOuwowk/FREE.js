# Code Playground

An interactive web platform that allows users to write and execute HTML, CSS, JavaScript, and Python code directly in the browser with real-time preview.

## Project Structure

```
/code-playground/
├── frontend/           # React frontend application
│   ├── public/         # Static assets
│   └── src/            # React source code
├── backend/            # FastAPI backend service
│   └── app/            # Python application code
├── database/           # Database related files (future use)
└── scripts/            # Utility scripts
```

## Getting Started

### Prerequisites

- Node.js and npm
- Python 3.8+
- Docker (optional, for future Python sandbox)

### Environment Setup

Run the setup script to verify your environment:

```bash
./setup.sh
```

### Running the Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at:
- Local: http://localhost:12000
- Public: https://work-1-vrwslohksisiqstv.prod-runtime.all-hands.dev

### Running the Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 12001
```

The backend API will be available at:
- Local: http://localhost:12001
- Public: https://work-2-vrwslohksisiqstv.prod-runtime.all-hands.dev

## Current Features (Phase 1)

- Interactive code editors for HTML, CSS, and JavaScript
- Real-time preview of HTML/CSS/JS code
- Basic API health check

## Note

This is Phase 1 of the Code Playground project. Python code execution and project saving features will be implemented in future phases.