let out5 = document.querySelector('.timeleft5');
const fullday5 = 24*100e4;
const tzdiff5 = new Date().getTimezoneOffset()*60e3;

let timer5 = () => {
  let different5 = fullday5 - (Date.now()-tzdiff1) % fullday5

  if (different5 <= 0) return clearInterval(i);
  different5 /= 1e3;
  out5.innerText = [
    different5 / 3600 % 24 |0,
    different5 / 60 % 60   |0,
    different5 / 1 % 60    |0
  ].map(d => d<10?'0'+d:d).join(':');
};

timer5();
let i5 = setInterval(timer5, 450);
