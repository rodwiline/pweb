<?php
session_start(); 
if(empty($_SESSION['check']['validAddress'])) :
header("Location: /houston.php");
exit; ?>

<?php else : ?>
<!--     <?php
 ?> -->
<?php $page = "houston"; ?>
<!--[if IE 7]><html class="ie ie7" lang="en-US" prefix="og: http://ogp.me/ns#"> <![endif]-->
<!--[if IE 8]><html class="ie ie8" lang="en-US" prefix="og: http://ogp.me/ns#"> <![endif]-->
<!--[if !(IE 7) | !(IE 8) ]><!-->
<html lang="en-US" prefix="og: http://ogp.me/ns#">
<!--<![endif]-->
<head>
    <meta name=viewport content="width=device-width, initial-scale=1.0">
    <!-- Google Tag Manager -->
    <script async>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MN2C6H');</script>
    <!-- End Google Tag Manager -->
    <title>Business Internet Packages - Houston, Texas</title>
    <link rel="canonical" href="https://www.wiline.com/signup.php">
    <meta name=robots content="index, follow">
    <meta charset=utf-8>
    <meta name=description content="Select the most suitable Business Internet Solution in Houston Texas and enjoy a full month free.">
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Internet For Business | Houston, Texas" />
    <meta property="og:description" content="Select the most suitable Business Internet Solution in Houston Texas and enjoy a full month free." />
    <meta property="og:url" content="http://www.wiline.com" />
    <meta property="og:site_name" content="WiLine Business Internet Service &amp; Office Phone Systems" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="img/wiline-144-144.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/wiline-144-144.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/wiline-72-72.png">
    <link rel="apple-touch-icon-precomposed" href="img/wiline-57-57.png">
    <meta name=viewport content="width=device-width, initial-scale=1.0">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@wilinenetworks">
    <meta name="twitter:title" content="WiLine Business Internet & Phone Services">
    <meta name="twitter:description" content="Order High Speed Business Internet in Houston, TX. Quick, Simple and Reliable.">
    <meta name="twitter:image" content="http://www.wiline.com/img/twitter-card.jpg">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" media="all">
    <link href="css/theme-wiline.min.css" type="text/css" rel="stylesheet" media="all">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,700|Roboto:400,900" rel="stylesheet">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="css/themify-icons.sm.css">
    <style>
        html {
            font-size: 3vw;
        }
        h1 {
            font-size: 1.5rem;
        }

        h3 {
            font-size:0.9rem;
        }
        .desc-target  div {
            font-size: 0.5rem;
        }
        .desc-target  div ul {
            font-size: 0.32rem;
        }
        p {
            font-size: 0.4rem;
        }
        footer p {
            font-size: 1em;
        }

        .term-target span {
            font-size: 1.1em;
        }
        .ip-target span {
            font-size: 1.1em;
        }
        .wifi-target span {
            font-size: 1.1em;
        }

        .loader {
            position: fixed;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            z-index: 9999;
            background: url('img/page-loader.gif') 50% 50% no-repeat rgb(249,249,249);
        }

        body {
            background-color: #FFF;
        }
        .small {
            font-size: 0.9em;
        }
        .hide {
            display: none;
        }
        .titles {
            font-size:3em;
            font-family:'Raleway', sans-serif;
            line-height: 1em;
            color: #074481;
        }
        div.og > span {
            color: #FF7900;
        }

        .pkg-title {
            color: #074481;
            margin-top:12px;
            margin-bottom: 20px;
        }

        .titles {
            padding: 0px 16px 0px 0px;
            margin-top:24px;
        }
        .pkg-container {
            background-color: rgba(222,222,222, 0.9);
            border: 1px solid #222;
            padding: 25px;
            border-radius: 4px;
        }

        .plan-info {
            padding: 0;
        }

        .plan-info > .col-capsule:first-child {
            margin-left:0;
            padding-left: 0;
        }

        .plan-info > .col-capsule:nth-child(3) {
            margin-right:0;
            padding-right: 0;
        }

        .extras-box {
            padding-right:0;
        }

        .summary-container .sumTitle {
            color: #fff;
        }

        .pkg-box {
            margin-top: 20px;
            background-color: white;
            padding: 24px 16px;
            border: 2px solid #333;
            z-index: 10;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
        }

        .pkg-box div>i {
            color: #074481;
        }


        .summary-container {
            background: rgba(7, 68, 129, 0.9);
            border:2px solid #efefef;
            min-height: 35vw;
            max-height: auto;
            overflow: visible;
            border-radius: 4px;
        }

        .questions {
            color: white;
            overflow: visible;
            clear: both;
        }

        questions > i {
            color: white;
        }

        .questions p.large-font {
            font-size: 1.4em;
            font-weight: 400;
        }

        .questions p.large-font a:hover {
            font-size: 1.5em;
            font-weight: 400;
            transition: 0.5s;
            color: #FF7300;
        }

        .icon-container {
            position: relative;
            min-height: 25%;
            max-height: 30%;
        }

        .total-label {
            margin-bottom:0;
            padding-bottom:0;
        }

        .total-label p {
            line-height: 2em;
            margin-bottom:0;
            padding-bottom:0;
        }

        hr.total-hr  {
            border: 0;
            height: 1px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.9));
        }


        /* Buttons */

        .btn-submit {
            font-family: 'Roboto', Helvetica, Arial, sans-serif;
            padding: 0 26px;
            height: 40px;
            min-width: 150px;
            line-height: 36px;
            font-size: 12px;
            font-weight: 700;
            border-radius: 0;
            color: #074481;
            text-align: center;
            margin-right: 8px;
            margin-bottom: 24px
        }
        .btn.btn-submit:hover {
            background-color: #074481;
            color: #fff;
            border: 2px solid white;
            transition: 0.5s;
        }

        /* Dynamic Summary */

        .sumUp {
            font-family: 'Roboto', Helvetica, sans-serif;
            font-size: 1.9em;
            font-weight: 600;
            text-align: center;
            color: FF7900;
        }


        .sumDown {
            font-family: 'Roboto', Helvetica, sans-serif;
            font-size: 1.9em;
            font-weight: 600;
            text-align: center;
            color: FF7900;
        }

        .priceSum, .priceExtras, .pricePlan {
            font-family: 'Roboto', Helvetica, sans-serif;
            font-size: 1.2em;
            font-weight: 300;
            text-align: right;
        }

        #priceSum {
            font-family: 'Roboto', Helvetica, sans-serif;
            font-size: 2.2em;
        }

        @media screen and (min-width:1200px) {
            padding-bottom: 500em;
            margin-bottom: -500em;
        }

        .ofh {
            overflow: hidden;
        }
        }

        /* Media Responsive Styles */

        @media screen and (max-width: 765px) {
            .total-hr {
                visibility: hidden;
            }
        }

        @media screen and (max-width: 990px) {
            .summary-container {
                display: block;
                clear: both;
                margin-top: 24px;
            }
            .col-capsule {
                margin: 0;
                padding: 0;
                display: flex;
            }
            .plan-info {
                margin: 0px 5px;
                padding: 0;
            }
            .more-info {
                display: block;
                clear:both;
            }
            h3 {
                font-size:2rem;
            }

        }

        @media screen and (max-width: 1280px) {
            h3 {
                font-size: 2em;
            }
            .pkg-box {
                margin-bottom: 5px;
            }

            .desc-target  div {
                font-size: 1em;
            }

            .desc-target  div ul {
                font-size: 1em;
            }
            p {
                font-size: 1.1em;
            }
            #priceSum {
                font-size: 1.5em;
            }
        }

        @media screen and (max-width: 400px) {
            h3 {
                font-size: 1.4rem;
            }
        }

        .billing-info {
            display:none;
            padding: 0;
        }

        #guarantee {
            display: none;
        }

        .term-target,
        .ip-target,
        .wifi-target,
        .date-target {
            text-align: right;
        }


        /* Form Elements */

        select {
            -webkit-appearance:none;
            -moz-appearance:none;
            appearance:none;
        }

        select > option {
            text-indent: 5px;
            padding: 10px 0px!important;
        }

        .pkg-box select {
            font-size: 16px;
            height: 40px;
            margin-bottom: 5px;
            color: #074481;
            border-radius: 5px;
            line-height: 24px;
            font-weight: 600;
            padding: 10px 0px;
            padding-left: 15px;
            background: url(img/arrow-down.png) no-repeat right #efefef; /* Arrow */
        }

        .pkg-content select {
            color: FF7900;
            background-color: #074481;
        }

        .pkg-box select::-ms-expand {
            display: none;
        }

        .pkg-box select[disabled] {
            color: #aaa;
            border: none;
            background: #efefef;
        }

        .pkg-box select > option {
            font-size: 16px;
            line-height: 24px;
            font-weight: 600;
        }

        .pkg-box select > [disabled] option {
                color: #aaa;
                 }

        #promo-code {
            border:1px solid #074481;
            border-radius: 5px;
            line-height: 32px;
            height: 40px;
        }

        .promo-pricing {
            font-size: 0.4rem;
            margin-bottom: 0;
            padding-bottom:0;
            line-height:0.5rem;
        }

        input.houston {
            font-family: 'Roboto', Helvetica, sans-serif;
            text-transform: uppercase;
            font-size: 13px;
            color: rgba(0,0,0,0.5);
            background: #eee;
            padding: 10px;
            border: 1px solid #074481;
            width: 100%;
            height: 40px;
            font-weight: 600;
            margin-bottom: 20px;
            border-radius: 0
        }

        #busContactForm select, #insContactForm select {
            height: 50px;
        }
        .control input  {
            position: absolute;
            z-index: -1;
            opacity: 0;
            border: 1px solid #074481;
        }

        /* control pseudo classes */

        .control:hover input ~ .check-box,
        .control input:focus ~ .check-box {
            background: #ccc;
        }

        .control input:checked ~ .check-box {
            background: #2aa1c0;
        }

        /* Hover state whilst checked */
        .control:hover input:not([disabled]):checked ~ .check-box,
        .control input:checked:focus ~ .check-box {
            background: #074481;
        }

        /* Check mark */
        .check-box:after {
            position: absolute;
            display: none;
            content: '';
        }

        /* Show check mark */
        .control input:checked ~ .check-box:after {
            display: block;
        }

        /* Checkbox tick */
        .control--checkbox .check-box:after {
            top: 4px;
            left: 8px;
            width: 3px;
            height: 8px;
            transform: rotate(45deg);
            border: solid #fff;
            border-width: 0 2px 2px 0;
        }

        .check-box {
            position: absolute;
            top: 6px;
            left: 3px;
            width: 20px;
            height: 20px;
            background: #e6e6e6;
            margin: 10px;
        }

        .checkbox-label {
            margin-left: 25px;
        }

        .speed, .installDate > p {
            line-height: 48px;
        }

        #installDate {
            padding-left: 15px;
            padding-right: 0;
            border: 1px solid #074481;
            border-radius: 5px;
            font-size:16px;
            color: #fff;
            background: #074481;
        }

        #installDate input {
            padding-bottom:24px;
            padding-top:24px;
        }
        
        #promo-code {
            color: white;
            background: #074481;
        }
        

        #installDate::-webkit-input-placeholder,
        #promo-code::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: #fff;
            font-size: 16px;
            background: url(img/arrow-down.png) no-repeat right #074481;
            padding-right:0;
        }
        #installDate::-moz-placeholder,
        #promo-code::-moz-placeholder{ /* Firefox 19+ */
            color: #fff;
            font-size: 16px;
            background: url(img/arrow-down.png) no-repeat right #074481;
            padding-right:0;
        }
        #installDate:-ms-input-placeholder,
        #promo-code:-ms-input-placeholder{ /* IE 10+ */
            color: #fff;
            font-size: 16px;
            background: url(img/arrow-down.png) no-repeat right #074481;
            padding-right:0;
        }
        #installDate:-moz-placeholder,
        #promo-code:-moz-placeholder{ /* Firefox 18- */
            color: #fff;
            font-size: 16px;
            background: url(img/arrow-down.png) no-repeat right #074481;
            padding-right:0;
        }


        /* Modals */

        .modal-header {
            background-color: #074481;
        }

        #modal-error {
            line-height: 28px;
        }

        button.close {
            color: #fff;
            text-shadow: 0 1px 0 #0f0f0f;
            opacity: 1;
        }

        .modal-header h4 {
            color: #fff;
        }


        /* Banner Styles */

        .banner {
            position: relative;
            display: block;
            margin: 10px auto;
            width: 55%;
            height: 60px;
            border: 1px solid #074481;
            font: normal 30px/60px 'Rye';
            text-align: center;
            color: #fff;
            background: #074481;
            border-radius: 4px;
            box-shadow: 0 0 30px rgba(7,68,129,.15) inset,
            0 6px 10px rgba(7,68,129,.15);
        }

        .banner::before,
        .banner::after {
            content: '';
            position: absolute;
            z-index: -1;
            left: -30px;
            top: -1px;
            display: block;
            width: 40px;
            height: 0px;
            border: 30px solid #074481;
            border-right: 20px solid #074481;
            border-bottom-color: #074481;
            border-left-color: transparent;
          /*  transform: rotate(-5deg);*/
        }

        .banner::after {
            left: auto;
            right: -30px;
            border-left: 20px solid #074481;
            border-right: 30px solid transparent;
            /*transform: rotate(5deg);*/
        }

        .banner {
            font-family: 'Raleway', sans-serif;
            font-weight: 200;
            font-size: 0.5rem;
        }

        @media all and (max-width: 990px) {
            .banner {
                width: 85%;
                font-size: 0.8rem;
            }
        }

    </style>

    <!--[if lt IE 9]><script src="assets/flashcanvas.js"></script><![endif]-->
    <!-- start Mixpanel --><script type="text/javascript">(function(e,a){if(!a.__SV){var b=window;try{var c,l,i,j=b.location,g=j.hash;c=function(a,b){return(l=a.match(RegExp(b+"=([^&]*)")))?l[1]:null};g&&c(g,"state")&&(i=JSON.parse(decodeURIComponent(c(g,"state"))),"mpeditor"===i.action&&(b.sessionStorage.setItem("_mpcehash",g),history.replaceState(i.desiredHash||"",e.title,j.pathname+j.search)))}catch(m){}var k,h;window.mixpanel=a;a._i=[];a.init=function(b,c,f){function e(b,a){var c=a.split(".");2==c.length&&(b=b[c[0]],a=c[1]);b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments,
            0)))}}var d=a;"undefined"!==typeof f?d=a[f]=[]:f="mixpanel";d.people=d.people||[];d.toString=function(b){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);b||(a+=" (stub)");return a};d.people.toString=function(){return d.toString(1)+".people (stub)"};k="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
            for(h=0;h<k.length;h++)e(d,k[h]);a._i.push([b,c,f])};a.__SV=1.2;b=e.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";c=e.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}})(document,window.mixpanel||[]);
        mixpanel.init("1ed3e52ee0588600652cf860cdb0435f");</script><!-- end Mixpanel -->
