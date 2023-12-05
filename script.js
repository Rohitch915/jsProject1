let transition=document.querySelector('.transition-text');
let button=document.querySelector('.button');
let wrong_btn=document.querySelector('.wrong-btn');
let container=document.querySelector('.container');
button.addEventListener('click',function (e) {
    button.style.color='white';
    button.style.backgroundColor='transparent';
    transition.style.display='block';
    transition.style.animationName='transition';
})
wrong_btn.addEventListener('click',function(){
   
    transition.removeAttribute('animationName');
    transition.style.animationName='back-transition';
    transition.style.animationFillMode='forwards';
})
window.addEventListener('click',function(e){
    if(e.target===container ){
        transition.removeAttribute('animationName');
        transition.style.animationName='back-transition';
        transition.style.animationFillMode='forwards';
    }

})