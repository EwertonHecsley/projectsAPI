import './style.css';

const botao = document.querySelector('.btn')
const nome = document.querySelector('.nome-personagem');
const imagem = document.querySelector('.img-personagem');
console.log(imagem)

const puxaPersonagem = (event)=>{
    event.preventDefault();

    const urlCharacters = 'https://rickandmortyapi.com/api/character'

    fetch(urlCharacters)
    .then((resolver)=> resolver.json())
    .then((data)=>{
        const aleatorio  = data.results[Math.floor(Math.random()*19)]
        nome.innerHTML = aleatorio.name
        imagem.src = aleatorio.image

    })
    .catch((error)=>error.message)
}

botao.addEventListener('click',puxaPersonagem)