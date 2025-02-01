const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const text = "SRIJA ENTERPRISES ";
        let index = 0;
        function typeWriter() {
            if (index < text.length) {
                document.getElementById("typewriter").innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100); // Adjust speed
            } else {
                document.getElementById("typewriter").style.borderRight = "none"; // Remove cursor after typing
            }
        }
        typeWriter();