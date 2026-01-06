document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const greetingEl = document.getElementById('ai-greeting');
  const passwordInput = document.getElementById('password');
  const feedbackEl = document.getElementById('password-feedback');
  const usernameInput = document.getElementById('username');

  // ✅ AI Greeting based on time of day
  function aiGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
      greetingEl.textContent = "🌅 Good Morning! Ready to start your day?";
    } else if (hour < 18) {
      greetingEl.textContent = "☀️ Good Afternoon! Keep going strong.";
    } else {
      greetingEl.textContent = "🌙 Good Evening! Let's wrap up the day.";
    }
  }
  aiGreeting();

  // ✅ Password Strength Feedback
  passwordInput.addEventListener("input", () => {
    const value = passwordInput.value;

    if (value.length < 6) {
      feedbackEl.textContent = "⚠️ Too short. Try at least 6 characters.";
      feedbackEl.style.color = "orange";
    } else if (!/[A-Z]/.test(value) || !/[0-9]/.test(value)) {
      feedbackEl.textContent = "ℹ️ Add numbers & uppercase letters for strength.";
      feedbackEl.style.color = "yellow";
    } else {
      feedbackEl.textContent = "✅ Strong password!";
      feedbackEl.style.color = "lightgreen";
    }
  });

  // ✅ Form submit logic
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username && password) {
      alert('Login successful!');
      console.log(`Username: ${username}, Password: ${password}`);
    } else {
      alert('Please enter both username and password.');
    }
  });
});
