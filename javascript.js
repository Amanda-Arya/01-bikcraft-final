const links = document.querySelectorAll('.header-menu a');
function ativarLink(link){
    const url = location.href;
    const href = link.href;
    
    if (url.includes(href)){
        link.classList.add("ativo");
    }

}
links.forEach(ativarLink);

// ativar itens do orcamento

const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro){
    const elemento = document.getElementById(parametro);
    
    elemento.checked = true;
    console.log(parametro);
}
parametros.forEach(ativarProduto);

// perguntas frequentes
// toggle adiciona e remove

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// galeria de bicicletas 

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event){
    const img = event.currentTarget;
    const media = matchMedia("(min-width:1000px)").matches;
    console.log(media);
    if(media){
        galeriaContainer.prepend(img); 
    }
}

function eventosGaleria(img){
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

// metodo prepend remove um item e coloca outro no lugar
// function trocarImagem(event){
//     const img = event.currentTarget;
//     galeriaContainer.prepend(img);   
// }


// animação
if(window.SimpleAnime){
    new SimpleAnime();
}

