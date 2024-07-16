// JavaScript Functionality
// Selecting elements
const menuBar = document.querySelector('.menu-bar');
const slidingNav = document.querySelector('.sliding-nav');
const closeBtn = document.querySelector('.close-btn');

// Toggle sliding navigation when menu bar is clicked
menuBar.addEventListener('click', () => {
  slidingNav.classList.toggle('active');
});

// Close sliding navigation when close button is clicked
closeBtn.addEventListener('click', () => {
  slidingNav.classList.remove('active');
});

// Close sliding navigation when mouse leaves the navigation area
slidingNav.addEventListener('mouseleave', () => {
  slidingNav.classList.remove('active');
});
