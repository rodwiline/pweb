function updateNav() {
    var e = mr_scrollTop;
    if (0 >= e) return mr_navFixed && (mr_navFixed = !1, mr_nav.removeClass("fixed")), mr_outOfSight && (mr_outOfSight = !1, mr_nav.removeClass("outOfSight")), void(mr_navScrolled && (mr_navScrolled = !1, mr_nav.removeClass("scrolled")));
    if (e > mr_navOuterHeight + mr_fixedAt) {
        if (!mr_navScrolled) return mr_nav.addClass("scrolled"), void(mr_navScrolled = !0)
    } else e > mr_navOuterHeight ? (mr_navFixed || (mr_nav.addClass("fixed"), mr_navFixed = !0), e > mr_navOuterHeight + 10 ? mr_outOfSight || (mr_nav.addClass("outOfSight"), mr_outOfSight = !0) : mr_outOfSight && (mr_outOfSight = !1, mr_nav.removeClass("outOfSight"))) : (mr_navFixed && (mr_navFixed = !1, mr_nav.removeClass("fixed")), mr_outOfSight && (mr_outOfSight = !1, mr_nav.removeClass("outOfSight"))), mr_navScrolled && (mr_navScrolled = !1, mr_nav.removeClass("scrolled"))
}

function capitaliseFirstLetter(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}

function initializeMasonry() {
    $(".masonry").each(function () {
        var e = $(this).get(0),
            t = new Masonry(e, {
                itemSelector: ".masonry-item"
            });
        t.on("layoutComplete", function () {
            mr_firstSectionHeight = $(".main-container section:nth-of-type(1)").outerHeight(!0), $(".filters.floating").length && (setupFloatingProjectFilters(), updateFloatingFilters(), window.addEventListener("scroll", updateFloatingFilters, !1)), $(".masonry").addClass("fadeIn"), $(".masonry-loader").addClass("fadeOut"), $(".masonryFlyIn").length && masonryFlyIn()
        }), t.layout()
    })
}

function masonryFlyIn() {
    var e = $(".masonryFlyIn .masonry-item"),
        t = 0;
    e.each(function () {
        var e = $(this);
        setTimeout(function () {
            e.addClass("fadeIn")
        }, t), t += 170
    })
}

function setupFloatingProjectFilters() {
    mr_floatingProjectSections = [], $(".filters.floating").closest("section").each(function () {
        var e = $(this);
        mr_floatingProjectSections.push({
            section: e.get(0),
            outerHeight: e.outerHeight(),
            elemTop: e.offset().top,
            elemBottom: e.offset().top + e.outerHeight(),
            filters: e.find(".filters.floating"),
            filersHeight: e.find(".filters.floating").outerHeight(!0)
        })
    })
}

function updateFloatingFilters() {
    for (var e = mr_floatingProjectSections.length; e--;) {
        var t = mr_floatingProjectSections[e];
        t.elemTop < mr_scrollTop && "undefined" == typeof window.mr_variant ? (t.filters.css({
            position: "fixed",
            top: "16px",
            bottom: "auto"
        }), mr_navScrolled && t.filters.css({
            transform: "translate3d(-50%,48px,0)"
        }), mr_scrollTop > t.elemBottom - 70 && (t.filters.css({
            position: "absolute",
            bottom: "16px",
            top: "auto"
        }), t.filters.css({
            transform: "translate3d(-50%,0,0)"
        }))) : t.filters.css({
            position: "absolute",
            transform: "translate3d(-50%,0,0)"
        })
    }
}

function prepareSignup(e) {
    var t, a = jQuery("<form />"),
        i = jQuery("<div />");
    return jQuery(i).html(e.attr("srcdoc")), t = jQuery(i).find("form").attr("action"), /list-manage\.com/.test(t) && (t = t.replace("/post?", "/post-json?") + "&c=?", "//" == t.substr(0, 2) && (t = "http:" + t)), /createsend\.com/.test(t) && (t += "?callback=?"), a.attr("action", t), jQuery(i).find("input, select, textarea").not('input[type="submit"]').each(function () {
        jQuery(this).clone().appendTo(a)
    }), a
}
var mr_firstSectionHeight, mr_nav, mr_fixedAt, mr_navOuterHeight, mr_navScrolled = !1,
    mr_navFixed = !1,
    mr_outOfSight = !1,
    mr_floatingProjectSections, mr_scrollTop = 0;
