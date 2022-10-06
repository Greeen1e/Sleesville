var timerId =
  countdown(
    new Date(),
    function(ts) {
      document.getElementById('pageTimer').innerHTML = ts.toHTML("strong");
    },
    countdown.HOURS|countdown.MINUTES|countdown.SECONDS);

// later on this timer may be stopped
window.clearInterval(timerId);