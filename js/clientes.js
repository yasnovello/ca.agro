function validaCampos() {
	var nome = form1.nome.value;
	var email = form1.email.value;
	var mensagem = form1.msg.value;

	if (nome == "" && nome > 3) {
		alert("Preencha o Campo Nome");
	} else {
		return false;
	}
	if (email == "" || email.indexOf('@') == -1 || email.indexOf('.') == -1) {
		alert("Informe um E-Mail válido");
	} else {
		return false;
	}
	if (mensagem == "") {
		alert("Escreva um mensagem valida");
	} else {
		alert("Mensagem Enviada Com Sucesso");
	}
}
