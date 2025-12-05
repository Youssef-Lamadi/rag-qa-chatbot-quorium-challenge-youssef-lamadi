# RAG Q&A Chatbot

A simple RAG (Retrieval-Augmented Generation) Q&A chatbot with a Flask backend and HTML/CSS/JS frontend, orchestrated with Docker Compose.

## Project Structure

```
.
├── backend/
│   ├── app.py              # Flask application with /ask endpoint
│   ├── requirements.txt    # Python dependencies
│   └── Dockerfile          # Backend Docker configuration
├── frontend/
│   ├── index.html          # Main HTML page
│   ├── style.css           # Styling
│   ├── script.js           # Frontend logic
│   ├── nginx.conf          # Nginx configuration
│   └── Dockerfile          # Frontend Docker configuration
└── docker-compose.yml      # Docker Compose orchestration
```

## Features

- **Backend**: Flask API with POST `/ask` endpoint that accepts questions and returns mock answers
- **Frontend**: Interactive chat interface with modern design
- **Docker**: Complete containerized setup with Docker Compose

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Running the Application

1. Clone the repository:
```bash
git clone <repository-url>
cd rag-qa-chatbot-quorium-challenge-youssef-lamadi
```

2. Start the application with Docker Compose:
```bash
docker-compose up --build
```

3. Access the application:
- Frontend: http://localhost
- Backend API: http://localhost:5000

### API Endpoint

**POST /ask**

Request:
```json
{
  "question": "What is the meaning of life?"
}
```

Response:
```json
{
  "answer": "Mock Answer",
  "sources": ["file1.pdf"]
}
```

## Development

### Running Backend Locally

```bash
cd backend
pip install -r requirements.txt
python app.py
```

### Running Frontend Locally

Simply open `frontend/index.html` in a web browser or use a local server:

```bash
cd frontend
python -m http.server 8000
```

## Future Enhancements

- Integrate actual RAG functionality with vector databases
- Add authentication and user management
- Implement document upload and processing
- Add conversation history
- Enhance error handling and validation