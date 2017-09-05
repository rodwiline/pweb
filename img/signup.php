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
    <link rel="canonical" href="http://www.wiline.com/index.html">
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
            font-size: 0.3rem;
        }
        p {
            font-size: 0.4rem;
        }
        footer p {
            font-size: 1em;
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
            background-color: #D6E8FF;
        }
        .small {
            font-size: 0.9em;
        }
        .hide {
            display: none;
        }
        .title {
            font-size:3em;
            font-family:'Raleway', sans-serif;
            line-height: 1em;
            color: #074481;
        }
        div.og > span {
            color: #FF7300;
        }
        .title {
            padding: 0px 16px 0px 0px;
            margin-top:24px;
        }
        .pkg-container {
            background-color: rgba(222,222,222, 0.9);
            border: 1px solid #222;
            padding: 25px;
        }

        .plan-info > .col-capsule:first-child {
            margin-left:0;
            padding-left: 0;
        }

        .plan-info > .col-capsule:nth-child(3) {
            margin-right:0;
            padding-right: 0;
        }

        .pkg-box {
            margin-top: 20px;
            background-color: white;
            padding: 24px 16px;
            border: 2px solid #333;
            z-index: 10;
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
        }

        .more-info {
            background: rgba(55,55,55,0.9);
            border:2px solid #efefef;
            padding:5px 10px;
            color: white;
            min-height: 13vw;
            max-height: auto;
            overflow: visible;
            clear: both;
        }

        .more-info p.large-font {
            font-size: 1.4em;
            font-weight: 400;
        }

        .more-info p.large-font a:hover {
            font-size: 1.5em;
            font-weight: 400;
            transition: 0.5s;
            color: #FF7300;
        }


        /* Buttons */

        .btn-next {
            font-family: 'Roboto', Helvetica, Arial, sans-serif;
            padding: 0 26px;
            height: 40px;
            min-width: 150px;
            line-height: 36px;
            font-size: 12px;
            font-weight: 700;
            color: #074481;
            text-align: center;
            margin-right: 8px;
            margin-bottom: 24px
        }

        .btn-prev {
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
            background-color: white;
            color: #074481;
            transition: 0.5s;
        }

        /* Dynamic Summary */

        .sumUp {
            font-family: 'Roboto', Helvetica, sans-serif;
            font-size: 1.9em;
            font-weight: 600;
            text-align: center;
            color: greenyellow;
        }


        .sumDown {
            font-family: 'Roboto', Helvetica, sans-serif;
            font-size: 1.9em;
            font-weight: 600;
            text-align: center;
            color: orangered;
        }
        .priceSum {
            font-family: 'Roboto', Helvetica, sans-serif;
            font-size: 1.9em;
            font-weight: 300;
            text-align: center;
        }

        #priceSum {
            font-family: 'Roboto', Helvetica, sans-serif;
            font-size: 1.1rem;
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
        }

        #guarantee {
            display: none;
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
            background: #efefef;
        }

        #install-address {
            font-weight: 600;
            color: #aaa;
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
            color: #074481;
        }

        #install-date input {
            padding-bottom:24px;
            padding-top:24px;
        }

        #installDate::-webkit-input-placeholder,
        #promo-code::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: #074481;
            font-size: 16px;
            background: url(img/arrow-down.png) no-repeat right #efefef;
            padding-right:0;
        }
        #installDate::-moz-placeholder,
        #promo-code::-moz-placeholder{ /* Firefox 19+ */
            color: #074481;
            font-size: 16px;
            background: url(img/arrow-down.png) no-repeat right #efefef;
            padding-right:0;
        }
        #installDate:-ms-input-placeholder,
        #promo-code:-ms-input-placeholder{ /* IE 10+ */
            color: #074481;
            font-size: 16px;
            background: url(img/arrow-down.png) no-repeat right #efefef;
            padding-right:0;
        }
        #installDate:-moz-placeholder,
        #promo-code:-moz-placeholder{ /* Firefox 18- */
            color: #074481S;
            font-size: 16px;
            background: url(img/arrow-down.png) no-repeat right #efefef;
            padding-right:0;
        }


        /* Modals */

        .modal-header {
            background-color: #074481;
        }

        button.close {
            color: #fff;
            text-shadow: 0 1px 0 #0f0f0f;
            opacity: 1;
        }

        .modal-header h4 {
            color: #fff;
        }

        /* Signature Pad

                @font-face {
                    font-family: 'Journal';
                    src: url('fonts/journal.eot');
                    src: url('fonts/journal.eot?#iefix') format('embedded-opentype'),
                    url('fonts/journal.woff') format('woff'),
                    url('fonts/journal.ttf') format('truetype'),
                    url('fonts/journal.svg#JournalRegular') format('svg');
                    font-weight: normal;
                    font-style: normal;
                }

                .sigPad {
                    margin: 0;
                    padding: 0;
                    width: 200px;
                }

                .sigPad label {
                    display: block;
                    margin: 0 0 0.515em;
                    padding: 0;

                    color: #000;
                    font: italic normal 1em/1.375 Raleway, Helvetica, sans-serif;
                }

                .sigPad label.error {
                    color: #f33;
                }

                .sigPad input {
                    margin: 0;
                    padding: 0.2em 0;
                    width: 198px;

                    border: 1px solid #666;

                    font-size: 1em;
                }

                .sigPad input.error {
                    border-color: #f33;
                }

                .sigPad button {
                    margin: 1em 0 0 0;
                    padding: 0.6em 0.6em 0.7em;

                    background-color: #A8CBED;
                    border: 0;
                    border-radius: 8px;

                    cursor: pointer;

                    color: #333;
                    font: bold 1em/1.375 sans-serif;
                    text-align: left;
                }

                .sigPad button:hover {
                    background-color: #074481;

                    color: #fff;
                }

                .sig {
                    display: none;
                }

                .sigNav {
                    display: none;
                    height: 2.25em;
                    margin: 0;
                    padding: 0;
                    position: relative;

                    list-style-type: none;
                }

                .sigNav li {
                    display: inline;
                    float: left;
                    margin: 0;
                    padding: 0;
                }

                .sigNav a,
                .sigNav a:link,
                .sigNav a:visited {
                    display: block;
                    margin: 0;
                    padding: 0 0.6em;

                    border: 0;

                    color: #fff;
                    font-weight: bold;
                    line-height: 2.25em;
                    text-decoration: underline;
                }

                .sigNav a.current,
                .sigNav a.current:link,
                .sigNav a.current:visited {
                    background-color: #FF7300;
                    -moz-border-radius-topleft: 8px;
                    -moz-border-radius-topright: 8px;
                    -webkit-border-top-left-radius: 8px;
                    -webkit-border-top-right-radius: 8px;
                    border-radius: 8px 8px 0 0;

                    color: #fff;
                    text-decoration: none;
                }

                .sigNav .typeIt a.current,
                .sigNav .typeIt a.current:link,
                .sigNav .typeIt a.current:visited {
                    background-color: #FF7300;

                    color: #eee;
                }

                .sigNav .clearButton {
                    bottom: 0.2em;
                    display: none;
                    position: absolute;
                    right: 0;

                    font-size: 0.75em;
                    line-height: 1.375;
                }

                .sigWrapper {
                    clear: both;
                    height: 55px;

                    border: none;
                }

                .sigWrapper.current {
                    border-color: #074481;
                }

                .signed .sigWrapper {
                    border: 0;
                }

                .pad {
                    position: relative;
                }

                .current .pad {

                    cursor: url("js/pen.cur"), crosshair;

                    cursor: url("js/pen.cur") 16 16, crosshair;

                    -ms-touch-action: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    -o-user-select: none;
                    user-select: none;
                }

                .typed {
                    height: 55px;
                    margin: 0;
                    padding: 0 5px;
                    position: absolute;
                    z-index: 90;

                    cursor: default;

                    color: #145394;
                    font: normal 1.875em/50px "Journal",Georgia,Times,serif;
                }

                .typeItDesc,
                .drawItDesc {
                    display: none;
                    margin: 0.75em 0 0.515em;
                    padding: 0.515em 0 0;

                    border-top: 3px solid #ccc;

                    color: #000;
                    font: italic normal 1em/1.375 Georgia,Times,serif;
                }

                p.error {
                    display: block;
                    margin: 0.5em 0;
                    padding: 0.4em;

                    background-color: #f33;

                    color: #fff;
                    font-weight: bold;
                }

                */

    </style>

    <!--[if lt IE 9]><script src="assets/flashcanvas.js"></script><![endif]-->
