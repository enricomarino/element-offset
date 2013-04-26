/**
 * Element
 * Element offset component
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/**
 * Expose `Element`
 */

module.exports = Element;

/**
 * Element
 */

function Element (el){
  this.el = el;
};

/**
 * offset
 * Get left/top offset.
 *
 * @return {Element} this for chaining
 * @api public
 */

Element.prototype.offset = function () {
  var el = this.el;
  var left = 0;
  var top = 0;
   
  while (el) {
    left += el.offsetLeft - el.scrollLeft + el.clientLeft;
    y += el.offsetTop - el.scrollTop + el.clientTop;
    el = el.offsetParent;
  }

  return { left: left, top: top };
};
