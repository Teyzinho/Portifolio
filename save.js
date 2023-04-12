const target = document.querySelectorAll('[data-text]');
const animationClass = 'animate';
const animationRemove = 'remove';


function carrocelRight() {
    if(document.getElementById("carrocel1").checked){
        document.getElementById("carrocel2").checked = true;
    }else if (document.getElementById("carrocel2").checked){
        document.getElementById("carrocel3").checked = true;
    }

    var element = document.getElementById("arrowRight");

    if( document.getElementById("carrocel3").checked){
        element.classList.add("disable");
    }else{
        element.classList.add("able");
    }

    carrocel();
}

function carrocelLeft() {
    if(document.getElementById("carrocel3").checked){
        document.getElementById("carrocel2").checked = true;
    }else if (document.getElementById("carrocel2").checked){
        document.getElementById("carrocel1").checked = true;
    }

    var element = document.getElementById("arrowLeft");

    if( document.getElementById("carrocel1").checked){
        element.classList.add("disable");
    }else{
        element.classList.add("able");
    }

    carrocel();
}

const carrocelContainer1 = document.getElementById("carrocelContainer1");

function carrocel() {

    if (document.getElementById("carrocel1").checked) {
        // Adiciona Animação do slide
        var element = document.getElementById("carrocelContainer1");
        carrocelContainer1.classList.add("centro");
        var element = document.getElementById("carrocelContainer2");
        element.classList.add("direita1");
        var element = document.getElementById("carrocelContainer3");
        element.classList.add("direita2");
        var element = document.getElementById("backgroundCarrocelImg");
        element.classList.add("addOpacity");

        //Adiciona animação do texto
        var element = document.getElementById("carrocelText1");
        element.classList.add(animationClass);

    } else {
        //Remove animação do slide
        var element = document.getElementById("carrocelContainer1");
        element.classList.remove("centro");
        var element = document.getElementById("carrocelContainer2");
        element.classList.remove("direita1");
        var element = document.getElementById("carrocelContainer3");
        element.classList.remove("direita2");
        var element = document.getElementById("backgroundCarrocelImg2");
        element.classList.remove("addOpacity");
        var element = document.getElementById("backgroundCarrocelImg3");
        element.classList.remove("addOpacity");

        //Remove animação do texto
        var element = document.getElementById("carrocelText1");
        element.classList.add(animationRemove);
        var element = document.getElementById("carrocelText1");
        element.classList.remove(animationClass);
        setTimeout(function esconder(){
            var element = document.getElementById("carrocelText1");
            element.classList.remove(animationRemove);
        }, 400); 
    }


    if (document.getElementById("carrocel2").checked) {
        // Adiciona Animação do slide
        var element = document.getElementById("carrocelContainer1");
        element.classList.add("esquerda1");
        var element = document.getElementById("carrocelContainer2");
        element.classList.add("centro");
        var element = document.getElementById("carrocelContainer3");
        element.classList.add("direita1");
        var element = document.getElementById("backgroundCarrocelImg2");
        element.classList.add("addOpacity");

        //Adiciona animação do texto
        var element = document.getElementById("carrocelText2");
        element.classList.add(animationClass);
    } else {
        //Remove animação do slide
        var element = document.getElementById("carrocelContainer1");
        element.classList.remove("esquerda1");
        var element = document.getElementById("carrocelContainer2");
        element.classList.remove("centro");
        var element = document.getElementById("carrocelContainer3");
        element.classList.remove("direita1");
        var element = document.getElementById("backgroundCarrocelImg2");
        element.classList.remove("addOpacity");
        
        //Remove animação do texto
        var element = document.getElementById("carrocelText2");
        element.classList.add(animationRemove);
        var element = document.getElementById("carrocelText2");
        element.classList.remove(animationClass);
        setTimeout(function esconder(){
            var element = document.getElementById("carrocelText2");
            element.classList.remove(animationRemove);
        }, 400); 

    }


    if (document.getElementById("carrocel3").checked) {
        // Adiciona Animação do slide
        var element = document.getElementById("carrocelContainer1");
        element.classList.add("esquerda2");
        var element = document.getElementById("carrocelContainer2");
        element.classList.add("esquerda1");
        var element = document.getElementById("carrocelContainer3");
        element.classList.add("centro");
        var element = document.getElementById("backgroundCarrocelImg3");
        element.classList.add("addOpacity");

        //Adiciona animação do texto
        var element = document.getElementById("carrocelText3");
        element.classList.add(animationClass);
    } else {
        //Remove animação do slide
        var element = document.getElementById("carrocelContainer1");
        element.classList.remove("esquerda2");
        var element = document.getElementById("carrocelContainer2");
        element.classList.remove("esquerda1");
        var element = document.getElementById("carrocelContainer3");
        element.classList.remove("centro");
        var element = document.getElementById("backgroundCarrocelImg3");
        element.classList.remove("addOpacity");


        //Remove animação do texto
        var element = document.getElementById("carrocelText3");
        element.classList.add(animationRemove);
        var element = document.getElementById("carrocelText3");
        element.classList.remove(animationClass);
        setTimeout(function esconder(){
            var element = document.getElementById("carrocelText3");
            element.classList.remove(animationRemove);
        }, 400); 
    }
}
