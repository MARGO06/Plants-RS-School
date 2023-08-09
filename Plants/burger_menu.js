const menu = document.querySelector('.header__icon');
const navigation = document.querySelector('.header__navigation');
const body = document.body;

function burgerMenu(){
if(menu && navigation){
    menu.addEventListener('click',(e)=>{
      menu.classList.toggle('active');
      navigation.classList.toggle('active');
      body.classList.toggle('lock');
})  
  navigation.addEventListener('click', ()=>{
  if(menu.classList.contains('active')) {
      menu.classList.remove('active');
      navigation.classList.remove('active');
  }})
}
}

export {burgerMenu}