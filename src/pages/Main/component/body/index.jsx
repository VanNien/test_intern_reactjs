import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.min.css';
import { Tabs, Row,Col, Card,Avatar, Space, Image } from 'antd';
import axios from "axios";
import {HeartFilled,EyeFilled} from  '@ant-design/icons';
import "./index.css"
// import { Container } from './styles';


const { TabPane } = Tabs;

function Body() {
    const [Data, setData] = useState("");
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(        
              "https://yts.torrentbay.to/api/v2/list_movies.json"
            );
            const selectData = {
                movies: response.data.data.movies?.map(( items ) => ({
                    id: items.id,
                    title: items.title,
                    background_image : items.background_image,
                })),            
              };
            setData(selectData);
        }
        getData();
     },[]);
  return (
    <Tabs defaultActiveKey="1">
    <TabPane
      tab={
        <span>
         Motion trend pick
        </span>
      }
      key="1">
    
      <Row gutter={[16, 20]} justify="space-around">
      {
       Data && Data.movies?.map(({ id,title, background_image }) => {
        return (
          <Col span={6} key={id}>
           <Card className='card_item'
              hoverable
              cover={<img style={{height: 170}} alt="Modern Design" src={background_image} 
              />}
              >     
              <div className='item_detail'> 
                    <p className='icon_avatar'>
                    <span >
                    <Avatar shape={'circle'} size={25}
                    src={<Image src="https://joeschmoe.io/api/v1/random"
                      />}>              
                    </Avatar> &ensp;
                    {title.substring(0,10)} </span>
                    </p>
                    <p className='icon_feeling'>
                      <span> <HeartFilled/> 18 </span>
                      <span> <EyeFilled /> 18 </span>
                      </p>
                </div>         
            </Card>     
          </Col>
        );
        })}
    </Row>
    </TabPane>
    <TabPane
      tab={
        <span>
          Lastest
        </span>
      }
      key="2"
    >
      Tab 2
    </TabPane>
    <TabPane
      tab={
        <span>
          Recommended
        </span>
      }
      key="3"
    >
      Tab 3
    </TabPane>
  </Tabs>

  );
}

export default Body;