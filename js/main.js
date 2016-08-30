$(document).ready(function () {
    
    console.log('Script is running!');
    
    // ПРЕДЗАГРУЗКА
    $(window).load(function(){
        $('.preloader').fadeOut('slow',function(){$(this).remove();});
    });

    //PLACEHOLDER показать/скрыть
    var sText = $('#s-text');
    sText.focus (function () {
        $(this).attr('placeholder', '');
    });
    sText.focusout (function() {
        $(this).attr('placeholder', 'YOUR MAIL');
    });
    
    //СООБЩЕНИЕ ОБ УСПЕШНОЙ ПОДПИСКЕ
    var formMsg = $('.form-msg');
    var submitBtn = $('#submit-btn');
    var flag = 0;
    formMsg.fadeOut();
    
    submitBtn.on('click', function(){
        if (flag === 0) {
        formMsg.html('You have subscribed successfully! <i class="fa fa-check" aria-hidden="true"></i>');
        formMsg.fadeIn(500);   
        flag = 1;   
        setTimeout (function(){
            formMsg.fadeOut(600, function(){ flag=0;});   
        }, 2000);

        }
    });
 
    //ОБРАТНЫЙ ОТСЧЁТ   
    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }

    function initializeClock(id, endtime) {  
      var clock = document.getElementById(id);
      var daysSpan = $('#days');
      var hoursSpan = $('#hours');
      var minutesSpan = $('#minutes');
      var secondsSpan = $('#seconds');

      function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.html(t.days);
        hoursSpan.html(('0' + t.hours).slice(-2));
        minutesSpan.html(('0' + t.minutes).slice(-2));
        secondsSpan.html(('0' + t.seconds).slice(-2));

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = new Date(Date.parse(new Date()) + 20 * 24 * 60 * 60 * 1000);
    initializeClock('countdown', deadline);

});
