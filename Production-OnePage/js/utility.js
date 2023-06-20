var $win = $(window);
var winHeight = $(window).height();
var winWidth = $(window).width();
var docHeight = $(document).height();
var docWidth = $(document).width();

var $homeSolution = $("#home-solution");
var $homeShowcase = $("#home-showcase");
var $homeInvestor = $("#home-investor");

$.fx.speeds._default = 500;

var MenuFn = {
    MenuDropdown: function () {
        //       var dropdownWidth = winWidth - $("nav > .container").width();
        //       var diffWidth = (winWidth - dropdownWidth) / 2;
        //       var test = 0;
        //       $("ul.navbar-nav").find(".dropdown-menu").parent("li").prevAll().each(function() {
        //               test += $(this).width();
        //       });


        // dropdownleft = parseInt(dropdownWidth/2) + 15;
        //       $navDropdown = $(".dropdown-menu");
        //       var total = 0;

        //       $navDropdown.each(function(){
        //           $navDropdown.parent("li").prevAll().each(function() {
        //               total += $(this).width();
        //           });

        //           total = total - 35;

        //           $(this).attr('data-width', total)

        //       	$(this).css({
        //       		// width: winWidth,
        //       		// left: '-' + total + 'px'
        //       	});
        //       });
    },
    MenuApp: function () {
        if (winWidth < 1169 || docWidth < 1169) {
            $(document).on('click', 'a.dropdown-toggle', function (e) {
                $(".open-dropdown").css("display", "none").removeClass("open-dropdown");
                $(this).parent("li").css("margin-bottom", "15px");
                if ($(this).attr('aria-expanded') == "true") {
                    $(this).next("ul").css("display", "inline-block").addClass("open-dropdown");
                    //$(".dropdown-menu").not(this).next("ul").css("display", "none");
                } else {
                    $(this).next("ul").css("display", "none");
                    $(this).parent("li").css("margin-bottom", "0px");
                }
            });

            $(document).on('click', '#lang-bar li', function (e) {
                $(".open-dropdown").css("display", "none").removeClass("open-dropdown");
            });
        }
    }
}



var HomeFn = {
    BillboardSlide: function () {
        var $slideWrap = $('.cycle-slideshow');
        var $smallHead = $('#home-billboard h5');
        var $bigHead = $('#home-billboard h1');
        var $caption = $('#home-billboard .slide-caption');

        setTimeout(function () {
            $caption.transition({ opacity: 1, duration: 1200, delay: 200 });
        }, 500);

        $slideWrap.on('cycle-before', function () {
            $caption.transition({ opacity: 0, delay: 0 });
        });

        $slideWrap.on('cycle-after', function () {
            $caption.transition({ opacity: 1, duration: 1200, delay: 0 });
        });

    },
    BillboardSetHeight: function () {
        var $billboard = $("#home-billboard .billboard");
        var headerH = $("header").outerHeight();
        var sloganH = $("#home-slogan").outerHeight();
        var navbarH = $("nav.navbar").outerHeight();

        if (winWidth < 1169 || docWidth < 1169) {
            //$billboard.height(winHeight - (headerH));
            $billboard.height(winHeight - (headerH + 52 + 176));
        } else {
            $billboard.height(winHeight - (headerH + 52 + 176));
        }
    },
    PartnerSlider: function () {
        var $partnerWrap = $("#owl-partner");

        if ($partnerWrap.length > 0) {
            $partnerWrap.owlCarousel({
                dots: true,
                autoplay: true,
                autoplayTimeout: 2500,
                loop: false,
                smartSpeed: 1000,
                stopOnHover: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    }
                }

            });
        }
    },
    ReleteSlider: function () {
        var $partnerWrap = $("#owl-relate");

        if ($partnerWrap.length > 0) {
            $partnerWrap.owlCarousel({
                dots: true,
                autoplay: true,
                autoplayTimeout: 2500,
                stopOnHover: true,
                items: 3,
                nav: true,
                navText: [
                    "<i class='glyphicon glyphicon-chevron-left'></i>",
                    "<i class='glyphicon glyphicon-chevron-right'></i>"
                ]
            });
        }
    },
    setEffect: function () {
        var $docTop = $(document).scrollTop();

        if ($docTop <= 0) {
            $homeSolution.find(".hs-top").transition({ y: 100, opacity: 0, delay: 0 });
            $homeSolution.find(".hs-bottom").transition({ y: 100, opacity: 0, delay: 0 });
            $homeShowcase.find(".home-showcase-txt .row").transition({ opacity: 0, delay: 0 });
        }
    },
    doEffect: function () {
        $(window).scroll(function () {
            var scroll = $win.scrollTop();
            winH = $win.height();
            add = 150;

            var homeSolutionPos = $("#home-solution").position().top;
            if (scroll + winHeight >= homeSolutionPos + add) {
                $homeSolution.find(".hs-top").transition({ y: 0, opacity: 1, duration: 1500, delay: 0 });
                $homeSolution.find(".hs-bottom").transition({ y: 0, opacity: 1, duration: 1500, delay: 750 });
            }

            var homeShowcasePos = $("#home-showcase").position().top;
            if (scroll + winHeight >= homeShowcasePos + add) {
                $homeShowcase.find(".home-showcase-txt .row").transition({ opacity: 1, duration: 1500, delay: 350 });
            }

        });
    },
    initHomeApp: function () {
        if ($("#home").length > 0) {
            this.setEffect();
            this.doEffect();
        }

        this.BillboardSlide();
        this.BillboardSetHeight();
        this.PartnerSlider();
        this.ReleteSlider();
    }
}

