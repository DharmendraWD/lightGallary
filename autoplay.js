/**
 * Minified by jsDelivr using Terser v5.37.0.
 * Original file: /npm/lightgallery@2.8.3/plugins/autoplay/lg-autoplay.umd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*!
 * lightgallery | 2.8.3 | March 1st 2025
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */
!function(t,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).lgAutoplay=o()}(this,(function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var t=function(){return t=Object.assign||function(t){for(var o,e=1,s=arguments.length;e<s;e++)for(var r in o=arguments[e])Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},t.apply(this,arguments)},o="lgSlideItemLoad",e="lgBeforeSlide",s="lgAfterSlide",r="lgDragStart",i="lgDragEnd",a="lgAutoplay",l="lgAutoplayStart",n="lgAutoplayStop",u={autoplay:!0,slideShowAutoplay:!1,slideShowInterval:5e3,progressBar:!0,forceSlideShowAutoplay:!1,autoplayControls:!0,appendAutoplayControlsTo:".lg-toolbar",autoplayPluginStrings:{toggleAutoplay:"Toggle Autoplay"}};return function(){function p(o){return this.core=o,this.settings=t(t({},u),this.core.settings),this}return p.prototype.init=function(){var t=this;this.settings.autoplay&&(this.interval=!1,this.fromAuto=!0,this.pausedOnTouchDrag=!1,this.pausedOnSlideChange=!1,this.settings.autoplayControls&&this.controls(),this.settings.progressBar&&this.core.outer.append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'),this.settings.slideShowAutoplay&&this.core.LGel.once(o+".autoplay",(function(){t.startAutoPlay()})),this.core.LGel.on(r+".autoplay touchstart.lg.autoplay",(function(){t.interval&&(t.stopAutoPlay(),t.pausedOnTouchDrag=!0)})),this.core.LGel.on(i+".autoplay touchend.lg.autoplay",(function(){!t.interval&&t.pausedOnTouchDrag&&(t.startAutoPlay(),t.pausedOnTouchDrag=!1)})),this.core.LGel.on(e+".autoplay",(function(){t.showProgressBar(),!t.fromAuto&&t.interval?(t.stopAutoPlay(),t.pausedOnSlideChange=!0):t.pausedOnSlideChange=!1,t.fromAuto=!1})),this.core.LGel.on(s+".autoplay",(function(){t.pausedOnSlideChange&&!t.interval&&t.settings.forceSlideShowAutoplay&&(t.startAutoPlay(),t.pausedOnSlideChange=!1)})),this.showProgressBar())},p.prototype.showProgressBar=function(){var t=this;if(this.settings.progressBar&&this.fromAuto){var o=this.core.outer.find(".lg-progress-bar"),e=this.core.outer.find(".lg-progress");this.interval&&(e.removeAttr("style"),o.removeClass("lg-start"),setTimeout((function(){e.css("transition","width "+(t.core.settings.speed+t.settings.slideShowInterval)+"ms ease 0s"),o.addClass("lg-start")}),20))}},p.prototype.controls=function(){var t=this,o='<button aria-label="'+this.settings.autoplayPluginStrings.toggleAutoplay+'" type="button" class="lg-autoplay-button lg-icon"></button>';this.core.outer.find(this.settings.appendAutoplayControlsTo).append(o),this.core.outer.find(".lg-autoplay-button").first().on("click.lg.autoplay",(function(){t.core.outer.hasClass("lg-show-autoplay")?t.stopAutoPlay():t.interval||t.startAutoPlay()}))},p.prototype.startAutoPlay=function(){var t=this;this.core.outer.find(".lg-progress").css("transition","width "+(this.core.settings.speed+this.settings.slideShowInterval)+"ms ease 0s"),this.core.outer.addClass("lg-show-autoplay"),this.core.outer.find(".lg-progress-bar").addClass("lg-start"),this.core.LGel.trigger(l,{index:this.core.index}),this.interval=setInterval((function(){t.core.index+1<t.core.galleryItems.length?t.core.index++:t.core.index=0,t.core.LGel.trigger(a,{index:t.core.index}),t.fromAuto=!0,t.core.slide(t.core.index,!1,!1,"next")}),this.core.settings.speed+this.settings.slideShowInterval)},p.prototype.stopAutoPlay=function(){this.interval&&(this.core.LGel.trigger(n,{index:this.core.index}),this.core.outer.find(".lg-progress").removeAttr("style"),this.core.outer.removeClass("lg-show-autoplay"),this.core.outer.find(".lg-progress-bar").removeClass("lg-start")),clearInterval(this.interval),this.interval=!1},p.prototype.closeGallery=function(){this.stopAutoPlay()},p.prototype.destroy=function(){this.settings.autoplay&&this.core.outer.find(".lg-progress-bar").remove(),this.core.LGel.off(".lg.autoplay"),this.core.LGel.off(".autoplay")},p}()}));
//# sourceMappingURL=/sm/6643ec99b13e34833374d53c9f481ac8809733af9c8778df940599cf0ac5f176.map