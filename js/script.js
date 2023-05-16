function toggleChatbox() {
    const chatbox = document.querySelector('.chatbox');
    const chatIcon = document.querySelector('.chat-icon');
  
    if (chatbox.classList.contains('active')) {
      chatbox.classList.remove('active');
      chatIcon.style.display = 'block';
    } else {
      chatbox.classList.add('active');
      chatIcon.style.display = 'none';
    }
  }
  
  const chatIcon = document.querySelector('.chat-icon');
  chatIcon.addEventListener('click', toggleChatbox);
  
  // Function to send message
  function sendMessage() {
    const input = document.querySelector('.chatbox .footer input[type="text"]');
    const message = input.value.trim();
  
    if (message !== '') {
      const body = document.querySelector('.chatbox .body');
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message');
      messageDiv.innerHTML = `
        <div class="user-message">
          <div class="bubble">
            ${message}
          </div>
        </div>
      `;
      body.appendChild(messageDiv);
      body.scrollTop = body.scrollHeight;
      input.value = '';
  
      // Process the user's message (add your logic here)
      processUserMessage(message);
    }
  }
  
  // Function to process the user's message
  function processUserMessage(message) {

    if (message.toLowerCase().includes('application form deadline')) {
      const botReply = 'The application form deadline varies for each exam. Please provide the name of the exam for which you want to know the deadline.';
      displayBotReply(botReply);
    } else if (message.toLowerCase().includes('hi') || message.toLowerCase().includes('yo') || message.toLowerCase().includes('hello')) {
      const botReply = 'Hi there! How can I help you today?';
      displayBotReply(botReply);
    } else if (message.toLowerCase().includes('how are you') || message.toLowerCase().includes('hru') || message.toLowerCase().includes('whats up')) {
      const botReply = 'I am doing well, thank you for asking! How are you doing today?';
      displayBotReply(botReply);
    } else if (message.toLowerCase().includes('good') || message.toLowerCase().includes('fine') || message.toLowerCase().includes('great')) {
        const botReply = 'Glad to know &#128513';
        displayBotReply(botReply);
    } 
    
    else if(message.toLowerCase().includes('courses') || message.toLowerCase().includes('price') || message.toLowerCase().includes('offers') || message.toLowerCase().includes('exam')){
        const botReply = {
          text: 'We offer a variety of courses,To learn more about our courses, please click on the following link',
          href: 'https://www.sciastra.com/courses/',
        };
        displayBotReply(botReply);
    }

    else if(message.toLowerCase().includes('selection')){
        const botReply = {
          text: 'Check out the selected candidates by clicking on the following link',
          href: 'https://www.sciastra.com/selections/',
        };
        displayBotReply(botReply);
    }

    else if(message.toLowerCase().includes('discount')){
        const botReply = {
          text: 'You can check the discounts on the courses by clicking on the following link',
          href: 'https://www.sciastra.com/selections/',
        };
        displayBotReply(botReply);
    }

    else if(message.toLowerCase().includes('blog')){
        const botReply = {
          text: 'Check out our blogs by clicking on the following link',
          href: 'https://www.sciastra.com/blogs/',
        };
        displayBotReply(botReply);
    }
    
    else if(message.toLowerCase().includes('contact')){
        const botReply = {
          text: 'Contact Us via Email - support@sciastra.com or by clicking on the following link',
          href: 'https://www.sciastra.com/contact/',
        };
        displayBotReply(botReply);
    }

    else if(message.toLowerCase().includes('team')){
        const botReply = {
          text: 'Check out our team members by clicking on the following link',
          href: 'https://www.sciastra.com/teams/',
        };
        displayBotReply(botReply);
    }
    else if(message.toLowerCase().includes('material') || message.toLowerCase().includes('study')){
        const botReply = {
          text: 'Check out study material by clicking on the following link',
          href: 'https://www.sciastra.com/teams/',
        };
        displayBotReply(botReply);
    }
    else if(message.toLowerCase().includes('login')){
        const botReply = {
          text: 'Login by clicking on the link',
          href: 'https://www.sciastra.com/app/',
        };
        displayBotReply(botReply);
    }
    else if(message.toLowerCase().includes('shirt')){
        const botReply = {
          text: 'Buy our tshirt to become a part of our community by clicking on the link',
          href: 'https://pages.razorpay.com/SciAstraTshirt',
        };
        displayBotReply(botReply);
    }
    
    else {
      // If the user's message doesn't match any specific keyword, display a generic response
      const botReply = 'I apologize, but I am not able to assist with that request. Please try asking a different question.';
      displayBotReply(botReply);
    }
  }
  
  function displayBotReply(msg) {
    const body = document.querySelector('.chatbox .body');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
  
    if (typeof msg === 'object' && msg.href) {
      msgText = msg.text
      msgLink = msg.href
      // Check if the message is a link
      if (msgLink.startsWith('http://') || msgLink.startsWith('https://')) {
        messageDiv.innerHTML = `
          <div class="bot-message">
            <div class="bubble">
              <p> ${msgText} <p>
              <a href="${msgLink}"> ${msgLink}</a>
            </div>
          </div>
        `;
      } else {
        messageDiv.innerHTML = `
          <div class="bot-message">
            <div class="bubble">
              ${msg}
            </div>
          </div>
        `;
      }
    } else {
      messageDiv.innerHTML = `
        <div class="bot-message">
          <div class="bubble">
            ${msg}
          </div>
        </div>
      `;
    }
  
    body.appendChild(messageDiv);
    body.scrollTop = body.scrollHeight;
  }
  

  
  // Add event listener to the close button
  const closeButton = document.querySelector('.chatbox .header .close');
  closeButton.addEventListener('click', toggleChatbox);
  
  // Add event listener to the send button
  const sendButton = document.querySelector('.chatbox .footer button');
  sendButton.addEventListener('click', sendMessage);
  
  // Add event listener to send message when pressing Enter key in the input field
  const inputField = document.querySelector('.chatbox .footer input[type="text"]');
  inputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      sendMessage();
    }
  });

  