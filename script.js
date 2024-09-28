const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const responses = {
    'hello': "Hi there!",
    'how are you?': "I'm just a bot, but thanks for asking!",
    'what is your name?': "I'm a simple chatbot!",
    'bye': "Goodbye! Have a great day!"
};

function addMessage(content, className) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    messageDiv.textContent = content;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}

function getResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    return responses[lowerMessage] || "I'm not sure how to respond to that.";
}

sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value;
    if (userMessage) {
        addMessage(userMessage, 'user-message');
        userInput.value = '';

        const botResponse = getResponse(userMessage);
        addMessage(botResponse, 'bot-message');

        if (userMessage.toLowerCase() === 'bye') {
            setTimeout(() => {
                chatBox.innerHTML = ''; // Clear chat on goodbye
                addMessage("Goodbye! Have a great day!", 'bot-message');
            }, 1000);
        }
    }
});

// Allow pressing 'Enter' to send the message
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendBtn.click();
    }
});

