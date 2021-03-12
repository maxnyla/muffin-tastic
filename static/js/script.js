/* jQuery for MaterializeCSS initialization */

$(document).ready(function () {
    $(".sidenav").sidenav();
    $('select').formSelect();
    $('input#input_text, textarea#textarea2').characterCounter();
    $('');
    $('#muffin-carousel-auto').carousel();
     setInterval(function() {
        $('#muffin-carousel-auto').carousel('next');
    }, 3500);
    $('.parallax').parallax();
    $('.modal').modal();
});
    