# scrollToStop

This is a jQuery plugin!

It looks for an element on the page, sets the positioning to absolute and let's it scroll with the page. When it gets to a certain point, a point you determine and pass into the plugin, the element becomes fixed on the page. 

When you scroll back down the page the element will gracefully retake it's original place on the page when you scroll past that spot.

Usage:
`$('.example').scrollToStop(50);`

- .example is the element you want to remain on the page.
- 50 is the pixel height at which you want it to stop from the top of the browser viewport.
- If no height is entered the element will default to 0 pixels
