<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email address.");
  }

  $to = "aleksandermastrianna@gmail.com";
  $subject = "Contact Form Submission from $name";
  $headers = "From: $email";
  $messageBody = "Name: $name\nEmail: $email\nMessage: $message";

  mail($to, $subject, $messageBody, $headers);

  echo "Thank you for your message. I will get back to you soon.";
} else {
 
  die("Access denied.");
}
?>