</head>

<body id="top"><div class="loader"></div>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MN2C6H"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<?php include 'houston/nav.php';?>
       <div class="main-container container-fluid bg-white">
          <div class="col-sm-12 mt48">
              <p class="titles text-center mb16"><span class="bold">Congratulations!</span> You're eligible for Ultra Fast Internet.
                  <br><span class="banner">Sign up now for Houston promotional pricing.</span>
          </div>
          
           <div class="col-xs-12 col-md-8 col-lg-9 mb48 p0 m0" id="selection-container">
              <div class="col-xs-12 pkg-container"> <!-- Pkg Container -->
                <!-- Start of Package Selection --> 
                <div class="col-xs-12 titles mt0">
                     <h4 class="mb0 wiline-color uppercase bold">Please select your package:</h4>
                 </div>
                 <div class="container-fluid plan-info"> <!-- main container for the package information -->
                          <div class="col-xs-12 col-md-6 col-capsule">
                              <!-- Data Package Box -->
                                  <div class="col-xs-12 pkg-box" id="package-type">
                                      <form action="">
                                       <div class="text-center icon-container m0 p0" style="max-height: 95px;">
                                           <img src="img/laptop.svg" alt="Business Internet Plan Choice" width="95px" height="auto">
                                       </div>
                                            <p class="pkg-title uppercase bold text-center">High Speed Data Plans</p>
                                                <div class="col-xs-12"> <!-- Content wrapper -->
                                                   <div class="speed"> <!-- Speed Wrapper -->
                                                       <p class="bold col-xs-12 m0 p0 text-center" style="margin:0;color:#FF7900">Step 1: Choose Data Plan:</p>
                                                            <select class="col-xs-12 pkg-select addup m0 p0" id="desc-toggle" data-target=".desc-target" style="background: url(img/arrow-down.png) no-repeat right #074481;color:#fff;">
                                                                <option value=""  data-type="0" disabled selected>Click Here to Select Your Plan</option>
                                                                <!--<option value="10G" data-type="9" data-show=".10Gbps" data-plan="Plan:">300 Mbps to 10 Gbps</option>-->
                                                                <option value="999.00" data-type="1" data-show=".1000Mbps" data-plan="1000 x 1000">1000 x 1000 Mbps</option>
                                                                <option value="749.00" data-type="2" data-show=".300Mbps" data-plan="300 x 300">300 x 300 Mbps</option>
                                                              <!--  <option value="1000" data-type="2" data-show=".200Mbps" data-plan="200 x 200">200 x 200 Mbps</option>  -->
                                                                <option value="699.00" data-type="3" data-show=".100Mbps" data-plan="100 x 100">100 x 100 Mbps</option>
                                                                <option value="449.00" data-type="4" data-show=".50Mbps" data-plan="50 x 50">50 x 50 Mbps</option>
                                                         <!--       <option value="300" data-type="5" data-show=".30Mbps" data-plan="30 x 30">30/30 Mbps</option>  -->
                                                                <option value="199.00" data-type="6" data-show=".a130" data-plan="130 x 20">130 x 20 Mbps</option>
                                                                <option value="149.00" data-type="7" data-show=".a95" data-plan="95 x 15">95 x 15 Mbps</option>
                                                                <option value="99.00" data-type="8" data-show=".a30" data-plan="30 x 10">30 x 10 Mbps</option>
                                                            </select>
                                                    </div>
                                                <div class="guarantee clearfix p0">
                                                        <p class="bold col-xs-12 col-md-6 m0 p0" id="guarantee">Guarantee:</p><p class="col-sm-4 m0 p0"></p>
                                                 </div>
                                                 <div class="installDate clearfix m0 p0">
                                                    <p class="bold col-xs-12 mb8 p0 text-center" style="line-height: 1.3em;">Requested Installation Date: <span class="small">(Optional) </span></p>
                                                        <div class="col-xs-12 m0 p0" id="install-date">
                                                            <input type="text" name="installDate" placeholder="Request Date" id="installDate" class="houston mb0">
                                                        </div>
                                                 </div>
                                            </div>
                                      </form>
                                  </div>
                          </div>
                    <!-- Extras Box -->
                         <form action="">
                            <div class="col-xs-12 col-md-6 col-capsule extras-box">
                                <div class="col-xs-12 pkg-box" id="Extras">
                                    <div class="text-center icon-container"><img src="img/cloud.svg" alt="Aditional Network Options" width="95px" height="auto"></div>
                                        <p class="pkg-title uppercase bold text-center">Aditional Options</p>
                                    <div class="pkg-content">
                                    <div class="m0 p0 hide" id="ipContainer">
                                        <p class="bold col-xs-12 m0 p0 text-center" style="color: #ff7900;">Step 2: Static IP Address:</p>
                                            <select class="col-xs-12 addup" id="ip-toggle" data-target=".ip-target">
                                               <option value="-1" data-type="0" name="first-ip" disabled selected>Click Here to Select</option>
                                                <option value="0"  data-type="1" data-show=".ip0" data-extras="No Static IPs">None</option>
                                                <option value="5.95" data-type="2" data-show=".ip1" data-extras="1 Static IPs">1 Usable</option>
                                                <option value="14.95" data-type="3" data-show=".ip5" data-extras="5 Static IPs">5 Usable</option>
                                                <option value="29.95" data-type="4" data-show=".ip13" data-extras="13 Static IPs">13 Usable</option>
                                               <!-- <option value="49.95" data-type="5" data-show=".ip29" data-extras="29 Static IPs">29 Usable</option>-->
                                            </select>
                                        </div>
                                        <div class="m0 p0 hide" id="wifiContainer">
                                        <p class="bold col-xs-12 m0 p0 text-center clearfix" style="color: #ff7900">Step 2: WiLine Managed Wifi Access Point:</p>
                                            <div class="col-xs-12 mb16 p0">
                                                <select class="wifi-router col-xs-12 addup" id="wifi-toggle" data-target=".wifi-target" style="text-transform: none;">
                                                   <option value="-1"  data-type="0" name="first-wifi" disabled selected>Click Here to Select</option>
                                                    <option value="0"  data-type="1" data-show=".routerNo" data-extras="No AP">No WiFi access point required at this time.</option>
                                                    <option value="10"  data-type="2" data-show=".routerYes" data-extras="1 WiFi AP">Yes, I'd like to order a WiFi access point for $10.00/month.</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 mt24">
                                            <p class="bold m0 p0 col-xs-12 col-md-6 clearfix pt32 mt16">Promo Code:</p>
                                            <div class="col-xs-12 col-md-6 mt16 pt16" style="padding-right:0;">
                                                <input type="text"S id="promo-code">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                  </div>
        <!-- End of Package Selection -->
        <!-- Start of Personal Information Section -->
                  <div class="col-xs-12 titles clearfix"> <!-- Installation Contact Field ID's start with capital I-->
                      <h4 class="mb0 uppercase bold wiline-color mt24 pb8">Installation Contact:</h4>
                  </div>
                  <form action="" id="insContactForm">
                      <div class="col-xs-12 pkg-box">
                          <div class="col-xs-12 col-sm-7"><input type="text" minlength="2" placeholder="Business Name" name="Ibusiness" class="validate-required" required></div>
                          <div class="col-xs-12 col-sm-5"><input type="text" placeholder="Business Type" name="Ibusiness_type"></div>
                          <div class="col-xs-4 col-sm-2 mt8 clearfix"><input type="text" placeholder="Title" name="Ititle"></div>
                          <div class="col-xs-8 col-sm-5 mt8 clearfix"><input type="text" placeholder="First Name" name="IfirstName" class="validate-required" minlength="2" required></div>
                          <div class="col-xs-12 col-sm-5 mt8 clearfix"><input type="text" placeholder="Last Name" name="ISurnameName" class="validate-required" minlength="2" required></div>
                          <div class="col-xs-12 col-sm-10"><input type="text" placeholder="Your Address" name="Iaddress" class="validate-required" minlength="6" required disabled></div>
                          <div class="col-xs-12 col-sm-2"><input type="text" placeholder="Suite" name="Isuite"></div>
                          <div class="col-xs-12 col-sm-7"><input type="email" placeholder="Your Email" name="Iemail" class="validate-required" required></div>
                          <div class="col-xs-12 col-sm-5"><input type="text" placeholder="Your Telephone" name="Iphone" class="validate-required" required></div>
                          <div class="col-xs-7"><input type="text" placeholder="Your City" name="Icity" class="validate-required" minlength="3" required disabled></div>
                          <div class="col-xs-5 col-sm-2"><input type="text" placeholder="ZIP" name="Izip" class="validate-required" minlength="1" required disabled></div>
                          <div class="col-xs-12 col-sm-3">
                              <select id="Istate" name="Istate" placeholder="state" class="validate-required" disabled>
                                  <option value="TX">Texas</option>
                                  <option value="CA">California</option>
                              </select>
                          </div>
                          <div class="col-xs-12 pt16">
                              <label class="control control--checkbox">
                                  <input type="checkbox" name="billing" value="billing" id="toggle-billing">
                                  <span class="checkbox-label">Check this box if your Billing Information is <span class="bold">different</span>.</span>
                                  <div class="check-box"></div>
                              </label>
                          </div>
                      </div>
                  </form>
                  <div class="col-xs-12 billing-info clearfix">
                      <div class="mt16 titles">
                          <h4 class="uppercase bold mb0 wiline-color">Billing Contact</h4>
                      </div>
                      <form action="" id="busContactForm">
                          <div class="col-xs-12 pkg-box">
                              <div class="col-xs-4 col-sm-2 mt16"><input type="text" placeholder="Title" name="Btitle"></div>
                              <div class="col-xs-8 col-sm-5 mt16"><input type="text" placeholder="First Name" name="BfirstName" class="validate-required" minlength="2"></div>
                              <div class="col-xs-12 col-sm-5 mt16"><input type="text" placeholder="Last Name" name="BsurName" class="validate-required" minlength="2"></div>
                              <div class="col-xs-12 col-sm-10"><input type="text" placeholder="Your Address" name="Baddress" class="validate-required" minlength="6"></div>
                              <div class="col-xs-12 col-sm-2"><input type="text" placeholder="Suite" name="Bsuite"></div>
                              <div class="col-xs-12 col-sm-7"><input type="email" placeholder="Your Email" name="Bemail" class="validate-required"></div>
                              <div class="col-xs-12 col-sm-5"><input type="text" placeholder="Your Telephone" name="Bphone" class="validate-required"></div>
                              <div class="col-xs-7"><input type="text" placeholder="Your City" name="Bcity" class="validate-required"></div>
                              <div class="col-xs-5 col-sm-2"><input type="text" placeholder="ZIP" name="Bzip" class="validate-required"></div>
                              <div class="col-xs-12 col-sm-3">
                                  <select id="Bstate" name="Bstate" placeholder="state" class="validate-required" disabled>
                                      <option value="TX">Texas</option>
                                      <option value="CA">California</option>
                                  </select>
                              </div>
                          </div>
                      </form>
                  </div>
           <!-- End of Personal Information Section -->
             <!--  <div class="col-xs-12 titles clearfix">
                    <div class="mt16">
                        <h3 class="mb0">Payment Details:</h3>
                   </div>
                </div>
                <div class="col-xs-12 pkg-box credit-card clearfix">
                    <div class="col-xs-12 col-md-7 mt16"><input type="text" placeholder="Name on Card" name="ccName"></div>
                    <div class="col-xs-6 col-md-2 col-md-offset-1 mt16"><input type="text" placeholder="Exp MM" name="expMM"></div>
                    <div class="col-xs-6 col-md-2 mt16"><input type="text" placeholder="Exp YY" name="expYY"></div>
                    <div class=" col-xs-12 col-md-7"><input type="text" placeholder="Card Number" name="ccNumber"></div>
                    <div class="col-xs-12 col-md-4 col-md-offset-1"><input type="text" placeholder="CCV" name="ccv"></div>
                </div> -->

              
            </div> <!-- End of Package Container -->
        </div> <!-- End of PKG Container Capsule -->

           
           <!-- Start of Summary Container -->
           <div class="col-xs12 col-md-4 col-lg-3 mb24" id="summary-container">
               <div class="col-xs-12 summary-container mb40">
                  <div class="col-sm-12"> <!-- Summary Container -->
                      <div class="col-sm-12 image-bg">
                            <h3 class="uppercase text-center mt24 mb16">Summary</h3>
                          <div class="col-xs-12">
                              <hr class="mt16 mb16 sum-hr">
                              <h5 class="uppercase text-center bold mb8 sumTitle">Speed</h5>
                          </div>
                              <div class="col-xs-6 m0 pt0">
                                  <p class="uppercase text-center small bold mb8">Download</p>
                              </div>
                              <div class="col-xs-6 m0 p0">
                                <p class="text-center small bold uppercase mb8">Upload</p>
                              </div>
                                  <div class="col-xs-6 desc-target sumDown">
                                      <div id="uploadSum1000" class="1000Mbps">1000 Mbps</div>
                                      <div id="uploadSum300" class="300Mbps">300 Mbps</div>
                                      <div id="uploadSum200" class="200Mbps hide">200 Mbps</div>
                                      <div id="uploadSum100" class="100Mbps hide">100 Mbps</div>
                                      <div id="uploadSum50" class="50Mbps hide">50 Mbps</div>
                                      <div id="uploadSum30" class="30Mbps hide">30 Mbps</div>
                                      <div id="uploadSumA130" class="a130 hide">130 Mbps</div>
                                      <div id="uploadSumA95" class="a95 hide">95 Mbps</div>
                                      <div id ="uploadSumA30" class="a30 hide">30 Mbps</div>
                                  </div>
                                  <div class="col-xs-6 desc-target sumUp">
                                      <div id="downloadSum1000" class="1000Mbps">1000 Mbps</div>
                                      <div id="downloadSum300" class="300Mbps">300 Mbps</div>
                                      <div id="downloadSum200" class="200Mbps hide">200 Mbps</div>
                                      <div id="downloadSum100" class="100Mbps hide">100 Mbps</div>
                                      <div id="downloadSum50" class="50Mbps hide">50 Mbps</div>
                                      <div id="downloadSum30" class="30Mbps hide">30 Mbps</div>
                                      <div id="downloadSumA130" class="a130 hide">20 Mbps</div>
                                      <div id="downloadSumA95" class="a95 hide">15 Mbps</div>
                                      <div id="downloadSumA30" class="a30 hide">10 Mbps</div>
                                  </div>
                                <div class="col-xs-12">
                                    <hr class="mt16 mb16 sum-hr">
                                    <h5 class="uppercase text-center bold mb8 sumTitle">Plan Details</h5>
                                </div>
                                     <div id="extras-pkg col-xs-12">
                                         <div class="row" id="sumTerm">
                                             <div class="col-xs-8 m0 p0">
                                                 <p class="bold mt24">Term:</p>
                                             </div>
                                             <div class="col-xs-4 m0 p0">
                                                 <div class="extrasList term-target og mt24">
                                                     <span class="term36">36 Months</span>
                                                     <span class="term24 hide">24 Months</span>
                                                     <span class="term12 hide">12 Months</span>
                                                     <span class="monthly hide">Montly</span>
                                                 </div>
                                             </div>
                                         </div>
                                        <div class="row hide" id="sumIps">
                                            <div class="col-xs-8 m0 p0 clearfix">
                                                 <p class="bold">Static IP's:</p>
                                            </div>
                                            <div class="col-xs-4 m0 p0 ip-target og">
                                                <span class="ip0">No</span>
                                                <span class="ip1 hide">1 Static</span>
                                                <span class="ip5 hide">5 Static</span>
                                                <span class="ip13 hide">13 Static</span>
                                              <!--  <span class="ip29 hide">29 Static</span>-->
                                            </div>
                                        </div>
                                        <div class="row hide" id="sumWifi">
                                             <div class="col-xs-8 m0 p0"><p class="bold">WiFi Access Point:</p></div>
                                             <div class="m0 p0 wifi-target col-xs-4 og">
                                                 <span class="routerNo" id="routerNo">None</span>
                                                 <span class="routerYes hide" id="routerYes">1 Router</span>
                                             </div>
                                         </div>
                                         <div class="row" id="sumDate">
                                             <div class="col-xs-8 m0 p0"><p class="bold">Date Reqst.:</p></div>
                                             <div class="m0 p0 date-target col-xs-4 og">
                                                 <span class="" id="dateVal">N/A</span>
                                             </div>
                                         </div>
                                      </div>