$(document).ready(function () {
    "use strict";

    function e(e) {
        var t, a;
        return $(e).find('.validate-required[type="checkbox"]').each(function () {
            $('[name="' + $(this).attr("name") + '"]:checked').length || (a = 1, t = $(this).attr("name").replace("[]", ""), e.find(".form-error").text("Please tick at least one " + t + " box."))
        }), $(e).find(".validate-required").each(function () {
            "" === $(this).val() ? ($(this).addClass("field-error"), a = 1) : $(this).removeClass("field-error")
        }), $(e).find(".validate-email").each(function () {
            /(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()) ? $(this).removeClass("field-error") : ($(this).addClass("field-error"), a = 1)
        }), e.find(".field-error").length || e.find(".form-error").fadeOut(1e3), a
    }

    function t(e) {
        return decodeURIComponent((new RegExp("[?|&]" + e + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [, ""])[1].replace(/\+/g, "%20")) || null
    }
    if ($(".inner-link").each(function () {
            var e = $(this).attr("href");
            "#" !== e.charAt(0) && $(this).removeClass("inner-link")
        }), $(".inner-link").length && $(".inner-link").smoothScroll({
            offset: -55,
            speed: 800
        }), addEventListener("scroll", function () {
            mr_scrollTop = window.pageYOffset
        }, !1),             $(".background-image-holder").each(function () {
                var e = $(this).children("img").attr("src");
                var f = $(this).children('#imageHQ').attr("src");

                $(this).css("background", 'url("' + e + '")'), $(this).children("img").hide(), $(this).css("background-position", "initial");
                $(window).on('load', function() {
                    $(this).css("background", 'url("' + f + '")'), $(this).children("img").hide(), $(this).css("background-position", "initial");
                    $('.bg-LQ').addClass('hide');  //removes Low Quality BG
                    $('.bg-HQ').removeClass('hide');  // shows the high quality bg on window load
                });
        }),

            setTimeout(function () {
            $(".background-image-holder").each(function () {
                $(this).addClass("fadeIn")
            })
            }, 200), $('[data-toggle="tooltip"]').tooltip(), $("ul[data-bullet]").each(function () {
            var e = $(this).attr("data-bullet");
            $(this).find("li").prepend('<i class="' + e + '"></i>')
        }), $(".progress-bar").each(function () {
            $(this).css("width", $(this).attr("data-progress") + "%")
        }), $("nav").hasClass("fixed") || $("nav").hasClass("absolute") ? $("body").addClass("nav-is-overlay") : ($(".nav-container").css("min-height", $("nav").outerHeight(!0)), $(window).resize(function () {
            $(".nav-container").css("min-height", $("nav").outerHeight(!0))
        }), $(window).width() > 768 && $(".parallax:nth-of-type(1) .background-image-holder").css("top", -$("nav").outerHeight(!0)), $(window).width() > 768 && $("section.fullscreen:nth-of-type(1)").css("height", $(window).height() - $("nav").outerHeight(!0))), $("nav").hasClass("bg-dark") && $(".nav-container").addClass("bg-dark"), mr_nav = $("body .nav-container nav:first"), mr_navOuterHeight = $("body .nav-container nav:first").outerHeight(), mr_fixedAt = "undefined" != typeof mr_nav.attr("data-fixed-at") ? parseInt(mr_nav.attr("data-fixed-at").replace("px", "")) : parseInt($("section:nth-of-type(1)").outerHeight()), window.addEventListener("scroll", updateNav, !1), $(".menu > li > ul").each(function () {
            var e = $(this).offset(),
                t = e.left + $(this).outerWidth(!0);
            if (t > $(window).width() && !$(this).hasClass("mega-menu")) $(this).addClass("make-right");
            else if (t > $(window).width() && $(this).hasClass("mega-menu")) {
                var a = $(window).width() - e.left,
                    i = $(this).outerWidth(!0) - a;
                $(this).css("margin-left", -i)
            }
        }), $(".mobile-toggle").click(function () {
            $(".nav-bar").toggleClass("nav-open"), $(this).toggleClass("active")
        }), $(".menu li").click(function (e) {
            e || (e = window.event), e.stopPropagation(), $(this).find("ul").length ? $(this).toggleClass("toggle-sub") : $(this).parents(".toggle-sub").removeClass("toggle-sub")
        }), $(".menu li a").click(function () {
            $(this).hasClass("inner-link") && $(this).closest(".nav-bar").removeClass("nav-open")
        }), $(".module.widget-handle").click(function () {
            $(this).toggleClass("toggle-widget-handle")
        }), $(".search-widget-handle .search-form input").click(function (e) {
            e || (e = window.event), e.stopPropagation()
        }), $(".offscreen-toggle").length ? $("body").addClass("has-offscreen-nav") : $("body").removeClass("has-offscreen-nav"), $(".offscreen-toggle").click(function () {
            $(".main-container").toggleClass("reveal-nav"), $("nav").toggleClass("reveal-nav"), $(".offscreen-container").toggleClass("reveal-nav")
        }), $(".main-container").click(function () {
            $(this).hasClass("reveal-nav") && ($(this).removeClass("reveal-nav"), $(".offscreen-container").removeClass("reveal-nav"), $("nav").removeClass("reveal-nav"))
        }), $(".offscreen-container a").click(function () {
            $(".offscreen-container").removeClass("reveal-nav"), $(".main-container").removeClass("reveal-nav"), $("nav").removeClass("reveal-nav")
        }), $(".projects").each(function () {
            var e = "";
            $(this).find(".project").each(function () {
                var t = $(this).attr("data-filter").split(",");
                t.forEach(function (t) {
                    -1 == e.indexOf(t) && (e += '<li data-filter="' + t + '">' + capitaliseFirstLetter(t) + "</li>")
                }), $(this).closest(".projects").find("ul.filters").empty().append('<li data-filter="all" class="active">All</li>').append(e)
            })
        }), $(".filters li").click(function () {
            var e = $(this).attr("data-filter");
            $(this).closest(".filters").find("li").removeClass("active"), $(this).addClass("active"), $(this).closest(".projects").find(".project").each(function () {
                var t = $(this).attr("data-filter"); - 1 == t.indexOf(e) ? $(this).addClass("inactive") : $(this).removeClass("inactive")
            }), "all" == e && $(this).closest(".projects").find(".project").removeClass("inactive")
        }), jQuery(".tweets-feed").each(function (e) {
            jQuery(this).attr("id", "tweets-" + e)
        }).each(function (e) {
            function t(t) {
                for (var a = t.length, i = 0, o = document.getElementById("tweets-" + e), r = '<ul class="slides">'; a > i;) r += "<li>" + t[i] + "</li>", i++;
                return r += "</ul>", o.innerHTML = r, r
            }
            var a = {
                id: jQuery("#tweets-" + e).attr("data-widget-id"),
                domId: "",
                maxTweets: jQuery("#tweets-" + e).attr("data-amount"),
                enableLinks: !0,
                showUser: !0,
                showTime: !0,
                dateFunction: "",
                showRetweet: !1,
                customCallback: t
            };
            twitterFetcher.fetch(a)
        }), $(".instafeed").length && (jQuery.fn.spectragram.accessData = {
            accessToken: "1406933036.fedaafa.feec3d50f5194ce5b705a1f11a107e0b",
            clientID: "fedaafacf224447e8aef74872d3820a1"
        }, $(".instafeed").each(function () {
            var e = $(this).attr("data-user-name");
            $(this).children("ul").spectragram("getUserFeed", {
                query: e,
                max: 12
            })
        })), $(".flickr-feed").length && $(".flickr-feed").each(function () {
            var e = $(this).attr("data-user-id"),
                t = $(this).attr("data-album-id");
            $(this).flickrPhotoStream({
                id: e,
                setId: t,
                container: '<li class="masonry-item" />'
            }), setTimeout(function () {
                initializeMasonry(), window.dispatchEvent(new Event("resize"))
            }, 1e3)
        }), $(".slider-all-controls, .slider-paging-controls, .slider-arrow-controls, .slider-thumb-controls, .logo-carousel").length && ($(".slider-all-controls").flexslider({
            start: function (e) {
                e.find(".slides li:first-child").find(".fs-vid-background video").length && e.find(".slides li:first-child").find(".fs-vid-background video").get(0).play()
            },
            after: function (e) {
                e.find(".fs-vid-background video").length && (e.find("li:not(.flex-active-slide)").find(".fs-vid-background video").length && e.find("li:not(.flex-active-slide)").find(".fs-vid-background video").get(0).pause(), e.find(".flex-active-slide").find(".fs-vid-background video").length && e.find(".flex-active-slide").find(".fs-vid-background video").get(0).play())
            }
        }), $(".slider-paging-controls").flexslider({
            animation: "slide",
            directionNav: !1
        }), $(".slider-arrow-controls").flexslider({
            controlNav: !1
        }), $(".slider-thumb-controls .slides li").each(function () {
            var e = $(this).find("img").attr("src");
            $(this).attr("data-thumb", e)
        }), $(".slider-thumb-controls").flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: !0
        }), $(".logo-carousel").flexslider({
            minItems: 1,
            maxItems: 4,
            move: 1,
            itemWidth: 200,
            itemMargin: 0,
            animation: "slide",
            slideshow: !0,
            slideshowSpeed: 3e3,
            directionNav: !1,
            controlNav: !1
        })), $(".lightbox-grid li a").each(function () {
            var e = $(this).closest(".lightbox-grid").attr("data-gallery-title");
            $(this).attr("data-lightbox", e)
        }), $("iframe[data-provider]").each(function () {
            var e = jQuery(this).attr("data-provider"),
                t = jQuery(this).attr("data-video-id"),
                a = jQuery(this).attr("data-autoplay"),
                i = "";
            "vimeo" == e ? (i = "http://player.vimeo.com/video/" + t + "?badge=0&title=0&byline=0&title=0&autoplay=" + a, $(this).attr("data-src", i)) : "youtube" == e ? (i = "https://www.youtube.com/embed/" + t + "?showinfo=0&autoplay=" + a, $(this).attr("data-src", i)) : console.log("Only Vimeo and Youtube videos are supported at this time")
        }), jQuery(".foundry_modal[modal-link]").remove(), $(".foundry_modal").length && !jQuery(".modal-screen").length) {
        jQuery("<div />").addClass("modal-screen").appendTo("body")
    }
    if (jQuery(".foundry_modal").click(function () {
            jQuery(this).addClass("modal-acknowledged")
        }), jQuery(document).on("wheel mousewheel scroll", ".foundry_modal, .modal-screen", function (e) {
            return $(this).get(0).scrollTop += e.originalEvent.deltaY, !1
        }), $(".modal-container:not([modal-link])").each(function (e) {
            if (jQuery(this).find("iframe[src]").length) {
                jQuery(this).find(".foundry_modal").addClass("iframe-modal");
                var t = jQuery(this).find("iframe");
                t.attr("data-src", t.attr("src")), t.attr("src", "")
            }
            jQuery(this).find(".btn-modal").attr("modal-link", e), jQuery('.foundry_modal[modal-link="' + e + '"]').length || jQuery(this).find(".foundry_modal").clone().appendTo("body").attr("modal-link", e).prepend(jQuery('<i class="ti-close close-modal">'))
        }), $(".btn-modal").unbind("click").click(function () {
            var e = jQuery('.foundry_modal[modal-link="' + jQuery(this).attr("modal-link") + '"]'),
                t = "";
            if (jQuery(".modal-screen").toggleClass("reveal-modal"), e.find("iframe").length) {
                if ("1" === e.find("iframe").attr("data-autoplay")) var t = "&autoplay=1";
                e.find("iframe").attr("src", e.find("iframe").attr("data-src") + t)
            }
            return e.toggleClass("reveal-modal"), !1
        }), $(".foundry_modal[data-time-delay]").each(function () {
            var e = $(this),
                t = e.attr("data-time-delay");
            e.prepend($('<i class="ti-close close-modal">')), "undefined" != typeof e.attr("data-cookie") ? mr_cookies.hasItem(e.attr("data-cookie")) || setTimeout(function () {
                e.addClass("reveal-modal"), $(".modal-screen").addClass("reveal-modal")
            }, t) : setTimeout(function () {
                e.addClass("reveal-modal"), $(".modal-screen").addClass("reveal-modal")
            }, t)
        }), $(".foundry_modal[data-show-on-exit]").each(function () {
            var e = $(this),
                t = $(e.attr("data-show-on-exit"));
            $(t).length && (e.prepend($('<i class="ti-close close-modal">')), $(document).on("mouseleave", t, function () {
                $("body .reveal-modal").length || ("undefined" != typeof e.attr("data-cookie") ? mr_cookies.hasItem(e.attr("data-cookie")) || (e.addClass("reveal-modal"), $(".modal-screen").addClass("reveal-modal")) : (e.addClass("reveal-modal"), $(".modal-screen").addClass("reveal-modal")))
            }))
        }), $(".foundry_modal[data-hide-after]").each(function () {
            var e = $(this),
                t = e.attr("data-hide-after");
            "undefined" != typeof e.attr("data-cookie") ? mr_cookies.hasItem(e.attr("data-cookie")) || setTimeout(function () {
                e.hasClass("modal-acknowledged") || (e.removeClass("reveal-modal"), $(".modal-screen").removeClass("reveal-modal"))
            }, t) : setTimeout(function () {
                e.hasClass("modal-acknowledged") || (e.removeClass("reveal-modal"), $(".modal-screen").removeClass("reveal-modal"))
            }, t)
        }), jQuery(".close-modal:not(.modal-strip .close-modal)").unbind("click").click(function () {
            var e = jQuery(this).closest(".foundry_modal");
            e.toggleClass("reveal-modal"), "undefined" != typeof e.attr("data-cookie") && mr_cookies.setItem(e.attr("data-cookie"), "true", 1 / 0), e.find("iframe").length && e.find("iframe").attr("src", ""), jQuery(".modal-screen").removeClass("reveal-modal")
        }), jQuery(".modal-screen").unbind("click").click(function () {
            jQuery(".foundry_modal.reveal-modal").find("iframe").length && jQuery(".foundry_modal.reveal-modal").find("iframe").attr("src", ""), jQuery(".foundry_modal.reveal-modal").toggleClass("reveal-modal"), jQuery(this).toggleClass("reveal-modal")
        }), jQuery(document).keyup(function (e) {
            27 == e.keyCode && (jQuery(".foundry_modal").find("iframe").length && jQuery(".foundry_modal").find("iframe").attr("src", ""), jQuery(".foundry_modal").removeClass("reveal-modal"), jQuery(".modal-screen").removeClass("reveal-modal"))
        }), jQuery(".modal-strip").each(function () {
            jQuery(this).find(".close-modal").length || jQuery(this).append(jQuery('<i class="ti-close close-modal">'));
            var e = jQuery(this);
            "undefined" != typeof e.attr("data-cookie") ? mr_cookies.hasItem(e.attr("data-cookie")) || setTimeout(function () {
                e.addClass("reveal-modal")
            }, 1e3) : setTimeout(function () {
                e.addClass("reveal-modal")
            }, 1e3)
        }), jQuery(".modal-strip .close-modal").click(function () {
            var e = jQuery(this).closest(".modal-strip");
            return "undefined" != typeof e.attr("data-cookie") && mr_cookies.setItem(e.attr("data-cookie"), "true", 1 / 0), jQuery(this).closest(".modal-strip").removeClass("reveal-modal"), !1
        }), jQuery(".close-iframe").click(function () {
            jQuery(this).closest(".modal-video").removeClass("reveal-modal"), jQuery(this).siblings("iframe").attr("src", ""), jQuery(this).siblings("video").get(0).pause()
        }), $(".checkbox-option").on("click", function () {
            $(this).toggleClass("checked");
            var e = $(this).find("input");
            e.prop("checked") === !1 ? e.prop("checked", !0) : e.prop("checked", !1)
        }), $(".radio-option").click(function () {
            var e = $(this).hasClass("checked"),
                t = $(this).find("input").attr("name");
            e || ($('input[name="' + t + '"]').parent().removeClass("checked"), $(this).addClass("checked"), $(this).find("input").prop("checked", !0))
        }), $(".accordion li").click(function () {
            $(this).closest(".accordion").hasClass("one-open") ? ($(this).closest(".accordion").find("li").removeClass("active"), $(this).addClass("active")) : $(this).toggleClass("active"), "undefined" != typeof window.mr_parallax && setTimeout(mr_parallax.windowLoad, 500)
        }), $(".tabbed-content").each(function () {
            $(this).append('<ul class="content"></ul>')
        }), $(".tabs li").each(function () {
            var e = $(this),
                t = "";
            e.is(".tabs>li:first-child") && (t = ' class="active"');
            var a = e.find(".tab-content").detach().wrap("<li" + t + "></li>").parent();
            e.closest(".tabbed-content").find(".content").append(a)
        }), $(".tabs li").click(function () {
            $(this).closest(".tabs").find("li").removeClass("active"), $(this).addClass("active");
            var e = $(this).index() + 1;
            $(this).closest(".tabbed-content").find(".content>li").removeClass("active"), $(this).closest(".tabbed-content").find(".content>li:nth-of-type(" + e + ")").addClass("active")
        }), $("section").closest("body").find(".local-video-container .play-button").click(function () {
            $(this).siblings(".background-image-holder").removeClass("fadeIn"), $(this).siblings(".background-image-holder").css("z-index", -1), $(this).css("opacity", 0), $(this).siblings("video").get(0).play()
        }), $("section").closest("body").find(".player").each(function () {
            var e = $(this).closest("section");
            e.find(".container").addClass("fadeOut");
            var t = $(this).attr("data-video-id"),
                a = $(this).attr("data-start-at");
            $(this).attr("data-property", "{videoURL:'http://youtu.be/" + t + "',containment:'self',autoPlay:true, mute:true, startAt:" + a + ", opacity:1, showControls:false}")
        }), $(".player").length && $(".player").each(function () {
            var e = $(this).closest("section"),
                t = e.find(".player");
            t.YTPlayer(), t.on("YTPStart", function (t) {
                e.find(".container").removeClass("fadeOut"), e.find(".masonry-loader").addClass("fadeOut")
            })
        }), $(".map-holder").click(function () {
            $(this).addClass("interact")
        }), $(".map-holder").length && $(window).scroll(function () {
            $(".map-holder.interact").length && $(".map-holder.interact").removeClass("interact")
        }), $(".countdown").length && $(".countdown").each(function () {
            var e = $(this).attr("data-date");
            $(this).countdown(e, function (e) {
                $(this).text(e.strftime("%D days %H:%M:%S"))
            })
        }), $("form.form-email, form.form-newsletter").submit(function (t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1;
            var a, i, o, r, n, s, l, d, c, f = $(this).closest("form.form-email, form.form-newsletter"),
                m = f.find('button[type="submit"]'),
                u = 0,
                h = f.attr("original-error");
            if (i = $(f).find("iframe.mail-list-form"), f.find(".form-error, .form-success").remove(), m.attr("data-text", m.text()), f.append('<div class="form-error" style="display: none;">' + f.attr("data-error") + "</div>"), f.append('<div class="form-success" style="display: none;">' + f.attr("data-success") + "</div>"), d = f.find(".form-error"), c = f.find(".form-success"), f.addClass("attempted-submit"), i.length && "undefined" != typeof i.attr("srcdoc") && "" !== i.attr("srcdoc"))
                if (console.log("Mail list form signup detected."), "undefined" != typeof h && h !== !1 && d.html(h), o = $(f).find(".signup-email-field").val(), r = $(f).find(".signup-name-field").val(), n = $(f).find("input.signup-first-name-field").length ? $(f).find("input.signup-first-name-field").val() : $(f).find(".signup-name-field").val(), s = $(f).find(".signup-last-name-field").val(), 1 !== e(f)) {
                    a = prepareSignup(i), a.find("#mce-EMAIL, #fieldEmail").val(o), a.find("#mce-LNAME, #fieldLastName").val(s), a.find("#mce-FNAME, #fieldFirstName").val(n), a.find("#mce-NAME, #fieldName").val(r), f.removeClass("attempted-submit"), d.fadeOut(200), m.html(jQuery("<div />").addClass("form-loading")).attr("disabled", "disabled");
                    try {
                        $.ajax({
                            url: a.attr("action"),
                            crossDomain: !0,
                            data: a.serialize(),
                            method: "GET",
                            cache: !1,
                            dataType: "json",
                            contentType: "application/json; charset=utf-8",
                            success: function (e) {
                                "success" != e.result && 200 != e.Status ? (d.attr("original-error", d.text()), d.html(e.msg).fadeIn(1e3), c.fadeOut(1e3), m.html(m.attr("data-text")).removeAttr("disabled")) : (m.html(m.attr("data-text")).removeAttr("disabled"), l = f.attr("success-redirect"), "undefined" != typeof l && l !== !1 && "" !== l && (window.location = l), f.find('input[type="text"]').val(""), f.find("textarea").val(""), c.fadeIn(1e3), d.fadeOut(1e3), setTimeout(function () {
                                    c.fadeOut(500)
                                }, 5e3))
                            }
                        })
                    } catch (v) {
                        d.attr("original-error", d.text()), d.html(v.message).fadeIn(1e3), c.fadeOut(1e3), setTimeout(function () {
                            d.fadeOut(500)
                        }, 5e3), m.html(m.attr("data-text")).removeAttr("disabled")
                    }
                } else d.fadeIn(1e3), setTimeout(function () {
                    d.fadeOut(500)
                }, 5e3);
            else console.log("Send email form detected") , "undefined" != typeof h && h !== !1 && d.text(h), u = e(f), 1 === u ? (d.fadeIn(200), setTimeout(function () {
                d.fadeOut(2000)
            }, 10000)) : (f.removeClass("attempted-submit"), d.fadeOut(200), m.html(jQuery("<div />").addClass("form-loading")).attr("disabled", "disabled"), jQuery.ajax({
                type: "POST",
                url: "mail/mail.php",
                data: f.serialize() + "&url=" + window.location.replace('https://www.wiline.com/thank-you.php'),
                success: function (e) {
                    m.html(m.attr("data-text")).removeAttr("disabled"), $.isNumeric(e) ? parseInt(e) > 0 && (l = f.attr("success-redirect"), "undefined" != typeof l && l !== !1 && "" !== l && (window.location = l), f.find('input[type="text"]').val(""), f.find("textarea").val(""), f.find(".form-success").fadeIn(1e3), d.fadeOut(1e3), setTimeout(function () {
                        c.fadeOut(500)
                    }, 5e3)) : (d.attr("original-error", d.text()), d.text(e).fadeIn(1e3), c.fadeOut(1e3))
                },
                error: function (e, t, a) {
                    d.attr("original-error", d.text()), d.text(a).fadeIn(1e3), c.fadeOut(1e3), m.html(m.attr("data-text")).removeAttr("disabled")
                }
            }));
            return !1
        }), $(".validate-required, .validate-email").on("blur change", function () {
            e($(this).closest("form"))
        }), $("form").each(function () {
            $(this).find(".form-error").length && $(this).attr("original-error", $(this).find(".form-error").text())
        }), t("ref") && $("form.form-email").append('<input type="text" name="referrer" class="hidden" value="' + t("ref") + '"/>'), /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera) && $("section").removeClass("parallax"), $(".disqus-comments").length) {
        var a = $(".disqus-comments").attr("data-shortname");
        ! function () {
            var e = document.createElement("script");
            e.type = "text/javascript", e.async = !0, e.src = "//" + a + ".disqus.com/embed.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(e)
        }()
    }
    if (document.querySelector("[data-maps-api-key]") && !document.querySelector(".gMapsAPI") && $("[data-maps-api-key]").length) {
        var i = document.createElement("script"),
            o = $("[data-maps-api-key]:first").attr("data-maps-api-key");
        i.type = "text/javascript", i.src = "https://maps.googleapis.com/maps/api/js?key=" + o + "&callback=initializeMaps", i.className = "gMapsAPI", document.body.appendChild(i)
    }
}), $(window).load(function () {
    "use strict";
    setTimeout(initializeMasonry, 1e3);
    var e = setInterval(function () {
        return $(".tweets-slider").find("li.flex-active-slide").length ? void clearInterval(e) : void($(".tweets-slider").length && $(".tweets-slider").flexslider({
            directionNav: !1,
            controlNav: !1
        }))
    }, 500);
    mr_firstSectionHeight = $(".main-container section:nth-of-type(1)").outerHeight(!0)
}), window.initializeMaps = function () {
    "undefined" != typeof google && "undefined" != typeof google.maps && $(".map-canvas[data-maps-api-key]").each(function () {
        var e, t, a, i = this,
            o = "undefined" != typeof $(this).attr("data-map-style") ? $(this).attr("data-map-style") : !1,
            r = JSON.parse(o) || [{
                featureType: "landscape",
                stylers: [{
                    saturation: -100
                }, {
                    lightness: 65
                }, {
                    visibility: "on"
                }]
            }, {
                featureType: "poi",
                stylers: [{
                    saturation: -100
                }, {
                    lightness: 51
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "road.highway",
                stylers: [{
                    saturation: -100
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "road.arterial",
                stylers: [{
                    saturation: -100
                }, {
                    lightness: 30
                }, {
                    visibility: "on"
                }]
            }, {
                featureType: "road.local",
                stylers: [{
                    saturation: -100
                }, {
                    lightness: 40
                }, {
                    visibility: "on"
                }]
            }, {
                featureType: "transit",
                stylers: [{
                    saturation: -100
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "administrative.province",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "water",
                elementType: "labels",
                stylers: [{
                    visibility: "on"
                }, {
                    lightness: -25
                }, {
                    saturation: -100
                }]
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    hue: "#ffff00"
                }, {
                    lightness: -25
                }, {
                    saturation: -97
                }]
            }],
            n = "undefined" != typeof $(this).attr("data-map-zoom") && "" !== $(this).attr("data-map-zoom") ? 1 * $(this).attr("data-map-zoom") : 17,
            s = "undefined" != typeof $(this).attr("data-latlong") ? $(this).attr("data-latlong") : !1,
            l = s ? 1 * s.substr(0, s.indexOf(",")) : !1,
            d = s ? 1 * s.substr(s.indexOf(",") + 1) : !1,
            c = new google.maps.Geocoder,
            f = "undefined" != typeof $(this).attr("data-address") ? $(this).attr("data-address").split(";") : [""],
            m = "We Are Here",
            u = $(document).width() > 766 ? !0 : !1,
            h = {
                draggable: u,
                scrollwheel: !1,
                zoom: n,
                disableDefaultUI: !0,
                styles: r
            };
        void 0 != $(this).attr("data-marker-title") && "" != $(this).attr("data-marker-title") && (m = $(this).attr("data-marker-title")), void 0 != f && "" != f[0] ? c.geocode({
            address: f[0].replace("[nomarker]", "")
        }, function (e, t) {
            if (t == google.maps.GeocoderStatus.OK) {
                var o = new google.maps.Map(i, h);
                o.setCenter(e[0].geometry.location), f.forEach(function (e) {
                    var t;
                    if (a = {
                            url: void 0 == window.mr_variant ? "img/mapmarker.png" : "../img/mapmarker.png",
                            size: new google.maps.Size(50, 50),
                            scaledSize: new google.maps.Size(50, 50)
                        }, /(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)/.test(e)) var i = e.split(","),
                        r = new google.maps.Marker({
                            position: {
                                lat: 1 * i[0],
                                lng: 1 * i[1]
                            },
                            map: o,
                            icon: a,
                            title: m,
                            optimised: !1
                        });
                    else e.indexOf("[nomarker]") < 0 && (t = new google.maps.Geocoder, t.geocode({
                        address: e.replace("[nomarker]", "")
                    }, function (e, t) {
                        t == google.maps.GeocoderStatus.OK && (r = new google.maps.Marker({
                            map: o,
                            icon: a,
                            title: m,
                            position: e[0].geometry.location,
                            optimised: !1
                        }))
                    }))
                })
            } else console.log("There was a problem geocoding the address.")
        }) : void 0 != l && "" != l && 0 != l && void 0 != d && "" != d && 0 != d && (h.center = {
            lat: l,
            lng: d
        }, e = new google.maps.Map(i, h), t = new google.maps.Marker({
            position: {
                lat: l,
                lng: d
            },
            map: e,
            icon: a,
            title: m
        }))
    })
}, initializeMaps();
var mr_cookies = {
    getItem: function (e) {
        return e ? decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : null
    },
    setItem: function (e, t, a, i, o, r) {
        if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) return !1;
        var n = "";
        if (a) switch (a.constructor) {
        case Number:
            n = a === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + a;
            break;
        case String:
            n = "; expires=" + a;
            break;
        case Date:
            n = "; expires=" + a.toUTCString()
        }
        return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + n + (o ? "; domain=" + o : "") + (i ? "; path=" + i : "") + (r ? "; secure" : ""), !0
    },
    removeItem: function (e, t, a) {
        return this.hasItem(e) ? (document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (a ? "; domain=" + a : "") + (t ? "; path=" + t : ""), !0) : !1
    },
    hasItem: function (e) {
        return e ? new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie) : !1
    },
    keys: function () {
        for (var e = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), t = e.length, a = 0; t > a; a++) e[a] = decodeURIComponent(e[a]);
        return e
    }
};

// Simple Dropdown Menu //
/*
$(function(){

    $("ul.sdropdown li").hover(function(){
    
        $(this).addClass("hover");
        $('ul:first',this).css('visibility', 'visible');
    
    }, function(){
    
        $(this).removeClass("hover");
        $('ul:first',this).css('visibility', 'hidden');
    
    });
    
    $("ul.sdropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");

});*/

/* PARALAX SCRIPT */

function mr_parallax() {
    "use strict";

    function a(a) {
        for (var b = 0; b < a.length; b++)
            if ("undefined" != typeof document.body.style[a[b]]) return a[b];
        return null
    }

    function b() {
        var a, b = 0;
        return j() ? (b = jQuery(".viu").find("nav:first").outerHeight(!0), a = jQuery(".viu").find("nav:first").css("position"), ("absolute" === a || "fixed" === a) && (b = 0)) : b = jQuery(document).find("nav:first").outerHeight(!0), b
    }

    function c(a, b, c, d) {
        var e = a - 1;
        return e /= d, a /= d, e--, a--, c * (a * a * a * a * a + 1) + b - (c * (e * e * e * e * e + 1) + b)
    }

    function d() {
        if (F) {
            for (var a = k.length, b = f(); a--;) e(k[a], b, o, p);
            F = !1
        }
        s && (D += -v * c(u, 0, A, C), (D > B || -B > D) && (E.scrollBy(0, D), D = 0), u++, u > C && (u = 0, s = !1, t = !0, v = 0, w = 0, x = 0, D = 0)), l(d)
    }

    function e(a, b, c, d) {
        var e = j();
        e ? b + q - r > a.elemTop && b - r < a.elemBottom && (a.isFirstSection ? a.imageHolder.style[n] = c + b / 2 + d : a.imageHolder.style[n] = c + (b - a.elemTop - r) / 2 + d) : b + q > a.elemTop && b < a.elemBottom && (a.isFirstSection ? a.imageHolder.style[n] = c + b / 2 + d : a.imageHolder.style[n] = c + (b + q - a.elemTop) / 2 + d)
    }

    function f() {
        return E != window ? E.scrollTop : 0 === document.documentElement.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop
    }

    function g() {
        F = !0
    }

    function h(a) {
        G.mr_scrollAssist === !0 && (a.preventDefault && a.preventDefault(), v = a.notRealWheel ? -a.deltaY / 4 : 1 == a.deltaMode ? -a.deltaY / 3 : 100 === Math.abs(a.deltaY) ? -a.deltaY / 120 : -a.deltaY / 40, v = -y > v ? -y : v, v = v > y ? y : v, s = !0, u = z)
    }

    function i(a) {
        var b = {};
        return a && "[object Function]" === b.toString.call(a)
    }

    function j() {
        return "undefined" == typeof window.mr_variant ? !1 : !0
    }
    var k, l = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
        m = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"],
        n = a(m),
        o = "translate3d(0,",
        p = "px,0)",
        q = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
        r = 0,
        s = !1,
        t = !0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 2,
        z = 4,
        A = 300,
        B = 1,
        C = 30,
        D = 0,
        E = window,
        F = (j(), !1),
        G = this;
    this.mr_scrollAssist = $("body").hasClass("scroll-assist") ? !0 : !1, jQuery(document).ready(function () {
        G.documentReady()
    }), jQuery(window).load(function () {
        G.windowLoad()
    }), this.getScrollingState = function () {
        return u > 0 ? !0 : !1
    }, this.documentReady = function (a) {
        return q = Math.max(document.documentElement.clientHeight, window.innerHeight || 0), jQuery("body").hasClass("parallax-2d") && (o = "translate(0,", p = "px)"), /Android|iPad|iPhone|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera) ? jQuery(".parallax").removeClass("parallax") : l && (G.profileParallaxElements(), G.setupParallax()), i(a) ? void a() : void 0
    }, this.windowLoad = function () {
        q = Math.max(document.documentElement.clientHeight, window.innerHeight || 0), r = b(), window.mr_parallax.profileParallaxElements()
    }, this.setupParallax = function () {
        j() && (E = jQuery(".viu").get(0), "undefined" != typeof E && (E.scrollBy = function (a, b) {
            this.scrollTop += b, this.scrollLeft += a
        })), "undefined" != typeof E && (E.addEventListener("scroll", g, !1), window.addWheelListener(E, h, !1), window.addEventListener("resize", function () {
            q = Math.max(document.documentElement.clientHeight, window.innerHeight || 0), r = b(), G.profileParallaxElements()
        }, !1), d())
    }, this.profileParallaxElements = function () {
        k = [], r = b();
        var a = j(),
            c = ".parallax > .background-image-holder, .parallax ul.slides > li > .background-image-holder";
        a && (c = ".viu .parallax > .background-image-holder, .viu .parallax ul.slides > li > .background-image-holder"), jQuery(c).each(function (b) {
            var c = jQuery(this).closest(".parallax"),
                d = a ? c.position().top : c.offset().top;
            k.push({
                section: c.get(0),
                outerHeight: c.outerHeight(),
                elemTop: d,
                elemBottom: d + c.outerHeight(),
                isFirstSection: c.is(":nth-of-type(1)") ? !0 : !1,
                imageHolder: jQuery(this).get(0)
            }), a ? a && (c.is(":nth-of-type(1)") ? G.mr_setTranslate3DTransform(jQuery(this).get(0), 0 === f() ? 0 : f() / 2) : G.mr_setTranslate3DTransform(jQuery(this).get(0), (f() - d - r) / 2)) : c.is(":nth-of-type(1)") ? G.mr_setTranslate3DTransform(jQuery(this).get(0), 0 === f() ? 0 : f() / 2) : G.mr_setTranslate3DTransform(jQuery(this).get(0), (f() + q - d) / 2)
        })
    }, this.mr_setTranslate3DTransform = function (a, b) {
        a.style[n] = o + b + p
    }
}
window.mr_parallax = new mr_parallax,
    function (a, b) {
        function c(b, c, g, h) {
            b[d](f + c, "wheel" == e ? g : function (b) {
                !b && (b = a.event);
                var c = {
                    originalEvent: b,
                    target: b.target || b.srcElement,
                    type: "wheel",
                    deltaMode: "MozMousePixelScroll" == b.type ? 0 : 1,
                    deltaX: 0,
                    deltaZ: 0,
                    notRealWheel: 1,
                    preventDefault: function () {
                        b.preventDefault ? b.preventDefault() : b.returnValue = !1
                    }
                };
                return "mousewheel" == e ? (c.deltaY = -1 / 40 * b.wheelDelta, b.wheelDeltaX && (c.deltaX = -1 / 40 * b.wheelDeltaX)) : c.deltaY = b.detail / 3, g(c)
            }, h || !1)
        }
        var d, e, f = "";
        a.addEventListener ? d = "addEventListener" : (d = "attachEvent", f = "on"), e = "onwheel" in b.createElement("div") ? "wheel" : "undefined" != typeof b.onmousewheel ? "mousewheel" : "DOMMouseScroll", a.addWheelListener = function (a, b, d) {
            c(a, e, b, d), "DOMMouseScroll" == e && c(a, "MozMousePixelScroll", b, d)
        }
    }(window, document);

