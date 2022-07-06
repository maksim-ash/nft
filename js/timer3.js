let out3 = document.querySelector('.timeleft2');
const fullday3 = 24*19100e3;
const tzdiff3 = new Date().getTimezoneOffset()*60e3;

let timer3 = () => {
  let different3 = fullday3 - (Date.now()-tzdiff1) % fullday3

  if (different3 <= 0) return clearInterval(i);
  different3 /= 1e3;
  out3.innerText = [
    different3 / 3600 % 24 |0,
    different3 / 60 % 60   |0,
    different3 / 1 % 60    |0
  ].map(d => d<10?'0'+d:d).join(':');
};

timer3();
let i3 = setInterval(timer3, 450);
