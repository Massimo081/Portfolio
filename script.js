function darkmode(){
    var element = document.body;
    element.classList.toggle("darkmode");
}

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('.subtitulo');
typeWrite(titulo);

function Menu(){
    var menu = document.getElementById("menuvert");
    if(menu.style.display === "none"){
        menu.style.display="block"
    }
    else{
        menu.style.display="none"
    }

}

window.sr  = ScrollReveal({reset:true});

sr.reveal('.faixaMedia',{duration: 1400});

sr.reveal('.faixaMedia2',{duration: 1400});

sr.reveal('.faixaPequena',{duration: 1900});

sr.reveal('.faixaPequena2',{duration: 1900});

sr.reveal('.barraLateral',{duration: 2000});