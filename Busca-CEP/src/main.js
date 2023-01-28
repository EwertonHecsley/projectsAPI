import './style.css';

const botao = document.querySelector('.btn-cep');
const campoCep = document.querySelector('#inp-cep');
const areaDeTexto = document.querySelector('#textArea');





async function clicou(){
    let informacao = campoCep.value;

    try {
        const result = await fetch(`https://viacep.com.br/ws/${informacao}/json/`);
        const data = await result.json();

        areaDeTexto.innerHTML = JSON.stringify(data);
        return data;
    } catch (error) {
        return error.message
    }
    
};

botao.addEventListener('click',clicou)