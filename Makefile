# Variables for paths
FRONTEND_DIR = client
BACKEND_DIR = server

# PID files
FRONTEND_PID = .frontend_pid
BACKEND_PID = .backend_pid

# Default target
all: start

# Rule to start the frontend
start-frontend:
	@echo "Starting frontend..."
	cd $(FRONTEND_DIR) && npm start & echo $$! > $(FRONTEND_PID)

# Rule to start the backend
start-backend:
	@echo "Starting backend..."
	cd $(BACKEND_DIR) && source venv/bin/activate && python app.py & echo $$! > $(BACKEND_PID)

# Rule to start both frontend and backend
start: start-frontend start-backend
	@echo "Frontend and backend started."

# Rule to stop both frontend and backend
stop:
	@echo "Stopping all processes..."
	@if lsof -i :3000 -t >/dev/null 2>&1; then \
	echo "Stopping frontend on port 3000..."; \
	kill -9 $$(lsof -i :3000 -t); \
	fi
	@if lsof -i :5000 -t >/dev/null 2>&1; then \
	echo "Stopping backend on port 5000..."; \
	kill -9 $$(lsof -i :5000 -t); \
	fi
	@echo "All processes stopped."