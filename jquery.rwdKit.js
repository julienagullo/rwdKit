/**
 * jQuery rwdKit plug-in 1.2.0
 * Copyright (c) Avantage Digital
 * Licensed under the MIT license
 *
 * jQuery plugin can help developers to view current breakpoint informations in responsive web page.
 *
 * @author	Avantage Digital
 * @docs	https://github.com/avantage-digital/rwdKit
 */
(function($){

	"use strict";

	$.fn.rwdKit = function(options) {

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
			bootstrap4: false,
			position: 'bottom',
			fontSize: '12px',
			color: 'white',
			backgroundColor: 'rgba(14,120,200,.8)',
		}, options);

		if (params.bootstrap4) {
			params.media = {
				xs: 0,
				sm: 576,
				md: 768,
				lg: 992,
				xl: 1200,
			};
		}

		if (!params.console) {
			$('body').append('' +
				'<div id="rwdKit" style="position:fixed;'+params.position+':0;width:100%;font-size:'+params.fontSize+';background-color:'+params.backgroundColor+';padding:5px;z-index:1100;text-align:center;">' +
				'<span style="color:'+params.color+';"></span>' +
				'<a href="https://github.com/avantage-digital/rwdKit" target="_blank" style="color:'+params.color+';float:left;">rwdKit</a>' +
				'</div>'
			);
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
				$('#rwdKit').find('span').html(o);
			}
		}

		function eventHandler(e) {
			detectMedia(window.innerWidth);
		}

		window.onresize = eventHandler;
		window.addEventListener('deviceorientation', eventHandler);
		detectMedia(window.innerWidth);

		return this;

	};

})(jQuery);