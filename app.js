const toggleNavBarBtn= document.querySelector('.toggleNavBar');
const allnavlinks =document.querySelector('.allnavlinks');

toggleNavBarBtn.addEventListener('click',()=>{

allnavlinks.classList.toggle('activeNavBar');
});