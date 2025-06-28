function greetUser() {
  const name = document.getElementById("nameInput").value.trim();
  const greetings = [
    `Hey ${name}, you're awesome! 🌟`,
    `Welcome, ${name}! Let's make today amazing! 😄`,
    `Hi ${name}, wishing you a day full of joy! 🎉`,
    `Nice to see you, ${name}! 😊`,
    `Hello, ${name}! You rock! 🤘`
  ];
  
  const message = name
    ? greetings[Math.floor(Math.random() * greetings.length)]
    : "Please enter your name! 🙏";

  document.getElementById("greetingMessage").textContent = message;

  // Play music
  if (name) {
    const music = document.getElementById("bgMusic");
    music.volume = 0.3;
    music.play().catch(() => {}); // Handle autoplay restriction silently
  }
}
