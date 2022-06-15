import React from 'react';
import styled from 'styled-components';
import Image from '../../../assets/image';
import 'antd/dist/antd.min.css';
import { Row, Col } from 'antd';
import {SearchOutlined} from '@ant-design/icons';
// import { Container } from './styles';

function Header () {
    return (
  
   <Container>
  
    <Row className='top_box'>
      <Col flex={2} className="logo" >
        <img src={Image.LOGO} alt="LOGO"></img>
      </Col>
      <Col flex={1} pull={2} className="link">
        <span > Discover </span>
        <span style={{marginLeft: "10px"}}> Job</span>
      </Col>
      <Col flex={8} pull={1}  className="search_box">
            <input type="search" id="search" placeholder="Search for motion trend......" class="keyword" />
      </Col>
      <Col flex={3} className="regis">
        <span className='icon_search'><SearchOutlined  style={{ fontSize: '20px' }}/></span>
        <span> Login</span>
        <span style={{marginLeft: "10px"}}> Sign up</span>
      </Col>
    </Row>
    </Container>
  
    );
};
const Container = styled.div
` 
.top_box{
    width: 100%;
    height: 20%;
    margin: 0 0 10px;
    padding: 20px 29px 12px;
    background-color: #070707;
    overflow: hidden;
    .logo {
        margin: 1px 40px 9px 0;
        object-fit: contain;
        float:left; 
    }
    .link {
        width: 60px;
        height: 12px;
        margin: 2px 30px 10px 40px;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.07;
        letter-spacing: normal;
        text-align: center;
        color: #8f8f8f;
    }
    .regis{
        width: 38px;
        height: 15px;
        margin: 1px 30px 10px 29px;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.07;
        letter-spacing: normal;
        text-align: center;
        color: #8f8f8f;
        .icon_search{
            margin-right: 10px;
            color: white;
        }
    }

    .search_box{
        display: inline-block;
        margin: 0 auto;
        outline: none;
        background-color: transparent;
    }
    #search {
        padding-top:3px;
        width: 90%;     
        border: 0;
        border-bottom: 1px solid white;
        background-color: transparent;
        outline: none;
        border-radius: 0;
        color: #fff;
      }
      
      input::placeholder {
       
        padding-left: 20px;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.07;
        letter-spacing: normal;
        text-align: left;
        color: #fff;
      }

}

`;
export default Header;