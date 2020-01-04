$(function () {
	//首页导航切换
	jQuery(".header .header-nav ul").slide({
		type: "menu",// 效果类型，针对菜单/导航而引入的参数（默认slide）
		titCell: ".nLi", //鼠标触发对象
		targetCell: ".sub", //titCell里面包含的要显示/消失的对象
		effect: "slideDown", //targetCell下拉效果
		delayTime: 300, //效果时间
		triggerTime: 0, //鼠标延迟触发时间（默认150）
		returnDefault: true //鼠标移走后返回默认状态，例如默认频道是“预告片”，鼠标移走后会返回“预告片”（默认false）
	});
	//首页 轮播切换
	jQuery(".index-part2 ").slide({
		titCell: ".hd ul",
		mainCell: ".bd ul",
		autoPlay: true,
		autoPage: true,
		trigger: "click",
		delayTime: 3000,
		interTime: 3000
	});
	jQuery(".index-part3 .slideTxtBox").slide({});

})


jQuery(document).ready(function ($) {
	var $lateral_menu_trigger = $('#cd-menu-trigger'),
		$content_wrapper = $('.cd-main-content'),
		$navigation = $('.header');

	//open-close lateral menu clicking on the menu icon
	$lateral_menu_trigger.on('click', function (event) {
		event.preventDefault();

		$lateral_menu_trigger.toggleClass('is-clicked');
		$navigation.toggleClass('lateral-menu-is-open');
		$content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
			// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
			$('body').toggleClass('overflow-hidden');
		});
		$('#cd-lateral-nav').toggleClass('lateral-menu-is-open');

		//check if transitions are not supported - i.e. in IE9
		if ($('html').hasClass('no-csstransitions')) {
			$('body').toggleClass('overflow-hidden');
		}
	});

	//close lateral menu clicking outside the menu itself
	$content_wrapper.on('click', function (event) {
		if (!$(event.target).is('#cd-menu-trigger, #cd-menu-trigger span')) {
			$lateral_menu_trigger.removeClass('is-clicked');
			$navigation.removeClass('lateral-menu-is-open');
			$content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
				$('body').removeClass('overflow-hidden');
			});
			$('#cd-lateral-nav').removeClass('lateral-menu-is-open');
			//check if transitions are not supported
			if ($('html').hasClass('no-csstransitions')) {
				$('body').removeClass('overflow-hidden');
			}

		}
	});

	//open (or close) submenu items in the lateral menu. Close all the other open submenu items.
	$('.item-has-children').children('a').on('click', function (event) {
		event.preventDefault();
		$(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
	});
});



//下拉菜单
$(function () {
	var Accordion = function (el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
	}

	Accordion.prototype.dropdown = function (e) {
		var $el = e.data.el;
		$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}

	var accordion = new Accordion($('#accordion'), false);
});

//下拉菜单
$(function () {
	var Accordion = function (el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
	}

	Accordion.prototype.dropdown = function (e) {
		var $el = e.data.el;
		$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}

	var accordion = new Accordion($('#accordion1'), false);
});

// 右侧qq
$(function () {
	$("#service a").hover(function () {
		if ($(this).prop("className") == "weixin_area") {
			$(this).children("img.hides").show();
		} else {
			$(this).children("div.hides").show();
			$(this).children("img.shows").hide();
			$(this).children("div.hides").animate({ marginRight: '0px' }, '0');
		}
	}, function () {
		if ($(this).prop("className") == "weixin_area") {
			$(this).children("img.hides").hide();
		} else {
			$(this).children("div.hides").animate({ marginRight: '-163px' }, 0, function () {
				$(this).hide();
				$(this).next("img.shows").show();
			});
		}
	});

	$("#top_btn").click(function () {
		$("html,body").animate({ scrollTop: 0 }, 600);
	});

	//右侧导航 - 二维码
	$(".weixin_area").hover(function () {
		$(this).children(".weixin").show();
	}, function () {
		$(this).children(".weixin").hide();
	})
});





$().ready(function () {
	var i = 2;
	$(".left").click(function () {
		i++;
		$(".lunbo_div").attr("class", "lunbo_div")
		$(".lunbo_text").attr("class", "lunbo_text")
		switch (i) {
			case 1:
				$("#lunbo1").addClass("lunbo_div lunbo_div2 ty")
				$("#lunbo2").addClass("lunbo_div lunbo_div3")
				$("#lunbo3").addClass("lunbo_div lunbo_div1")
				$(".lunbo_text:eq(0)").addClass("ty").fadeIn(3000)
				break;
			case 2:
				$("#lunbo1").addClass("lunbo_div lunbo_div1")
				$("#lunbo2").addClass("lunbo_div lunbo_div2 ty")
				$("#lunbo3").addClass("lunbo_div lunbo_div3")
				$(".lunbo_text:eq(1)").addClass("ty")
				break;
			case 3:
				$("#lunbo1").addClass("lunbo_div lunbo_div3")
				$("#lunbo2").addClass("lunbo_div lunbo_div1")
				$("#lunbo3").addClass("lunbo_div lunbo_div2 ty")
				$(".lunbo_text:eq(2)").addClass("ty")
				i = 0;
				break;
			default:
				$("#lunbo1").addClass("lunbo_div lunbo_div3")
				$("#lunbo2").addClass("lunbo_div lunbo_div1")
				$("#lunbo3").addClass("lunbo_div lunbo_div2 ty")
				$(".lunbo_text:eq(2)").addClass("ty")
				i = 0;
				break;
		}
	})
	$(".right").click(function () {
		i--;
		$(".lunbo_div").attr("class", "lunbo_div")
		$(".lunbo_text").attr("class", "lunbo_text")
		switch (i) {
			case 1:
				$("#lunbo1").addClass("lunbo_div lunbo_div2 ty")
				$("#lunbo2").addClass("lunbo_div lunbo_div3")
				$("#lunbo3").addClass("lunbo_div lunbo_div1")
				$(".lunbo_text:eq(0)").addClass("ty")
				i = 4;
				break;
			case 2:
				$("#lunbo1").addClass("lunbo_div lunbo_div1")
				$("#lunbo2").addClass("lunbo_div lunbo_div2 ty")
				$("#lunbo3").addClass("lunbo_div lunbo_div3")
				$(".lunbo_text:eq(1)").addClass("ty")
				break;
			case 3:
				$("#lunbo1").addClass("lunbo_div lunbo_div3")
				$("#lunbo2").addClass("lunbo_div lunbo_div1")
				$("#lunbo3").addClass("lunbo_div lunbo_div2 ty")
				$(".lunbo_text:eq(2)").addClass("ty")
				break;
			default:
				$("#lunbo1").addClass("lunbo_div lunbo_div2 ty")
				$("#lunbo2").addClass("lunbo_div lunbo_div3")
				$("#lunbo3").addClass("lunbo_div lunbo_div1")
				$(".lunbo_text:eq(0)").addClass("ty")
				i = 4;
				break;
		}
	})
})



