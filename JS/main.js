function clickSom(idElementoAudio){ 
   const elemento = document.querySelector(idElementoAudio)

   if(elemento === null){
        alert('elemento não encontrado')
   }else{
        if(elemento.localName === 'audio'){
            elemento.play()
        }
   }
}

const listaTeclas = document.querySelectorAll('.tecla')

for(let contador = 0; contador < listaTeclas.length; contador+=1){

    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];

    //template strings
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        clickSom(idAudio);
    }
    //adicionar o estado de tecla ativa quando acionar com qualquer tecla
    tecla.onkeydown = function (event){
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa')
        }
    }
    //remover o estado de tecla ativa após o uso
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
    }
}
