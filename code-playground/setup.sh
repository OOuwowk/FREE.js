#!/usr/bin/env bash

echo "Checking environment for Code Playground..."

# Check for Node.js & npm
command -v node >/dev/null || { echo "Error: Node.js is not installed. Please install Node.js first."; exit 1; }
echo "✓ Node.js is installed: $(node --version)"
command -v npm >/dev/null || { echo "Error: npm is not installed. Please install npm first."; exit 1; }
echo "✓ npm is installed: $(npm --version)"

# Check for Python & pip
command -v python3 >/dev/null || { echo "Error: Python3 is not installed. Please install Python3 first."; exit 1; }
echo "✓ Python is installed: $(python3 --version)"
command -v pip3 >/dev/null || { echo "Warning: pip3 is not installed. Some features may not work properly."; }
if command -v pip3 >/dev/null; then
  echo "✓ pip is installed: $(pip3 --version)"
fi

# Check for Docker (optional)
if command -v docker >/dev/null; then
  echo "✓ Docker is installed: $(docker --version)"
else
  echo "⚠ Docker is not installed. This is optional but will be needed for Python sandbox in future phases."
fi

echo ""
echo "Environment check complete. You're ready to start developing!"
echo ""
echo "To start the frontend:"
echo "  cd frontend"
echo "  npm install"
echo "  npm run dev"
echo ""
echo "To start the backend:"
echo "  cd backend"
echo "  pip install -r requirements.txt"
echo "  uvicorn app.main:app --reload --host 0.0.0.0 --port 8000"