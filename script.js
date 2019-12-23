const mechannicBtn = document.querySelector('.navMechanics');
const galleryBtn = document.querySelector('.navGallery');
const contactBtn = document.querySelector('.navContact');

const mechanicsSection = document.querySelector('.mechanics');
const gallerySection = document.querySelector('.carGallery');
const contactSection = document.querySelector('.contact');

$('.navGallery').on('click', function () {
    const offset = gallerySection.offsetTop;
    $('html,body').animate({scrollTop: offset} );
})

$('.navMechanics').on('click', function () {
    const offset = mechanicsSection.offsetTop;
    $('html,body').animate({scrollTop: offset} );
})

$('.navContact').on('click', function () {
    const offset = contactSection.offsetTop;
    $('html,body').animate({scrollTop: offset} );
})



