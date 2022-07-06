let out4 = document.querySelector('.timeleft4');
const fullday4 = 24*1622100e3;
const tzdiff4 = new Date().getTimezoneOffset()*60e3;

let timer4 = () => {
  let different4 = fullday4 - (Date.now()-tzdiff1) % fullday4

  if (different4 <= 0) return clearInterval(i);
  different4 /= 1e3;
  out4.innerText = [
    different4 / 3600 % 24 |0,
    different4 / 60 % 60   |0,
    different4 / 1 % 60    |0
  ].map(d => d<10?'0'+d:d).join(':');
};

timer4();
let i4 = setInterval(timer4, 450);
