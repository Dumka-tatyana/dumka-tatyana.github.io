var $li = $('.image-wrap').find('>li'),
    $links = $li.find('>a'),
    $lightbox = $('.lightbox'),
    $overlay = $('.overlay'),
    $prev = $('.prev'),
    $next = $('.next'),
    $custom = $('.custom'),
    $border = $('.bordered'),
    $wrapper = $('.gallery'),
    $img_wrap = $('.image-wrap'),
    liIndex,
    targetImg;

$links.click(function(event) {
    event.preventDefault();
    liIndex = $(this).parent().index();
    targetImg = $(this).attr('href');
    $lightbox.find('img').attr('src', targetImg);
    $lightbox.fadeIn();
});
$overlay.click(function() {
    $lightbox.fadeOut();
});

function next() {
    if (liIndex + 1 < $li.length) {
        targetImg = $li.eq(liIndex + 1).find('>a').attr('href');
        liIndex++;

    } else {
        targetImg = $li.eq(0).find('>a').attr('href');
        liIndex = 0

    }
    $lightbox.find('img').attr('src', targetImg);
}


function prev() {
    if (liIndex > 0) {
        targetImg = $li.eq(liIndex - 1).find('>a').attr('href');
        liIndex--;

    } else {
        targetImg = $li.eq($li.length - 1).find('>a').attr('href');
        liIndex = $li.length - 1

    }
    $lightbox.find('img').attr('src', targetImg);
};
$next.click(function() {
    next()
});
$prev.click(function() {
    prev()
})
$(document).keydown(function(event) {
    if (event.keyCode.toString() === '27') {
        $lightbox.fadeOut()
    }
    if (event.keyCode.toString() === '39' || event.keyCode.toString() === '32') {
        next();
    }
    if (event.keyCode.toString() === '37') {
        prev();
    }
});
$lightbox.find('img').mousedown(function(event) {
    next();
});

$('.one_col').click(function() {

    $wrapper.removeClass('two three four').addClass('once');

});
$('.two_col').click(function() {
    $wrapper.removeClass('one three four').addClass('two')
});
$('.three_col').click(function() {

    $wrapper.removeClass('one two four').addClass('three');
});
$('.four_col').click(function() {

    $wrapper.removeClass('one two three').addClass('four');
});

$border.click(function() {
    $img_wrap.toggleClass('round_corner');

});
$('.margin').click(function() {
    $img_wrap.toggleClass('margin');

})

$('.shad').click(function() {
    $img_wrap.toggleClass('shadow');
})

//custom
$('.setting-trigger').click(function() {
    $('.menu').slideToggle(500)
})
