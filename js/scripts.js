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
            speed: 900
        }), addEventListener("scroll", function () {
            mr_scrollTop = window.pageYOffset
        }, !1), $(".background-image-holder").each(function () {
            var e = $(this).children("img").attr("src");
            $(this).css("background", 'url("' + e + '")'), $(this).children("img").hide(), $(this).css("background-position", "initial")
        }), setTimeout(function () {
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
        }), $(".tabs li").mouseover(function () {
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
            else console.log("Send email form detected."), "undefined" != typeof h && h !== !1 && d.text(h), u = e(f), 1 === u ? (d.fadeIn(200), setTimeout(function () {
                d.fadeOut(500)
            }, 3e3)) : (f.removeClass("attempted-submit"), d.fadeOut(200), m.html(jQuery("<div />").addClass("form-loading")).attr("disabled", "disabled"), jQuery.ajax({
                type: "POST",
                url: "mail/mail.php",
                data: f.serialize() + "&url=" + window.location.href,
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
 // hide navigation
            $(document).ready(function(){
               $("#close-top-nav").on("click", function() {
                   $(".nav-utility").hide(500);
               });
            });
            

// Simple Dropdown Menu //

$(function(){

    $("ul.dropdown li").hover(function(){
    
        $(this).addClass("hover");
        $('ul:first',this).css('visibility', 'visible');
    
    }, function(){
    
        $(this).removeClass("hover");
        $('ul:first',this).css('visibility', 'hidden');
    
    });
    
    $("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");

});



// TWEEN MAX SCRIPTS // 
/* var nav = document.getElementById("nav");
var image = document.getElementById("image");
var logo = document.getElementById("logo");
var links = document.getElementById("links");
var icons = document.getElementById("icons");

TweenMax.from(nav, 2, {y:-200});
TweenMax.staggerFrom(".links", 2, {x:2000, delay: 1},1);
TweenMax.from(logo, 2, {x: -200, rotation: -360, scale: 0.9, delay: 2});
TweenMax.from(icons, 2, {scale:0, delay:4});
TweenMax.from(image, 3, {opacity:0, delay: 1}); */