function validateForm() {
    const message = document.getElementById("message").value;
    if (message.length < 10) {
        alert("Message must be at least 10 characters long.");
        return false; 
    }
    return true; 
}

document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});