$(document).ready(function() {
    $(".header-menu > li").hover(function() {
        if ($(this).hasClass("list-website-navigation")) {
            $(this).children(".website-navigation-wrapper").addClass("hover-show");
        } else {
            $(this).children("ul").addClass("hover-show");
        }
    }, function() {
        if ($(this).hasClass("list-website-navigation")) {
            $(this).children(".website-navigation-wrapper").removeClass("hover-show");
        } else {
            $(this).children("ul").removeClass("hover-show");
        }
    });

    $(".link-more").hover(function() {
        $(this).children("i").css("background-image", "url(../images/arrow_right_orange.png)");
    }, function() {
        $(this).children("i").css("background-image", "url(../images/arrow_right_black.png)");
    });

    $(".tab-search li a").click(function() {
        if ($(this).hasClass("tab-treasure")) {
            $(this).addClass("selected").addClass("treasure-color").removeClass("tab-hover");
            $(".search-input .input").css("border-color", "#FF5500");
            $(".search-input .input a").css("visibility", "visible");
            $(".tab-search .tab-tmall").removeClass("selected").removeClass("tmall-color").addClass("tab-hover");
            $(".tab-search .tab-store").removeClass("selected").removeClass("treasure-color").addClass("tab-hover");
            $(".search-input .button-search").css("background-color", "#FF5500");
            $(".search-input .treasure").css("visibility", "visible");
            $(".search-input .tmall").css("visibility", "hidden");
            $(".search-input input").attr("placeholder", "居家百货必抢清单");
        } else if ($(this).hasClass("tab-tmall")) {
            $(this).addClass("selected").addClass("tmall-color").removeClass("tab-hover");
            $(".search-input .input").css("border-color", "#C60000");
            $(".search-input .input a").css("visibility", "hidden");
            $(".tab-search .tab-treasure").removeClass("selected").removeClass("treasure-color").addClass("tab-hover");
            $(".tab-search .tab-store").removeClass("selected").removeClass("treasure-color").addClass("tab-hover");
            $(".search-input .button-search").css("background-color", "#C60000");
            $(".search-input .treasure").css("visibility", "hidden");
            $(".search-input .tmall").css("visibility", "visible");
            $(".search-input input").attr("placeholder", "送给孩子的冬日温暖");
        } else {
            $(this).addClass("selected").addClass("treasure-color").removeClass("tab-hover");
            $(".search-input .input").css("border-color", "#FF5500");
            $(".search-input .input a").css("visibility", "hidden");
            $(".tab-search .tab-treasure").removeClass("selected").removeClass("treasure-color").addClass("tab-hover");
            $(".tab-search .tab-tmall").removeClass("selected").removeClass("tmall-color").addClass("tab-hover");
            $(".search-input .button-search").css("background-color", "#FF5500");
            $(".search-input .treasure").css("visibility", "visible");
            $(".search-input .tmall").css("visibility", "hidden");
            $(".search-input input").attr("placeholder", "");
        }
    });

    $(".delete").hover(function() {
        $(this).children().css("background-image", "url(../images/delete_hover.png)");
    }, function() {
        $(this).children().css("background-image", "url(../images/delete.png)");
    });

    $(".delete").click(function() {
        $(this).parent().css("display", "none");
    });

    $(".photo-slide").css({
        "position": "absolute",
        "width": "3640px",
        "height": "280px",
        "left": "-520px",
        "transition": "transform 0.5s",
        "transform": "translateX(0px)"
    });

    function switchSlider() {
        //切换slider的底部导航
        if ($(".slide-switch #slide-selected").index() != 4) {
            $(".slide-switch #slide-selected").removeAttr("id").next().attr("id", "slide-selected");
        } else {
            $(".slide-switch #slide-selected").removeAttr("id");
            $(".slide-switch li:first-child").attr("id", "slide-selected");
        }
        //切换slider的图片
        var offset;
        if ($(".photo-slide #photo-selected").index() == 5) {
            $(".photo-slide #photo-selected").removeAttr("id").next().attr("id", "photo-selected");
            offset = getTransform($(".photo-slide").css("transform"));
            $(".photo-slide").css("transform", setTransform(parseInt(offset) - 520));
            $(".photo-slide #photo-selected").removeAttr("id");
            $(".photo-slide a:nth-child(7n+3)").attr("id", "photo-selected");
            $(".photo-slide").one('transitionend', function() {
                $(this).css("transition", "none");
                $(this).css("transform", setTransform(0));
            });
        } else {
            $(".photo-slide").css("transition", "transform 0.5s");
            $(".photo-slide #photo-selected").removeAttr("id").next().attr("id", "photo-selected");
            offset = getTransform($(".photo-slide").css("transform"));
            $(".photo-slide").css("transform", setTransform(parseInt(offset) - 520));
        }
    }

    setInterval(switchSlider, 3000);

    function getTransform(cssTransform) {
        return cssTransform.split(",")[4].trim();
    }

    function setTransform(xOffset) {
        return "translateX(" + xOffset + "px)";
    }

    $(".taobao-announcement-tab li:first-child").addClass("hover");

    $(".taobao-announcement-tab li").hover(function() {
        $(".taobao-announcement-tab ul > li").removeClass("hover");
        $(this).addClass("hover");
        var index = $(this).index();
        $(".announcement-wrapper > ul").css("display", "none");
        $(".public-benefit").css("display", "none");
        if (index == 4) {
            $(".public-benefit").css("display", "block");
        } else {
            $(".announcement-wrapper>ul").eq(index).css("display", "block");
        }
    }, function() {

    });

    $(".auction-crowdfunding-switcher a").hover(function() {
        if (!$(this).hasClass("selected")) {
            $(this).addClass("switch-color");
            if ($(this).index() == 0) {
                $(this).children("i").addClass("switch-up-image");
            } else {
                $(this).children("i").addClass("switch-down-image");
            }
        }
    }, function() {
        if (!$(this).hasClass("selected")) {
            $(this).removeClass("switch-color");
            if ($(this).index() == 0) {
                $(this).children("i").removeClass("switch-up-image");
            } else {
                $(this).children("i").removeClass("switch-down-image");
            }
        }
    });

    $(".auction-crowdfunding-switcher a").click(function() {
        if (!$(this).hasClass("selected")) {
            $(this).siblings().removeClass("switch-color").removeClass("selected");
            $(this).addClass("switch-color").addClass("selected");
            if ($(this).index() == 0) {
                $(this).siblings().children().removeClass("switch-down-image");
            } else {
                $(this).siblings().children().removeClass("switch-up-image");
            }
        }

        $(".auction-crowdfunding").css("top") == "0px" ? $(".auction-crowdfunding").css("top", "-69px") : $(".auction-crowdfunding").css("top", "0");
    });

    $(".clothes").hover(function() {
        $(this).children("h3").addClass("hide-title-border");
    }, function() {
        $(this).children("h3").removeClass("hide-title-border");
    });

    $(".outdoors").hover(function() {
        $(this).children("h3").addClass("hide-title-border");
        $(".treasure").addClass("border-left-hover");
    }, function() {
        $(this).children("h3").removeClass("hide-title-border");
        $(".treasure").removeClass("border-left-hover");
    });

    $(".treasure").hover(function() {
        $(this).children("h3").addClass("hide-title-border");
    }, function() {
        $(this).children("h3").removeClass("hide-title-border");
    });

    $(".children-wear").hover(function() {
        $(this).children("h3").addClass("hide-title-border");
        $(".foods-children .foods").addClass("right-border");
    }, function(){
        $(this).children("h3").removeClass("hide-title-border");
        $(".foods-children .foods").removeClass("right-border");
    });

    $(".foods").hover(function() {
        $(this).children("h3").addClass("hide-title-border");
        $(".makeup").addClass("border-left-hover");
    }, function() {
        $(this).children("h3").removeClass("hide-title-border");
        $(".makeup").removeClass("border-left-hover");
    });

    $(".makeup").hover(function() {
        $(this).children("h3").addClass("hide-title-border");
    }, function() {
        $(this).children("h3").removeClass("hide-title-border");
    });

    $(".various-service .service-tab li").click(function() {
        $(this).siblings().removeClass("show-border").removeClass("hover-color");
        $(this).addClass("show-border").addClass("hover-color");
        $(".various-service .service-content").children().eq($(this).index()).addClass("show-content").siblings().removeClass("show-content");
    });

    $(".taobao-life .phone-bill, .taobao-life .games, .taobao-life .travel, .taobao-life .insurance").hover(function() {
        $(".taobao-life .phone-bill i").addClass("hover-show");
        $(".taobao-life .phone-bill").addClass("change-height");
    });

    $(".taobao-life .games, .taobao-life .travel, .taobao-life .insurance").hover(function() {
        $(".taobao-life .phone-bill").removeClass("border-show");
        $("#phone-bill-info").addClass("hidden");
    });

    $(".taobao-life .phone-bill").hover(function() {
        $("#phone-bill-info").removeClass("hidden");
        $(this).addClass("border-show");
    });

    $("#phone-bill-info").hover(function() {
        $(".taobao-life .phone-bill").addClass("border-show");
    });
    /*
      taobao-life部分slider的切换
     */
    $("#phone-bill-info .tab a").hover(function() {
        $(this).addClass("link-border").siblings().removeClass("link-border");
        var offset = $(this).index() * (-288) + "px";
        $("#phone-bill-info .content-wrapper").css("left", offset);
    });

});
