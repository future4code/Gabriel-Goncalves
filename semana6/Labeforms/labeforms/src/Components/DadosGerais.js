import React from "react";
// import styled from 'styled-components'

/* const Layout = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
` */

class DadosGerais extends React.Component {
    render () {
        return  <div>
                    <h1>Dados Gerais</h1>
                    <label for="nome">1. Qual o seu nome?</label> <br/>
                    <input type="text" id="nome"/> <br/>
                    <label for="idade">2. Qual sua idade?</label> <br/>
                    <input type="text" id="idade"/> <br/>
                    <label for="email">3. Qual o seu email?</label> <br/>
                    <input type="text" id="email"/> <br/>
                    <label for="escolaridade">4. Qual a sua escolaridade?</label> <br/>
                    <select id='escolaridade'>
                        <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                        <option value="Ensino médio completo">Ensino médio completo</option>
                        <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                        <option value="Ensino superior completo">Ensino superior completo</option>
                    </select> <br/>
                    <button>Próxima Etapa</button>
                </div>
    }
  
}

export default DadosGerais