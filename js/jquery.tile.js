/**
 * Flatten height same as the highest element for each row.
 *
 * Copyright (c) 2011 Hayato Takenaka
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * @author: Hayato Takenaka (https://github.com/urin/jquery.tile.js)
 * @version: 1.1.0
 **/
(function($) {
  $.fn.tile = function(columns) {
    var tiles, $tile, max, c, h, s, remove, a = ["height"],
      last = this.length - 1;
    if(!columns) columns = this.length;
    s = document.body.style;
    remove = s.removeProperty ? s.removeProperty : s.removeAttribute;
    return this.each(function() {
      remove.apply(this.style, a);
    }).each(function(i) {
      c = i % columns;
      if(c == 0) tiles = [];
      $tile = tiles[c] = $(this);
      h = ($tile.css("box-sizing") == "border-box") ? $tile.outerHeight() : $tile.innerHeight();
      if(c == 0 || h > max) max = h;
      if(i == last || c == columns - 1) {
        $.each(tiles, function() { this.css("height", max); });
      }
    });
  };
})(jQuery);
