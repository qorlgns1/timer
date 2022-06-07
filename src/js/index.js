// Selectors
const startButton = document.querySelector(".button-start");
const resetButton = document.querySelector(".button-reset");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

// Events
startButton.addEventListener("click", handleTimerStart);
resetButton.addEventListener("click", handleTimerReset);

function handleTimerStart(e) {
  e.preventDefault();

  const timer = {
    hour: hour.value * 60 * 60 * 1000,
    minute: minute.value * 60 * 1000,
    second: second.value * 1000,
  };

  // let time = timer.hour + timer.minute + timer.second;
  // let min =
  // PlAYTIME = setInterval(function () {
  //   time = time - 1000; //1초씩 줄어듦
  //   min = time / (60 * 1000); //초를 분으로 나눠준다.

  //   if (sec > 0) {
  //     //sec=60 에서 1씩 빼서 출력해준다.
  //     sec = sec - 1;
  //     Timer.value = Math.floor(min) + ":" + sec; //실수로 계산되기 때문에 소숫점 아래를 버리고 출력해준다.
  //   }
  //   if (sec === 0) {
  //     // 0에서 -1을 하면 -59가 출력된다.
  //     // 그래서 0이 되면 바로 sec을 60으로 돌려주고 value에는 0을 출력하도록 해준다.
  //     sec = 60;
  //     Timer.value = Math.floor(min) + ":" + "00";
  //   }
  // }, 1000); //1초마다

  // setTimeout(function () {
  //   clearInterval(PlAYTIME);
  // }, 180000);
}

function handleTimerReset(e) {
  e.preventDefault();

  hour.value = "00";
  minute.value = "00";
  second.value = "00";
}
