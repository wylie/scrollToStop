/* ***************************************** */
/* 4/17/2012 Wylie Fisher - dukeofcheese.com */
/* ***************************************** */
(function( $ ){
    jQuery.fn.scrollToTop = function(options){
        if ( options == undefined ) {
			var options = 0;
        };
        var elem = $(this);
            elemPos = $(elem).position();    
            elemStyle = $(elem).css('position');
        if( elemStyle != 'absolute' ) {
            $(elem).css({'position': 'absolute', 'top': elemPos.top});
        }
        $(window).on('scroll', function() {
            var scrollTop = $(window).scrollTop();
                elemPosFixed = elemPos.top - scrollTop;
            if( elemPosFixed > options ) {
                $(elem).css({'position': 'absolute', 'top': elemPos.top});
            } else {
                elem.css({'position': 'fixed', 'top': options});
            }
        });
    }
})( jQuery );