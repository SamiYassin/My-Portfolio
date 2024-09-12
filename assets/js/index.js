
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.querySelector(".links").classList.toggle("active");
});

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;


const savedTheme = localStorage.getItem('theme');


if (savedTheme) {
  body.classList.add(savedTheme);
  themeToggleBtn.textContent = savedTheme === 'dark-mode' ? '🌞' : '🌙'; 
}

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = '🌞'; 
    localStorage.setItem('theme', 'dark-mode'); 
  } else {
    themeToggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light-mode'); 
  }
});

document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelector('.links').classList.remove('active'); // Close menu
  });
});

try {
  let typed = new Typed("#typed", {
    strings: ['Front-end Developer', 'React Developer'],
    typeSpeed: 35,
    startDelay: 500,
    backDelay: 1000,
    backSpeed: 35,
    loop: true,
    showCursor: true
  });
} catch (error) {
  console.error("Typed.js failed to load:", error);
}