<!--                                      <hr class="mt16 mb16 sum-hr">
                                      <h5 class="uppercase text-center bold mb8 sumTitle">Description</h5>-->
                                          <div class="desc-target m0 p0">
                                              <div class="1000Mbps m0 p0">
                                                  <ul class="mb0">
                                                      <li>- Business Dedicated Internet Access</li>
                                                      <li>- 1000Mbps Download Speeds</li>
                                                      <li>- 1000Mbps Upload Speeds</li>
                                                      <li>- SLA Guarantee</li>
                                                  </ul>
                                              </div>
                                                <div class="300Mbps m0 p0">
                                                    <ul class="mb0">
                                                        <li>- Business Dedicated Internet Access</li>
                                                        <li>- 300Mbps Download Speeds</li>
                                                        <li>- 300Mbps Upload Speeds</li>
                                                        <li>- SLA Guarantee</li>
                                                    </ul>
                                                </div>
<!--                                                <div class="200Mbps m0 p0">
                                                    <ul class="mb0">
                                                        <li>- Business Dedicated Internet Access</li>
                                                        <li>- 200Mbps Upload and Download Speeds</li>
                                                        <li>- SLA Guarantee</li>
                                                    </ul>
                                                </div>-->
                                                <div class="100Mbps m0 p0">
                                                    <ul class="mb0">
                                                        <li>- Business Dedicated Internet Access</li>
                                                        <li>- 100Mbps Download Speeds</li>
                                                        <li>- 100Mbps Upload Speeds</li>
                                                        <li>- SLA Guarantee</li>
                                                    </ul>
                                                </div>
                                                <div class="50Mbps m0 p0">
                                                    <ul class="mb0">
                                                        <li>- Business Dedicated Internet Access</li>
                                                        <li>- 50Mbps Download Speeds</li>
                                                        <li>- 50Mbps Upload Speeds</li>
                                                        <li>- SLA Guarantee</li>
                                                    </ul>
                                                </div>
                                                <div class="a130 m0 p0">
                                                    <ul class="mb0">
                                                        <li>- Business Dedicated Internet Access</li>
                                                        <li>- 130Mbps Download Speed</li>
                                                        <li>- 20Mbps Upload Speed</li>
                                                    </ul>
                                                </div>
                                                <div class="a95 m0 p0">
                                                    <ul class="mb0">
                                                        <li>- Business Dedicated Internet Access</li>
                                                        <li>- 95Mbps Download Speed</li>
                                                        <li>- 15Mbps Upload Speed</li>
                                                    </ul>
                                                </div>
                                                <div class="a30 m0 p0">
                                                    <ul class="mb0">
                                                        <li>- Business Dedicated Internet Access</li>
                                                        <li>- 30Mbps Download Speed</li>
                                                        <li>- 10Mbps Upload Speed</li>
                                                    </ul>
                                                </div>
                                            </div>
                                <div class="col-xs-12 prices">
                                    <hr class="mt16 mb16 sum-hr">
                                    <h5 class="uppercase text-center bold mb16 sumTitle">Monthly Fee</h5>

                                   <div class="row" id="planRow">
                                        <div class="col-xs-12 col-sm-4 m0 p0"><span id="planDesc">Plan:</span></div>
                                        <div class="col-xs-12 col-sm-7 col-sm-offset-1 m0 p0">
                                            <div class="pricePlan right m0 p0">
                                                <span>$</span>
                                                <span id="pricePlan"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row hide" id="extrasRow">
                                        <div class="col-xs-12 col-sm-4 m0 p0"><span id="extrasDesc">Add-Ons:</span></div>
                                        <div class="col-xs-12 col-sm-7 col-sm-offset-1 m0 p0">
                                            <div class="priceExtras right m0 p0">
                                                <span>$</span>
                                                <span id="priceExtras"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt16 total-container" id="totalRow">
                                        <div class="col-xs-12 col-sm-4 m0 p0 total-label"><p class="mt24">Total:</p></div>
                                        <div class="col-xs-12 col-sm-7 col-sm-offset-1 m0 p0">
                                            <hr class="total-hr">
                                            <div class="priceSum right m0 p0">
                                                <span>$</span>
                                                <span id="priceSum"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="questions col-xs-12 p0 mb16">
                                   <hr class="mt16 mb16 sum-hr">
                                    <h5 class="uppercase text-center bold mb8 sumTitle">Terms</h5>
                                        <div class="col-xs-12">
                                            <label class="control control--checkbox">
                                                <input type="checkbox" name="agreement" value="agreement" id="agreement" class="col-xs-2">
                                                <span  class="checkbox-label col-xs-12 small text-justify">By clicking this box, you acknowledge that you have read, understood and accepted <a href="https://www.wiline.com/assets/WiLine_Service_Agreement_Terms_and_Conditions.pdf" style="color:orange;" target="_blank">WiLine's Terms of Service</a>. Prices subject to confirmation of service availability.</span>
                                                <div   class="check-box" style="margin-top:0px;"></div>
                                            </label>
                                        </div>
                                </div>
                          <div class="pull-right">
                              <a href="javascript:void(0)"  onclick="customerSignedUp()" class="btn btn-submit mt16 pb40" title="">Place Order</a>
                          </div>
                          <div class="row mt16"><hr class="sum-hr"></div>
                          <div class="questions text-center mt16">
                              <i class="fa fa-4x fa-question"></i>
                              <h4 class="uppercase bold sumTitle">Questions</h4>
                              <div class="col-xs-10 col-xs-offset-1 m0 p0">
                                  <a href="order-now.php" class="btn btn-sm btn-submit" style="padding: 0px 10px;">Contact Form</a>
                              </div>
                              <div class="col-xs-10 col-xs-offset-1 m0 p0">
                                  <a href="tel://8884945463" class="btn btn-sm btn-submit">Call Us</a>
                              </div>
                              <div class="col-xs-10 col-xs-offset-1 m0 p0">
                                  <a href="javascript:void(Tawk_API.toggle())" class="btn btn-sm btn-submit">Live Chat</a>
                              </div>
                              <div class="col-xs-12">
                                  <p class="large-font mb0 pb8 bold">1-888-4WILINE</p>
                                  <p class="large-font mt0 p0">(888-494-5463)</p>
                              </div>
                          </div>
                      </div>
                  </div>
               </div>
           </div>
       </div>
