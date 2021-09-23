import React from 'react';

class Gerais extends React.Component {
    render () {
        return <div>
            <h1>Informações Gerais de Ensino</h1>
            <label for='naoTerminou'>5. Por que você não terminou um curso de gradução?</label> <br/>
            <input type='text' id='naoTerminou'/> <br/>
            <label for='complementar'>6. Você fez algum curso complementar?</label> <br/>
            <select id='complementar'>
                <option value='Nenhum'>Nenhum</option>
                <option value='Curso Técnico'>Curso Técnico</option>
                <option value='Curso de Inglês'>Curso de Inglês</option>
            </select> <br/>
            {/* <button>Próxima Etapa</button> */}
        </div>
    }
}

export default Gerais