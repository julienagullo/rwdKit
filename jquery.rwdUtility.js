/**
 * jQuery rwdUtility plug-in 1.0.0
 * Copyright 2019, Numébrique
 * Licensed under the MIT license
 *
 * A jQuery plugin which helps developers to view the current breakpoint in web page.
 *
 * @author	Numébrique
 * @docs	https://github.com/numebrique/rwdUtility
 */
(function($){

	"use strict";

	$.fn.rwdUtility = function(options, bootstrap4 = false) {

		var m = '';

		const params = $.extend({
			media: {
				xs: 0,
				sm: 768,
				md: 992,
				lg: 1200,
				xl: 1599,
			},
			console: false,
			position: 'bottom',
			fontSize: '12px',
			color: 'white',
			backgroundColor: 'rgba(0,0,0,.65)',
		}, options);

		if (bootstrap4) {
			params.media = {
				xs: 0,
				sm: 576,
				md: 768,
				lg: 992,
				xl: 1200,
			};
		}

		if (!params.console) {
			$('body').append('<div id="rwdUtility" style="position:fixed;'+params.position+':0;width:100%;font-size:'+params.fontSize+';background-color:'+params.backgroundColor+';padding:5px;z-index:1100;"><span style="color:'+params.color+';float:left;"></span><a href="https://github.com/numebrique/rwdUtility" target="_blank" style="color:'+params.color+';float:right;">rwdUtility</a></div>');
		}

		function detectMedia(w) {
			$.each(params.media, function(k, v) {
				if (w >= v) {
					m = k;
				} else {
					return false;
				}
			});
			let o = 'width: ' + w + ' | media: ' + m.toUpperCase();
			if (params.console) {
				console.log(o);
			} else {
				$('#rwdUtility').find('span').html(o);
			}
		}

		window.onresize = function() {
			detectMedia(window.innerWidth);
		};

		detectMedia(window.innerWidth);

		return this;

	};

})(jQuery);