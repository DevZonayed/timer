countStart.onclick = () => {
  if (countSystem.value == "backwards") {
    if (fromTime.value == "") {
        fromTime.style.cssText = `
        border:2px solid red;
    `;
    } else {
      backward();
    countStop.removeAttribute("disabled");
      timerstatus = true;
      btnstart();
    }
  } else {
    forward();
    countStop.removeAttribute("disabled");
    timerstatus = true;
    btnstart();
  }
  fromTime.value = '';
};

countStop.onclick = () => {
  clickstop++;
  if (countSystem.value == "backwards") {
    if (clickstop % 2) {
      clearInterval(backcount);
      countStop.innerText = "Resume";
      countStop.classList.remove('btn-warning');
      countStop.classList.add('btn-success');
    } else {
      backward();
      countStop.innerText = "Stop";
      countStop.classList.add('btn-warning');
      countStop.classList.remove('btn-success');
    }
  }else{
    if (clickstop % 2) {
        clearInterval(backcount);
        countStop.innerText = "Resume";
      countStop.classList.remove('btn-warning');
      countStop.classList.add('btn-success');
      } else {
        forward();
        countStop.innerText = "Stop";
      countStop.classList.add('btn-warning');
      countStop.classList.remove('btn-success');
      } 
  }
};

countReset.onclick = () => {
    countStop.innerText = "Stop";
    countStop.classList.add('btn-warning');
    countStop.classList.remove('btn-success');
    countStop.setAttribute("disabled", "");
  clearInterval(backcount);
  timerstatus = false;
  btnstart();
  msecnd = 0;
  secnd = 0;
  munite = 0;
  hourr = 0;
  clickstop = 0;
  milisec.innerText = `00`;
  sec.innerText = `00`;
  minit.innerText = `00`;
  hour.innerText = `00`;
};
function btnstart() {
  if (timerstatus == true) {
    countStart.classList.remove("btn-primary");
    countStart.classList.add("btn-secondary");
    countStart.setAttribute("disabled", "");
  } else {
    countStart.classList.add("btn-primary");
    countStart.classList.remove("btn-secondary");
    countStart.removeAttribute("disabled");
  }
}

countSystem.addEventListener("change", () => {
    countReset.click();
  countSystem.value == "forward"
    ? inputTime.classList.add("d-none")
    : inputTime.classList.remove("d-none");
});