</head>

<body id="top"><div class="loader"></div>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MN2C6H"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<div class="nav-container transparent absolute">
    <nav class="absolute">
        <div class="nav-bar transparent">
            <div class="module left">
                <a href="index.html" title="WiLine Business Internet Service &amp; Office Phone Systems"><img alt="Business Internet Service" src="img/logo-sm2.svg" height="95%" title="WiLine Networks California - Logo" class="logo logo-dark" id="logo" onerror="this.onerror=null; this.src='img/wiline-logo-sm2.png'"></a>
            </div>
            <div class="module right mobile-toggle visible-sm visible-xs widget-handle"><i class="fa fa-bars"></i></div>
            <div class="right module-group">
                <div class="module left">
                    <ul class="menu">
                        <li class="links"><a href="business-internet-service.php" class="<?php echo ($page == "internet" ? "active" : "")?>" title="Link to Business Internet Service Provider" id="menu_sales_to_internet">Business internet</a>
                        <li class="links"><a href="business-internet-network.php" class="<?php echo ($page == "network" ? "active" : "")?>" title="Link to WiLine's Network" id="menu_sales_ON">our network</a>
                        <li class="links"><a href="customer-support.php" class="<?php echo ($page == "support" ? "active" : "")?>" title="Link to Customer Support">Support</a>
                        </li>
                        <li class="links"><a href="wiline-california-careers.php" class="<?php echo ($page == "careers" ? "active" : "")?>" title="Permalink to Careers at WiLine Networks" id="menu_sales_to_careers">careers</a>
                        <li class="links"><a href="order-now.php" class="<?php echo ($page == "contact" ? "active" : "")?>" title="Permalink to Order Business Iternet Service" id="menu_sales_to_contact">contact</a>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</div>
       <div class="main-container container-fluid">
          <div class="col-sm-12 mt48">
              <p class="title"><span class="bold">Congratulations!</span> You're eligible for Ultra Fast Internet.</p>
          </div>
          
           <div class="col-xs-12 col-md-8 col-lg-9 mb48 p0 m0" id="selection-container">
              <div class="col-xs-12 pkg-container"> <!-- Pkg Container -->
                <!-- Start of Package Selection --> 
                <div class="col-xs-12 title mt0">
                     <h4 class="mb0 wiline-color uppercase bold">Please select your package:</h4>
                 </div>
                 <div class="container-fluid plan-info"> <!-- main container for the package information -->
                          <div class="col-xs-12 col-md-6 col-capsule">
                              <!-- Data Package Box -->
                                  <div class="col-xs-12 pkg-box" id="package-type">
                                      <form action="">
                                       <div class="text-center"><i class="fa fa-laptop fa-4x"></i></div>
                                            <p class="pkg-title uppercase bold text-center">High Speed Data Plans</p>
                                                <div class="col-xs-12"> <!-- Content wrapper -->
                                                   <div class="speed"> <!-- Speed Wrapper -->
                                                       <p class="bold col-xs-12 m0 p0 text-center" style="margin:0;">Choose Data Plan:</p>
                                                            <select class="col-xs-12 pkg-select text-center addup m0 p0" id="desc-toggle" data-target=".desc-target" style="background: url(img/arrow-down.png) no-repeat right #074481;color:#fff;">
                                                                <option value=""  data-type="0" disabled selected>Click Here to Select Your Plan</option>
                                                                <option value="10G" data-type="9" data-show=".10Gbps">300 Mbps to 10 Gbps</option>
                                                                <option value="1200" data-type="1" data-show=".300Mbps">300/300 Mbps</option>
                                                              <!--  <option value="1000" data-type="2" data-show=".200Mbps">200/200 Mbps</option>  -->
                                                                <option value="800" data-type="3" data-show=".100Mbps">100/100 Mbps</option>
                                                                <option value="600" data-type="4" data-show=".50Mbps">50/50 Mbps</option>
                                                         <!--       <option value="300" data-type="5" data-show=".30Mbps">30/30 Mbps</option>  -->
                                                                <option value="199" data-type="6" data-show=".a130">130/20 Mbps</option>
                                                                <option value="149" data-type="7" data-show=".a95">95/15 Mbps</option>
                                                                <option value="99" data-type="8" data-show=".a30">30/10 Mbps</option>
                                                            </select>
                                                    </div>
                                                <div class="guarantee clearfix p0">
                                                        <p class="bold col-xs-12 col-md-6 m0 p0" id="guarantee">Guarantee:</p><p class="col-sm-4 m0 p0"></p>
                                                 </div>
                                              <!--     <div class="term clearfix">
                                                        <p class="bold col-xs-12 col-md-6 m0 p0 clearfix addup">Term:</p>
                                                            <select class="col-xs-12 col-md-5 col-md-offset-1 text-center" onselect="onMonthChange()" id="term-toggle" data-target=".term-target">
                                                                <option value="" disabled selected>Select Option</option>
                                                                <option value="10" data-show=".term36">36 Months</option>
                                                                <option value="8" data-show=".term24">24 Months</option>
                                                                <option value="5" data-show=".term12">12 Months</option>
                                                                <option value="2" data-show=".monthly">Monthly</option>
                                                            </select>
                                                    </div> -->
                                                 <div class="installDate clearfix m0 p0">
                                                    <p class="bold col-xs-12 m0 p0 text-center" style="margin:0;">Requested Installation Date:</p>
                                                        <div class="col-xs-12 m0 p0" id="install-date">
                                                            <input type="text" name="installDate" placeholder="Request Date" id="installDate" class="houston mb0">
                                                        </div>
                                                 </div>
                                                   <!-- <div class="installFee clearfix">
                                                        <p class="bold col-xs-6 m0 p0">Invoice:</p>
                                                            <div class="col-xs-5 col-xs-offset-1">
                                                                  <p class="wiline-color bold pull-right">Email</p>
                                                            </div>
                                                    </div> -->
                                              <!--      <div class="installFee clearfix">
                                                        <p class="bold col-xs-6 m0 p0">Install Fee:</p>
                                                            <div class="col-xs-5 col-xs-offset-1">
                                                                  <p class="wiline-color bold pull-right">$250</p>
                                                            </div>
                                                    </div> -->
                                               <p class="bold m0 p0 col-xs-12 col-md-6 clearfix pt32 mt16">Promo Code:</p>
                                                    <div class="col-xs-12 col-md-6 mt16 pt16" style="padding-right:0;">
                                                        <input type="text"S id="promo-code">
                                                    </div>
                                            </div>
                                      </form>
                                  </div>
                          </div>
                    <!-- Extras Box -->
                         <form action="">
                            <div class="col-xs-12 col-md-6 col-capsule">
                                <div class="col-xs-12 pkg-box" id="Extras">
                                    <div class="text-center"><i class="fa fa-user-plus fa-4x"></i></div>
                                        <p class="pkg-title uppercase bold text-center">Aditional Options</p>
                                    <div class="pkg-content">
                                    <div class="m0 p0 hide" id="ipContainer">
                                        <p class="bold col-xs-12 m0 p0 text-center">Static IP Address:</p>
                                            <select class="col-xs-10 col-xs-offset-1 text-center addup" id="ip-toggle" data-target=".ip-target">
                                               <option value="" data-type="0" name="first-ip" disabled selected>Click to Select</option>
                                                <option value="0"  data-type="1" data-show=".ip0">None</option>
                                                <option value="10" data-type="2" data-show=".ip1">1 Usable</option>
                                                <option value="30" data-type="3" data-show=".ip5">5 Usable</option>
                                                <option value="100" data-type="4" data-show=".ip13">13 Usable</option>
                                                <option value="300" data-type="5" data-show=".ip29">29 Usable</option>
                                            </select>
                                        </div>
                                        <div class="m0 p0 hide" id="wifiContainer">
                                        <p class="bold col-xs-12 mt16 p0 text-center clearfix">WiLine Managed Wifi Access Point:</p>
                                            <div class="col-xs-12 mb16 p0">
                                                <select class="wifi-router text-center col-xs-10 col-xs-offset-1 addup" id="wifi-toggle" data-target=".wifi-target">
                                                   <option value=""  data-type="0" name="first-wifi" disabled selected>Click to Select</option>
                                                    <option value="0"  data-type="1" data-show=".routerNo">No</option>
                                                    <option value="10"  data-type="2" data-show=".routerYes">Yes</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                  <!--    <div class="row clearfix">
                     <!-- Description Box -->
                <!--     <div class="col-xs-12 col-capsule mt16" style="clear:both;">
                         <div class="col-xs-12 pkg-box" id="description">
                             <div class="text-center"><i class="fa fa-search fa-2x"></i></div>
                             <p class="pkg-title uppercase bold text-center">Description</p>
                             <div class="desc-target">
                                 <div class="300Mbps">
                                     <ul>
                                         <li>Business Dedicated Internet Access</li>
                                         <li>300Mbps Upload and Download Speeds</li>
                                         <li>SLA Guarantee</li>
                                         <li><span class="bold">Note:</span> Install date is indicative of your preference. We will try to honour this however it isn't always possible.</li>
                                     </ul>
                                 </div>
                                 <div class="200Mbps hide">
                                     <span class="bold">Package highlights include:</span>
                                     <ul>
                                         <li>Dedicated Internet Access</li>
                                         <li>200Mbps Upload and Download Speeds</li>
                                         <li>SLA Guarantee</li>
                                         <li>100% Thoroughput</li>
                                         <li>99.99% Uptime</li>
                                         <li>Latency Under 10ms</li>
                                     </ul>
                                 </div>
                                 <div class="100Mbps hide">
                                     <p>The 100Mbps is one of our most popular packages. It is a long time favourite with our small business and professional services customers. </p>
                                     <span class="bold">Package highlights include:</span>
                                     <ul>
                                         <li>Dedicated Internet Access</li>
                                         <li>100Mbps Upload and Download Speeds</li>
                                         <li>SLA Guarantee</li>
                                         <li>100% Thoroughput</li>
                                         <li>99.99% Uptime</li>
                                         <li>Latency Under 10ms</li>
                                     </ul>
                                 </div>
                                 <div class="50Mbps hide">
                                     <p>This is by far the most popular package among our professional services customers. It includes all the benefits of a SLA guarantee and dedicated bandwidth as well as enough bandwidth for 3 to 5 users. </p>
                                     <span class="bold">Package highlights include:</span>
                                     <ul>
                                         <li>Dedicated Internet Access</li>
                                         <li>50Mbps Upload and Download Speeds</li>
                                         <li>SLA Guarantee</li>
                                         <li>100% Thoroughput</li>
                                         <li>99.99% Uptime</li>
                                         <li>Latency Under 10ms</li>
                                     </ul>
                                 </div>
                                 <div class="30Mbps hide">
                                     <p>Our entry level package would be ideal for a single person operation or perhaps 2 to 3 light users. It is a entry level package to the world of Dedicated Internet Access. </p>
                                     <span class="bold">Package highlights include:</span>
                                     <ul>
                                         <li>Dedicated Internet Access</li>
                                         <li>200Mbps Upload and Download Speeds</li>
                                         <li>SLA Guarantee</li>
                                         <li>100% Thoroughput</li>
                                         <li>99.99% Uptime</li>
                                         <li>Latency Under 10ms</li>
                                     </ul>
                                 </div>
                                 <div class="a130 hide">
                                     <p>Fastest Asymmetrical Bandwidth Package. This is ideal for those businesses where Internet isn't a mission critical element. </p>
                                     <span class="bold">Package highlights include:</span>
                                     <ul>
                                         <li>Up to 130Mbps Fastest Download Speed</li>
                                         <li>Up to 20Mbps Upload Speeds</li>
                                         <li>Cost Effective</li>
                                         <li>Managed WiFi Access Point (optional)</li>
                                         <li>Static IP's Possible</li>
                                     </ul>
                                 </div>
                                 <div class="a95 hide">
                                     <p>Fast Download and Intermediate Upload Speeds. This is ideal for those businesses where Internet isn't a mission critical element. </p>
                                     <span class="bold">Package highlights include:</span>
                                     <ul>
                                         <li>Up to 95Mbps Fast Download Speed</li>
                                         <li>Up to 15Mbps Upload Speeds</li>
                                         <li>Cost Effective</li>
                                         <li>Managed WiFi Access Point (optional)</li>
                                         <li>Static IP's Possible</li>
                                     </ul>
                                 </div>
                                 <div class="a30 hide">
                                     <p>WiLine's Entry Level Data Connection P444ackage offers the best price for businesses with limited Internet requirements.</p>
                                     <span class="bold">Package highlights include:</span>
                                     <ul>
                                         <li>Up to 30Mbps Fast Download Speed</li>
                                         <li>Up to 10Mbps Upload Speeds</li>
                                         <li>Cost Effective</li>
                                         <li>Managed WiFi Access Point (optional)</li>
                                         <li>Static IP's Possible</li>
                                     </ul>
                                 </div>
                             </div>
                         </div>
                     </div>
                     </div> -->
                  </div>
        <!-- End of Package Selection -->
        <!-- Start of Personal Information Section -->
                  <div class="col-xs-12 title clearfix"> <!-- Installation Contact Field ID's start with capital I-->
                      <h4 class="mb0 uppercase bold wiline-color">Installation Contact:</h4>
                  </div>
                  <form action="" id="insContactForm">
                      <div class="col-xs-12 pkg-box">
                          <div class="col-xs-12 col-sm-7"><input type="text" minlength="2" placeholder="Business Name" name="Ibusiness" class="validate-required" required></div>
                          <div class="col-xs-12 col-sm-5"><input type="text" placeholder="Business Type" name="Ibusiness_type"></div>
                          <div class="col-xs-4 col-sm-2 mt8 clearfix"><input type="text" placeholder="Title" name="Ititle"></div>
                          <div class="col-xs-8 col-sm-5 mt8 clearfix"><input type="text" placeholder="Given Name(s)" name="IfirstName" class="validate-required" minlength="2" required></div>
                          <div class="col-xs-12 col-sm-5 mt8 clearfix"><input type="text" placeholder="Surname" name="ISurnameName" class="validate-required" minlength="2" required></div>
                          <div class="col-xs-12 col-sm-10"><input type="text" id="install-address" placeholder="Your Address" name="Iaddress" class="validate-required" minlength="6" required disabled></div>
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
                      <div class="mt16 title">
                          <h4 class="uppercase bold mb0 wiline-color">Billing Contact</h4>
                      </div>
                      <form action="" id="busContactForm">
                          <div class="col-xs-12 pkg-box">
                              <div class="col-xs-4 col-sm-2 mt16"><input type="text" placeholder="Title" name="Btitle"></div>
                              <div class="col-xs-8 col-sm-5 mt16"><input type="text" placeholder="Given Name(s)" name="BfirstName" class="validate-required" minlength="2"></div>
                              <div class="col-xs-12 col-sm-5 mt16"><input type="text" placeholder="Surname" name="BsurName" class="validate-required" minlength="2"></div>
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
             <!--  <div class="col-xs-12 title clearfix">
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
                              <h5 class="uppercase text-center bold mb8">Speed</h5>
                          </div>
                               <div class="col-xs-6 m0 p0">
                                   <h5 class="text-center uppercase bold mb8">Down</h5>
                               </div>
                                <div class="col-xs-6 m0 pt0">
                                   <h5 class="uppercase text-center bold mb8">Up</h5>
                                </div>
                                    <div class="col-xs-6 desc-target sumUp">
                                        <div id="downloadSum300" class="300Mbps">300 Mbps</div>
                                        <div id="downloadSum200" class="200Mbps hide">200 Mbps</div>
                                        <div id="downloadSum100" class="100Mbps hide">100 Mbps</div>
                                        <div id="downloadSum50" class="50Mbps hide">50 Mbps</div>
                                        <div id="downloadSum30" class="30Mbps hide">30 Mbps</div>
                                        <div id="downloadSumA130" class="a130 hide">20 Mbps</div>
                                        <div id="downloadSumA95" class="a95 hide">15 Mbps</div>
                                        <div id="downloadSumA30" class="a30 hide">10 Mbps</div>
                                    </div>
                                    <div class="col-xs-6 desc-target sumDown">
                                        <div id="uploadSum300" class="300Mbps">300 Mbps</div>
                                        <div id="uploadSum200" class="200Mbps hide">200 Mbps</div>
                                        <div id="uploadSum100" class="100Mbps hide">100 Mbps</div>
                                        <div id="uploadSum50" class="50Mbps hide">50 Mbps</div>
                                        <div id="uploadSum30" class="30Mbps hide">30 Mbps</div>
                                        <div id="uploadSumA130" class="a130 hide">130 Mbps</div>
                                        <div id="uploadSumA95" class="a95 hide">95 Mbps</div>
                                        <div id ="uploadSumA30" class="a30 hide">30 Mbps</div>
                                    </div>
                                <div class="col-xs-12">
                                    <hr class="mt16 mb16 sum-hr">
                                    <h5 class="uppercase text-center bold mb8">Extras</h5>
                                </div>
                                     <div id="extras-pkg col-xs-12">
                                         <div class="col-xs-8 m0 p0">
                                            <p class="bold">Term:</p>
                                         </div>
                                         <div class="col-xs-4 m0 p0">
                                             <div class="extrasList term-target og">
                                                 <span class="term36">36 Months</span>
                                                 <span class="term24 hide">24 Months</span>
                                                 <span class="term12 hide">12 Months</span>
                                                 <span class="monthly hide">Montly</span>
                                             </div>
                                        </div>
                                        <div class="row"></div>
                                        <div class="col-xs-8 m0 p0 clearfix">
                                             <p class="bold">Static IP's:</p>
                                        </div>
                                        <div class="col-xs-4 m0 p0 ip-target og">
                                            <span class="ip0">No</span>
                                            <span class="ip1 hide">1 Static</span>
                                            <span class="ip5 hide">5 Static</span>
                                            <span class="ip13 hide">13 Static</span>
                                            <span class="ip29 hide">29 Static</span>
                                        </div>
                                        <div class="row"></div>
                                        <div class="col-xs-8 m0 p0"><p class="bold">WiFi Access Point:</p></div>
                                            <div class="m0 p0 wifi-target col-xs-4 og">
                                                <span class="routerNo" id="routerNo">No</span>
                                                <span class="routerYes hide" id="routerYes">Yes</span>
                                            </div>
                                      </div>
                                      <hr class="mt16 mb16 sum-hr">
                                      <h5 class="uppercase text-center bold mb8">Description</h5>
                                            <div class="desc-target m0 p0">
                                                <div class="300Mbps m0 p0">
                                                    <ul class="mb0">
                                                        <li>- Business Dedicated Internet Access</li>
                                                        <li>- 300Mbps Upload and Download Speeds</li>
                                                        <li>- SLA Guarantee</li>
                                                    </ul>
                                                </div>
                                                <div class="200Mbps m0 p0">
                                                    <ul class="mb0">
                                                        <li>- Business Dedicated Internet Access</li>
                                                        <li>- 200Mbps Upload and Download Speeds</li>
                                                        <li>- SLA Guarantee</li>
                                                    </ul>
                                                </div>
                                                <div class="100Mbps m0 p0">
                                                    <ul class="mb0">
                                                        <li>- Business Dedicated Internet Access</li>
                                                        <li>- 100Mbps Upload and Download Speeds</li>
                                                        <li>- SLA Guarantee</li>
                                                    </ul>
                                                </div>
                                                <div class="50Mbps m0 p0">
                                                    <ul class="mb0">
                                                        <li>- Business Dedicated Internet Access</li>
                                                        <li>- 50Mbps Upload and Download Speeds</li>
                                                        <li>- SLA Guarantee</li>
                                                    </ul>
                                                </div>
                                                <div class="30Mbps m0 p0">
                                                    <ul class="mb0">
                                                        <li>- Business Dedicated Internet Access</li>
                                                        <li>- 30Mbps Upload and Download Speeds</li>
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
                                <div class="col-xs-12">
                                   <hr class="mt16 mb16 sum-hr">
                                    <h5 class="uppercase text-center bold mb16">Monthly Fee</h5>
                                    <div class="priceSum"><span>$</span><span id="priceSum"></span></div>
                                </div>
                                <div class="col-xs-12 p0 mb16">
                                   <hr class="mt16 mb16 sum-hr">
                                    <h5 class="uppercase text-center bold mb8">Terms</h5>
                                        <div class="col-xs-12">
                                            <label class="control control--checkbox">
                                                <input type="checkbox" name="agreement" value="agreement" id="agreement" class="col-xs-2">
                                                <span  class="checkbox-label col-xs-12 small text-justify">By checking this box, you acknowledge that you have read, understood and accepted <a href="#" style="color:orange;">WiLine's Terms of Service</a>.</span>
                                                <div   class="check-box" style="margin-top:0px;"></div>
                                            </label>
                                        </div>
                                </div>
                          <div class="pull-right">
                              <a href="javascript:void(0)"  onclick="customerSignedUp()" class="btn btn-submit mt16" title="">Place Order</a>
                          </div>
                            <!--    <div class="col-md-12">
                                    <form method="POST" id="sigPad" class="">
                                          <label for="name" style="color:white;">Print your name</label>
                                          <input type="text" name="name" id="name" class="name">
                                          <p class="typeItDesc">Review your signature</p>
                                          <p class="drawItDesc">Draw your signature</p>
                                          <ul class="sigNav">
                                              <li class="typeIt"><a href="#type-it" class="current">Type It</a></li>
                                              <li class="drawIt"><a href="#draw-it" >Draw It</a></li>
                                              <li class="clearButton"><a href="#clear">Clear</a></li>
                                          </ul>
                                          <div class="sig sigWrapper" style="margin:0 auto;">
                                              <div class="typed"></div>
                                              <canvas class="pad" width="198" height="55"></canvas>
                                              <input type="hidden" name="output" class="output">
                                          </div>
                                        <div class="pull-right">
                                            <a href="#next" class="btn btn-submit mt24" title="">Submit Order</a>
                                        </div>
                                    </form>
                                </div>  -->
                      </div>
                  </div>
               </div>
               <div class="col-xs12 mb48" id="more-info">
                   <div class="more-info text-center image-bg">
                       <i class="fa fa-4x fa-question"></i>
                       <h4 class="uppercase bold">Questions</h4>
                       <p class="large-font"><a href="tel:8884945463">1-888-4WILINE</a></p>
                       <p class="large-font mt0 p0">(888-494-5463)</p>
                       <p class="large-font"><a href="order-now.php" target="_blank">Contact Us</a></p>
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
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>

    </div>
