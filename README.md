# Password Strength Checker

## Overview

The Password Strength Checker is a web application designed to help users evaluate the strength of their passwords before submitting them. It provides a visual representation of password strength and offers real-time feedback as users type in their passwords.

## Features

### Password Strength Meter

The application includes a password strength meter that visually represents the strength of the password based on various criteria, including:

- Length: Longer passwords are generally stronger.
- Complexity: Presence of uppercase letters, lowercase letters, digits, and special characters.
- Patterns: Commonly used patterns and sequences are flagged for weakness.

The strength meter dynamically updates as the user types, providing immediate feedback on the strength of the password.

### Username Input

In addition to the password field, the application also includes an input field for the username. This allows users to pair their passwords with unique usernames for authentication purposes.

### Theme Toggle

To enhance user experience, the application includes a theme toggle feature. Users can switch between light and dark themes based on their preference or environmental conditions.

### Submission Button

Once users have entered their username and password, they can submit their credentials using the submission button. The application validates the password strength before allowing submission.

## Usage

1. **Enter Username**: Start by entering your desired username in the Username input field.
2. **Enter Password**: Next, enter your password in the Password input field. As you type, the password strength meter will update in real-time.
3. **Evaluate Password Strength**: Use the visual cues provided by the password strength meter to evaluate the strength of your password. Aim for a strong or moderate rating for optimal security.
4. **Toggle Theme**: Optionally, toggle between light and dark themes using the theme toggle checkbox. Choose the theme that suits your preferences or environment.
5. **Submit Credentials**: Once you're satisfied with your username and password, click the Submit button to submit your credentials. Ensure that your password meets the desired strength criteria for successful submission.

## File Structure

- **index.html**: Contains the HTML structure of the web page, including input fields, buttons, and the password strength meter.
- **styles.css**: Defines the visual styling of the web page, including color schemes, layout, and theme styles.
- **script.js**: Implements the client-side logic for password strength checking, theme toggling, and form submission handling.

This JavaScript code implements a password strength checker feature in a web application. It calculates the strength of a password based on certain criteria such as the presence of uppercase letters, special characters, and minimum length. Additionally, it includes functionality to submit user data to an API endpoint.

## Script Comments

# Password Strength Checker JavaScript

## Overview

This JavaScript code implements a password strength checker feature in a web application. It calculates the strength of a password based on certain criteria such as the presence of uppercase letters, special characters, and minimum length. Additionally, it includes functionality to submit user data to an API endpoint.

## Script Comments

The script starts by listening for the DOMContentLoaded event, ensuring that it runs only after the HTML document has been fully loaded. Within this event listener, the following functionalities are implemented:

### Selecting DOM Elements

```javascript
const passwordInput = document.getElementById('password');
const strengthMeter = document.getElementById('strength-meter');
const strengthText = document.getElementById('strength-text');
const strengthLabel = document.getElementById('strength-label');
const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
const usernameInput = document.getElementById('username');
const submitButton = document.getElementById('submit');
These lines select various DOM elements using their respective IDs.

Password Strength Calculation

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
This function calculates the strength of the password based on certain criteria, such as the presence of uppercase letters, minimum length, and special characters.

Updating Password Strength 

function updatePasswordStrength() {
  const password = passwordInput.value;
  const strength = calculatePasswordStrength(password);
  strengthMeter.style.width = strength + '%';
  updateStrengthText(strength);
}
This function is called whenever the user inputs text into the password field. It updates the visual representation of the password strength by adjusting the width of the strength meter and updating the text accordingly.

Handling Theme Toggle
function toggleTheme() {
  // Your theme toggle functionality goes here
}
This function is called when the theme toggle checkbox state changes. You can implement theme switching functionality here.

function submitUserData() {
  const username = usernameInput.value;
  const password = passwordInput.value;
  const status = strengthText.textContent;

  const user = { "name": username, "password": password, "status": status };

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
}

This function is called when the submit button is clicked. It gathers user input data, constructs a user object, and sends it to the specified API endpoint using the Fetch API.

Conclusion
This JavaScript code provides a robust solution for password strength checking and user data submission in a web application. It offers flexibility for further customization and integration with other parts of the application.

# Password Strength Checker #css

## Overview

This CSS stylesheet provides custom styling for a web application, including a navigation bar, form inputs, password strength meter, and a theme toggle switch.

## Stylesheet Details

### Body


body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
}

Sets the base font family, background color, and removes default margins and paddings from the body element.

Navigation Bar 

.navbar {
  background-color: #333;
  padding: 10px 0;
}
Styles the navigation bar with a dark background color and some padding.

.navbar-container {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
Positions the navigation links evenly spaced within a container with a maximum width of 960 pixels.

.navbar-link {
  color: #020202;
  text-decoration: none;
  padding: 10px;
}
Styles the navigation links with a dark color, removes underlines, and adds padding.

Main Content Container

.container {
  max-width: 960px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

Styles the main content container with a maximum width, margin, padding, background color, border radius, and box shadow.

Password Strength Meter 

#strength-meter {
  height: 10px;
  background-color: #eee;
  border-radius: 4px;
  margin-bottom: 10px;
}

Styles the password strength meter with a background color, height, border radius, and margin. 

.strength-bar {
  height: 100%;
  width: 0;
  background-color: #ff5555;
  border-radius: 4px;
}

Styles the strength bar inside the meter with a background color, height, width (which is dynamically adjusted by JavaScript), and border radius.

Theme Toggle 

.theme-toggle {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
}

Styles the theme toggle switch container with relative positioning, an inline-block display, and margin. 

.theme-toggle input[type="checkbox"] {
  display: none;
}

Hides the actual checkbox input.

.theme-toggle-label {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: #ccc;
  border-radius: 20px;
  cursor: pointer;
}

Styles the theme toggle switch with a label, setting its dimensions, background color, border radius, and cursor.

.theme-toggle-label:after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

Styles the pseudo-element that represents the toggle knob with absolute positioning, dimensions, background color, border radius, and transition effect.

.theme-toggle input[type="checkbox"]:checked + .theme-toggle-label {
  background-color: #2196F3;
}

Styles the label background color when the checkbox is checked.

.theme-toggle input[type="checkbox"]:checked + .theme-toggle-label:after {
  transform: translateX(20px);
}

Moves the toggle knob to the right when the checkbox is checked.

Background Image

body {
  background-image: url(https://i.pinimg.com/originals/49/60/26/49602633a5ebc7246beedac09dd2837b.gif);
}

Sets a background image for the body element.

Conclusion
This CSS stylesheet provides custom styling for various elements of a web application, enhancing its visual appeal and user experience. It can be easily integrated into an HTML document to achieve consistent and attractive styling.

# Password Strength API

This Node.js application provides a simple API endpoint for checking password strength.

## Usage

1. Install dependencies using `npm install`.
2. Start the server using `node server.js` or `npm start`.
3. Send a POST request to `/api/password-strength` with a JSON body containing the password to be checked.
4. The API will respond with the received password.

## API Endpoint

- **POST /api/password-strength**: Endpoint for password strength checking. Expects a JSON body with a `password` field.

## Dependencies

- express: ^4.17.1
- body-parser: ^1.19.0

## License

  "license": "ISC",
This project is licensed under the MIT License - see the [] file for details.




