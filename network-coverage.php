<!DOCTYPE html>
<?php $page = "network"; ?>
<!--[if IE 7]><html lang=en-US prefix="og: https://ogp.me/ns#"class="ie ie7"><![endif]-->
<!--[if IE 8]><html lang=en-US prefix="og: https://ogp.me/ns#"class="ie ie8"><![endif]-->
<!--[if !(IE 7) | !(IE 8) ]><!-->
<html lang=en-US prefix="og: https://ogp.me/ns#">
<!--<![endif]-->
<head>
    <meta charset="utf-8">
    <title>WiLine's Network Coverage Areas</title>
    <meta name="robots" content="noindex, nofollow" >
    <meta name="description" content="Check if your area is covered by WiLine High Speed Business Internet or contact us for more information.">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@wilinenetworks">
    <meta name="twitter:title" content="WiLine Business Internet & Phone Services">
    <meta name="twitter:description" content="High Speed Business Internet &amp; Business Phone Systems in California & Texas. Guaranteed by Industry Leading SLA. Get WiLine Today.">
    <meta name="twitter:image" content="https://www.wiline.com/img/twitter-card.jpg">
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="WiLine Network Coverage Map" />
    <meta property="og:description" content="WiLine High Speed Business Internet Coverage in California and Texas." />
    <meta property="og:url" content="https://www.wiline.com/network-coverage.php" />
    <meta property="og:site_name" content="WiLine Business Internet and Phone Services" />
    <!--[if lt IE 9]> <script src="https://html5shim.googlecode.com/svn/trunk/html5.js"></script> <![endif]-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" media="all">
    <link href="css/theme-wiline.min.css" type="text/css" rel="stylesheet" media="all">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,900|Roboto:400,700" rel="stylesheet">
    <link rel="stylesheet" href="css/themify-icons.sm.css">
    <style>.readable {background-color: #000;} .coverage-olay{position:absolute;background-color:rgba(0,0,0,.4);border:1px solid #fff;padding:10px 5px;width:230px;left:8%;top:75vh;color:#fff}.orange,.wl-blue{position:relative;width:80px;height:30px;float:right;display:inline-block;border:1px solid #fff}.orange{background-color:orange}.wl-blue{background-color:#074481} nav{background-color:#000} 
    </style>
</head><body>
<?php include 'nav.php';?>
<div class="main-container" style="height:100vh;overflow:hidden;">
    <iframe src="https://www.google.com/maps/d/embed?mid=1CtS3BY7wPgBw6CLMeEtj44RzFwM" width="100%" height="100%"></iframe>
</div>
<div class="coverage-olay row" data-aos="zoom-in" data-aos-delay="800">
    <div><span>Areas Covered:</span> <div class="wl-blue">&nbsp;</div></div><br />
    <div style="clear:both;"><span>Coming Soon:</span> <div class="orange">&nbsp;</div></div>
</div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <script src="js/aos.js" type="text/javascript"></script>
    <script src="js/scripts2.js"></script>
    <script>AOS.init({duration: 1200});
// delegate all clicks on "a" tag (links)
$(document).on("click", "a", function () {

    // get the href attribute
    var newUrl = $(this).attr("href");

    // veryfy if the new url exists or is a hash
    if (!newUrl || newUrl[0] === "#") {
        // set that hash
        location.hash = newUrl;
        return;
    }

    // now, fadeout the html (whole page)
    $("html").fadeOut(function () {
        // when the animation is complete, set the new location
        location = newUrl;
    });

    // prevent the default browser behavior.
    return false;
});

/* Preloader */
    //<![CDATA[
        $(window).load(function() { // makes sure the whole site is loaded
            $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(350).css({'overflow':'visible'});
        })
    //]]>
</script>    
</body>
</html>
