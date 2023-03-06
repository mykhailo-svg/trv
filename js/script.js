const inputPlaceHolder = document.querySelector('.footer__input__placeholder');

const inputElem = document.querySelector('.footer__input__elem');



inputElem.addEventListener('click', function ()  {
    if(!inputPlaceHolder.classList.contains('footer__placeholder__top')){
        inputPlaceHolder.classList.add('footer__placeholder__top');
    }
});



const burgerButton = document.querySelector('.burger__button__clickable');

const burgerBody = document.querySelector('.burger__body') ;

const burgerDecors = document.querySelectorAll('.burger__decor');

const mainBody = document.querySelector('body');



burgerButton.addEventListener('click', function ()  {
    mainBody.classList.toggle('body__noScroll');

    if(burgerBody.classList.length<2){
        burgerBody.classList.add('burger__show');
    }
    else{
        burgerBody.classList.toggle('burger__hide');
        burgerBody.classList.toggle('burger__show');
    }

    for (let i = 0; i < burgerDecors.length; i++) {
        burgerDecors[i].classList.toggle('burger__dec__active');
        
    }

});