<!-- Modal Warnings -->

<!-- Modal -->
<div id="warningModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">WiLine Networks, Inc.</h4>
            </div>
            <div class="modal-body">
                <img src="img/wiline-business-internet-logo.png" alt="WiLine Business Internet for Houston, Texas" style="display: block; margin: 10 auto;" class="pb24">
                <p id="modal-error"></p>
            </div>
            <div class="modal-footer">
                <a href="tel://8884945463" class="btn btn-white mb0">Call Us</a>
                <a href="javascript:void(Tawk_API.toggle())" class="btn btn-white mb0"> Live Chat</a>
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>

    </div>
</div>
</body>
<?php include 'houston/footer-min.html';?>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
<script src="js/jquery.validate.min.js" type="text/javascript"></script>
<script src="js/jquery.matchHeight-min.js" type="text/javascript"></script>

        <script type="text/javascript">

            // Loader
            $(function() {
                $(window).load(function () {
                    $(".loader").fadeOut("slow");
                });
            });

            // Match DIV Heights

            $(function() {
                $('.col-capsule').matchHeight();
                $('.pkg-box').matchHeight();
            });

            // Calendar - Install Date Function

            $( function() {
                $( "#installDate" ).datepicker({
                    minDate: 3, maxDate: "+3M +0D",
                    onSelect: function() {
                        $('#dateVal').text( $(this).val());
                    }
                });


                function isMobile() {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                }
                if (!isMobile()) {
                    $('#summary-container').insertBefore('#selection-container'); // Change DIV Sequence
                }

                $( "#desc-toggle" ).change(function() {
                    var plan = $(this).find("option:selected").data('type');
                    var ip = $('#ip-toggle');
                    var wifi = $('#wifi-toggle');
                    var select = 0;
                    if((plan >= 1) && (plan < 6)){
                            select = 1;
                    }
                    if(plan == 9){
                        select = plan;
                    }
                    if((plan >= 6) && (plan < 9) ){
                        select = 2;
                    }

                    switch (select) {
                        case 1: 
                            $('#wifiContainer').addClass('hide');
                            $('#ipContainer').fadeIn(800).removeClass('hide');
                            $('#sumWifi').fadeOut(800).addClass('hide');
                            $('#sumIps').fadeIn(800).removeClass('hide');
                            break;
                        case 2: 
                            $('#ipContainer').addClass('hide');
                            $('#wifiContainer').fadeIn(800).removeClass('hide');
                            $('#sumWifi').fadeIn(800).removeClass('hide');
                            $('#sumIps').fadeOut(800).addClass('hide');
                            break;
                        case 9: 
                            $('#ipContainer').addClass('hide');
                            $('#wifiContainer').addClass('hide');
                            $('#sumWifi').fadeOut(800).addClass('hide');
                            $('#sumIps').fadeOut(800).addClass('hide');
                            $('#warningModal').modal('show'); //triggers modal pop-up
                             $('#modal-error').html('Higher Speeds? We can deliver. \<a href\="order-now.php"\> Email us</a\> or call us at \<a href\="tel:18884945463"\>1-888-4WILINE\</a\> (1-888-494-5463).\<br\>\<br\>Thank You.');
                            break;

                    }

            } );
                 } );

           //submit action
            function customerSignedUp(){
                //svemir
                var speed = $("option:selected", $("#desc-toggle")).data('type');
                var requestedDate = $("#installDate").val();
                var promoCode = $("#promo-code").val();
                var ipAddress = $("option:selected", $("#ip-toggle")).data('type');
                var wifiRouter = $("option:selected", $("#wifi-toggle")).data('type');

                var businessName = $( "input[name*='Ibusiness']" ).val();
                var businessType = $( "input[name*='Ibusiness_type']" ).val();
                var businessTitle = $( "input[name*='Ititle']" ).val();
                var businessCustName = $( "input[name*='IfirstName']" ).val();
                var businessCustSurName = $( "input[name*='ISurnameName']" ).val();
                var businessAddr1 = $( "input[name*='Iaddress']" ).val();
                var businessEmail = $( "input[name*='Iemail']" ).val();
                var businessSuite = $( "input[name*='Isuite']" ).val();
                var businessPhone = $( "input[name*='Iphone']" ).val();
                var businessCity = $( "input[name*='Icity']" ).val();
                var businessZip = $( "input[name*='Izip']" ).val();
                var businessState = $("#Istate").val();

              
          
                 if ($('#toggle-billing').is(':checked')) {
                 var businessTitleBilling = $( "input[name*='Btitle']" ).val();
                var businessCustNameBilling = $( "input[name*='BfirstName']" ).val();
                var businessCustSurNameBilling = $( "input[name*='BsurName']" ).val();
                var businessAddr1Billing = $( "input[name*='Baddress']" ).val();
                var businessEmailBilling = $( "input[name*='Bemail']" ).val();
                var businessSuiteBilling = $( "input[name*='Bsuite']" ).val();
                var businessPhoneBilling = $( "input[name*='Bphone']" ).val();
                var businessCityBilling = $( "input[name*='Bcity']" ).val();
                var businessZipBilling = $( "input[name*='Bzip']" ).val();
                var businessStateBilling = $("#Bstate").val()
                }else{
                var businessTitleBilling = businessTitle; 
                var businessCustNameBilling = businessCustName;
                var businessCustSurNameBilling = businessCustSurName;
                var businessAddr1Billing = businessAddr1;
                var businessEmailBilling = businessEmail;
                var businessSuiteBilling = businessSuite;
                var businessPhoneBilling = businessPhone;
                var businessCityBilling = businessCity;
                var businessZipBilling = businessZip;
                var businessStateBilling = businessState;  
                }
    

   if ($('#agreement').is(':checked')) {
console.log(ipAddress);
$.post( "/wui/wui.php?signup=1", {  price:$("#priceSum").text(),speed:speed,requestedDate:requestedDate,promoCode:promoCode,ipAddress:ipAddress,wifiRouter:wifiRouter,
                    businessName:businessName,businessType:businessType,businessCustName:businessCustName,businessCustSurName:businessCustSurName,
                    businessAddr1:businessAddr1,businessEmail:businessEmail,businessSuite:businessSuite,businessPhone:businessPhone,businessCity:businessCity,
                    businessZip:businessZip,businessState:businessState,businessTitleBilling:businessTitleBilling,businessTitle:businessTitle,businessCustNameBilling:businessCustNameBilling,businessCustSurNameBilling:businessCustSurNameBilling,businessAddr1Billing:businessAddr1Billing,businessEmailBilling:businessEmailBilling,businessSuiteBilling:businessSuiteBilling,
                     businessPhoneBilling:businessPhoneBilling,businessCityBilling:businessCityBilling,businessZipBilling:businessZipBilling,businessStateBilling:businessStateBilling}).done(function( data ) {
                        var data = jQuery.parseJSON(data);
                        if (!data.page) {
                            $('#warningModal').modal('show');
                            $('#modal-error').empty();
                            var modal_msg = "Please note that the following fields are required:<br><br>"

                            for (var  i = 0; i < data.length; i++) {
                                        var field = data[i];
                                        var isNeeded = true;
                                        //console.log(!$('#agreement').is(':checked'));
                                        if(!$('#toggle-billing').is(':checked') && (field=="businessEmailBilling" || field == "businessCustSurNameBilling" || field == "businessTitleBilling" || field == "businessCustNameBilling" || field == "businessAddr1Billing" || field == "businessSuiteBilling" || field == "businessPhoneBilling" || field == "businessCityBilling" || field == "businessZipBilling" || field == "businessStateBilling")){
                                          //console.log("here");
                                              isNeeded  = false;
                                        }

                                        switch(field){
                                            case "speed":
                                                field = "Speed";
                                                break;
                                            case "requestedDate":
                                                field = "Requested Date";
                                                break;
                                            case "ipAddress":
                                                field = "Static IP Addresses";
                                                break;
                                            case "wifiRouter":
                                                field = "WiLine Managed WiFi Access Point";
                                                break;
                                            case "businessName":
                                                field = "Business Name";
                                                break;
                                            case "businessCustName":
                                                field = "Customer Name";
                                                break;
                                            case "businessCustSurName":
                                                field = "Customer Surname";
                                                break;
                                            case "businessAddr1":
                                                field = "Business Address";
                                                break;
                                            case "businessEmail":
                                                field = "Your Email Address";
                                                break;
                                            case "businessPhone":
                                                field = "Your Phone Number";
                                                break;
                                            case "businessCity":
                                                field = "Your City";
                                                break;
                                            case "businessZip":
                                                field = "Your ZIP Code";
                                                break;
                                            case "businessCustNameBilling":
                                                field = "Billing Contact Name";
                                                break;
                                            case "businessAddr1Billing":
                                                field = "Billing Address";
                                                break;
                                            case "businessEmailBilling":
                                                field = "Billing Email Address";
                                                break;
                                            case "businessCustSurNameBilling":
                                                field = "Billing Contact Surname";
                                                break;
                                            case "businessPhoneBilling":
                                                field = "Billing Contact Phone Number";
                                                break;
                                            case "businessCityBilling":
                                                field = "Billing Contact City";
                                                break;
                                            case "businessZipBilling":
                                                field = "Billing Contact ZIP Code";
                                                break;
                                            case "emailFailed":
                                                field = "There was an issue with the email process. Please \<a href\='order-now.php'\> contact WiLine\</a\> (1-888-494-5463) to confirm your submission.\<br\>\<br\> Thank you.";
                                                break;
                                            case "priceMissmatch":
                                                field = "The price displayed doesn't match the price for the option selected. \<br\> Please refresh the page and try again.\<br\>\<br\>Thank You";
                                                break;
                                            case "dbIssue":
                                                field = "There has been an error during your subscription process. Please \<a href\='order-now.php'>contact WiLine \</a\> (1-888-494-5463) to confirm your submission.\<br\>\<br\>Thank You.";
                                                break;
                                        }
                           /*     console.log(isNeeded);
                                        console.log(isNeeded != "true");*/
                                if(isNeeded == true) {
                                    modal_msg += field + "<br>";
                                    }

                            }
                            $('#modal-error').append(modal_msg);
                     /*       for ( i = 0; i < data.length; i++) {
                                var field = data[i];
                                console.log(data.length);

                                $('#modal-error').html('Please note that the following fields are required: <br><br>' + data + '<br>');
                            }
*/
                        }else {
                            if(data.page){
                                window.location.href=data.page;
                            }
                        }


                }, "json");
   }else {
                 // ($('#agreement').is(':checked'))
                    $('#warningModal').modal('show');
                    $('#modal-error').html('Please make sure you read and accept \<a href\=\"https://www.wiline.com/wiline-privacy-policy.php\" target=\"_new\"\> WiLine\'s Terms of Service\</a\>');
            }
        }

            $(function() {
           $.getJSON( "/wui/wui.php?returningCust=1", function(data) {
                    if(data.name.trim()){
                        var custName = data.name;
                        custName = custName.split(" ");
                        var custFname;
                         var custSname;

               if(custName.length > 1){
                for(var x = 0; x < custName.length; x++){
                    if(x == custName.length-1){
                        custSname=custName[x];
                    }else {
                        if(custFname){
                          custFname +=" "+custName[x];
                        }else{
                          custFname =custName[x];
                        }
                     }
                }
            }else{
                        custFname=custName;
            }
                $( "input[name*='IfirstName']" ).val(custFname);
                $( "input[name*='ISurnameName']" ).val(custSname);

                     }
                    if(data.phone.trim()){
   
                        var phone = data.phone;
                       $( "input[name*='Iphone']" ).val(phone);
                     }
                   if(data.address.trim()){
                          var address = data.address;
                          var address = address.split(",");
                          var address1 = address[0];
                          var city = address[1];
                          var state = address[2];
                          var zip = address[3];
                          $( "input[name*='Icity']" ).val(city);
                          $( "input[name*='Izip']" ).val(zip);
                          $( "input[name*='Istate']" ).val(state);
                         $( "input[name*='Iaddress']" ).val(address1);
                     }


                });

              });
         
            /* Toggle the Description Panel */
            
