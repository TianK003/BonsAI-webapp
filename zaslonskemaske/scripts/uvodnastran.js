$(document).ready(function(){
    // Adding the scrollspy function to the body with offset adjustment
    $('body').scrollspy({ target: '#navbarColor03', offset: 70 });

    // Optional: If you want to add smooth scrolling
    $(".navbar a.nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});