var ContentFn = {
    BusinessBgSlide: function () {
        var yearItem = $(".owl-item a.btn");
        var yearBlock = $(".business-block");
        $('.owl-business').owlCarousel({
            center: false,
            items: 3,
            loop: false,
            nav: true,
            navText: [
                "<i class='icon icon-arrow395'></i>",
                "<i class='icon icon-rightarrow49'></i>"
            ],
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1
                },
                1024: {
                    items: 3
                }
            }
        });

        yearBlock.addClass("animated fadeInUp");

        $(document).on('click', '.owl-item a.btn', function (e) {
            $(".owl-item a").removeClass("active");
            $(this).addClass("active");
            yearBlock.css("display", "none");
            $($(this).data('year')).css("display", "block");
        });
    },
    BoardPopup: function () {
        $('[data-popup]').on('click', function (e) {

            var target = $(this).attr('data-popup');
            $('[data-popup-name="' + target + '"]').fadeIn(350);
            $('html').addClass('sc-lock');
        });

        $('[data-close]').on('click', function (e) {

            var target = $(this).attr('data-close');

            $('[data-popup-name="' + target + '"]').fadeOut(350);
            $('html').removeClass('sc-lock');
        });
    },
    initContentApp: function () {
        this.BusinessBgSlide();
        this.BoardPopup();
    }
}

var FormFn = {
    privacyStatement: function () {
        let $checkbox = $('input[name="privacyStatement"]');
        let $btn = $('button[type="submit"]');

        if($btn.length && $checkbox.length) {
            $checkbox.click(function () {
                if($(this).prop('checked')) {
                    $btn.removeAttr('disabled');
                } else {
                    $btn.attr('disabled', 'disabled');
                }
            })
        }
    }
}
$(document).ready(function () {
    MenuFn.MenuApp();
    HomeFn.initHomeApp();
    ContentFn.initContentApp();
    FormFn.privacyStatement();

    $("[rel^=prettyPhoto], [class*=prettyPhoto]").prettyPhoto();

    if ($("#gMap").length) {
        var myLatlng = new google.maps.LatLng(13.7898048, 100.5763992);
        var image = "../../images/misc/ait-marker.png";
        var map, marker;


        function initialize() {
            var mapOptions = {
                zoom: 16,
                center: myLatlng,
                scaleControl: true
            }

            map = new google.maps.Map(document.getElementById("gMap"), mapOptions);

            var content = '<div id="map-popup">' +
                '<img src="../images/misc/contact-bg.jpg" class="img-responsive" /><div class="map-detail"><h5>Advanced Information Technology PCL</h5>' +
                '<address>37/2 Suthisarnvinijchai Rd., Samseannok,Huaykwang 10310 Bangkok, Thailand</address>' +
                '</div></div>';

            var infowindow = new google.maps.InfoWindow({
                content: content
            });

            marker = new google.maps.Marker(
                {
                    map: map,
                    position: myLatlng,
                    icon: image,
                    title: "Map Title"
                });

            google.maps.event.addListener(infowindow, 'domready', function () {
                var iwOuter = $('.gm-style-iw');
                var iwBackground = iwOuter.prev();
                iwBackground.children(':nth-child(2)').css({ 'display': 'none' });
                iwBackground.children(':nth-child(4)').css({ 'display': 'none' });
            });

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });

            google.maps.event.addListener(map, 'click', function () {
                infowindow.close();
            });

        }

        google.maps.event.addDomListener(window, "load", initialize);
    }


});




$(document).on('click', '.dropdown-toggle', function (e) {
    if ($(this).attr('aria-expanded') == "true") {
        $(".drop-wrapper").css("display", "block");
    } else {
        $(".drop-wrapper").css("display", "none");
    }

    e.stopPropagation();

});

$(document).on('click', '.yamm .dropdown-menu', function (e) {
    e.stopPropagation();
});

$(document).on('click', 'a[data-toggle="dropdown-hide"]', function (e) {
    $(this).attr('data-toggle', 'dropdown-show').next('.sub-column-dropdown').css({ display: "block" });
});

$(document).on('click', 'a[data-toggle="dropdown-show"]', function (e) {
    $(this).attr('data-toggle', 'dropdown-hide').next('.sub-column-dropdown').css({ display: "none" });
});

$(document).ready(function(){
	let $checkbox = $('input[name="privacyPolicy"]');
	let $btn = $('button[type="submit"]');

	if ($btn.length && $checkbox.length) {

		$checkbox.click(function () {
			if ($(this).prop('checked')) {
				$btn.removeAttr('disabled');
			} else {
				$btn.attr('disabled', true);
			}
		})
	}
});