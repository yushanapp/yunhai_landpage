// JavaScript Document
$(document).ready(function () {
    $('#js .Toolbar1 a').click(function () { // mouseenter
        var index = $(this).parent().children().index(this);
        $(this).parent().children().each(function () {
            if ($(this).hasClass('on')) {
                $(this).removeClass('on');
            }
        });
        $(this).addClass('on');

        $('#js .Toolbar2 .Menu').each(function () {
            if (!$(this).hasClass('Hide')) {
                $(this).addClass('Hide');
            }
        });
        $('#js .Toolbar2 .Menu').eq(index).removeClass('Hide');
    });


});
