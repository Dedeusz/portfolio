$(document).ready(function() {
    // Animowany tekst w sekcji Home
    const messages = ["unikalne projekty graficzne", "nowoczesne logotypy", "grafiki cyfrowe"];
    let i = 0;
    setInterval(() => {
        $(".animated-text").fadeOut(function() {
            $(this).text(messages[i]).fadeIn();
            i = (i + 1) % messages.length;
        });
    }, 3000);

    // Przewijanie do sekcji po kliknięciu w menu
    $('nav ul li a').on('click', function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });
});
