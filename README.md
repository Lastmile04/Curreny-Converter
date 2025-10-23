Currency Converter
A clean, stylish, and fully responsive currency converter application built with vanilla HTML, CSS, and JavaScript. This project fetches real-time exchange rates and features a beautiful light/dark mode toggle with theme persistence.

This project was built from scratch to practice and demonstrate core frontend development skills.

📸 Demo

Light Mode 
<img width="2559" height="1303" alt="image" src="https://github.com/user-attachments/assets/fd14faea-a602-4ca2-82fc-59c1dd977e0d" />

Dark Mode
<img width="2558" height="1302" alt="{BBFE613C-390A-4183-9560-F56A85B6CC49}" src="https://github.com/user-attachments/assets/0237ebbd-a1a8-458f-bee8-b28ce0a4cea0" />

✨ Features
Real-time Conversion: Fetches up-to-date exchange rates from the Currency-API.

Dynamic Currency List: Automatically populates "From" and "To" dropdowns with a full list of available currencies on page load.

Sleek Light & Dark Mode: Includes a beautiful day/night theme switcher.

Theme Persistence: Remembers your theme choice on your next visit using localStorage.

Fully Responsive: A mobile-first design that adapts from a "card" layout on desktop to a seamless, full-screen "app-like" experience on mobile devices.

Modern UI: A clean interface built with modern CSS, including subtle shadows, gradients, and focus states.

🛠️ Technologies Used
HTML5: For the core structure and semantics.

CSS3: For all styling, including:

CSS Variables (Custom Properties) for robust theming.

[data-theme] attribute selector for light/dark mode logic.

@media queries for full responsiveness.

Flexbox and Grid for layout.

Vanilla JavaScript (ES6+): For all application logic:

fetch() API for asynchronous network requests.

async/await syntax for clean promise handling.

DOM Manipulation (populating select options, displaying results).

Object.entries() to iterate over the currency data object.

localStorage to save the user's theme preference.

🧠 What I Learned
This project was a fantastic exercise in combining several fundamental frontend concepts:

Asynchronous JavaScript: Gained practical experience using async/await and the fetch API to handle real-world network requests.

API Integration: Learned how to read API documentation, identify the correct endpoints (one for the currency list, another for the rates), and parse the returned JSON data.

Advanced CSS Theming: Mastered the use of CSS Variables and [data-theme] selectors to build a clean, maintainable light/dark mode switch without toggling classes on every element.

Data-Driven DOM Manipulation: Practiced dynamically creating and appending HTML elements (<option>) based on data fetched from an API.

Data Structure Handling: Used Object.entries() to efficiently convert a key-value pair object (the currency list) into a loopable array.

User Preference Persistence: Implemented localStorage to create a better user experience by remembering their theme choice.

Responsive Design: Honed my skills in creating a mobile-first design that scales beautifully up to desktop.

🚀 Getting Started
To run this project locally:

Clone the repository:

Bash

git clone https://github.com/[YOUR_USERNAME]/[YOUR_REPOSITORY_NAME].git
Navigate to the project directory:

Bash

cd [YOUR_REPOSITORY_NAME]
Open the index.html file in your browser.

No dependencies or build steps are required!

🙏 Acknowledgements
API: All currency data is provided by the free Currency-API by Fawazahmed0.

Theme Switcher: The day/night toggle component was adapted from the amazing collection at Uiverse.io (by Galahhad).
