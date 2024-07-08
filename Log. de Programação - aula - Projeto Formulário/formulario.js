function Enviar(){
let nomeUsuario = document.getElementById('nome').value
let idadeUsuario = document.getElementById('idade').value
let escolaridade = document.getElementById('escolaridade').value
let numeroCelular = document.getElementById('numero').value
let emailUsuario = document.getElementById('email').value
let contatoUsuario = document.querySelector("input[name='Contactar']:checked").value

alert('seu nome é: ' + nomeUsuario + '\n' + 'Sua idade é: '+ idadeUsuario + '\n' + 'Seu nível de escolaridade é: ' + escolaridade + '\n' + 'Seu número é: ' + numeroCelular + '\n' + 'Seu email é: ' + emailUsuario + '\n\n' + 'Vamos contatar via: ' + contatoUsuario)

}