$(document).on('change', '#desc-toggle', function() {
  var target = $(this).data('target');
  var show = $("option:selected", this).data('show');
  $(target).children().addClass('hide');
  $(show).removeClass('hide');
});

	$('#desc-toggle').trigger('change');
            /* Toggle Term Panel */
            
$(document).on('change', '#term-toggle', function() {
  var target = $(this).data('target');
  var show = $("option:selected", this).data('show');
  $(target).children().addClass('hide');
  $(show).removeClass('hide');
});

	$('#term-toggle').trigger('change');

            
            /* Toggle IP to Summary */

$(document).on('change', '#ip-toggle', function() {
  var target = $(this).data('target');
  var show = $("option:selected", this).data('show');
  $(target).children().addClass('hide');
  $(show).removeClass('hide');
});

	$('#ip-toggle').trigger('change');

            
            /* Toggle Billing Information */

    $('.billing-info').slideDown(this.checked);

            
            /* Toggle Wifi Router - Summary */

            $(document).on('change', '#wifi-toggle', function() {
                var target = $(this).data('target');
                var show = $("option:selected", this).data('show');
                $(target).children().addClass('hide');
                $(show).removeClass('hide');
            });
            $(document).ready(function(){
                $('#wifi-toggle').trigger('change');
            });

            
            /* Toggle Billing Information */
