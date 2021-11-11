$('#header a').click(function (e) {
    e.preventDefault();
    
    var offset = $('[name=' + $(this).attr('href').substr(1) + ']').offset();
    
    $('html, body').animate({ scrollTop: offset.top - $('#header').outerHeight() }, 'fast');
    
});