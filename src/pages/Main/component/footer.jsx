import React from 'react';
import styled from 'styled-components';
import Image from '../../../assets/image';
import 'antd/dist/antd.min.css';
import { Row, Col, Space } from 'antd';
import {InstagramOutlined, FacebookFilled,YoutubeFilled} from '@ant-design/icons';
// import { Container } from './styles';


function Footer() {
    return (
  
        <Container>
       
         <Row className='bottom_box' id='one'>
           <Col flex={2} >
             <Space className="link" size={24}>
             <span > <b className='item_contact'> Contact </b></span>
             <span > motiontrend@test.com</span>
             </Space>
           </Col>
          
           <Col flex={3} >
            <div className="item_contact">
            <Space className="regis" size={10}>
             <span > @Motiontrend. All rights reserved.</span>
             <span className='icon_search'><InstagramOutlined /></span>
             <span className='icon_search'><FacebookFilled /></span>
             <span className='icon_search'><YoutubeFilled /></span>
             </Space>
             </div>
           </Col>
         </Row>


         <Row className='bottom_box' id='two'>
           <Col flex={2} >
             <Space className="link" size={24}>
             <span > Introduction </span>
             <span > Terms of Service</span>
             <span > Language</span>
             <span > Customer Service</span>
             </Space>
           </Col>
           
           <Col flex={3} >
            <div className="logo">
                <img src={Image.BLACK_LOGO} alt="LOGO"></img>
            </div>
           </Col>
         </Row>
         </Container>
       
         );
     };
     const Container = styled.div
     ` 
     .bottom_box{
         width: 100%;
         height: 20%;
         margin: 0 0 10px;
         padding: 20px 29px 12px;
         background-color: #070707;
         overflow: hidden;
         .logo{
            float: right;
         }
         .link {
             width: auto;
             float: left;
             font-family: Montserrat;
             font-size: 14px;
             font-weight: 500;
             font-stretch: normal;
             font-style: normal;            
             letter-spacing: normal;
             text-align: center;
             color: #8f8f8f;
             .item_contact
             {
                color:white;
             }
         }

         .regis{
            width: 100%;
             font-family: Montserrat;
             font-size: 14px;
             font-weight: 500;
             font-stretch: normal;
             font-style: normal;           
             letter-spacing: normal;
             text-align: center;
             color: #8f8f8f;
         }
    }
    .item_contact
        {
        display:flex;
        float: right;
     }   
     #two {
        background-color: #ffffff /* Red */;
      }
     `;

export default Footer;