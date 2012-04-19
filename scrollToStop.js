/* ********************

* 4/17/2012 Wylie Fisher
* dukeofcheese.com

******************** */

(function( $ ){
    jQuery.fn.scrollToStop = function(options){

        // set the default for the height if no user input
        if ( options == undefined ) {
			var options = 0;
        };
               
        var elem = $(this);
            elemPos = $(elem).position();    
            elemStyle = $(elem).css('position');
            
        /* check for position:absolute on the element. if not found, add it. */
        if( elemStyle != 'absolute' ) {
            $(elem).css({'position': 'absolute', 'top': elemPos.top});
        }
        
        /* on window scroll watch the poisition of the element. */
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