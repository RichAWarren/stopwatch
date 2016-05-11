var minute = 0;
var second = 0;
var milisecond = 0;
var running = 0 // 0 if not running, 1 if

function update() {
  document.getElementById("time").innerHTML = zeropad(minute) + ":" + zeropad(second) + ":" + zeropad(milisecond);
};

function zeropad(num) {
    var s = "000000000" + num;
    return s.substr(s.length-2);
};

var run = function () {
  if (milisecond !== 0 && milisecond % 99 === 0) { //if there are 100 miliseconds
    if (second !== 0 && second % 59 === 0) { //if there are 60 seconds
      minute++;
      second = 0;
    } else {
      second++;
    };
    milisecond = 0;
  } else {
    milisecond++;
  };
  update();
};

var intervalId;

function start() {
  if (running === 0) {
    intervalId = setInterval (run, 10);
  };
  running = 1;
};

function stop() {
  clearInterval(intervalId);
  running = 0;
};

function reset() {
  minute = 0;
  second = 0;
  milisecond = 0;
  update();
}
