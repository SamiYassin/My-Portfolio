
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.querySelector(".links").classList.toggle("active");
});

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check if user has a saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme');

// If a theme is saved, apply it
if (savedTheme) {
  body.classList.add(savedTheme);
  themeToggleBtn.textContent = savedTheme === 'dark-mode' ? '🌞' : '🌙'; // Change icon
}

// Function to toggle between light and dark mode
themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = '🌞'; // Change to sun icon
    localStorage.setItem('theme', 'dark-mode'); // Save preference to localStorage
  } else {
    themeToggleBtn.textContent = '🌙'; // Change to moon icon
    localStorage.setItem('theme', 'light-mode'); // Save preference to localStorage
  }
});


let typed = new Typed("#typed" , {
    strings: ['Front-end Developer' , 'React Developer'],
    typeSpeed: 35,
    startDelay: 500,
    backlDelay: 1000,
    backSpeed: 35,
    loop: true,
    showCursor: true
})