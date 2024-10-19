// Aqui o escutador indentifica se o botão foi clicado("focus") e executa a função entrar 
document.getElementById("btn-cad").addEventListener(("focus"), entrar);
function entrar() {
    window.location.href = "cad.html"; //*endereço da página*//
}

// Chama as divs do projeto
let barraBusca = document.querySelector(".barra-busca");
let pesquisarBox = document.querySelector(".pesquisar-box");
let closeBox = document.querySelector(".close-box");

// Arrow function que adiciona a personalização CSS "Abrir", após o click na div citada
pesquisarBox.addEventListener("click", () => {
    barraBusca.classList.add('abrir');
    document.getElementById("buscaInput").value = "";
})
// Arrow function que remove a personalização CSS "Abrir", após o click na div citada

closeBox.addEventListener("click", () => {
    barraBusca.classList.remove('abrir');

})

