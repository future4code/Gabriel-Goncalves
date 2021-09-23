import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components'

const ZerarPadrões = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Gabriel Luiz Gonçalves" 
          descricao="Oi, meu nome é Gabriel. Sou um desenvolvedor em crescimento buscando cada vez mais conhecimentos e oportunidades para gerar valor por onde eu passar."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Saiba um pouco mais"
        />
      </div>

      <div>
        <CardPequeno
        imagem='https://image.flaticon.com/icons/png/512/561/561127.png'
        titulo='Email: '
        texto='Email@email.com.br'
        />

        <CardPequeno
        imagem='https://image.flaticon.com/icons/png/512/1483/1483285.png'
        titulo='Endereço: '
        texto='Rua das Avenidas, bairro Nárnia, N° 2345678'
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eff3d7d4dba18a22ca203c8_Logo_Labenu_vertical.png" 
          nome="Labenu" 
          descricao="Onde iniciei minha trajetória como desenvolvedor, nunca ganhando soluções fáceis, mas sim, sempre sendo instigado a buscar formas de resolver problemas por mim mesmo." 
        />
        
        <CardGrande 
          imagem="http://4.bp.blogspot.com/-VJULiLnXTHg/UAV2Br0aObI/AAAAAAAAAXc/9yjGAT2oBNY/s1600/BRASAO+UFV.jpg" 
          nome="UFV" 
          descricao="Aqui conquistei grandes oportunidades de por em prática habilidades de relacionamento pessoal que favoreceram minha carreira profissional que antecede a programação." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
