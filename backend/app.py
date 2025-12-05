from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/ask', methods=['POST'])
def ask():
    data = request.get_json()
    
    if not data or 'question' not in data:
        return jsonify({"error": "Invalid request. 'question' field is required."}), 400
    
    question = data.get('question', '')
    
    if not question.strip():
        return jsonify({"error": "Question cannot be empty."}), 400
    
    # Mock response
    response = {
        "answer": "Mock Answer",
        "sources": ["file1.pdf"]
    }
    
    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
