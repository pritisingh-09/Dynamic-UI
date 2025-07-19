// function changeTheme() {
// 	var body = document.getElementById("body");
// 	var currentClass = body.className;
// 	var classes = ["black", "blue", "purple", "red", "green"];
// 	var currentIndex = classes.indexOf(currentClass);
// 	var nextIndex = (currentIndex + 1) % classes.length;
// 	body.className = classes[nextIndex];
// }

// window.addEventListener("load", function() {
//   document.body.classList.remove("preload");
// });

function changeTheme() {
	var body = document.getElementById("body");
	var currentClass = body.className;
	var classes = ["black", "blue", "purple", "red", "green"];
	var currentIndex = classes.indexOf(currentClass);
	var nextIndex = (currentIndex + 1) % classes.length;
	body.className = classes[nextIndex];
	// Save theme to local storage
	localStorage.setItem('theme', classes[nextIndex]);
}

// On initial load, check if theme is stored in local storage and apply it
window.addEventListener("load", function() {
    var storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        document.getElementById("body").className = storedTheme;
    }
    document.body.classList.remove("preload");
});