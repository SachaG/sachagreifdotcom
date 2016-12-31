// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

// jQuery Inline Footnotes v1.0.1
// Copyright (c) 2011 Vesa Vänskä, released under the MIT License.

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  (function($) {
    $.inlineFootnote = function(el, options) {
      this.el = $(el);
      this.el.data("inlineFootnote", this);
      this.initialize = function() {
        this.options = $.extend({}, $.inlineFootnote.defaultOptions, options);
        this.footnoteId = this.el.attr("href").match(/#(.*)/)[1];
        if (this.footnoteId) {
          this.el.mouseenter(this.openBox);
          return $("body").mousemove(this.closeBox);
        }
      };
      this.openBox = __bind(function(event) {
        var footnoteContent, linkOffset;
        if (!this.box) {
          footnoteContent = $("[id='" + this.footnoteId + "']").children().not(this.options.hideFromContent);
          linkOffset = this.el.offset();
          this.box = $("<div />", {
            id: this.options.boxId,
            html: footnoteContent.clone(),
            css: {
              position: "absolute",
              top: linkOffset.top,
              left: linkOffset.left + this.el.outerWidth()
            }
          }).appendTo("body");
          return this.positionBox();
        }
      }, this);
      this.closeBox = __bind(function(event) {
        if (this.box) {
          if (this.isHoveringFootnote(event)) {
            clearTimeout(this.closeTimeout);
            return this.closeTimeout = null;
          } else {
            if (!this.closeTimeout) {
              return this.closeTimeout = setTimeout((__bind(function() {
                this.box.remove();
                return this.box = null;
              }, this)), this.options.hideDelay);
            }
          }
        }
      }, this);
      this.isHoveringFootnote = function(event) {
        return this.box.is(event.target) || $(event.target).closest(this.box).length > 0 || event.target === this.el[0];
      };
      this.positionBox = function() {
        var boxHorizontalPadding, boxLeft, boxWidth, linkLeftOffset, windowWidth;
        boxHorizontalPadding = parseInt(this.box.css("padding-left")) + parseInt(this.box.css("padding-right"));
        linkLeftOffset = this.el.offset().left;
        windowWidth = $(window).width();
        if ((windowWidth / 2) > linkLeftOffset) {
          boxLeft = linkLeftOffset + 20;
          boxWidth = windowWidth - boxLeft - boxHorizontalPadding - this.options.boxMargin * 2;
          if (boxWidth > this.options.maximumBoxWidth) {
            boxWidth = this.options.maximumBoxWidth;
          }
        } else {
          boxWidth = linkLeftOffset - boxHorizontalPadding - this.options.boxMargin * 2;
          if (boxWidth > this.options.maximumBoxWidth) {
            boxWidth = this.options.maximumBoxWidth;
          }
          boxLeft = linkLeftOffset - boxWidth - this.options.boxMargin * 2;
        }
        return this.box.css({
          width: boxWidth,
          left: boxLeft
        });
      };
      return this.initialize();
    };
    $.inlineFootnote.defaultOptions = {
      boxMargin: 20,
      hideDelay: 200,
      hideFromContent: "[rev=footnote]",
      maximumBoxWidth: 500,
      boxId: "footnote_box"
    };
    return $.fn.inlineFootnote = function(options) {
      return this.each(function() {
        return new $.inlineFootnote(this, options);
      });
    };
  })(jQuery);
}).call(this);