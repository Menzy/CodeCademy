const modeToggle = document.getElementById("toggle-mode");
const body = document.body;

// Check the initial state of the dark mode
if (localStorage.getItem("dark-mode") === "enabled") {
	enableDarkMode();
} else {
	disableDarkMode();
}

// Toggle dark mode on click
modeToggle.addEventListener("click", () => {
	if (body.classList.contains("dark-mode")) {
		disableDarkMode();
	} else {
		enableDarkMode();
	}
});

function enableDarkMode() {
	body.classList.add("dark-mode");
	localStorage.setItem("dark-mode", "enabled");
}

function disableDarkMode() {
	body.classList.remove("dark-mode");
	localStorage.setItem("dark-mode", "disabled");
}
