// Back to Top Button functionality
const backToTopButton = document.getElementById("back-to-top");

window.onscroll = function() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         backToTopButton.style.display = "block";
     } else {
         backToTopButton.style.display = "none";
     }
};

backToTopButton.onclick = function() {
     window.scrollTo({top : 0, behavior : 'smooth'});
};
