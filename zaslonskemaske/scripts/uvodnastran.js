// JavaScript to toggle the 'show' class on the dropdown
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownContent = document.getElementById('dropdownContent');

// Toggle show class when clicking the dropdown
dropdownMenu.addEventListener('click', function (e) {
    e.preventDefault();  // Prevent default link behavior
    ropdownContent.classList.toggle('show');
});

// Close the dropdown if clicked outside
document.addEventListener('click', function (event) {
    if (!dropdownMenu.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove('show');
}
});
