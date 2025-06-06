/**
 * Minified by jsDelivr using Terser v5.37.0.
 * Original file: /npm/lightgallery@2.8.3/plugins/fullscreen/lg-fullscreen.umd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*!
 * lightgallery | 2.8.3 | March 1st 2025
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */
!function(e,l){"object"==typeof exports&&"undefined"!=typeof module?module.exports=l():"function"==typeof define&&define.amd?define(l):(e="undefined"!=typeof globalThis?globalThis:e||self).lgFullscreen=l()}(this,(function(){"use strict";
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
    ***************************************************************************** */var e=function(){return e=Object.assign||function(e){for(var l,n=1,t=arguments.length;n<t;n++)for(var c in l=arguments[n])Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);return e},e.apply(this,arguments)},l={fullScreen:!0,fullscreenPluginStrings:{toggleFullscreen:"Toggle Fullscreen"}};return function(){function n(n,t){return this.core=n,this.$LG=t,this.settings=e(e({},l),this.core.settings),this}return n.prototype.init=function(){var e="";if(this.settings.fullScreen){if(!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled))return;e='<button type="button" aria-label="'+this.settings.fullscreenPluginStrings.toggleFullscreen+'" class="lg-fullscreen lg-icon"></button>',this.core.$toolbar.append(e),this.fullScreen()}},n.prototype.isFullScreen=function(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement},n.prototype.requestFullscreen=function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()},n.prototype.exitFullscreen=function(){document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},n.prototype.fullScreen=function(){var e=this;this.$LG(document).on("fullscreenchange.lg.global"+this.core.lgId+" \n            webkitfullscreenchange.lg.global"+this.core.lgId+" \n            mozfullscreenchange.lg.global"+this.core.lgId+" \n            MSFullscreenChange.lg.global"+this.core.lgId,(function(){e.core.lgOpened&&e.core.outer.toggleClass("lg-fullscreen-on")})),this.core.outer.find(".lg-fullscreen").first().on("click.lg",(function(){e.isFullScreen()?e.exitFullscreen():e.requestFullscreen()}))},n.prototype.closeGallery=function(){this.isFullScreen()&&this.exitFullscreen()},n.prototype.destroy=function(){this.$LG(document).off("fullscreenchange.lg.global"+this.core.lgId+" \n            webkitfullscreenchange.lg.global"+this.core.lgId+" \n            mozfullscreenchange.lg.global"+this.core.lgId+" \n            MSFullscreenChange.lg.global"+this.core.lgId)},n}()}));
//# sourceMappingURL=/sm/9e8a07a71d4d45402b6ae2b594782dcffcb9844369b039319b3b9b682f602dc2.map