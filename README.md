# 💡 Lumen — Interactive Table Lamp

### A virtual table lamp built with JavaScript.

A sleek, interactive table lamp built with HTML, Tailwind CSS, and JavaScript. Toggle the lamp on and off with a single click, change the lamp's appearance dynamically, and control its light beam and shade using JavaScript DOM manipulation. A simple project focused on event handling, CSS class toggling, and interactive UI development.

**Live Demo:** [Lumen — Interactive Table Lamp](https://suprio-dev.github.io/Lumen-/)

---

## ✨ Features

- Interactive virtual table lamp UI
- Turn the lamp ON and OFF with a single click
- Dynamically change the lamp shade's color
- Control the light beam's glow effect
- Change the lamp rim's appearance based on the power state
- Update the power status dynamically
- Toggle button text between `TURN ON` and `TURN OFF`
- Use JavaScript event listeners to handle user interactions
- Manipulate Tailwind CSS classes dynamically
- Smooth color transitions using CSS transitions
- Modern dark UI with slate and amber accents
- Responsive layout for different screen sizes

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structuring the application |
| Tailwind CSS | Styling, layout, and responsive design |
| JavaScript | Lamp toggle logic and interactive behavior |
| DOM API | Selecting and updating UI elements |
| Event Listeners | Handling button click events |
| `classList` API | Dynamically toggling CSS classes |
| Conditional Statements | Updating the lamp status and button text |
| CSS Transitions | Creating smooth visual changes |

---

## 🔄 How It Works

```text
Open Lumen
    ↓
Display the Table Lamp
    ↓
Click the Toggle Button
    ↓
Update the Counter
    ↓
Toggle Lamp CSS Classes
    ↓
Change Lamp Shade and Light Beam
    ↓
Update Power Status
    ↓
Change Button Text
    ↓
Repeat to Toggle ON/OFF
```

Lumen uses JavaScript to handle button interactions and dynamically modify the lamp's appearance. When the user clicks the toggle button, the application updates the CSS classes associated with the lamp shade, light beam, and lamp rim.

The power status and button label are updated according to the current state, providing immediate visual feedback.

---

## 💡 Lamp Toggle Logic

Lumen uses JavaScript event handling and the `classList.toggle()` method to switch the lamp's visual state.

Example:

```js
toggleBtn.addEventListener("click", () => {
  lightBeam.classList.toggle("bg-amber-300/40");
  lampShade.classList.toggle("bg-amber-300");
  lampRim.classList.toggle("bg-amber-200");

  if (counter % 2 !== 0) {
    lightStatus.textContent = "ON";
    toggleBtn.textContent = "TURN OFF";
  } else {
    lightStatus.textContent = "OFF";
    toggleBtn.textContent = "TURN ON";
  }
});
```

The `classList.toggle()` method adds a CSS class when it is absent and removes it when it is present. This allows the lamp's appearance to change with each click.

The counter tracks the number of clicks and determines whether the displayed power status should be ON or OFF.

---

## 🎨 Dynamic UI Updates

Lumen updates multiple interface elements in response to a single user interaction.

- **Lamp Shade:** Changes color when the lamp is switched on.
- **Light Beam:** Reveals the warm amber glow effect.
- **Lamp Rim:** Changes appearance to match the lamp's power state.
- **Power Status:** Displays the current ON/OFF state.
- **Toggle Button:** Updates its label to reflect the next available action.

Tailwind CSS utility classes and CSS transitions help create a clean, responsive interface with smooth visual feedback.

---

## 🎯 Why I Built It

This project was built to practice working with:

- DOM selection and manipulation
- Event listeners and click events
- JavaScript variables and counters
- Conditional statements
- The modulo operator (`%`)
- The `classList.toggle()` method
- Dynamic text updates using `textContent`
- Synchronizing UI elements with application state
- Tailwind CSS utility classes
- CSS transitions and visual feedback
- Responsive UI development

---

## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/suprio-dev/Lumen-.git
cd Lumen-
```

Open `index.html` using VS Code Live Server or another local development server.

No external API key or backend server is required.

---

## 📌 Project Status

**Completed — v1.0**

Built as a hands-on project to strengthen JavaScript fundamentals, particularly DOM manipulation, event handling, CSS class toggling, conditional logic, and interactive UI development.

Future improvements may include more realistic lighting effects, brightness controls, and additional lamp settings.