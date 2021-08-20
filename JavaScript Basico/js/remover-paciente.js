var pacientes = document.querySelectorAll(".paciente")

var tabela = document.querySelector("table")
  //CONCERTAR: FUNCIONALIDADE DE DUPLO CLIQUE NAO ESTA FUNCIONANDO!!!!!
  //concerto feito! Porém só funcionou quando usei '' ao inves de "".
tabela.addEventListener('dblclick', function(event) { //event fala qual filho foi clicado

    event.target.parentNode.classList.add("fadeOut")
    setTimeout(function() {
        event.target.parentNode.remove()
    }, 500)

    /*
    Se nao houvesse a funcaionalidade setTimeout, seria apagado instantaneamente. Pois o navegador executa o codigo de forma muito rapida (nao conseguiria esperar os 0.5 seg para esvainecer e só entao apagar a linha).
    setTimeout, neste caso, faz com o o js espere 0.5s(500ms) para apagar a linha. Tempo suficiente para a classe css executar seu codigo.
    */
})

/*
pacientes.forEach(function(paciente) {
    //CONCERTAR: FUNCIONALIDADE DE DUPLO CLIQUE NAO ESTA FUNCIONANDO!!!!!
    paciente.addEventListener("click", function() { // dblclick  = duplo clique
        console.log("duplo clique")
        this.remove()//quem acionou o evento. A quem  evento estra atrelado. Neste caso, paciente.
        
    }) 
    
})
*/