//for the gredient button

$( document ).ready(function() {

    $("#animatebutton").click(function(){
    const element = document.querySelector('.animatebutton');
    element.classList.add('animated', 'rotateOutDownRight');
    setTimeout(function() {
    element.classList.remove('rotateOutDownRight');
    }, 1000);
    });
    
    
    });