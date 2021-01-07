<?php

function telegramCalc($time, $description, $concrete, $options) {
    $timeF = "Время: ";
    $descriptionF = "Общие данные: ";
    $concreteF = "Нулевой цикл: ";
    $optionsF = "Проемы: ";
    $txt="";

    $arr = array(
        $timeF => $time,
        $descriptionF => $description,
        $concreteF => $concrete,
        $optionsF => $options,
    );

    foreach($arr as $key => $value) {
        $txt .= "<b>" . $key . "</b> " . $value . "%0A";
    }
    $bot_token = "1094014637:AAGDcDmU8ggmpYiG14yjZAZy3sqMKQykZe0";
    $chat_id = "-439440818";
    fopen("https://api.telegram.org/bot{$bot_token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
}

$dataPost = file_get_contents('php://input');
$data = json_decode($dataPost, true);

$time = $data['time'];
$description = $data['description'];
$concrete = $data['concrete'];
$options = $data['options'];

if( !empty($time) && !empty($description) && !empty($concrete) && !empty($options)) {
    telegramCalc($time, $description, $concrete, $options);
}
