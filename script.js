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

window.onscroll = function() {
    const navbar = document.getElementById("nav");
  
    if (window.scrollY > 200) {  // Change 50 to the scroll position where you want the effect
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };
  