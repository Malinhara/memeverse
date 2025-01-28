// Select elements
const animalChatButton = document.getElementById('animalchat');
const chatModal = document.getElementById('chatModal');
const chatHistory = document.getElementById('chatHistory');
const closeBtn = document.querySelector('.close');

// Open the modal when clicking the Animal chat button
animalChatButton.onclick = function() {
  chatModal.style.display = 'block';
  loadChatMessages();
};

// Close the modal when clicking the close button
closeBtn.onclick = function() {
  chatModal.style.display = 'none';
};

// Close the modal if clicked outside of it
window.onclick = function(event) {
  if (event.target === chatModal) {
    chatModal.style.display = 'none';
  }
};

// Fetch chat data from JSON file
async function loadChatData() {
  const response = await fetch('js/chatData.json'); // Adjust the path if needed
  const data = await response.json();
  return data;
}

// Function to load chat messages
async function loadChatMessages() {
  const chatData = await loadChatData(); // Fetch chat data from JSON
  const dialogue = chatData.pages[0].dialogue; // Get the dialogue from JSON
  let index = 0;

  // Clear previous messages
  chatHistory.innerHTML = '';

  // Function to display the next message with typing effect
  function displayMessage() {
    if (index < dialogue.length) {
      const message = dialogue[index];
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('chat-message');

      // Create the message content
      const messageContent = `<strong>${message.character}:</strong> `;
      messageDiv.innerHTML = messageContent;
      
      chatHistory.appendChild(messageDiv);

      // Type the line character by character
      let charIndex = 0;
      function typeLine() {
        if (charIndex < message.line.length) {
          messageDiv.innerHTML = messageContent + message.line.substring(0, charIndex + 1);
          charIndex++;
          setTimeout(typeLine, 50); // Adjust the typing speed (ms per character)
        } else {
          index++;
          setTimeout(displayMessage, 1500); // Wait before showing the next message
        }
      }

      // Start typing the line
      typeLine();
    }
  }

  // Load the first 50 messages instantly
  for (let i = 0; i < Math.min(50, dialogue.length); i++) {
    const message = dialogue[i];
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message');
    messageDiv.innerHTML = `<strong>${message.character}:</strong> ${message.line}`;
    chatHistory.appendChild(messageDiv);
  }

  // Start typing the remaining messages
  index = 50;
  displayMessage();
}
