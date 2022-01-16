/**
 * get element function
 * return get element
 */
function qs(value) {
  return document.querySelector(value);
}

// Timing function start
const hour = qs("#hour");
const minit = qs("#minit");
const sec = qs("#second");
const milisec = qs("#milisecond");
const fromTime = qs("#fromtime");
const countSystem = qs("#countSystem");
const inputTime = qs(".input-time");
const countStart = qs("#countStart");
const countStop = qs("#countStop");
const countReset = qs("#countReset");
let clickstop = 0;

let msecnd = 0;
let secnd = 0;
let munite = 0;
let hourr = 0;
let timerstatus;
let backcount;

let msec = setInterval(function () {
  // milisec.innerText = `0${msecnd}`
  // msecnd ++
  // if(msecnd == 10){
  //     msecnd = 0
  //     secnd ++;
  //  }else{msecnd;}
  //  if(secnd == 60){
  //     secnd = 0;
  //     munite ++;
  //  }else{
  //      secnd = secnd;
  //  }
  //  if(munite == 60){
  //     munite = 0;
  //     hourr ++;
  //  }else{
  //      munite = munite;
  //  }
  //  if(hourr > 12){
  //     hourr = 0;
  //  }else{
  //      hourr = hourr;
  //  }
}, 100);

/**
 * munite filter to make houre
 */
fromTime.onkeyup = () => {
  if (fromTime.value >= 60) {
    hourr = parseInt(fromTime.value / 60);
    munite = fromTime.value % 60;
    minit.innerText = `${munite < 10 ? "0" + munite : munite}`;
    hour.innerText = `${hourr < 10 ? "0" + hourr : hourr}`;
    fromTime.style.cssText = `
        border: 1px solid #ced4da;
    `;
  } else if (/^[0-9]*$/.test(parseInt(fromTime.value)) != true) {
    fromTime.style.cssText = `
        border:2px solid red;
    `;
  } else {
    munite = fromTime.value;
    hour.innerText = `00`;
    minit.innerText = `${
      munite != "" ? (munite < 10 ? "0" + munite : munite) : "00"
    }`;
    fromTime.style.cssText = `
        border: 1px solid #ced4da;
    `;
  }

  console.log(/^[0-9]*$/.test(parseInt(fromTime.value)));
};

function forward() {
  backcount = setInterval(function () {
    msecnd++;
    if (msecnd > 9) {
      msecnd = 0;
      secnd++;
    }
    if (secnd >= 60) {
      minit++;
      hourr++;
    }

    milisec.innerText = `${msecnd < 10 ? "0" + msecnd : msecnd}`;
    sec.innerText = `${secnd < 10 ? "0" + secnd : secnd}`;
    minit.innerText = `${munite < 10 ? "0" + munite : munite}`;
    hour.innerText = `${hourr < 10 ? "0" + hourr : hourr}`;
  }, 100);
}

function backward() {
  backcount = setInterval(function () {
    msecnd--;
    if (hourr > 0 && secnd == 0 && msecnd == 0 && munite == 0) {
      hourr--;
      munite = 59;
      secnd = 59;
      msecnd = 9;
    } else if (secnd == 0 && msecnd == 0 && munite > 0) {
      munite--;
      secnd = 59;
      msecnd = 9;
    } else if (secnd > 0 && msecnd == 0) {
      secnd--;
      msecnd = 9;
    } else if (hourr == 0 && secnd == 0 && msecnd == 0 && munite == 0) {
      clearInterval(backcount);
      countStop.setAttribute("disabled", "");
      timerstatus = false;
      btnstart();
    } else if (msecnd < 0) {
      msecnd = 9;
    }

    milisec.innerText = `${msecnd < 10 ? "0" + msecnd : msecnd}`;
    sec.innerText = `${secnd < 10 ? "0" + secnd : secnd}`;
    minit.innerText = `${munite < 10 ? "0" + munite : munite}`;
    hour.innerText = `${hourr < 10 ? "0" + hourr : hourr}`;
  }, 100);
}
