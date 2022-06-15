import React from 'react';
import styled from 'styled-components';
import Body from './component/body';
import Header from './component/header';
import Menu from './component/menu';
import "../Main/index.css"
import Footer from './component/footer';
// import { Container } from './styles';

function Main() {
  return (
    <Container>
      <div className="main">
        <Header/>
        <Menu/>
        <div className="body">
          <Body/>
        </div>
        <Footer/>
        </div>
    </Container>

  );

}
const Container = styled.div
`   

`;
export default Main;