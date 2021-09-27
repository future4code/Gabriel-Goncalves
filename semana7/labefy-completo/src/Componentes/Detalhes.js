import axios from 'axios';
import React from 'react';

class Detalhes extends React.Component {

    state = {
        detalhesDasListas: []
    }

    pegaDetalhes = () => {
        const url = ""
        const headers = {
            headers: {
                Authorization: "gabriel-goncalves-maryam"
            }
        }
        axios.get(url, headers)
        .then((response) => {
            this.setState({detalhes: response})
            console.log(response)
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    render () {
        return (
            <div>
                Detalhes
                {/* {this.pegaDetalhes()} */}
            </div>
        )
    }
}

export default Detalhes