// Welcome message
console.log("Welcome to ShopEasy!");

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Button click effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert("🛒 Welcome to ShopEasy! Start shopping now.");
    });
});