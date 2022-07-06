const openPopUp=document.getElementById('open_pop_up');
const closePopUp=document.getElementById('pop_up_close');
const popUp=document.getElementById('pop_up');
const body = document.querySelector('body');

openPopUp.addEventListener('click',function(e){
    e.preventDefault();
    popUp.classList.add('active');
    body.classList.toggle('lock');
})

closePopUp.addEventListener('click',()=>{
    popUp.classList.remove('active');
    body.classList.remove('lock');
})
