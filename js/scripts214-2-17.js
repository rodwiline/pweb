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

/* Countup */
var options = {
  useEasing : true, 
  useGrouping : true, 
  separator : ',', 
  decimal : '.', 
  prefix : '', 
  suffix : '' 
};
        
    var speed = new CountUp("speed", 0, 10, 0, 4, options);
    var hours = new CountUp("hours", 0, 24, 0, 4, options);
    var days = new CountUp("days", 0, 7, 0, 4, options);
    var year = new CountUp("year", 0, 365, 0, 5, options);
    var dataCenters = new CountUp("dataCenters", 0, 12, 0, 4, options);
        
$(document).ready(function(){
    $(window).scroll(function(){
    if ($('#wilineData').isOnScreen()) {
    // The element is visible, do something
        dataCenters.start();
        speed.start();
        hours.start();
        days.start();
        year.start();
    } else {
    // The element is NOT visible, do something else
    }
    });
    });
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