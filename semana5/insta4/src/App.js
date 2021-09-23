import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    postsRecolocados: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'lorival',
        fotoUsuario: 'https://i.picsum.photos/id/351/50/50.jpg?hmac=5-oFGrlcRCd0RTV7EOyGeXFU0x8SjfyWvWHatGeQeBA',
        fotoPost: 'https://i.picsum.photos/id/400/200/150.jpg?hmac=wKjdRjyAZu6tPoEhl8AtH4gUDQHfRfwp5cHTjWPyRFQ'
      },
      {
        nomeUsuario: 'donizete',
        fotoUsuario: 'https://i.picsum.photos/id/724/50/50.jpg?hmac=VMK53Oyno-1J5fS9K4l4LB-M4eMEJsublUDq5801BNA',
        fotoPost: 'https://i.picsum.photos/id/84/200/150.jpg?hmac=gcABdgufdz9Kc-4ncDzg0snrTuDYIXZrVfeJbrY2DQU'
      }
    ]
  }
  render() {
    const listaDePosts = this.state.postsRecolocados.map((objeto) => {
      this.setState(
        <Post>
          {objeto.nomeUsuario}
          {objeto.fotoUsuario}
          {objeto.fotoPost}
        </Post>
      )
    })
    return (
        <MainContainer>
            <div>{listaDePosts}</div>
        </MainContainer>
    );
  }
}

export default App;