/*!
 * Smooth Scroll - v1.4.10 - 2013-03-02
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2013 Karl Swedberg
 * Licensed MIT (https://github.com/kswedberg/jquery-smooth-scroll/blob/master/LICENSE-MIT)
 */
! function (l) {
    function t(l) {
        return l.replace(/(:|\.)/g, "\\$1")
    }
    var e = "1.4.10",
        o = {
            exclude: [],
            excludeWithin: [],
            offset: 0,
            direction: "top",
            scrollElement: null,
            scrollTarget: null,
            beforeScroll: function () {},
            afterScroll: function () {},
            easing: "swing",
            speed: 400,
            autoCoefficent: 2
        },
        r = function (t) {
            var e = [],
                o = !1,
                r = t.dir && "left" == t.dir ? "scrollLeft" : "scrollTop";
            return this.each(function () {
                if (this != document && this != window) {
                    var t = l(this);
                    t[r]() > 0 ? e.push(this) : (t[r](1), o = t[r]() > 0, o && e.push(this), t[r](0))
                }
            }), e.length || this.each(function () {
                "BODY" === this.nodeName && (e = [this])
            }), "first" === t.el && e.length > 1 && (e = [e[0]]), e
        };
    l.fn.extend({
        scrollable: function (l) {
            var t = r.call(this, {
                dir: l
            });
            return this.pushStack(t)
        },
        firstScrollable: function (l) {
            var t = r.call(this, {
                el: "first",
                dir: l
            });
            return this.pushStack(t)
        },
        smoothScroll: function (e) {
            e = e || {};
            var o = l.extend({}, l.fn.smoothScroll.defaults, e),
                r = l.smoothScroll.filterPath(location.pathname);
            return this.unbind("click.smoothscroll").bind("click.smoothscroll", function (e) {
                var n = this,
                    s = l(this),
                    c = o.exclude,
                    i = o.excludeWithin,
                    a = 0,
                    f = 0,
                    h = !0,
                    u = {},
                    d = location.hostname === n.hostname || !n.hostname,
                    m = o.scrollTarget || (l.smoothScroll.filterPath(n.pathname) || r) === r,
                    p = t(n.hash);
                if (o.scrollTarget || d && m && p) {
                    for (; h && c.length > a;) s.is(t(c[a++])) && (h = !1);
                    for (; h && i.length > f;) s.closest(i[f++]).length && (h = !1)
                } else h = !1;
                h && (e.preventDefault(), l.extend(u, o, {
                    scrollTarget: o.scrollTarget || p,
                    link: n
                }), l.smoothScroll(u))
            }), this
        }
    }), l.smoothScroll = function (t, e) {
        var o, r, n, s, c = 0,
            i = "offset",
            a = "scrollTop",
            f = {},
            h = {};
        "number" == typeof t ? (o = l.fn.smoothScroll.defaults, n = t) : (o = l.extend({}, l.fn.smoothScroll.defaults, t || {}), o.scrollElement && (i = "position", "static" == o.scrollElement.css("position") && o.scrollElement.css("position", "relative"))), o = l.extend({
            link: null
        }, o), a = "left" == o.direction ? "scrollLeft" : a, o.scrollElement ? (r = o.scrollElement, c = r[a]()) : r = l("html, body").firstScrollable(), o.beforeScroll.call(r, o), n = "number" == typeof t ? t : e || l(o.scrollTarget)[i]() && l(o.scrollTarget)[i]()[o.direction] || 0, f[a] = n + c + o.offset, s = o.speed, "auto" === s && (s = f[a] || r.scrollTop(), s /= o.autoCoefficent), h = {
            duration: s,
            easing: o.easing,
            complete: function () {
                o.afterScroll.call(o.link, o)
            }
        }, o.step && (h.step = o.step), r.length ? r.stop().animate(f, h) : o.afterScroll.call(o.link, o)
    }, l.smoothScroll.version = e, l.smoothScroll.filterPath = function (l) {
        return l.replace(/^\//, "").replace(/(index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
    }, l.fn.smoothScroll.defaults = o
}(jQuery);

$.fn.isOnScreen = function(){
var win = $(window);
var viewport = {
    top : win.scrollTop(),
    left : win.scrollLeft()
};
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

/*

    countUp.js
    by @inorganik

*/

// target = id of html element or var of previously selected html element where counting occurs
// startVal = the value you want to begin at
// endVal = the value you want to arrive at
// decimals = number of decimal places, default 0
// duration = duration of animation in seconds, default 2
// options = optional object of options (see below)

var CountUp = function(target, startVal, endVal, decimals, duration, options) {

    // make sure requestAnimationFrame and cancelAnimationFrame are defined
    // polyfill for browsers without native support
    // by Opera engineer Erik Möller
    var lastTime = 0;
    var vendors = ['webkit', 'moz', 'ms', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }

    var self = this;

     // default options
    self.options = {
        useEasing : true, // toggle easing
        useGrouping : true, // 1,000,000 vs 1000000
        separator : ',', // character to use as a separator
        decimal : '.', // character to use as a decimal
        easingFn: null, // optional custom easing closure function, default is Robert Penner's easeOutExpo
        formattingFn: null // optional custom formatting function, default is self.formatNumber below
    };
    // extend default options with passed options object
    for (var key in options) {
        if (options.hasOwnProperty(key)) {
            self.options[key] = options[key];
        }
    }
    if (self.options.separator === '') { self.options.useGrouping = false; }
    if (!self.options.prefix) self.options.prefix = '';
    if (!self.options.suffix) self.options.suffix = '';

    self.d = (typeof target === 'string') ? document.getElementById(target) : target;
    self.startVal = Number(startVal);
    self.endVal = Number(endVal);
    self.countDown = (self.startVal > self.endVal);
    self.frameVal = self.startVal;
    self.decimals = Math.max(0, decimals || 0);
    self.dec = Math.pow(10, self.decimals);
    self.duration = Number(duration) * 1000 || 2000;

    self.formatNumber = function(nStr) {
        nStr = nStr.toFixed(self.decimals);
        nStr += '';
        var x, x1, x2, rgx;
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? self.options.decimal + x[1] : '';
        rgx = /(\d+)(\d{3})/;
        if (self.options.useGrouping) {
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + self.options.separator + '$2');
            }
        }
        return self.options.prefix + x1 + x2 + self.options.suffix;
    };
    // Robert Penner's easeOutExpo
    self.easeOutExpo = function(t, b, c, d) {
        return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
    };

    self.easingFn = self.options.easingFn ? self.options.easingFn : self.easeOutExpo;
    self.formattingFn = self.options.formattingFn ? self.options.formattingFn : self.formatNumber;

    self.version = function () { return '1.7.1'; };

    // Print value to target
    self.printValue = function(value) {
        var result = self.formattingFn(value);

        if (self.d.tagName === 'INPUT') {
            this.d.value = result;
        }
        else if (self.d.tagName === 'text' || self.d.tagName === 'tspan') {
            this.d.textContent = result;
        }
        else {
            this.d.innerHTML = result;
        }
    };

    self.count = function(timestamp) {

        if (!self.startTime) { self.startTime = timestamp; }

        self.timestamp = timestamp;
        var progress = timestamp - self.startTime;
        self.remaining = self.duration - progress;

        // to ease or not to ease
        if (self.options.useEasing) {
            if (self.countDown) {
                self.frameVal = self.startVal - self.easingFn(progress, 0, self.startVal - self.endVal, self.duration);
            } else {
                self.frameVal = self.easingFn(progress, self.startVal, self.endVal - self.startVal, self.duration);
            }
        } else {
            if (self.countDown) {
                self.frameVal = self.startVal - ((self.startVal - self.endVal) * (progress / self.duration));
            } else {
                self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration);
            }
        }

        // don't go past endVal since progress can exceed duration in the last frame
        if (self.countDown) {
            self.frameVal = (self.frameVal < self.endVal) ? self.endVal : self.frameVal;
        } else {
            self.frameVal = (self.frameVal > self.endVal) ? self.endVal : self.frameVal;
        }

        // decimal
        self.frameVal = Math.round(self.frameVal*self.dec)/self.dec;

        // format and print value
        self.printValue(self.frameVal);

        // whether to continue
        if (progress < self.duration) {
            self.rAF = requestAnimationFrame(self.count);
        } else {
            if (self.callback) { self.callback(); }
        }
    };
    // start your animation
    self.start = function(callback) {
        self.callback = callback;
        self.rAF = requestAnimationFrame(self.count);
        return false;
    };
    // toggles pause/resume animation
    self.pauseResume = function() {
        if (!self.paused) {
            self.paused = true;
            cancelAnimationFrame(self.rAF);
        } else {
            self.paused = false;
            delete self.startTime;
            self.duration = self.remaining;
            self.startVal = self.frameVal;
            requestAnimationFrame(self.count);
        }
    };
    // reset to startVal so animation can be run again
    self.reset = function() {
        self.paused = false;
        delete self.startTime;
        self.startVal = startVal;
        cancelAnimationFrame(self.rAF);
        self.printValue(self.startVal);
    };
    // pass a new endVal and start animation
    self.update = function (newEndVal) {
        cancelAnimationFrame(self.rAF);
        self.paused = false;
        delete self.startTime;
        self.startVal = self.frameVal;
        self.endVal = Number(newEndVal);
        self.countDown = (self.startVal > self.endVal);
        self.rAF = requestAnimationFrame(self.count);
    };

    // format startVal on initialization
    self.printValue(self.startVal);
};


