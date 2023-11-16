import CreateSession from "./session.js"

//Criação de sessao para o usuario
let session = new CreateSession()
session.Nova_sessao("usuario")

document.getElementById("logout").addEventListener("click",()=>{
  session.Esquecer_sessao()  
  window.location.href = "http://127.0.0.1:5000/login"
})