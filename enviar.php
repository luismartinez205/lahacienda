<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verificar reCAPTCHA
    $recaptcha_secret = "TU_SECRET_KEY"; // Reemplaza con tu clave secreta
    $recaptcha_response = $_POST['g-recaptcha-response'];

    $verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptcha_secret&response=$recaptcha_response");
    $captcha_success = json_decode($verify);

    if (!$captcha_success->success) {
        die("Error: reCAPTCHA no validado. Inténtalo de nuevo.");
    }

    // Sanitizar entradas
    $name = htmlspecialchars(strip_tags($_POST["name"]));
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(strip_tags($_POST["message"]));

    // Validar email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Correo no válido.");
    }

    // Evitar spam
    if (strlen($message) < 10) {
        die("El mensaje es demasiado corto.");
    }

    // Enviar correo
    $to = "tucorreo@ejemplo.com";
    $subject = "Nuevo mensaje de contacto";
    $headers = "From: $email\r\nReply-To: $email\r\n";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
}
?>
