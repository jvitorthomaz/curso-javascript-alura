//como vai buscar no documento html, necessita do document.
var botaoAdicionar = document.querySelector("#adicionar-pacientes")

botaoAdicionar.addEventListener("click", function(event){
    
    event.preventDefault()//funcao que previne o comportamento padrao

    var form = document.querySelector("#form-adiciona")

    //Extraindo informaçoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form)

    var erros = validaPaciente(paciente)
    
    if(erros.length > 0){
        exibeMensagensDeErro(erros)
        return
    }

    //Adicionando o paciente na tabela
    adicionaPacienteNaTabela(paciente)

    form.reset()

    var mensagensErro = document.querySelector("#mensagens-erro")
    mensagensErro.innerHTML = ""
})


function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente

}

function montaTr(paciente) {
    // passa o nome da tag que se deseja criar. Neste caso, a tag tr
    var pacienteTr = document.createElement('tr') 

    //Metodo add adiciona uma classe
    pacienteTr.classList.add("paciente")

    //Para cada tr, coloca um filho que vai ser um td que ela vai criar com a funcao montaTd
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

    return pacienteTr
}

function montaTd(dado, classe) {
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaPaciente(paciente) {
    var erros = []
    //adiconar condiçao que verifica se o % de gordura que o usuario esta tentando adicionar é valido
    // == faz a compraçao
    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco!")
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido!")
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida!")
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco!")
    }

    if (paciente.peso.length == 0) {      
        erros.push("O peso não pode ser em branco!")
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco!")
    }

    return erros
}


function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro")

    //innerHTML permite controlar o html interno de um elemento
    ul.innerHTML = ""

    erros.forEach(function(erro){
        var li = document.createElement("li")   
        li.textContent = erro
        ul.appendChild(li)//para colocar a li dentro da ul usa-se .appendChild
    });
}


function adicionaPacienteNaTabela(paciente) {
    //Cria a tr e a td do pacinete 
    var pacienteTr = montaTr(paciente)
    var tabela = document.querySelector("#tabela-pacientes")        
    tabela.appendChild(pacienteTr)
    
}