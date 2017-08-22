<?php

# Include the Autoloader
require '../vendor/autoload.php';
use Mailgun\Mailgun;

# Instantiate the client.
$mgClient = new Mailgun('key-e30e42960109b9f39b1cb373cbbd838d');
$domain = "brianphillips.tech";

# Make the call to the client.
$result = $mgClient->sendMessage($domain, array(
    'from'    => $_POST['rsName'].'<'.$_POST['rsEmail'].'>',
    'to'      => 'Brian Phillips <info@polyphasicdevs.com>',
    'subject' => $_POST['rsSubject'],
    'text'    => $_POST['rsMessage']
));

# Send response to JS
echo json_encode(true);

?>
