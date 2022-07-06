document.addEventListener('DOMContentLoaded', function() {
    const deadline = new Date("2022,6,28");
    let Id = null;
    function declensionNum(n, w) {
      return w[(n % 100 > 4 && n % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(n % 10 < 5) ? n % 10 : 5]];
    }
    function countTimer() {
      const difference = deadline - new Date();
      if (difference <= 0) {
        clearInterval(timerId);
      }
      const days = difference > 0 ? Math.floor(difference / 1000 / 60 / 60 / 24) : 0;
      const hours = difference > 0 ? Math.floor(difference / 1000 / 60 / 60) % 24 : 0;
      const minutes = difference > 0 ? Math.floor(difference / 1000 / 60) % 60 : 0;
      const seconds = difference > 0 ? Math.floor(difference / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
      $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
      $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    const $days = document.querySelector('.timer_days');
    const $hours = document.querySelector('.timer_hours');
    const $minutes = document.querySelector('.timer_minutes');
    const $seconds = document.querySelector('.timer_seconds');
    countTimer();
    Id = setInterval(countTimer, 1000);
  });
