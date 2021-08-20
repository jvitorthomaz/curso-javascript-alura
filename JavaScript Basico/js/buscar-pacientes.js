var botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", function(){
   // https://api-pacientes.herokuapp.com/pacientes
   // XMLHttpRequest() é um objeto do js, responsavel por fazer requisicoes http
   var xhr = new XMLHttpRequest()

   //Abrindo a conexao com o endereco
   //requisiçao do tipo GET para o endereço em questao
   xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")

   //quando a resposta estiver carregada(load), executa a funcao
    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax")

        //codigo de se a requisicao ocorreu com sucesso é 200(status)
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel")
            var resposta = xhr.responseText
            //Transformaçao: Pega um texto em json e devolve um objeto js
            var pacientes = JSON.parse(resposta)

            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente)
            })
        } else {
            //caso obtenha erro, mostra a mensagem
            console.log(xhr.status)
            console.log(xhr.responseText)
            erroAjax.classList.remove("invisivel")
        }

    })
   //responsavel por enviar. Pega a requisiçao criada e envia ela
   xhr.send()
})