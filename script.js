function greetUser() {
  const name = document.getElementById("nameInput").value;
  const greeting = `Hello, ${name}! Welcome to our page. 😊`;
  document.getElementById("greetingMessage").textContent = greeting;
}
