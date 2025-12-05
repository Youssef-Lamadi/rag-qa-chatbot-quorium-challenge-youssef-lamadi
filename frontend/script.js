// Use relative URL or environment-based URL for better portability
const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000/ask'
    : `http://${window.location.hostname}:5000/ask`;

const chatMessages = document.getElementById('chat-messages');
const questionInput = document.getElementById('question-input');
const sendButton = document.getElementById('send-button');

function addMessage(text, isUser, sources = null) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    let messageContent = `<div>${text}</div>`;
    
    if (sources && sources.length > 0) {
        messageContent += `
            <div class="sources">
                <strong>Sources:</strong>
                ${sources.join(', ')}
            </div>
        `;
    }
    
    messageDiv.innerHTML = messageContent;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function sendQuestion() {
    const question = questionInput.value.trim();
    
    if (!question) {
        return;
    }
    
    // Add user message
    addMessage(question, true);
    questionInput.value = '';
    
    // Disable send button
    sendButton.disabled = true;
    sendButton.textContent = 'Sending...';
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question }),
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        // Add bot response
        addMessage(data.answer, false, data.sources);
        
    } catch (error) {
        console.error('Error:', error);
        addMessage('Sorry, there was an error processing your question. Please try again.', false);
    } finally {
        // Re-enable send button
        sendButton.disabled = false;
        sendButton.textContent = 'Send';
        questionInput.focus();
    }
}

// Event listeners
sendButton.addEventListener('click', sendQuestion);

questionInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendQuestion();
    }
});

// Initial message
addMessage('Hello! I\'m your RAG Q&A assistant. Ask me anything!', false);
