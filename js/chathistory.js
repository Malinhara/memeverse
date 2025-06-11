// Select elements
const animalChatButton = document.getElementById('animalchat');
const chatModal = document.getElementById('chatModal');
const chatHistory = document.getElementById('chatHistory');
const closeBtn = document.querySelector('.close');
const sendPromptBtn = document.getElementById('sendPrompt');
const userPromptInput = document.getElementById('userPrompt');

// Open the modal
animalChatButton.onclick = () => {
  chatModal.style.display = 'block';
};

// Close modal
closeBtn.onclick = () => {
  chatModal.style.display = 'none';
};

// Close modal if clicked outside
window.onclick = (event) => {
  if (event.target === chatModal) {
    chatModal.style.display = 'none';
  }
};

// Send user prompt
sendPromptBtn.onclick = async () => {
  const prompt = userPromptInput.value.trim();
  if (!prompt) return;

  // Show user prompt
  const userDiv = document.createElement('div');
  userDiv.classList.add('chat-message');
  userDiv.innerHTML = `<strong>You:</strong> ${prompt}`;
  chatHistory.appendChild(userDiv);
  chatHistory.scrollTop = chatHistory.scrollHeight;
  userPromptInput.value = '';

  try {
    const response = await fetch('https://ai-saas-backend-seven.vercel.app/user/chatall', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const result = await response.json();
    const replies = result.message; // Assuming result.message is an array of { character, line }

    if (!Array.isArray(replies)) {
      throw new Error('Invalid response format from server.');
    }

    // Display replies one by one
    let replyIndex = 0;

    function displayReply() {
      if (replyIndex < replies.length) {
        const reply = replies[replyIndex];
        const replyDiv = document.createElement('div');
        replyDiv.classList.add('chat-message');
        replyDiv.innerHTML = `<strong>${reply.character}:</strong> `;

        chatHistory.appendChild(replyDiv);
        chatHistory.scrollTop = chatHistory.scrollHeight;

        let charIndex = 0;
        function typeReply() {
          if (charIndex < reply.line.length) {
            replyDiv.innerHTML = `<strong>${reply.character}:</strong> ${reply.line.substring(0, charIndex + 1)}`;
            charIndex++;
            setTimeout(typeReply, 40);
          } else {
            replyIndex++;
            setTimeout(displayReply, 800);
          }
        }

        typeReply();
      }
    }

    displayReply();

  } catch (err) {
    console.error('Error:', err);
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('chat-message');
    errorDiv.innerHTML = `<strong>Error:</strong> Failed to fetch replies.`;
    chatHistory.appendChild(errorDiv);
  }
};
