<?php


$emailMethod                = 'smtp'; // 'smtp' or 'phpmail'

// Outgoing Server Settings
// These 3 settings are only required if we choose smtp, else delete
$outgoingServerAddress      = 'email.wiline.com';
$outgoingServerPort         = '25';
$outgoingServerSecurity     = '';

// Only smtp
$sendingAccountUsername	    = '';
$sendingAccountPassword     = '';

// Recipient (To:) Details
$recipientEmail             = 'sales@wiline.com'; // REQUIRED value, while I'm testing
$recipientName              = 'Sales Team';             // REQUIRED value.

// Email details            - Change these to suit your website needs
$emailSubject               = 'Web Sales Enquiry'; // REQUIRED value. Subject of the email that the recipient will see
$websiteName                = 'www.wiline.com';

include('lib/mail_sender.php');

// Set the default one here first, just in case something is not perfect with the URL
$recipientEmail = 'sales@wiline.com';

// Then override it here if the proper condition is met.
if( $_POST["url"] == "http://www.wiline.com/order-phone-and-internet-service.html"){
    $recipientEmail = 'sales@wiline.com';
}

if( $_POST["url"] == "http://wiline.com/careers.html"){
    $recipientEmail = 'sales@wiline.com';
}

?>
