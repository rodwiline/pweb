<?php

    $to = "rodrigo.cunha@wiline.com;
    $from = $_REQUEST['name'];
    $name = $_REQUEST['phone'];
    $headers = "From: $from";
    $subject = "You have a message.";

    $fields = array();
    $fields{"name"} = "name";
    $fields{"phone"} = "phone";

    $body = "Here is what was sent:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send = mail($to, $subject, $body, $headers);

?>
