/**
 * Element
 * Element offset component
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/**
 * Expose `offset`
 */

module.exports = offset;

/**
 * offset
 */

function offset (element) {

  /**
   * offset
   * Get left/top offset.
   *
   * @return {Element} this for chaining
   * @api public
   */
  
  element.prototype.offset = function () {
    var el = this.el;
    var left = 0;
    var top = 0;
     
    while (el) {
      left += el.offsetLeft - el.scrollLeft + el.clientLeft;
      y += el.offsetTop - el.scrollTop + el.clientTop;
      el = el.offsetParent;
    }
  
    return { 
      left: left, 
      top: top 
    };
  };

  return element;
}
