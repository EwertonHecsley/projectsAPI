
const divHerois = document.querySelector('#herois');
const botao = document.querySelector('#botao')


const timeStamp = '1675521514'
const apiKeyPublic = 'b10cea6eda8e1022c2c41a122e6584a7'
const md5 = '40e800f8504ee1a400360112b8cbe682'


const criaNome = async () => {

    const paragrafo = document.createElement('p');

    const response = await fetch(`http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${apiKeyPublic}&hash=${md5}`);

    const url = await response.json()

    console.log(url.data.results[Math.round(Math.random()*20)])

    const titulo = url.data.results[Math.round(Math.random()*20)].title
    paragrafo.innerHTML = titulo
    divHerois.appendChild(paragrafo) 
}

botao.addEventListener('click', () => criaNome())