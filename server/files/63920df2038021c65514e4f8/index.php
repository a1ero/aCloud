<!doctype html>
<html lang="ru">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Ремонт 18</title>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.all.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
  <script src="js/jquery-3.6.1.min.js"></script>
  <script src="js/head_fixed.js"></script>
  <script defer src="js/simple-adaptive-slider.js"></script>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.min.css'>
  <link rel="stylesheet" href="font-awesome/css/font-awesome.css">
  <link rel="stylesheet" href="css/simple-adaptive-slider.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/media.css">
  <link rel="stylesheet" href="css/callback.css">
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      new ItcSimpleSlider('.itcss', {
        loop: true,
        autoplay: true,
        swipe: true
      });
    });
  </script>
  <link rel="icon" href="pictures/favicon.png" type="image/x-icon">
</head>
<body>
  <header class="head">
    <div class="place">
        <a href=""><p2 style="font-size: 13px; color: red;">Ижевск</p2></a>
        <div class="dropdown_contact">
          <a href=""><span style="font-size: 13px; margin-left: 12px;">Контакты</span></a>
          <div class="dropdown-contact-content">
            <a href="tel:+79043185629"><img style="width: 15px; height: 15px; margin-right: 10px" src="pictures/phone.svg" alt=""><span>8 (904) 831-56-29</span></a>
            <a href="https://t.me/"><img style="width: 15px; height: 15px; margin-right: 10px" src="pictures/telegram.svg" alt=""><span>Telegram</span></a>
            <a href=""><span></span></a>
          </div>
        </div> 
    </div>
    <div class="url">
        <a style="font-size: 13px;" href="">Услуги</a>
        <a style="padding-left:20px; font-size: 13px;" href="">Доставка</a>
        <a style="padding-left:20px; font-size: 13px;" href="">Оплата</a>
    </div>
  </header>
  <div class="head_second">
    <div class="slider_katalog">
      <input type="checkbox" id="side-checkbox" />
      <div class="side-panel">
        <label class="side-button-2" for="side-checkbox">+</label>    
        <div class="side-title">Меню</div>
        <form class="search_slider">
          <input class="search_slider_input" type="text" placeholder="Ищу...">
          <button class="btn" type="submit"></button>
        </form>
        <div class="dropdown_slider">
          <div class="dropdown-content_slider_1"><a href="">Напольные покрытия</a></div>
          <div class="dropdown-content_slider_2"><a href="">Аксессуары для полов</a></div>
          <div class="dropdown-content_slider_3"><a href="">Услуги</a></div>
          <div class="dropdown-content_slider_4"><a href="tel:+79043185629">8 (904) 831-56-29</a></div>
          <div class="dropdown-content_slider_5"><a href="">Доставка</a></div>
          <div class="dropdown-content_slider_6"><a href="">Оплата</a></div>
        </div>
      </div>
      <div class="side-button-1-wr">
        <label class="side-button-1" for="side-checkbox">
          <div class="side-b side-open"><img style="width: 45px; height: 45px;" src="pictures/menu.svg" alt=""></div>
          <div class="side-b side-close"></div>
        </label>
      </div>
      <div class="media_telegram">
        <a href=""><img src="pictures/telegram_head.svg" alt=""></a>
      </div>
    </div>
    <div class ="logo">
      <img class="logo_img" src="pictures/logo.png" alt="Ремонт 18">
    </div>
    <form class="search">
      <div style="display: flex;" class="dropdown">
        <a href=""><p2 style="color: white;">Каталог</p2></a>
        <div class="dropdown-content">
          <div class="dropdown_katalog">
            <a href=""><p2 style="color: #6F6E6E; padding-right: 37px;">Напольные покрытия</p2></a>
            <div class="dropdown-content_katalog">
              <a href="">Lorem, ipsum.</a>
              <a href="">Lorem, ipsum</a>
              <a href="">Lorem, ipsum</a>
              <a href="">Lorem, ipsum</a>
            </div>
          </div>
          <div class="dropdown_katalog_1">
            <a href=""><p2 style="color: #6F6E6E; padding-right: 37px;">Аксессуары для полов</p2></a>
            <div class="dropdown-content_katalog_1">
              <a href="">Lorem, ipsum.</a>
              <a href="">Lorem, ipsum</a>
              <a href="">Lorem, ipsum</a>
            </div>
          </div>
          <div class="dropdown-content_katalog_2">
            <a href="">Услуги</a>
          </div> 
        </div>
      </div>
      <input type="text" placeholder="Ищу...">
      <button class="btn" type="submit"></button>
    </form>
  </div>
  <div class="container">
    <div class="itcss">
      <div class="itcss__wrapper">
        <div class="itcss__items">
          <div class="itcss__item">
            <div style="height: 300px; background: #3f51b5;"></div>
          </div>
          <div class="itcss__item">
            <div style="height: 300px; background: #607d8b;"></div>
          </div>
          <div class="itcss__item">
            <div style="height: 300px; background: #f44336;"></div>
          </div>
          <div class="itcss__item">
            <div style="height: 300px; background: #4caf50;"></div>
          </div>
        </div>
      </div>
      <button class="itcss__btn itcss__btn_prev" role="button" data-slide="prev"></button>
      <button class="itcss__btn itcss__btn_next" role="button" data-slide="next"></button>
    </div>
      <div class="widget-callback">
        <div class="callback-button">
          <span class="callback-button-title">Вам перезвонить?</span>
          <span class="callback-button-phone"></span>
        </div>
        <div class="callback-form">
          <form action="mail.php" method="POST" id="callback-widget-form">
            <p style="margin-bottom: 30px; text-align: center; font-size: 14px;">Оставьте свой телефон и мы свяжемся с вами</p>
            <input style="width: 200px;" type="tel" id="" name="wgphone" placeholder="+7 (999) 999 99 99" required>
            <input type="hidden" id="" name="wgdata" value="Обратный звонок">
            <input type="submit">
          </form>
        </div>
      </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script>    
    	$(document).ready(function () {
          jQuery("#callback-widget-form").submit(function () {
            var formID = jQuery(this).attr('id');
            var formNm = jQuery('#' + formID);
            jQuery.ajax({
              type: "POST",
              cache: false,
              url: 'mail.php',
              data: formNm.serialize(),
              success: function (data) {  
                jQuery(formNm).reset;
                swal({
                    title: 'Спасибо!',
				    text: 'Ожидайте звонка!',
				    icon: 'success',
				    button: 'Супер!'
                })
              },
              error: function (jqXHR, text, error) {  
                jQuery(formNm).html(error);         
              }
            });
            return false;
          });
              jQuery('body').on('click', '.callback-button-phone', function (e) {
                e.preventDefault();
                jQuery('.widget-callback').toggleClass('widget-callback-form-open');
              });
            });
        </script>
    <div class="">
      
    </div>  
  </div>
</body>

</html>
