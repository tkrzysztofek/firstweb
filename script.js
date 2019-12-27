const mechannicBtn = document.querySelector('.navMechanics');
const galleryBtn = document.querySelector('.navShop');
const contactBtn = document.querySelector('.navContact');

const mechanicsSection = document.querySelector('.mechanics');
const carSection = document.querySelector('.shop');
const contactSection = document.querySelector('.contact');

$('nav span').on('click', function () {
    const tempClassName = ($(this).attr('class'));
    const className = '.' + tempClassName.substr(3, tempClassName.length).toLocaleLowerCase();
    const offset = $(className).offset().top - 100;
    $('html,body').animate({
        scrollTop: offset
    });
})