$('#toggle-billing').change(function(){
    $('.billing-info').toggle(this.checked); 
});

/* Pricing Calculations */
            function commaSeparateNumber(val){
                while (/(\d+)(\d{3})/.test(val.toString())){
                    val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
                }
                return val;
            }


            function calcPerc(speed,ips,wifi){


                var totalPrice = Number(speed)+Number(ips)+Number(wifi);
                $("#priceSum").empty();
                if(totalPrice){
                $("#priceSum").append(commaSeparateNumber(totalPrice.toFixed(2)));
            }
            }


            function callPriceCalc(){
                var ips = parseFloat($("#ip-toggle").val());
                var wifi = parseFloat($("#wifi-toggle").val());
                var speed = parseFloat($("#desc-toggle").val());
                //var term = 36;
            
                var plan = $("#desc-toggle").find("option:selected").data('type');

                if((plan >= 1) && (plan < 6)) {
                    wifi = 0;
                }
                if ($.isNumeric(ips)) {
                    ips = ips;
                } else {
                    ips = 0;
                }
                if((plan >= 6) && (plan < 9) ){
                        ips = 0;
                }
                if ($.isNumeric(wifi)) {
                    wifi = wifi;
                } else {
                    wifi = 0;
                }
                if ( plan == 9) {
                    ips = 0;
                    speed = 0;
                    wifi = 0;
                }

               calcPerc(speed,ips,wifi);

            }
            $(document).ready(function() {


                callPriceCalc();
                $('#desc-toggle,#ip-toggle,#wifi-toggle').on('change', function() {    //Price Calculation
                    callPriceCalc();
                });

                $('#desc-toggle').on('change', function() {


                    var plan = $("#desc-toggle").find("option:selected").data('type');   //variables
                    var planDesc = $("#desc-toggle").find("option:selected").data('plan');
                    var value = $("#desc-toggle").find("option:selected").val();
                    var extras = $(this).find("option:selected").data('extras');
                    //$('#extrasDesc').text("Add-On:");
                    //console.log(extras);

                    if( (plan >= 1) && (plan < 6) ) {    //sym
                        $('#pricePlan').text(commaSeparateNumber(value));
                        $('#planRow').removeClass('hide');

                        $('#priceExtras').empty();
                        $('#priceExtras').text( $('#ip-toggle').find("option:selected").val());
                        $('#extrasDesc').text( $('#ip-toggle').find("option:selected").data('extras'));

                         $('#wifi-toggle').val("-1");
                        var $xtra = $("#ip-toggle").find("option:selected").data('type');

                         if ( $xtra > 1 ) {    // fade out/in IPS
                            $('#extrasRow').fadeIn();
                            $('#extrasRow').removeClass("hide");
                        }else{
                            $('#extrasRow').addClass("hide");
                        }

                    } else if ((plan >= 6) && (plan < 9) ){    //asy
                        $('#pricePlan').text(value);
                        $('#planRow').removeClass('hide');
                               if ( $xtra > 1 ) {    // fade out/in IPS
                            $('#extrasRow').fadeIn();
                            $('#extrasRow').removeClass("hide");
                        }else{
                            $('#extrasRow').addClass("hide");
                        }
                         $('#ip-toggle').val("-1");

                        $('#priceExtras').empty();
                        $('#priceExtras').text( $('#wifi-toggle').find("option:selected").val());
                        $('#extrasDesc').text( $('#wifi-toggle').find("option:selected").data('extras'));
                        var $xtra = $("#wifi-toggle").find("option:selected").data('type');


                    } else {
                        $('#pricePlan, #priceExtras').empty();
                        $('#extrasRow, #planRow').addClass('hide');
                    }

                    // Plan Descriptions

                    $('#planDesc').text(planDesc); //updates plan desc
                    $('#ip-toggle, #wifi-toggle').on('change', function() {   //update add-on desc
                        var extras = $(this).find("option:selected").data('extras');
                       // console.log(extras);
                        $('#extrasDesc').text(extras);

                        $('#priceExtras').empty();
                        $('#priceExtras').text( $(this).find("option:selected").val());

                    });
                });

                $('#ip-toggle, #wifi-toggle').on('change', function() {   // disappear ip pricing if no ips selected
                    var $xtra = $(this).find("option:selected").data('type');
                    var plan = $("#desc-toggle").find("option:selected").data('type');
                    //console.log($(this));
                       //&& ($('#ip-toggle').val() != "-1" || $('#wifi-toggle').val() != "-1" )
                   if ( $xtra > 1  ) {
                        $('#extrasRow').fadeIn();
                        $("#extrasRow").removeClass("hide");
                    }else{
                         $("#extrasRow").addClass("hide");
                    }
                });
            });

            /* Form Validation */
            $('#insContactForm').validate();
            $('#busContactForm').validate();

            /* Live Chat */
            
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/578e2ca33ef505512614ecb3/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

//track pageviews Mixpnl
            mixpanel.track('page viewed', {
                'page name' : document.title,
                'url' : window.location.pathname
            });
</script>
<?php endif; ?>  

