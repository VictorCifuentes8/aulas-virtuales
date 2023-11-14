/* Extensión de jQuery para soportar animate.css */
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$(document).ready(function () {

    $('.nxFxHover').mouseenter(function () {
        var self = $(this);
        self.find('.image').animateCss(self.data('anim-hover'));
        self.find('.fa').animateCss(self.data('anim-hover'));
    });

});

