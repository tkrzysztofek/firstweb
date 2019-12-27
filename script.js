
$('nav span').on('click', function () {
    const tempClassName = ($(this).attr('class'));
    const className = '.' + tempClassName.substr(3, tempClassName.length).toLocaleLowerCase();
    const offset = $(className).offset().top - 100;
    $('html,body').animate({
        scrollTop: offset
    });
})

