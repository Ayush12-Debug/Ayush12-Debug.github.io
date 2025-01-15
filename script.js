// Back to Top Button functionality
// Back to Top Button functionality
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
