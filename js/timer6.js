let out6 = document.querySelector('.timeleft6');
const fullday6 = 24*310e3;
const tzdiff6 = new Date().getTimezoneOffset()*60e3;

let timer6 = () => {
  let different6 = fullday6 - (Date.now()-tzdiff1) % fullday6

  if (different6 <= 0) return clearInterval(i);
  different6 /= 1e3;
  out6.innerText = [
    different6 / 3600 % 24 |0,
    different6 / 60 % 60   |0,
    different6 / 1 % 60    |0
  ].map(d => d<10?'0'+d:d).join(':');
};

timer6();
let i6 = setInterval(timer6, 450);
