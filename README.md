# [jquery.tile.js](http://urin.github.com/jquery.tile.js/)
The lightest jQuery plugin to tile boxes.

## Quick start
(1) Download and load this plugin javascript file after jQuery.

    <script src="js/jquery.tile.js"></script>

(2) Call `$('selector').tile()` in document ready event of jQuery.

    $(function() {
      $('selector').tile();
    });

## Event
`TilingFinished` event is triggered when `$.fn.tile` is finished.

### Example

    $(document).bind('TilingFinished', function(event){
      alert('Tiling is finished');
    });

## Demos
See [demos](http://urin.github.com/jquery.tile.js/).

## Copyright
&copy; 2011 Urin
