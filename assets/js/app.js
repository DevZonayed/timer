const countSystem = qs('#countSystem');
const inputTime = qs('.input-time');
const fromTime = qs('#fromtime');



countSystem.addEventListener('change' , () => {
    (countSystem.value == 'forward')?inputTime.classList.add('d-none'):inputTime.classList.remove('d-none');
})