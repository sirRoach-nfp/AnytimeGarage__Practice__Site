

const burger = document.querySelector('.burger')
const navMenu = document.querySelector('.navWrapper__navMenu')


burger.addEventListener('click',()=>{
    navMenu.classList.toggle('active')
})