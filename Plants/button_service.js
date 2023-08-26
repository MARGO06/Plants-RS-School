const buttons = document.querySelectorAll(".button_choice");
const gardens = document.querySelectorAll(".card__garden");
const plantings = document.querySelectorAll(".card__planting");
const lawn = document.querySelector(".card__lawn");
let activeButtons = [];

function notHover(){
    buttons.forEach(button=>{
        button.addEventListener('mouseover',event=>{
            if(activeButtons.length === 2 && !event.target.classList.contains('active')){
                event.target.classList.add("no-hover");
            }else{
                event.target.classList.remove("no-hover");
            }
          })
        })
}

function showButtons () {
    buttons.forEach(button=>{
        button.addEventListener('click',event=>{
            
    //only two buttons active
    if( activeButtons.length === 0 || (!event.target.classList.contains('active') &&  activeButtons.length === 1)){
        event.target.classList.add('active');
        activeButtons.push(event.target.classList.contains('active'));
    } 
    else if ( event.target.classList.contains('active') ){
       event.target.classList.remove('active');
       activeButtons.splice(activeButtons.indexOf(event.target.classList.contains('active')));
    }

//one card
    if(buttons[0].classList.contains('active')){
        lawn.classList.add('active');
        plantings.forEach(planting=>{
            planting.classList.add('active');
        })
    }
    else if(buttons[1].classList.contains('active')){
        gardens.forEach(garden=>{
            garden.classList.add('active');
        })
        plantings.forEach(planting=>{
            planting.classList.add('active');
        })
    }
    else if(buttons[2].classList.contains('active')){
        gardens.forEach(garden=>{
            garden.classList.add('active');
        })
        lawn.classList.add('active');
    }
    else{
        gardens.forEach(garden=>{
            garden.classList.remove('active');
        })
        lawn.classList.remove('active');
        plantings.forEach(planting=>{
            planting.classList.remove('active');
        })
    }

//two buttons
    if( activeButtons.length === 2 && !buttons[2].classList.contains('active')){
        lawn.classList.remove('active');
        gardens.forEach(garden=>{
            garden.classList.remove('active');
        });
    }
     
    if( activeButtons.length === 2 && !buttons[1].classList.contains('active')){
        plantings.forEach(planting=>{
            planting.classList.remove('active');
        })
        gardens.forEach(garden=>{
            garden.classList.remove('active');
        });
    }
    
    if( activeButtons.length === 2 && !buttons[0].classList.contains('active')){
        lawn.classList.remove('active');
        plantings.forEach(planting=>{
            planting.classList.remove('active');
        })
    }
});
})
}

export {showButtons, notHover}