var nome = document.getElementById("nome");
var idade = document.getElementById("idade");
var profissao = document.getElementById("profissao");

function criarPessoa(){
	verificaCampos();
}

function limparCampos(){
	document.getElementById("nome").value = "";
	document.getElementById("idade").value = "";
	document.getElementById("profissao").value = "";
}

function isNull(id){
	if(id.value == ""){
		return true;
	}
	return false;	
}

function verificaCampos(){
	if( (isNull(nome)) || (isNull(idade)) || (isNull(profissao)) ){
		window.alert("Nenhum Campo pode ficar vazio!");
	}

	else{
		var pessoa = {
			"nome": nome.value,
			"idade": idade.value,
			"profissao": profissao.value
		};

		console.log(
			"Nome: " + pessoa.nome + "\n" +
			"Idade: "+ pessoa.idade + "\n" +
			"Profissão: " + pessoa.profissao
		);

		limparCampos();
	}
}