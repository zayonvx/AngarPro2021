<?php

function cleanPost($value = "") {
    $value = trim($value);
    $value = stripslashes($value);
    $value = strip_tags($value);
    $value = htmlspecialchars($value);

    return $value;
}

function mailQuiz($name, $email, $phone, $size, $h, $span, $typeName, $site) {
    $to = 'oneliner@vivaldi.net, post@angarpro.com';
    //$to = 'oneliner@vivaldi.net';
    $subject = 'Запрос. Имя: '.$name.'. Размеры: '.$size.'. АngarPro.com.';
    $message = '
    <html lang="ru">
    <head>
    <title>'.$subject.'</title>
    </head>
    <body>
    <p>Имя: '.$name.'</p>   
    <p>Почта: '.$email.'</p>
    <p>Телефон: '.$phone.'</p>
    <p>-----</p>
    <p>Размеры: '.$size.'</p>
    <p>Высота: '.$h.'</p>
    <p>Пролет: '.$span.'</p>                 
    <p>Покрытие: '.$typeName.'</p>                 
    <p>Регион: '.$site.'</p>                 
    </body>
    </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: angarpro.com\r\n";

    mail($to, $subject, $message, $headers);
}

function telegramQuiz($name, $email, $phone, $size, $h, $span, $typeName, $site) {
    $nameF = "Имя: ";
    $emailF = "Почта: ";
    $phoneF = "Телефон: ";
    $sizeF = "Размеры: ";
    $heightF = "Высота: ";
    $spanF = "Пролеты: ";
    $typeNameF = "Покрытие: ";
    $siteF = "Регион: ";

    $arr = array(
        $nameF => $name,
        $emailF => $email,
        $phoneF => $phone,
        $sizeF => $size,
        $heightF => $h,
        $spanF => $span,
        $typeNameF => $typeName,
        $siteF => $site
    );

    foreach($arr as $key => $value) {
        $txt .= "<b>" . $key . "</b> " . $value . "%0A";
    }

    $token = "1094014637:AAGDcDmU8ggmpYiG14yjZAZy3sqMKQykZe0";
    $chat_id = "-439440818";
    fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
}

function getTypeName($type, $warming, $sandwich) {
    $value="";
    switch ($type) {
        case "blockProf":
            $value="Профнастил";
            break;
        case "blockTent":
            $tentType = " холодный";
            if ($warming) $tentType = " утепленный";
            $value = "Тент " . $tentType;
            break;
        case "blockSandwich":
            switch ($sandwich) {
                case "bazalt":
                    $panelType = "минвата";
                    break;
                case "PIR":
                    $panelType = "ПИР";
                    break;
                case "polystirol":
                    $panelType = "полистирол";
                    break;
            }
            $value = "Сендвич-панель, " . $panelType;
            break;
    }
    return $value;
}

function getHeight($height, $craneHeight, $cranePower) {
    $value="";
    if ($height>0) {
        $value=$height."м";
    } else {
        $value="кран: гп-".$craneHeight."м, h-".$craneHeight."м";
    }
    return $value;
}

$dataPost = file_get_contents('php://input');
$data = json_decode($dataPost, true);

$name = cleanPost($data['name']);
$email = cleanPost($data['email']);
$phone = cleanPost($data['phone']);
$width = cleanPost($data['width']);
$span = cleanPost($data['span']);
$length = cleanPost($data['length']);
$height = cleanPost($data['height']);

$craneHeight = cleanPost($data['craneHeight']);
$cranePower = cleanPost($data['cranePower']);

$size = $width." x ".$length." м";
$size = cleanPost($size);
$site = cleanPost($data['site']);
$type = cleanPost($data['type']);
$warming = cleanPost($data['warming']);
$sandwich = cleanPost($data['sandwich']);

$typeName=getTypeName($type, $warming, $sandwich);

$h=getHeight($height, $craneHeight, $cranePower);

if( !empty($name) && !empty($email) && !empty($phone) && !empty($site)) {
    mailQuiz($name, $email, $phone, $size, $h, $span, $typeName, $site);
    telegramQuiz($name, $email, $phone, $size, $h, $span, $typeName, $site);
}
