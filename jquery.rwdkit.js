/**
 * jQuery rwdKit plug-in 2.3.0
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

		let m = '';

		const params = $.extend({
			media: {
				xs: 0,
				sm: 576,
				md: 768,
				lg: 992,
				xl: 1200,
			},
			console: false,
			bootstrap3: false,
			position: 'bottom',
			color: 'white',
			backgroundColor: 'rgba(14,120,200,.9)',
		}, options);

		if (params.bootstrap3) {
			params.media = {
				xs: 0,
				sm: 768,
				md: 992,
				lg: 1200,
				xl: 1599,
			};
		}

		if (!params.console) {
			$('body').append('<style>' +
				'#rwdKit{position:fixed;'+params.position+':0;width:100%;font-size:1.1em;background-color:'+params.backgroundColor+';z-index:1100;text-align:center;line-height:1.4;}' +
				'#rwdKit .data{color:'+params.color+';margin-top:3px;display:inline-block}' +
				'#rwdKit .logo{color:'+params.color+';margin:3px 0 0 5px;float:left;}' +
				'#rwdKit .mobile, #rwdKit .refresh{padding:5px 5px 0;background-color:#f7f7f7;cursor:pointer;float:right;}' +
				'#rwdKit .mobile:hover, #rwdKit .refresh:hover{background-color:#d7d7d7;}' +
				'#rwdKit .refresh{border-left:1px solid #b9b9b9;}' +
				'#rwdFrame{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1110;background-color:rgba(0,0,0,.8);}' +
				'#rwdFrame tr, #rwdFrame td{width:100%;height:100%;vertical-align:middle;text-align:center;}' +
				'#rwdFrame iframe{display:inline-block;width:80%;height:90%;margin:0;padding:0;border:0;}' +
				'#rwdFrame .bar{display:inline-block;width:15px;height:90%;margin:0;padding:0;border:0;color:#fff;font-size:1.4em;line-height:0;text-align:center;border-radius:0 5px 5px 0;writing-mode:vertical-rl;text-orientation:mixed;background:'+params.backgroundColor+';cursor:col-resize;}' +
				'#rwdFrame .closed{display:inline-block;position:absolute;top:20px;right:20px;width:20px;height:20px;font-size:1.1em;text-align:center;border-radius:25px;color:white;line-height:1.1;font-weight:500;cursor:pointer;}' +
				'#rwdFrame .closed:hover{color:#676767;}' +
				'#rwdFrame .output{display:flex;justify-content:center;align-items:center;}' +
				'#rwdFrame .switch{display:flex;padding:0;margin:0;border:0;background-color:transparent;cursor:pointer;}' +
				'#rwdFrame .switch[disabled]{opacity:.2}' +
				'#rwdFrame .switch.left{margin-right:2px;}' +
				'#rwdFrame .switch.right{margin-left:12px;}' +
				'#rwdFrame .switch svg{scale:1.5;padding-top:2px;}' +
				'#rwdFrame .switch svg g{fill:#fff;}' +
				'#rwdFrame .switch:enabled:hover svg g{fill:rgb(14,120,200);}' +
				'#rwdFrame input.size{display:inline-block;color:white;background:transparent;width:35px;text-align:right;border:0;font-size:1em;}' +
				'#rwdFrame .data{display:inline-block;color:white;font-size:1em;}' +
				'</style>');
			$('body').append('<div id="rwdKit">' +
				'<span class="data"></span>' +
				'<a href="https://github.com/avantage-digital/rwdKit" class="logo" target="_blank">rwdKit</a>' +
				'<div class="refresh"><svg width="18px" height="18px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g transform="matrix(0.0604838,0,0,0.0604838,-0.483852,-0.483856)"><path d="M492,8L482,8C475.373,8 470,13.373 470,20L470,130.625C426.804,57.047 346.761,7.715 255.207,8.001C118.82,8.428 7.787,120.009 8,256.396C8.214,393.181 119.166,504 256,504C319.926,504 378.202,479.813 422.178,440.092C427.291,435.474 427.532,427.531 422.66,422.659L415.591,415.59C411.088,411.087 403.842,410.876 399.109,415.136C361.218,449.238 311.065,470 256,470C138.256,470 42,374.669 42,256C42,138.256 137.331,42 256,42C338.862,42 410.737,89.077 446.289,158L332,158C325.373,158 320,163.373 320,170L320,180C320,186.627 325.373,192 332,192L492,192C498.627,192 504,186.627 504,180L504,20C504,13.373 498.627,8 492,8Z" style="fill-rule:nonzero;"/></g></svg></div>' +
				'<div class="mobile"><svg width="18px" height="18px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g transform="matrix(0.046875,0,0,0.046875,0,3)"><path d="M608,128L416,128C398.445,128 384,142.445 384,160L384,480C384,497.555 398.445,512 416,512L608,512C625.555,512 640,497.555 640,480L640,160C640,142.445 625.555,128 608,128ZM608,480L416,480L416,160L608,160L608,480ZM96,32L480,32L480,96L512,96L512,32C512,14.445 497.555,0 480,0L96,0C78.445,0 64,14.445 64,32L64,288L16,288C7.223,288 -0,295.223 0,304L0,320C0.076,355.046 28.864,383.874 63.91,384L352,384L352,352L63.91,352C46.389,351.951 32,337.521 32,320L352,320L352,288L96,288L96,32Z" style="fill-rule:nonzero;"/></g></svg></div>' +
				'</div>');
			$('#rwdKit div.mobile').on('click', function(e){
				$(document).rwdFrame(params);
				$('html').css('overflow', 'hidden');
			});
			$('#rwdKit div.refresh').on('click', function(e){
				document.location.reload(true);
			});
		}

		function detectMedia(w) {
			for (const [k, v] of Object.entries(params.media)) {
				if (w >= v) {
					m = k;
				} else {
					break;
				}
			}
			let o = 'width: ' + w + ' | media: ' + m.toUpperCase();
			if (params.console) {
				console.log(o);
			} else {
				$('#rwdKit .data').html(o);
			}
		}

		function eventHandler(e) {
			detectMedia(window.innerWidth);
		}

		window.onresize = eventHandler;
		window.addEventListener('deviceorientation', eventHandler);
		window.addEventListener('keyup', function(e){
			if (e.code == 'F4') {
				e.preventDefault();
				document.location.reload(true);
			}
		});
		detectMedia(window.innerWidth);

		return this;

	};

	$.fn.rwdFrame = function(options) {

		const params = options;
		let width = 0, m, funct, ini = {x:0, y:0}, pos = {x:0, y:0}, press = false, min = 300;

		$('body').append('<table id="rwdFrame"><tr><td>' +
			'<iframe src="' + window.location + '" frameborder="0"></iframe>' +
			'<div class="bar">...</div>' +
			'<div class="closed">x</div>' +
			'<div class="output">' +
			'<button class="switch left"><svg width="10" height="14" viewBox="0 0 14 20">' +
			'<g transform="matrix(-1,0,0,1,10,0)">' +
			'<g transform="matrix(0.707107,0.707107,-0.707107,0.707107,1.2799,-1.68995)"><rect x="2.78" y="0.7" width="8.97" height="2.45"/></g>' +
			'<g transform="matrix(0.707107,-0.707107,0.707107,0.707107,-8.07226,4.02845)"><rect x="0.8" y="11.886" width="9.151" height="2.45"/></g>' +
			'</g>' +
			'</svg></button>' +
			'<input type="text" class="size" maxlength="4">' +
			'<span class="data"></span>' +
			'<button class="switch right"><svg width="10" height="14" viewBox="0 0 14 20">' +
			'<g transform="matrix(0.707107,0.707107,-0.707107,0.707107,1.2799,-1.68995)"><rect x="2.78" y="0.7" width="8.97" height="2.45"/></g>' +
			'<g transform="matrix(0.707107,-0.707107,0.707107,0.707107,-8.07226,4.02845)"><rect x="0.8" y="11.886" width="9.151" height="2.45"/></g>' +
			'</svg></button>' +
			'</div>' +
			'</td></tr></table>');

		$('#rwdFrame iframe').on('load', function(e){
			let frame = $(this).contents();
			frame.find('#rwdKit').remove();
			width = $('#rwdFrame iframe').css('width');
			width = width.substr(0, width.indexOf('px'));
			$('#rwdFrame .size').val(width);
			$('#rwdFrame .data').html('px | ' + detectMedia(width));
		});

		$('#rwdFrame').on('mousedown', 'div.bar', function(e){
			press = true;
			ini.x = e.pageX;
			ini.y = e.pageY;
			$('#rwdFrame iframe').css('pointer-events', 'none');
			width = $('#rwdFrame iframe').width();
			funct = setInterval(resize, 10);
		});

		$('#rwdFrame input.size').on('keyup', function(e){
			if (e.keyCode == 13) {
				width = parseInt($('#rwdFrame input.size').val(), 10);
				$('#rwdFrame iframe').css('width', width + 'px');
				$('#rwdFrame .size').val(width);
				$('#rwdFrame .data').html('px | ' + detectMedia(width));
			}
		});

		$('#rwdFrame button.switch').on('click', function(e){
			let n = false, iterate = $(this).attr('class').substr(7) == 'right' ? Object.entries(params.media) : Object.entries(params.media).reverse();
			for (const [k, v] of iterate) {
				if (n) {
					m = k;
					width = v;
					break;
				}
				n = m === k;
			}
			width = width < min ? min : width;
			$('#rwdFrame iframe').css('width', width + 'px');
			$('#rwdFrame .size').val(width);
			$('#rwdFrame .data').html('px | ' + detectMedia(width));
		});

		$('body').on('mousemove', function(e) {
			pos.x = e.pageX;
			pos.y = e.pageY;
		});
		$(document).on('mouseenter', release);
		$('#rwdFrame').on('mouseup click', release);

		function release(e) {
			press = false;
			clearInterval(funct);
			$('#rwdFrame iframe').css('pointer-events', 'auto');
			if (e.target.className == 'closed') {
				$('html').css('overflow', 'auto');
				$('#rwdFrame').remove();
			}
		}

		function resize() {
			if (press) {
				let w = Math.ceil(width - (ini.x - pos.x) * 2);
				$('#rwdFrame iframe').css('width', w + 'px');
				$('#rwdFrame .size').val(w);
				$('#rwdFrame .data').html('px | ' + detectMedia(w));
			}
		}

		function detectMedia(w) {
			let i = 0;
			for (const [k, v] of Object.entries(params.media)) {
				if (w >= v) {
					m = k;
					i++;
				} else {
					break;
				}
			}
			$('.output button.switch').removeAttr('disabled');
			if (i == 1) {
				$('.output button.switch.left').attr('disabled', true);
			} else if (i == Object.entries(params.media).length) {
				$('.output button.switch.right').attr('disabled', true);
			}
			return m.toUpperCase();
		}

	};

})(jQuery);