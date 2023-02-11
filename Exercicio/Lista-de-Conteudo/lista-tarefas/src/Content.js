import React from "react";

const conteudos = [
    {
        nome: 'JavaScript',
        bloco: 9,
        status: 'Já aprendi',
    },
    {
        nome: 'Composição de Componentes',
        bloco: 10,
        status: 'Estou aprendendo',
    },
    {
        nome: 'Composição de Estados',
        bloco: 11,
        status: 'aprendedrei',
    },
    {
        nome: 'Redux',
        bloco: 15,
        status: 'aprenderei',
    }
]

class Content extends React.Component {
    render() {

        return (
            <div className="div-central">
                <ul className="content">
                    {conteudos.map(({ nome, bloco, status }) => (
                        <li key={nome} className="card">
                            <p>{`Eu ${status} o conteúdo ${nome} no bloco ${bloco}`}</p>
                        </li>
                    ))}
                </ul>
            </div>


        )
    }
}

export default Content