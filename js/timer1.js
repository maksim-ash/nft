let out1 = document.querySelector('.timeleft');
const fullday1 = 24*31600e3;
const tzdiff1 = new Date().getTimezoneOffset()*60e3;

let timer1 = () => {
  let different1 = fullday1 - (Date.now()-tzdiff1) % fullday1

  if (different1 <= 0) return clearInterval(i);
  different1 /= 1e3;
  out1.innerText = [
    different1 / 3600 % 24 |0,
    different1 / 60 % 60   |0,
    different1 / 1 % 60    |0
  ].map(d => d<10?'0'+d:d).join(':');
};

timer1();
let i1 = setInterval(timer1, 450);
