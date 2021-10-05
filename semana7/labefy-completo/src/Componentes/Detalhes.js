import axios from 'axios';
import React from 'react';

class Detalhes extends React.Component {

    state = {
        detalhesDasListas: []
    }

    pegaDetalhes = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:${id}/tracks`
        const headers = {
            headers: {
                Authorization: "gabriel-goncalves-maryam"
            }
        }
        axios.get(url, headers)
        .then((response) => {
            this.setState({detalhesDasListas: response})
            alert(response)
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    render () {
        return (
            <div>
                Detalhes
                {this.pegaDetalhes()}
            </div>
        )
    }
}

export default Detalhes