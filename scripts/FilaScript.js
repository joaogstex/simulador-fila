let fila = []
let tamanho;
function definirTamanho(){
   tamanho = document.getElementById("input-tamanho").value;

   if(tamanho > 20){
        document.getElementById("input-tamanho").value = 20;
        tamanho = 20;
        alert("O tamanho da fila deve ser de no máximo 20")
   }else if(tamanho < 1){
    document.getElementById("input-tamanho").value = 1;
    tamanho = 1;
    alert("O tamanho da fila deve ser de no mínimo 1")
   }else{
     document.getElementById("input-tamanho").value = "";
   }

   criarFila()
}

function criarFila(){
   
        const numsElement = document.getElementById("fila-number");
        numsElement.innerHTML = "";
        numsElement.innerHTML += "<td>" + "Fim" + "</td>";
        for(let i = fila.length-1; i >= 0; i--){
            
            numsElement.innerHTML += "<td>" + fila[i] + "</td>";
          
        }
    
        numsElement.innerHTML += "<td>" + "Inicio" + "</td>";
}


function enfileirar(elemento){
    if(fila.length < tamanho){
        fila.push(elemento);
        criarFila()
    }else if(fila.length >= tamanho){
        alert("Fila cheia!")
    }
}

function desenfileirar(){
    let removido = fila.shift();
    criarFila()
    return removido;
}

function estaVazia(){
    return fila.length == 0;
}

function espiar(){
    return fila.length != 0 ? fila[0] : alert("Fila Vazia");
}

function getTamanho(){
    return fila.length;
}



