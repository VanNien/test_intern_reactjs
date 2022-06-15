import { Button, Card, Col, Divider, Row } from 'antd';
import React, {Component} from 'react';
import Slider from "react-slick";
import {LeftCircleFilled, RightCircleFilled} from '@ant-design/icons';
import "../menu/index.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 6,
      slidesToScroll: 1,
     
    };
    return (
      <div >
       
        <div className='absolute_menu_left' onClick={this.previous}>
          <LeftCircleFilled  style={{ fontSize: '45px', color: "#ff2e43"}}/></div>
          
        <div className='absolute_menu_right' onClick={this.next}>
          <RightCircleFilled  style={{ fontSize: '45px', color: "#ff2e43"}}/></div>

        <Slider ref={c => (this.slider = c)} {...settings}  >
        
        <div >
        <Card  className='card_menu'><p className='Experimental '>Editing</p>
        </Card>
        </div>
        <div >
        <Card  className='card_menu' ><p className='Experimental '>Camera Action, Angle</p></Card>  
        </div>
        <div >
        <Card  className='card_menu' ><p className='Experimental '>Sound, Beat</p></Card> 
        </div>
        <div >
        <Card  className='card_menu' style={{backgroundColor: " #ff2e43"}} ><p className='Experimental '>Experimental</p></Card>
        </div>
        <div >
        <Card  className='card_menu' ><p className='Experimental '>Graphical</p></Card>    
        </div>
        
        <div >
        <Card  className='card_menu' ><p className='Experimental '>Elements</p></Card> 
        </div>
        <div >
        <Card  className='card_menu' ><p className='Experimental '>Car</p></Card>       
        </div>
        <div >
        <Card  className='card_menu' ><p className='Experimental '>Gun</p></Card> 
        </div>
        <div >
        <Card  className='card_menu' ><p className='Experimental '>More</p></Card> 
        </div>
        <div >
        <Card className='card_menu'><p className='Experimental '>More</p></Card>
        </div>
               


        </Slider>
      </div>
    );
  }
}