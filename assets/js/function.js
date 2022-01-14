/**
 * get element function
 * return get element
 */
function qs(value){
    return document.querySelector(value);
}

// Timing function start
const hour = qs('#hour');
const minit = qs('#minit');
const sec = qs('#second');
const milisec = qs('#milisecond');
const time = new Date();

let msec = setInterval( function() {
    milisec.innerText = time.getMilliseconds();
},1000)
