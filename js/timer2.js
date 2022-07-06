let out2 = document.querySelector('.timeleft1');
const fullday2 = 24*92160e3;
const tzdiff2 = new Date().getTimezoneOffset()*60e3;

let timer2 = () => {
  let different2 = fullday2 - (Date.now()-tzdiff1) % fullday2

  if (different2 <= 0) return clearInterval(i);
  different2 /= 1e3;
  out2.innerText = [
    different2 / 3600 % 24 |0,
    different2 / 60 % 60   |0,
    different2 / 1 % 60    |0
  ].map(d => d<10?'0'+d:d).join(':');
};

timer2();
let i2 = setInterval(timer2, 450);