</div>


    </body>


<?php include 'footer-min.html';?>
<!-- Remove Signature
<script src="assets/numeric-1.2.6.min.js"></script>
<script src="assets/bezier.js"></script>
<script src="assets/signaturepad.min.js"></script> -->
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
<script src="js/jquery.validate.min.js" type="text/javascript"></script>
<script src="js/jquery.matchHeight-min.js" type="text/javascript"></script>

<!--
<script type="text/javascript">
    // Signature Pad
    $(document).ready(function() {
        $('#sigPad').signaturePad();
    });
</script>   -->

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
                    minDate: 3, maxDate: "+3M +0D"

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
                            break;
                        case 2: 
                            $('#ipContainer').addClass('hide');
                            $('#wifiContainer').fadeIn(800).removeClass('hide');
                            break;
                        case 9: 
                            $('#ipContainer').addClass('hide');
                            $('#wifiContainer').addClass('hide');
                            $('#warningModal').modal('show'); //triggers modal pop-up
                             $('#modal-error').html('Higher Speeds? We can deliver. \<a href\="order-now.php"\> Email us</a\> or call us at \<a href\="tel:18884945463"\>1-888-4WILINE\</a\>.\<br\>\<br\>Thank You.');
                            break;

                    }



/*                    switch(select) {
                         case 9:
                             $('#warningModal').modal('show'); //triggers modal pop-up
                             $('#modal-error').html('Higher Speeds? We can deliver. \<a href\="order-now.php"\> Email us</a\> or call us at \<a href\="tel:18884945463"\>1-888-4WILINE\</a\>.\<br\>\<br\>Thank You.');
                            $('#ip-toggle').prop({selectedIndex: 0,  disabled: true}).find(':selected').text("Pick a Plan First");
                            $('#wifi-toggle').prop({selectedIndex: 0,  disabled: true}).find(':selected').text("Pick a Plan First");
                         break;
                         case 1:
                            $(ip).attr("disabled",false);
                            if ( ($('#ip-toggle :selected').text() == "Pick a Plan First") || ($('#ip-toggle :selected').text() == "Not Available")){
                                $('#ip-toggle :selected').text('Click Here to Select');
                              
                            }
                            $('#wifi-toggle').prop({selectedIndex: 0, disabled: true}).find(':selected').text('Not Available');
                         break;
                        case 2:
                               $(wifi).attr("disabled",false);
                           if ( ($('#wifi-toggle :selected').text() == "Pick a Plan First") || ($('#wifi-toggle :selected').text() == "Not Available")) {
                                $('#wifi-toggle :selected').text('Click Here To Select');
                            }
                            $('#ip-toggle').prop({selectedIndex: 0, disabled: true}).find(':selected').text('Not Available');
                        break;
                    }*/
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
                                                field = "There was an issue with the email process. Please \<a href\='order-now.php'\> contact WiLine\</a\> to confirm your submission.\<br\>\<br\> Thank you.";
                                                break;
                                            case "priceMissmatch":
                                                field = "The price displayed doesn't match the price for the option selected. \<br\> Please refresh the page and try again.\<br\>\<br\>Thank You";
                                                break;
                                            case "dbIssue":
                                                field = "There has been an error during your subscription process. Please \<a href\='order-now.php'>contact WiLine \</a\> to confirm your submission.\<br\>\<br\>Thank You.";
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



                        /*  for ( i = 0; i < data.length; i++) {
                           var field = data[i];
                           console.log(field);
                        }; */




                }, "json");
   }else {
                 // ($('#agreement').is(':checked'))
                    $('#warningModal').modal('show');
                    $('#modal-error').html('Please make sure you read and accept \<a href\="#"\> WiLine\'s Terms of Service\</a\>');
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
$(document).ready(function(){
	$('#desc-toggle').trigger('change');
});
            /* Toggle Term Panel */
            
$(document).on('change', '#term-toggle', function() {
  var target = $(this).data('target');
  var show = $("option:selected", this).data('show');
  $(target).children().addClass('hide');
  $(show).removeClass('hide');
});
$(document).ready(function(){
	$('#term-toggle').trigger('change');
});
            
            /* Toggle IP to Summary */

$(document).on('change', '#ip-toggle', function() {
  var target = $(this).data('target');
  var show = $("option:selected", this).data('show');
  $(target).children().addClass('hide');
  $(show).removeClass('hide');
});
$(document).ready(function(){
	$('#ip-toggle').trigger('change');
});
            
            /* Toggle Billing Information */
$('#toggle-billing').change(function(){
    $('.billing-info').slideDown(this.checked);
});
            
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
       
/* CheckBox Dependencies */


   /*        $(document).on('change', '#desc-toggle', function() {
                var plan = $("option:selected", this).data('type');
                var ip = $('#ip-toggle').children();
                var wifi = $('#wifi-toggle').children();

                console.log(plan);

                if (plan === 9) {
                    $('#warningModal').modal('show');
                    $('#modal-error').html('Please \<a href\="order-now.php"\> Contact WiLine</a\> for more information on higher plans.');
                }
                else if ((plan >= 1) && (plan < 6)) {
                    $(ip).removeAttr('disabled');
                }
                else {
                        $(ip).attr('disabled')
                        $(wifi).removeAttr('disabled');
                }
            }); */




            
            
/* Pricing Calculations */

            function calcPerc(speed,ips,wifi){
          
                var totalPrice = Number(speed)+Number(ips)+Number(wifi);
                     console.log(totalPrice);
                $("#priceSum").empty();
                $("#priceSum").append(totalPrice);
            }
            function callPriceCalc(){
                var ips = parseInt($("#ip-toggle").val());
                var wifi = parseInt($("#wifi-toggle").val());
                var speed = parseInt($("#desc-toggle").val());
                var term = 12;
            
                var plan = $("#desc-toggle").find("option:selected").data('type');
                 if((plan >= 1) && (plan < 6)){
                            wifi=0;

                }
                if((plan >= 6) && (plan < 9) ){
                        ips =0;    
                }
          
               calcPerc(speed,ips,wifi);
            }
            $(document).ready(function() {

                callPriceCalc();
                $('#term-toggle,#desc-toggle,#ip-toggle,#wifi-toggle').on('change', function() {
                    callPriceCalc();
                });

/*

                $(".addup").change(function(event) {
                    var total = 0;
                    $(".addup option:selected").each(function() {
                        total += parseInt($(this).val());
                    });

                    if (total == 0) {
                        $('#priceSum').html('0');
                    } else {
                        $('#priceSum').html(total);
                    }
                });*/
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
</script>

<!-- Signature Json File
<script src="assets/json2.min.js"></script>
-->
            
<?php endif; ?>  

