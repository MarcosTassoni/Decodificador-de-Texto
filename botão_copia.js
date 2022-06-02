var botaoCopiar = document.querySelector(".btncopiar");


function btnCopiar()
{
	var mensagem_criptografada = document.querySelector('.mensagem');
	var campo_mensagem_original = document.querySelector('.input-texto');

	campo_mensagem_original.value = mensagem_criptografada.value;


}