var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente")

    if (this.value.length > 0) {

    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i]
        //Dentro do paciente, basca uma td que tem classe .info-nome
        var tdNome = paciente.querySelector(".info-nome")
        var nome = tdNome.textContent
        //Usando expressão regular new RegExp(o que voce quer que ela busque, como: maiusculas ou minusculas ou se nao faz diferença)
        var expressao = new RegExp(this.value, "i")

        // testa se (nome) tem ao menos um pedaço do que tem na expressao
        if (!expressao.test(nome)) { 
            paciente.classList.add("invisivel")
            
        } else {
            paciente.classList.remove("invisivel")
        }
       }

    }else{
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i]
            paciente.classList.remove("invisivel")
            
            
        }
    }

})