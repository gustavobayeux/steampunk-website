<?php
//PROCEDURAL ROUTER
$singleusecss = '';
$singleusejs = '';

$request = explode('?',$_SERVER['REQUEST_URI'])[0];	
function open($view){
	echo '
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta name="author" content="Gustavo Bayeux">
<meta name="viewport" content="width=device-width,initial-scale=1.0, user-scalable=0">
<meta name="keywords" content="gustavo bayeux,gbayeux,websites,sistemas,painel,dados,app,pdv,cms,site">
<meta name="description" content="Sites, Deep Web, Sistemas personalizados | Foco em performance e segurança">
<link rel="stylesheet" type="text/css" href="./resources/css/main.css">
<link rel="stylesheet" type="text/css" href="./resources/css/home/general.css">
<link rel="apple-touch-icon-precomposed" sizes="57x57" href="resources/media/favicon/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="resources/media/favicon/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="resources/media/favicon/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="resources/media/favicon/apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="resources/media/favicon/apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon-precomposed" sizes="152x152" href="resources/media/favicon/apple-touch-icon-152x152.png" />
<link rel="icon" type="image/png" href="resources/media/favicon/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="resources/media/favicon/favicon-16x16.png" sizes="16x16" />
<meta name="application-name" content="&nbsp;"/>
<meta name="msapplication-<link rel="apple-touch-icon-precomposed" sizes="57x57" href="resources/media/favicon/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="resources/media/favicon/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="resources/media/favicon/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="resources/media/favicon/apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="resources/media/favicon/apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon-precomposed" sizes="152x152" href="resources/media/favicon/apple-touch-icon-152x152.png" />
<link rel="icon" type="image/png" href="resources/media/favicon/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="resources/media/favicon/favicon-16x16.png" sizes="16x16" />
<meta name="application-name" content="&nbsp;"/>
<meta name="msapplication-TileColor" content="#000FFF" />
<meta name="msapplication-TileImage" content="resources/media/favicon/mstile-144x144.png" />
<meta name="msapplication-TileImage" content="resources/media/favicon/mstile-144x144.png" />

<title>'.'Consultoria - '.strtoupper($GLOBALS['request']).'</title>
'.$GLOBALS['singleusecss'].'
</head>
<body>
';
	require __DIR__ . '/menu.html';
    echo '
<main id="container">
	';
	require __DIR__ . $view;
    echo '

</main>
<div id="footerWrap">
<footer>
 Differtopia 20'.date('y').' - Todos os direitos reservados 
<div id="medias">
<a href="https://instagram.com/differtopia">
<svg id="instaSvg" xmlns="http://www.w3.org/2000/svg" viewBox="-100.7682 -167.947 873.3244 1007.682"><g fill="#000"><path d="M335.895 0c-91.224 0-102.663.387-138.49 2.021-35.752 1.631-60.169 7.31-81.535 15.612-22.088 8.584-40.82 20.07-59.493 38.743-18.674 18.673-30.16 37.407-38.743 59.495C9.33 137.236 3.653 161.653 2.02 197.405.386 233.232 0 244.671 0 335.895c0 91.222.386 102.661 2.02 138.488 1.633 35.752 7.31 60.169 15.614 81.534 8.584 22.088 20.07 40.82 38.743 59.495 18.674 18.673 37.405 30.159 59.493 38.743 21.366 8.302 45.783 13.98 81.535 15.612 35.827 1.634 47.266 2.021 138.49 2.021 91.222 0 102.661-.387 138.488-2.021 35.752-1.631 60.169-7.31 81.534-15.612 22.088-8.584 40.82-20.07 59.495-38.743 18.673-18.675 30.159-37.407 38.743-59.495 8.302-21.365 13.981-45.782 15.612-81.534 1.634-35.827 2.021-47.266 2.021-138.488 0-91.224-.387-102.663-2.021-138.49-1.631-35.752-7.31-60.169-15.612-81.534-8.584-22.088-20.07-40.822-38.743-59.495-18.675-18.673-37.407-30.159-59.495-38.743-21.365-8.302-45.782-13.981-81.534-15.612C438.556.387 427.117 0 335.895 0zm0 60.521c89.686 0 100.31.343 135.729 1.959 32.75 1.493 50.535 6.965 62.37 11.565 15.68 6.094 26.869 13.372 38.622 25.126 11.755 11.754 19.033 22.944 25.127 38.622 4.6 11.836 10.072 29.622 11.565 62.371 1.616 35.419 1.959 46.043 1.959 135.73 0 89.687-.343 100.311-1.959 135.73-1.493 32.75-6.965 50.535-11.565 62.37-6.094 15.68-13.372 26.869-25.127 38.622-11.753 11.755-22.943 19.033-38.621 25.127-11.836 4.6-29.622 10.072-62.371 11.565-35.413 1.616-46.036 1.959-135.73 1.959-89.694 0-100.315-.343-135.73-1.96-32.75-1.492-50.535-6.964-62.37-11.564-15.68-6.094-26.869-13.372-38.622-25.127-11.754-11.753-19.033-22.943-25.127-38.621-4.6-11.836-10.071-29.622-11.565-62.371-1.616-35.419-1.959-46.043-1.959-135.73 0-89.687.343-100.311 1.959-135.73 1.494-32.75 6.965-50.535 11.565-62.37 6.094-15.68 13.373-26.869 25.126-38.622 11.754-11.755 22.944-19.033 38.622-25.127 11.836-4.6 29.622-10.072 62.371-11.565 35.419-1.616 46.043-1.959 135.73-1.959"/><path d="M335.895 447.859c-61.838 0-111.966-50.128-111.966-111.964 0-61.838 50.128-111.966 111.966-111.966 61.836 0 111.964 50.128 111.964 111.966 0 61.836-50.128 111.964-111.964 111.964zm0-284.451c-95.263 0-172.487 77.224-172.487 172.487 0 95.261 77.224 172.485 172.487 172.485 95.261 0 172.485-77.224 172.485-172.485 0-95.263-77.224-172.487-172.485-172.487m219.608-6.815c0 22.262-18.047 40.307-40.308 40.307-22.26 0-40.307-18.045-40.307-40.307 0-22.261 18.047-40.308 40.307-40.308 22.261 0 40.308 18.047 40.308 40.308"/></g></svg>
</a>
<a href="https://google.com/differtopia">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#000"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#000"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#000"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#000"/><path d="M1 1h22v22H1z" fill="none"/></svg>
</a>
<a href="https://facebook.com/differtopia">
 <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 40 40">
  <linearGradient id="a" x1="-277.375" x2="-277.375" y1="406.6018" y2="407.5726" gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#0062e0"/>
    <stop offset="1" stop-color="#19afff"/>
  </linearGradient>
  <path fill="#000" d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"/>
  <path fill="#FFF" d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"/>
</svg>
</a>
</div>
<script src="./resources/js/main.js" async></script>

'.$GLOBALS['singleusejs'].'
</footer>
</div>
</body>
</html>
';
}

if($request == '/portfolio/differtopia' || $request == '/portfolio/differtopia/'){$request = '/portfolio/differtopia/home';}

 switch($request){
  case '/portfolio/differtopia/home':
  case '/portfolio/differtopia/inicio':
  $singleusecss = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /><link rel="stylesheet" type="text/css" href="./resources/css/home/general.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /><link rel="stylesheet" type="text/css" href="./resources/css/home/home-header.css">';
  $singleusejs = '<script src="./resources/js/home.js" async></script><script src="./resources/js/home-header.js" async></script>';
  open('/home.html');
  break; 
  case '/portfolio/differtopia/services':
  case'/portfolio/differtopia/serviços':
  case'/portfolio/differtopia/servicos':
  case '/portfolio/differtopia/servico':
  case '/portfolio/differtopia/serv':
  $singleusecss = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /><link rel="stylesheet" type="text/css" href="./resources/css/home/general.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /><link rel="stylesheet" type="text/css" href="./resources/css/serv/general.css">';
  $singleusejs = '<script src="./resources/js/services.js" async></script>';
  open('/services.html');
  break;
  default: 
  http_response_code(404);
  open('404.html');
  break;
 }
