import React from "react";

class Educacionais extends React.Component {
    render () {
        return <div>
                    <h1>Informações do Ensino Superior</h1>
                    <label for='curso'>5. Qual o curso?</label> <br/>
                    <input type="text" id="curso"/> <br/>
                    <label for='unidade'>6. Qual unidade de ensino</label> <br/>
                    <input type='text' id='unidade'/> <br/>
                    <button>Próxima Etapa</button>
                </div>
    }
}

export default Educacionais