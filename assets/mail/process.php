<?php
$name = $_POST["name"];
$phone = $_POST["phone"];
$email = $_POST["email"];
$website = $_POST["website"];
$message = $_POST["message"];

$EmailTo = "vladimir.mujakovic@gmail.com";
$Subject = "Message from Vlad's Portfolio";

// prepare email body text
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";

$Body .= "Phone: ";
$Body .= $phone;
$Body .= "\n";

$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

$Body .= "Website: ";
$Body .= $website;
$Body .= "\n";

$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}

?>
