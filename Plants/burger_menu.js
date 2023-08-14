const menu = document.querySelector('.header__icon');
const navigation = document.querySelector('.header__navigation');
const body = document.body;

function burgerMenu(){
if(menu && navigation){
    menu.addEventListener('click',(e)=>{
      menu.classList.toggle('active');
      navigation.classList.toggle('active');
      body.classList.add('lock');
})  
  navigation.addEventListener('click', ()=>{
  if(menu.classList.contains('active')) {
      menu.classList.remove('active');
      navigation.classList.remove('active');
      body.classList.remove('lock');
  }})
}

const anchors = document.querySelectorAll('a[href*="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click',event =>{
            event.preventDefault();
            const blockID = anchor.getAttribute('href').substring(1);
            document.getElementById(blockID).scrollIntoView({
                behavior:'smooth',
                block:'start'
            })
        })
    })
}

export {burgerMenu}