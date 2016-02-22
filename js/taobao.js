$(window).load(function() {
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
            $(".search-input .button-search").css("background-color", "#FF4200");
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
            $(".search-input .button-search").css("background-color", "#FF4200");
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

    // $(".photo-slide").css({
    //     "position": "absolute",
    //     "width": "3640px",
    //     "height": "280px",
    //     "left": "-520px",
    //     "transition": "transform 0.5s",
    //     "transform": "translateX(0px)"
    // });

    // function switchSlider() {
    //     //切换slider的底部导航
    //     if ($(".slide-switch #slide-selected").index() != 4) {
    //         $(".slide-switch #slide-selected").removeAttr("id").next().attr("id", "slide-selected");
    //     } else {
    //         $(".slide-switch #slide-selected").removeAttr("id");
    //         $(".slide-switch li:first-child").attr("id", "slide-selected");
    //     }
    //     //切换slider的图片
    //     var offset;
    //     if ($(".photo-slide #photo-selected").index() == 5) {
    //         $(".photo-slide #photo-selected").removeAttr("id").next().attr("id", "photo-selected");
    //         offset = getTransform($(".photo-slide").css("transform"));
    //         $(".photo-slide").css("transform", setTransform(parseInt(offset) - 520));
    //         $(".photo-slide #photo-selected").removeAttr("id");
    //         $(".photo-slide a:nth-child(7n+3)").attr("id", "photo-selected");
    //         $(".photo-slide").one('transitionend', function() {
    //             $(this).css("transition", "none");
    //             $(this).css("transform", setTransform(0));
    //         });
    //     } else {
    //         $(".photo-slide").css("transition", "transform 0.5s");
    //         $(".photo-slide #photo-selected").removeAttr("id").next().attr("id", "photo-selected");
    //         offset = getTransform($(".photo-slide").css("transform"));
    //         $(".photo-slide").css("transform", setTransform(parseInt(offset) - 520));
    //     }
    // }

    // setInterval(switchSlider, 3000);

    // function getTransform(cssTransform) {
    //     return cssTransform.split(",")[4].trim();
    // }

    // function setTransform(xOffset) {
    //     return "translateX(" + xOffset + "px)";
    // }

    // function switchSlider() {
    //     if ($("photo-slider-primary #photo-selected").index() == 4) {
    //         $("photo-slider-primary secondary").css("left", "520px");
    //     } else if ($("photo-slider-primary #photo-selected").index() == 0) {
    //         $("photo-slider-primary secondary").css("left", "-2600px");
    //     }
    // }

    //通过unslider插件的API控制幻灯片轮播效果
    var primarySlider = $(".taobao-photo-slider .slider-pictures").unslider({
        autoplay: true,
        infinite: true,
        speed: 400,
        delay: 5000,
        nav: false,
        arrows: false
    });

    primarySlider.on("unslider.change", function(event, index, slide) {
        $(".photo-slider-primary .slide-switch li").eq(index % 5).css("background-color", "#FF4400").siblings().css("background-color", "#b7b7b7");
    });

    $(".photo-slider-primary .slide-left").click(function() {
        primarySlider.data("unslider").prev();
    });

    $(".photo-slider-primary .slide-right").click(function() {
        primarySlider.data("unslider").next();
    });

    $(".photo-slider-primary .slide-switch li").click(function() {
        primarySlider.data("unslider").animate($(this).index());
    });

    //另一种轮播方法
    // function slider() {
    //     var pictureWidth = $(".photo-slider-secondary .photo-slide img").width();
    //     var pictureList = $(".photo-slider-secondary .photo-slide ul");
    //     $(".photo-slider-secondary .photo-slide li:last-child").prependTo(pictureList);
    //     pictureList.css("left", -pictureWidth + "px");

    //     setInterval(moveRight, 5000);

    //     $(".photo-slider-secondary .slide-left").click(function() {
    //         moveLeft();
    //     });

    //     $(".photo-slider-secondary .slide-right").click(function() {
    //         moveRight();
    //     });

    //     function moveRight() {
    //         pictureList.animate({
    //             "left": - pictureWidth * 2 + "px"
    //         }, 400, function() {
    //             $(".photo-slider-secondary .photo-slide li:first-child").appendTo(pictureList);
    //             pictureList.css("left", -pictureWidth + "px");
    //         });
    //     }

    //     function moveLeft() {
    //         pictureList.animate({
    //             "left": 0
    //         }, 400, function() {
    //             $(".photo-slider-secondary .photo-slide li:last-child").prependTo(pictureList);
    //             pictureList.css("left", -pictureWidth + "px");
    //         });
    //     }
    // }

    function slider(pictureWidth, pictureList, navLeft, navRight, interval, animationTime) {
        pictureList.children().last().prependTo(pictureList);
        pictureList.css("left", -pictureWidth + "px");
        setInterval(moveRight, interval);

        navLeft.click(function() {
            moveLeft();
        });

        navRight.click(function() {
            moveRight();
        });

        function moveRight() {
            pictureList.animate({
                "left": -pictureWidth * 2 + "px"
            }, animationTime, function() {
                pictureList.children().first().appendTo(pictureList);
                pictureList.css("left", -pictureWidth + "px");
            });
        }

        function moveLeft() {
            pictureList.animate({
                "left": 0
            }, animationTime, function() {
                pictureList.children().last().prependTo(pictureList);
                pictureList.css("left", -pictureWidth + "px");
            });
        }
    }

    function sliderSecondary() {
        var pictureWidth = $(".photo-slider-secondary .photo-slide img").width();
        var pictureList = $(".photo-slider-secondary .photo-slide ul");
        slider(pictureWidth, pictureList, $(".photo-slider-secondary .slide-left"), $(".photo-slider-secondary .slide-right"), 5000, 400);
    }
    sliderSecondary();

    function shoppingSlider() {
        var pictureWidth = $(".shopping-slider li img").width();
        var pictureList = $(".shopping-slider ul");
        slider(pictureWidth, pictureList, $(".shopping-slider-wrapper .nav-left"), $(".shopping-slider-wrapper .nav-right"), 3000, 300);
    }
    shoppingSlider();

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
    }, function() {
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

    /*
        taobao-life部分的hover效果
     */
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
        if (!$(this).hasClass("hidden")) {
            $(".taobao-life .phone-bill").addClass("border-show");
        }
    });

    /*
        close-button的点击关闭效果
     */
    $(".taobao-life #phone-bill-info .close-button").click(function() {
        $("#phone-bill-info").addClass("hidden");
        $(".taobao-life .phone-bill").removeClass("change-height");
        $(".taobao-life .phone-bill i").removeClass("hover-show");
        $(".taobao-life .phone-bill").removeClass("border-show");
    });
    /*
      taobao-life部分slider的切换
     */
    $("#phone-bill-info .tab a").hover(function() {
        $(this).addClass("link-border").siblings().removeClass("link-border");
        var offset = $(this).index() * (-288) + "px";
        $("#phone-bill-info .content-wrapper").css("left", offset);
    });

    /*
        鼠标点击回到顶部
     */
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 700) {//显示回到顶部按钮
            $(".nav-tools .nav-top").removeClass("hidden");
        } else {
            $(".nav-tools .nav-top").addClass("hidden");
        };

        if ($(window).scrollTop() >= 200) {
            $(".header-search-wrapper").removeClass("disappear border-hidden").animate({
                height: "48px"
            }, 500);
        } else {
            $(".header-search-wrapper").addClass("disappear").css("height", 0);
        }
    })

    $(".nav-tools .nav-top").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
    });

    $(".header-search .box-tab-wrapper").hover(function() {
        $(".header-search .box-tab-wrapper").addClass("change-height");
    }, function() {
        $(".header-search .box-tab-wrapper").removeClass("change-height");
    });

    $(".header-search .box-tab div").click(function() {
        $(this).prependTo($(this).parent());
        $(this).addClass("selected").siblings().removeClass("selected");
        if ($(this).hasClass("tab-treasure")) {
            $(".header-search .input-wrapper .treasure-info").removeClass("hidden").siblings("span").addClass("hidden");
            $(".header-search .search-box .box").removeClass("tmall-border-color");
            $(".header-search .search-button").removeClass("tmall-button-color");
        } else if ($(this).hasClass("tab-tmall")) {
            $(".header-search .input-wrapper .tmall-info").removeClass("hidden").siblings("span").addClass("hidden");
            $(".header-search .search-box .box").addClass("tmall-border-color");
            $(".header-search .search-button").addClass("tmall-button-color");
        } else {
            $(".header-search .input-wrapper span").addClass("hidden");
            $(".header-search .search-box .box").removeClass("tmall-border-color");
            $(".header-search .search-button").removeClass("tmall-button-color");
        }
    });
});
