const target = document.querySelectorAll('[data-text]');
const animationClass = 'animate';
const animationRemove = 'remove';

function carrocelRight() {
    if (document.getElementById("carrocel1").checked) {
        document.getElementById("carrocel2").checked = true;
    } else if (document.getElementById("carrocel2").checked) {
        document.getElementById("carrocel3").checked = true;
    }
    carrocel();
}

function carrocelLeft() {
    if (document.getElementById("carrocel3").checked) {
        document.getElementById("carrocel2").checked = true;
    } else if (document.getElementById("carrocel2").checked) {
        document.getElementById("carrocel1").checked = true;
    }

    carrocel();
}

const carrocelContainer1 = document.getElementById("carrocelContainer1");
const carrocelContainer2 = document.getElementById("carrocelContainer2");
const carrocelContainer3 = document.getElementById("carrocelContainer3");
const backgroundCarrocelImg = document.getElementById("backgroundCarrocelImg");
const backgroundCarrocelImg2 = document.getElementById("backgroundCarrocelImg2");
const backgroundCarrocelImg3 = document.getElementById("backgroundCarrocelImg3");
const carrocelText1 = document.getElementById("carrocelText1");
const carrocelText2 = document.getElementById("carrocelText2");
const carrocelText3 = document.getElementById("carrocelText3");


function carrocel() {

    if (document.getElementById("carrocel1").checked) {
        // Adiciona Animação do slide
        carrocelContainer1.classList.add("centro");
        carrocelContainer2.classList.add("direita1");
        carrocelContainer3.classList.add("direita2");
        backgroundCarrocelImg.classList.add("addOpacity");

        //Adiciona animação do texto
        carrocelText1.classList.add(animationClass);

    } else {
        //Remove animação do slide
        carrocelContainer1.classList.remove("centro");
        carrocelContainer2.classList.remove("direita1");
        carrocelContainer3.classList.remove("direita2");
        backgroundCarrocelImg2.classList.remove("addOpacity");
        backgroundCarrocelImg3.classList.remove("addOpacity");

        //Remove animação do texto
        carrocelText1.classList.add(animationRemove);
        carrocelText1.classList.remove(animationClass);

        setTimeout(function esconder() {
            carrocelText1.classList.remove(animationRemove);
        }, 400);
    }


    if (document.getElementById("carrocel2").checked) {
        // Adiciona Animação do slide
        carrocelContainer1.classList.add("esquerda1");
        carrocelContainer2.classList.add("centro");
        carrocelContainer3.classList.add("direita1");
        backgroundCarrocelImg2.classList.add("addOpacity");

        //Adiciona animação do texto
        carrocelText2.classList.add(animationClass);
    } else {
        //Remove animação do slide
        carrocelContainer1.classList.remove("esquerda1");
        carrocelContainer2.classList.remove("centro");
        carrocelContainer3.classList.remove("direita1");
        backgroundCarrocelImg2.classList.remove("addOpacity");

        //Remove animação do texto
        carrocelText2.classList.add(animationRemove);
        carrocelText2.classList.remove(animationClass);
        setTimeout(function esconder() {
            carrocelText2.classList.remove(animationRemove);
        }, 400);

    }

    if (document.getElementById("carrocel3").checked) {
        // Adiciona Animação do slide
        carrocelContainer1.classList.add("esquerda2");
        carrocelContainer2.classList.add("esquerda1");
        carrocelContainer3.classList.add("centro");
        backgroundCarrocelImg3.classList.add("addOpacity");

        //Adiciona animação do texto
        carrocelText3.classList.add(animationClass);
    } else {
        //Remove animação do slide
        carrocelContainer1.classList.remove("esquerda2");
        carrocelContainer2.classList.remove("esquerda1");
        carrocelContainer3.classList.remove("centro");
        backgroundCarrocelImg3.classList.remove("addOpacity");


        //Remove animação do texto
        carrocelText3.classList.add(animationRemove);
        carrocelText3.classList.remove(animationClass);
        setTimeout(function esconder(){
            carrocelText3.classList.remove(animationRemove);
        }, 400); 
    }
}

//Scroll animation

//Otimização do javaScript
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };





const alvo = document.querySelectorAll ('[data-anime]');
const classeAnimacao = 'animar';


function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight *2.5) /4); //constante que verifica a distância da barra de Scroll do topo
    alvo.forEach(function(element){ //Mostra a distância da barra de scroll do topo de cada elemento
        if((windowTop) > element.offsetTop){
            element.classList.add(classeAnimacao);
        } else {
            element.classList.remove(classeAnimacao);
        }

        //console.log(element.offsetTop); Mostra a distância da barra de scroll do topo dos elementos
    })
    
   // console.log(windowTop) //Mostra a distância da barra de scroll do topo
}

animeScroll();

if(alvo.length) { //se Não tiver objeto animado a função fica desabilitada
window.addEventListener('scroll', debounce(function(){
    animeScroll();
}, 100));
}