/* FLEX SLIDER SCRIPT */

!function($){$.flexslider=function(e,t){var a=$(e);a.vars=$.extend({},$.flexslider.defaults,t);var n=a.vars.namespace,i=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,s=("ontouchstart"in window||i||window.DocumentTouch&&document instanceof DocumentTouch)&&a.vars.touch,r="click touchend MSPointerUp keyup",o="",l,c="vertical"===a.vars.direction,d=a.vars.reverse,u=a.vars.itemWidth>0,v="fade"===a.vars.animation,p=""!==a.vars.asNavFor,m={},f=!0;$.data(e,"flexslider",a),m={init:function(){a.animating=!1,a.currentSlide=parseInt(a.vars.startAt?a.vars.startAt:0,10),isNaN(a.currentSlide)&&(a.currentSlide=0),a.animatingTo=a.currentSlide,a.atEnd=0===a.currentSlide||a.currentSlide===a.last,a.containerSelector=a.vars.selector.substr(0,a.vars.selector.search(" ")),a.slides=$(a.vars.selector,a),a.container=$(a.containerSelector,a),a.count=a.slides.length,a.syncExists=$(a.vars.sync).length>0,"slide"===a.vars.animation&&(a.vars.animation="swing"),a.prop=c?"top":"marginLeft",a.args={},a.manualPause=!1,a.stopped=!1,a.started=!1,a.startTimeout=null,a.transitions=!a.vars.video&&!v&&a.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(void 0!==e.style[t[n]])return a.pfx=t[n].replace("Perspective","").toLowerCase(),a.prop="-"+a.pfx+"-transform",!0;return!1}(),a.ensureAnimationEnd="",""!==a.vars.controlsContainer&&(a.controlsContainer=$(a.vars.controlsContainer).length>0&&$(a.vars.controlsContainer)),""!==a.vars.manualControls&&(a.manualControls=$(a.vars.manualControls).length>0&&$(a.vars.manualControls)),a.vars.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-.5}),a.container.empty().append(a.slides)),a.doMath(),a.setup("init"),a.vars.controlNav&&m.controlNav.setup(),a.vars.directionNav&&m.directionNav.setup(),a.vars.keyboard&&(1===$(a.containerSelector).length||a.vars.multipleKeyboard)&&$(document).bind("keyup",function(e){var t=e.keyCode;if(!a.animating&&(39===t||37===t)){var n=39===t?a.getTarget("next"):37===t?a.getTarget("prev"):!1;a.flexAnimate(n,a.vars.pauseOnAction)}}),a.vars.mousewheel&&a.bind("mousewheel",function(e,t,n,i){e.preventDefault();var s=a.getTarget(0>t?"next":"prev");a.flexAnimate(s,a.vars.pauseOnAction)}),a.vars.pausePlay&&m.pausePlay.setup(),a.vars.slideshow&&a.vars.pauseInvisible&&m.pauseInvisible.init(),a.vars.slideshow&&(a.vars.pauseOnHover&&a.hover(function(){a.manualPlay||a.manualPause||a.pause()},function(){a.manualPause||a.manualPlay||a.stopped||a.play()}),a.vars.pauseInvisible&&m.pauseInvisible.isHidden()||(a.vars.initDelay>0?a.startTimeout=setTimeout(a.play,a.vars.initDelay):a.play())),p&&m.asNav.setup(),s&&a.vars.touch&&m.touch(),(!v||v&&a.vars.smoothHeight)&&$(window).bind("resize orientationchange focus",m.resize),a.find("img").attr("draggable","false"),setTimeout(function(){a.vars.start(a)},200)},asNav:{setup:function(){a.asNav=!0,a.animatingTo=Math.floor(a.currentSlide/a.move),a.currentItem=a.currentSlide,a.slides.removeClass(n+"active-slide").eq(a.currentItem).addClass(n+"active-slide"),i?(e._slider=a,a.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=$(this),n=t.index();$(a.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(a.direction=a.currentItem<n?"next":"prev",a.flexAnimate(n,a.vars.pauseOnAction,!1,!0,!0))})})):a.slides.on(r,function(e){e.preventDefault();var t=$(this),i=t.index(),s=t.offset().left-$(a).scrollLeft();0>=s&&t.hasClass(n+"active-slide")?a.flexAnimate(a.getTarget("prev"),!0):$(a.vars.asNavFor).data("flexslider").animating||t.hasClass(n+"active-slide")||(a.direction=a.currentItem<i?"next":"prev",a.flexAnimate(i,a.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?m.controlNav.setupManual():m.controlNav.setupPaging()},setupPaging:function(){var e="thumbnails"===a.vars.controlNav?"control-thumbs":"control-paging",t=1,i,s;if(a.controlNavScaffold=$('<ol class="'+n+"control-nav "+n+e+'"></ol>'),a.pagingCount>1)for(var l=0;l<a.pagingCount;l++){if(s=a.slides.eq(l),i="thumbnails"===a.vars.controlNav?'<img src="'+s.attr("data-thumb")+'"/>':"<a>"+t+"</a>","thumbnails"===a.vars.controlNav&&!0===a.vars.thumbCaptions){var c=s.attr("data-thumbcaption");""!=c&&void 0!=c&&(i+='<span class="'+n+'caption">'+c+"</span>")}a.controlNavScaffold.append("<li>"+i+"</li>"),t++}a.controlsContainer?$(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold),m.controlNav.set(),m.controlNav.active(),a.controlNavScaffold.delegate("a, img",r,function(e){if(e.preventDefault(),""===o||o===e.type){var t=$(this),i=a.controlNav.index(t);t.hasClass(n+"active")||(a.direction=i>a.currentSlide?"next":"prev",a.flexAnimate(i,a.vars.pauseOnAction))}""===o&&(o=e.type),m.setToClearWatchedEvent()})},setupManual:function(){a.controlNav=a.manualControls,m.controlNav.active(),a.controlNav.bind(r,function(e){if(e.preventDefault(),""===o||o===e.type){var t=$(this),i=a.controlNav.index(t);t.hasClass(n+"active")||(a.direction=i>a.currentSlide?"next":"prev",a.flexAnimate(i,a.vars.pauseOnAction))}""===o&&(o=e.type),m.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===a.vars.controlNav?"img":"a";a.controlNav=$("."+n+"control-nav li "+e,a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(n+"active").eq(a.animatingTo).addClass(n+"active")},update:function(e,t){a.pagingCount>1&&"add"===e?a.controlNavScaffold.append($("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(t).closest("li").remove(),m.controlNav.set(),a.pagingCount>1&&a.pagingCount!==a.controlNav.length?a.update(t,e):m.controlNav.active()}},directionNav:{setup:function(){var e=$('<ul class="'+n+'direction-nav"><li><a class="'+n+'prev" href="#">'+a.vars.prevText+'</a></li><li><a class="'+n+'next" href="#">'+a.vars.nextText+"</a></li></ul>");a.controlsContainer?($(a.controlsContainer).append(e),a.directionNav=$("."+n+"direction-nav li a",a.controlsContainer)):(a.append(e),a.directionNav=$("."+n+"direction-nav li a",a)),m.directionNav.update(),a.directionNav.bind(r,function(e){e.preventDefault();var t;(""===o||o===e.type)&&(t=a.getTarget($(this).hasClass(n+"next")?"next":"prev"),a.flexAnimate(t,a.vars.pauseOnAction)),""===o&&(o=e.type),m.setToClearWatchedEvent()})},update:function(){var e=n+"disabled";1===a.pagingCount?a.directionNav.addClass(e).attr("tabindex","-1"):a.vars.animationLoop?a.directionNav.removeClass(e).removeAttr("tabindex"):0===a.animatingTo?a.directionNav.removeClass(e).filter("."+n+"prev").addClass(e).attr("tabindex","-1"):a.animatingTo===a.last?a.directionNav.removeClass(e).filter("."+n+"next").addClass(e).attr("tabindex","-1"):a.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=$('<div class="'+n+'pauseplay"><a></a></div>');a.controlsContainer?(a.controlsContainer.append(e),a.pausePlay=$("."+n+"pauseplay a",a.controlsContainer)):(a.append(e),a.pausePlay=$("."+n+"pauseplay a",a)),m.pausePlay.update(a.vars.slideshow?n+"pause":n+"play"),a.pausePlay.bind(r,function(e){e.preventDefault(),(""===o||o===e.type)&&($(this).hasClass(n+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())),""===o&&(o=e.type),m.setToClearWatchedEvent()})},update:function(e){"play"===e?a.pausePlay.removeClass(n+"pause").addClass(n+"play").html(a.vars.playText):a.pausePlay.removeClass(n+"play").addClass(n+"pause").html(a.vars.pauseText)}},touch:function(){function t(t){a.animating?t.preventDefault():(window.navigator.msPointerEnabled||1===t.touches.length)&&(a.pause(),g=c?a.h:a.w,S=Number(new Date),x=t.touches[0].pageX,b=t.touches[0].pageY,f=u&&d&&a.animatingTo===a.last?0:u&&d?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:u&&a.currentSlide===a.last?a.limit:u?(a.itemW+a.vars.itemMargin)*a.move*a.currentSlide:d?(a.last-a.currentSlide+a.cloneOffset)*g:(a.currentSlide+a.cloneOffset)*g,p=c?b:x,m=c?x:b,e.addEventListener("touchmove",n,!1),e.addEventListener("touchend",s,!1))}function n(e){x=e.touches[0].pageX,b=e.touches[0].pageY,h=c?p-b:p-x,y=c?Math.abs(h)<Math.abs(x-m):Math.abs(h)<Math.abs(b-m);var t=500;(!y||Number(new Date)-S>t)&&(e.preventDefault(),!v&&a.transitions&&(a.vars.animationLoop||(h/=0===a.currentSlide&&0>h||a.currentSlide===a.last&&h>0?Math.abs(h)/g+2:1),a.setProps(f+h,"setTouch")))}function s(t){if(e.removeEventListener("touchmove",n,!1),a.animatingTo===a.currentSlide&&!y&&null!==h){var i=d?-h:h,r=a.getTarget(i>0?"next":"prev");a.canAdvance(r)&&(Number(new Date)-S<550&&Math.abs(i)>50||Math.abs(i)>g/2)?a.flexAnimate(r,a.vars.pauseOnAction):v||a.flexAnimate(a.currentSlide,a.vars.pauseOnAction,!0)}e.removeEventListener("touchend",s,!1),p=null,m=null,h=null,f=null}function r(t){t.stopPropagation(),a.animating?t.preventDefault():(a.pause(),e._gesture.addPointer(t.pointerId),w=0,g=c?a.h:a.w,S=Number(new Date),f=u&&d&&a.animatingTo===a.last?0:u&&d?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:u&&a.currentSlide===a.last?a.limit:u?(a.itemW+a.vars.itemMargin)*a.move*a.currentSlide:d?(a.last-a.currentSlide+a.cloneOffset)*g:(a.currentSlide+a.cloneOffset)*g)}function o(t){t.stopPropagation();var a=t.target._slider;if(a){var n=-t.translationX,i=-t.translationY;return w+=c?i:n,h=w,y=c?Math.abs(w)<Math.abs(-n):Math.abs(w)<Math.abs(-i),t.detail===t.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){e._gesture.stop()}):void((!y||Number(new Date)-S>500)&&(t.preventDefault(),!v&&a.transitions&&(a.vars.animationLoop||(h=w/(0===a.currentSlide&&0>w||a.currentSlide===a.last&&w>0?Math.abs(w)/g+2:1)),a.setProps(f+h,"setTouch"))))}}function l(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!y&&null!==h){var a=d?-h:h,n=t.getTarget(a>0?"next":"prev");t.canAdvance(n)&&(Number(new Date)-S<550&&Math.abs(a)>50||Math.abs(a)>g/2)?t.flexAnimate(n,t.vars.pauseOnAction):v||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}p=null,m=null,h=null,f=null,w=0}}var p,m,f,g,h,S,y=!1,x=0,b=0,w=0;i?(e.style.msTouchAction="none",e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",r,!1),e._slider=a,e.addEventListener("MSGestureChange",o,!1),e.addEventListener("MSGestureEnd",l,!1)):e.addEventListener("touchstart",t,!1)},resize:function(){!a.animating&&a.is(":visible")&&(u||a.doMath(),v?m.smoothHeight():u?(a.slides.width(a.computedW),a.update(a.pagingCount),a.setProps()):c?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(a.vars.smoothHeight&&m.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(e){if(!c||v){var t=v?a:a.viewport;e?t.animate({height:a.slides.eq(a.animatingTo).height()},e):t.height(a.slides.eq(a.animatingTo).height())}},sync:function(e){var t=$(a.vars.sync).data("flexslider"),n=a.animatingTo;switch(e){case"animate":t.flexAnimate(n,a.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=$(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=m.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){m.pauseInvisible.isHidden()?a.startTimeout?clearTimeout(a.startTimeout):a.pause():a.started?a.play():a.vars.initDelay>0?setTimeout(a.play,a.vars.initDelay):a.play()})}},isHidden:function(){var e=m.pauseInvisible.getHiddenProp();return e?document[e]:!1},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(l),l=setTimeout(function(){o=""},3e3)}},a.flexAnimate=function(e,t,i,r,o){if(a.vars.animationLoop||e===a.currentSlide||(a.direction=e>a.currentSlide?"next":"prev"),p&&1===a.pagingCount&&(a.direction=a.currentItem<e?"next":"prev"),!a.animating&&(a.canAdvance(e,o)||i)&&a.is(":visible")){if(p&&r){var l=$(a.vars.asNavFor).data("flexslider");if(a.atEnd=0===e||e===a.count-1,l.flexAnimate(e,!0,!1,!0,o),a.direction=a.currentItem<e?"next":"prev",l.direction=a.direction,Math.ceil((e+1)/a.visible)-1===a.currentSlide||0===e)return a.currentItem=e,a.slides.removeClass(n+"active-slide").eq(e).addClass(n+"active-slide"),!1;a.currentItem=e,a.slides.removeClass(n+"active-slide").eq(e).addClass(n+"active-slide"),e=Math.floor(e/a.visible)}if(a.animating=!0,a.animatingTo=e,t&&a.pause(),a.vars.before(a),a.syncExists&&!o&&m.sync("animate"),a.vars.controlNav&&m.controlNav.active(),u||a.slides.removeClass(n+"active-slide").eq(e).addClass(n+"active-slide"),a.atEnd=0===e||e===a.last,a.vars.directionNav&&m.directionNav.update(),e===a.last&&(a.vars.end(a),a.vars.animationLoop||a.pause()),v)s?(a.slides.eq(a.currentSlide).css({opacity:0,zIndex:1}),a.slides.eq(e).css({opacity:1,zIndex:2}),a.wrapup(f)):(a.slides.eq(a.currentSlide).css({zIndex:1}).animate({opacity:0},a.vars.animationSpeed,a.vars.easing),a.slides.eq(e).css({zIndex:2}).animate({opacity:1},a.vars.animationSpeed,a.vars.easing,a.wrapup));else{var f=c?a.slides.filter(":first").height():a.computedW,g,h,S;u?(g=a.vars.itemMargin,S=(a.itemW+g)*a.move*a.animatingTo,h=S>a.limit&&1!==a.visible?a.limit:S):h=0===a.currentSlide&&e===a.count-1&&a.vars.animationLoop&&"next"!==a.direction?d?(a.count+a.cloneOffset)*f:0:a.currentSlide===a.last&&0===e&&a.vars.animationLoop&&"prev"!==a.direction?d?0:(a.count+1)*f:d?(a.count-1-e+a.cloneOffset)*f:(e+a.cloneOffset)*f,a.setProps(h,"",a.vars.animationSpeed),a.transitions?(a.vars.animationLoop&&a.atEnd||(a.animating=!1,a.currentSlide=a.animatingTo),a.container.unbind("webkitTransitionEnd transitionend"),a.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(a.ensureAnimationEnd),a.wrapup(f)}),clearTimeout(a.ensureAnimationEnd),a.ensureAnimationEnd=setTimeout(function(){a.wrapup(f)},a.vars.animationSpeed+100)):a.container.animate(a.args,a.vars.animationSpeed,a.vars.easing,function(){a.wrapup(f)})}a.vars.smoothHeight&&m.smoothHeight(a.vars.animationSpeed)}},a.wrapup=function(e){v||u||(0===a.currentSlide&&a.animatingTo===a.last&&a.vars.animationLoop?a.setProps(e,"jumpEnd"):a.currentSlide===a.last&&0===a.animatingTo&&a.vars.animationLoop&&a.setProps(e,"jumpStart")),a.animating=!1,a.currentSlide=a.animatingTo,a.vars.after(a)},a.animateSlides=function(){!a.animating&&f&&a.flexAnimate(a.getTarget("next"))},a.pause=function(){clearInterval(a.animatedSlides),a.animatedSlides=null,a.playing=!1,a.vars.pausePlay&&m.pausePlay.update("play"),a.syncExists&&m.sync("pause")},a.play=function(){a.playing&&clearInterval(a.animatedSlides),a.animatedSlides=a.animatedSlides||setInterval(a.animateSlides,a.vars.slideshowSpeed),a.started=a.playing=!0,a.vars.pausePlay&&m.pausePlay.update("pause"),a.syncExists&&m.sync("play")},a.stop=function(){a.pause(),a.stopped=!0},a.canAdvance=function(e,t){var n=p?a.pagingCount-1:a.last;return t?!0:p&&a.currentItem===a.count-1&&0===e&&"prev"===a.direction?!0:p&&0===a.currentItem&&e===a.pagingCount-1&&"next"!==a.direction?!1:e!==a.currentSlide||p?a.vars.animationLoop?!0:a.atEnd&&0===a.currentSlide&&e===n&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===n&&0===e&&"next"===a.direction?!1:!0:!1},a.getTarget=function(e){return a.direction=e,"next"===e?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1},a.setProps=function(e,t,n){var i=function(){var n=e?e:(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo,i=function(){if(u)return"setTouch"===t?e:d&&a.animatingTo===a.last?0:d?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:a.animatingTo===a.last?a.limit:n;switch(t){case"setTotal":return d?(a.count-1-a.currentSlide+a.cloneOffset)*e:(a.currentSlide+a.cloneOffset)*e;case"setTouch":return d?e:e;case"jumpEnd":return d?e:a.count*e;case"jumpStart":return d?a.count*e:e;default:return e}}();return-1*i+"px"}();a.transitions&&(i=c?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)",n=void 0!==n?n/1e3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",n),a.container.css("transition-duration",n)),a.args[a.prop]=i,(a.transitions||void 0===n)&&a.container.css(a.args),a.container.css("transform",i)},a.setup=function(e){if(v)a.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===e&&(s?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+a.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):0==a.vars.fadeFirstSlide?a.slides.css({opacity:0,display:"block",zIndex:1}).eq(a.currentSlide).css({zIndex:2}).css({opacity:1}):a.slides.css({opacity:0,display:"block",zIndex:1}).eq(a.currentSlide).css({zIndex:2}).animate({opacity:1},a.vars.animationSpeed,a.vars.easing)),a.vars.smoothHeight&&m.smoothHeight();else{var t,i;"init"===e&&(a.viewport=$('<div class="'+n+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=0,d&&(i=$.makeArray(a.slides).reverse(),a.slides=$(i),a.container.empty().append(a.slides))),a.vars.animationLoop&&!u&&(a.cloneCount=2,a.cloneOffset=1,"init"!==e&&a.container.find(".clone").remove(),a.container.append(m.uniqueID(a.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(m.uniqueID(a.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),a.newSlides=$(a.vars.selector,a),t=d?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset,c&&!u?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){a.newSlides.css({display:"block"}),a.doMath(),a.viewport.height(a.h),a.setProps(t*a.h,"init")},"init"===e?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(t*a.computedW,"init"),setTimeout(function(){a.doMath(),a.newSlides.css({width:a.computedW,"float":"left",display:"block"}),a.vars.smoothHeight&&m.smoothHeight()},"init"===e?100:0))}u||a.slides.removeClass(n+"active-slide").eq(a.currentSlide).addClass(n+"active-slide"),a.vars.init(a)},a.doMath=function(){var e=a.slides.first(),t=a.vars.itemMargin,n=a.vars.minItems,i=a.vars.maxItems;a.w=void 0===a.viewport?a.width():a.viewport.width(),a.h=e.height(),a.boxPadding=e.outerWidth()-e.width(),u?(a.itemT=a.vars.itemWidth+t,a.minW=n?n*a.itemT:a.w,a.maxW=i?i*a.itemT-t:a.w,a.itemW=a.minW>a.w?(a.w-t*(n-1))/n:a.maxW<a.w?(a.w-t*(i-1))/i:a.vars.itemWidth>a.w?a.w:a.vars.itemWidth,a.visible=Math.floor(a.w/a.itemW),a.move=a.vars.move>0&&a.vars.move<a.visible?a.vars.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:a.vars.itemWidth>a.w?a.itemW*(a.count-1)+t*(a.count-1):(a.itemW+t)*a.count-a.w-t):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1),a.computedW=a.itemW-a.boxPadding},a.update=function(e,t){a.doMath(),u||(e<a.currentSlide?a.currentSlide+=1:e<=a.currentSlide&&0!==e&&(a.currentSlide-=1),a.animatingTo=a.currentSlide),a.vars.controlNav&&!a.manualControls&&("add"===t&&!u||a.pagingCount>a.controlNav.length?m.controlNav.update("add"):("remove"===t&&!u||a.pagingCount<a.controlNav.length)&&(u&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),m.controlNav.update("remove",a.last))),a.vars.directionNav&&m.directionNav.update()},a.addSlide=function(e,t){var n=$(e);a.count+=1,a.last=a.count-1,c&&d?void 0!==t?a.slides.eq(a.count-t).after(n):a.container.prepend(n):void 0!==t?a.slides.eq(t).before(n):a.container.append(n),a.update(t,"add"),a.slides=$(a.vars.selector+":not(.clone)",a),a.setup(),a.vars.added(a)},a.removeSlide=function(e){var t=isNaN(e)?a.slides.index($(e)):e;a.count-=1,a.last=a.count-1,isNaN(e)?$(e,a.slides).remove():c&&d?a.slides.eq(a.last).remove():a.slides.eq(e).remove(),a.doMath(),a.update(t,"remove"),a.slides=$(a.vars.selector+":not(.clone)",a),a.setup(),a.vars.removed(a)},m.init()},$(window).blur(function(e){focused=!1}).focus(function(e){focused=!0}),$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},$.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var t=$(this),a=e.selector?e.selector:".slides > li",n=t.find(a);1===n.length&&e.allowOneSlide===!0||0===n.length?(n.fadeIn(400),e.start&&e.start(t)):void 0===t.data("flexslider")&&new $.flexslider(this,e)});var t=$(this).data("flexslider");switch(e){case"play":t.play();break;case"pause":t.pause();break;case"stop":t.stop();break;case"next":t.flexAnimate(t.getTarget("next"),!0);break;case"prev":case"previous":t.flexAnimate(t.getTarget("prev"),!0);break;default:"number"==typeof e&&t.flexAnimate(e,!0)}}}(jQuery);