document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById('password');
    const strengthMeter = document.getElementById('strength-meter');
    const strengthText = document.getElementById('strength-text');
    const strengthLabel = document.getElementById('strength-label');
    const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
  
    passwordInput.addEventListener('input', updatePasswordStrength);
    themeToggleCheckbox.addEventListener('change', toggleTheme);
  
    function updatePasswordStrength() {
      const password = passwordInput.value;
      const strength = calculatePasswordStrength(password);
  
      strengthMeter.style.width = strength + '%';
      updateStrengthText(strength);
    }
  
    function calculatePasswordStrength(password) {
      let strength = 0;
  
      if (/[A-Z]/.test(password)) {
        strength += 50;
      }
  
      if (password.length >= 8) {
        strength += 50;
      }
  
      if (/[!@£$%%^&*]/.test(password)) {
        strength += 50;
      }
  
      return Math.min(strength, 100);
    }
  
    function updateStrengthText(strength) {
      if (strength === 100) {
        strengthLabel.textContent = 'Strong';
        strengthText.style.color = '#4caf50'; // Green
      } else if (strength >= 50) {
        strengthLabel.textContent = 'Moderate';
        strengthText.style.color = '#FFA500'; // Amber/Orange
      } else {
        strengthLabel.textContent = 'Weak';
        strengthText.style.color = '#ff5555'; // Red
      }
    }
  
    function toggleTheme() {
      // Your theme toggle functionality goes here
    }
    const usernameInput = document.getElementById('username');
  const submitButton = document.getElementById('submit');

  submitButton.addEventListener('click', function() {
    const username = usernameInput.value;
    const password = passwordInput.value;
    const status = strengthText.value;

    const user = { "name": username, "password": password, "status": status, };

    // Call the API endpoint to update user data
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle response data if needed
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  });
  