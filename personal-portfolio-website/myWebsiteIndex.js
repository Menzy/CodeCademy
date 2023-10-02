// const modeToggle = document.getElementById("toggle-mode");
// const body = document.body;

// // Check the initial state of the dark mode
// if (localStorage.getItem("dark-mode") === "enabled") {
// 	enableDarkMode();
// } else {
// 	disableDarkMode();
// }

// // Toggle dark mode on click
// modeToggle.addEventListener("click", () => {
// 	if (body.classList.contains("dark-mode")) {
// 		return disableDarkMode();
// 	}

// 	enableDarkMode();
// });

// function enableDarkMode() {
// 	body.classList.add("dark-mode");
// 	localStorage.setItem("dark-mode", "enabled");
// }

// function disableDarkMode() {
// 	body.classList.remove("dark-mode");
// 	localStorage.setItem("dark-mode", "disabled");
// }

const lightModeButton = document.querySelector("#light-mode-button");
const darkModeButton = document.querySelector("#dark-mode-button");
const html = document.querySelector("html");

lightModeButton.addEventListener("click", () => {
	// Toggle to dark theme
	html.setAttribute("data-theme", "dark");
	lightModeButton.style.display = "none";
	darkModeButton.style.display = "block";
});

darkModeButton.addEventListener("click", () => {
	// Toggle to light theme
	html.setAttribute("data-theme", "light");
	darkModeButton.style.display = "none";
	lightModeButton.style.display = "block";
});
