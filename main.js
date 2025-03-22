// Opening hamburger menu
let header = document.querySelector('.header');
let hamburger = document.querySelector('.hamburger');
let navLink = document.querySelector('.li');

hamburger.addEventListener('click', function() {
    header.classList.toggle('menu-open');
});

// Loading more news 
$('.news-block').slice(0, 3).show();
$('.more').click(function(event) {
    event.preventDefault();
    $('.news-block:hidden').slice(0, 1).show();
    if($('.news-block:hidden').length === 0) {
        $('.more').fadeOut();
    }
});

// Smooth scrolling
$(document).ready(function() {
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1500, function() {
          window.location.hash = hash;
        });
      } 
    });
 });

