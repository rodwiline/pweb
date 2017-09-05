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

                    switch(select) {
                         case 9:
                             $('#warningModal').modal('show'); //triggers modal pop-up
                             $('#modal-error').html('Higher Speeds? \<br /\>We can deliver. \<a href\="order-now.php"\> Email us</a\> or call us on \<a href\="tel:18884945463"\>1-888-4WILINE\</a\>.\<br\>\<br\>Thank You.');
                            $('#ip-toggle').prop({selectedIndex: 0,  disabled: true}).find(':selected').text("Pick a Plan First");
                            $('#wifi-toggle').prop({selectedIndex: 0,  disabled: true}).find(':selected').text("Pick a Plan First");
                         break;
                         case 1:
                            $(ip).attr("disabled",false);
                            if ( $('#ip-toggle :selected').text() == "Pick a Plan First") {
                                $('#ip-toggle :selected').text('Select Option');
                              
                            }
                            $('#wifi-toggle').prop({selectedIndex: 0, disabled: true}).find(':selected').text('Pick a Plan First');
                         break;
                        case 2:
                               $(wifi).attr("disabled",false);
                           if ( $('#wifi-toggle :selected').text() == "Pick a Plan First") {
                                $('#wifi-toggle :selected').text('Select Option');
                            }
                            $('#ip-toggle').prop({selectedIndex: 0, disabled: true}).find(':selected').text('Pick a Plan First');
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
 $.post( "/wui/wui.php?signup=1", {  price:$("#priceSum").text(),speed:speed,requestedDate:requestedDate,promoCode:promoCode,ipAddress:ipAddress,wifiRouter:wifiRouter,
                    businessName:businessName,businessType:businessType,businessCustName:businessCustName,businessCustSurName:businessCustSurName,
                    businessAddr1:businessAddr1,businessEmail:businessEmail,businessSuite:businessSuite,businessPhone:businessPhone,businessCity:businessCity,
                    businessZip:businessZip,businessState:businessState,businessTitleBilling:businessTitleBilling,businessTitle:businessTitle,businessCustNameBilling:businessCustNameBilling,businessCustSurNameBilling:businessCustSurNameBilling,businessAddr1Billing:businessAddr1Billing,businessEmailBilling:businessEmailBilling,businessSuiteBilling:businessSuiteBilling,
                     businessPhoneBilling:businessPhoneBilling,businessCityBilling:businessCityBilling,businessZipBilling:businessZipBilling,businessStateBilling:businessStateBilling}).done(function( data ) {
                        if (!data.page) {
                            $('#warningModal').modal('show');
                            var data = jQuery.parseJSON(data );
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
                                                field = "WiLine Managed WiFi Router";
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
                                if(isNeeded == true) {
                                    modal_msg += field + "<br>";
                                    }

                            }
                            $('#modal-error').append(modal_msg);

                        }else {
                            var data = jQuery.parseJSON(data );
                            if(data.page){
                                window.location.href=data.page;
                            }
                        }

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

/* Pricing Calculations */

            function calcPerc(speed,term,ips,wifi){
                var totalPrice = (wifi+ips) + ((speed)-(speed)*(term/100));
                $("#priceSum").empty();
                $("#priceSum").append(totalPrice);
            }
            function callPriceCalc(){
                var ips = parseInt($("#ip-toggle").val());
                var wifi = parseInt($("#wifi-toggle").val());
                var speed = parseInt($("#desc-toggle").val());
                var term = parseInt($("#term-toggle").val());
                console.log(speed,term,ips,wifi);
                calcPerc(speed,term,ips,wifi);
            }
            $(document).ready(function() {

                callPriceCalc();
                $('#term-toggle,#desc-toggle,#ips-toggle,#wifi-toggle').on('change', function() {
                    callPriceCalc();
                });

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