import React from 'react';
import { Avatar, List,Checkbox } from 'antd';

const data = [
  {
    title: 'Aaliyah Sanderson',
    city:'Riyaadh,Saudi Arabia',
    uni:'Bachelor-Harvard University (2018-2023)'
  },
  {
    title: 'John Doe',
    city:'Bostom,USA',
    uni:'Bachelor-Harvard University (2018-2023)'
  },
  {
    title: 'Thomas Matt',
    city:'Edinburgh,UK',
    uni:'Bachelor-Harvard University (2018-2023)'
  },
  {
    title: 'Kamilia Smith',
    city:'London,UK',
    uni:'Bachelor-Harvard University (2018-2023)'
  },
  {
    title: 'Roy Jade',
    city:'New York,USA',
    uni:'Bachelor-Harvard University (2018-2023)'
  },
  {
    title: 'Ahmed Salman',
    city:'Cambridge,UK',
    uni:'Bachelor-Harvard University (2018-2023)'
  },
];

const ContentBox2: React.FC = () => (
  <List
    itemLayout="horizontal"
    style={{backgroundColor:"white",marginRight:10,borderRadius:10,marginLeft:-8}}
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item >
        <Checkbox style={{marginLeft:15}}/>
        <List.Item.Meta 
          avatar={< Avatar  style={{ backgroundColor: '#e3f1fa', color: '#1777b3',width:100,height:100,fontSize: 50,paddingTop:30,marginLeft:15}}>AS</Avatar>}
          title={<a href="https://ant.design">{item.title}</a>}
          description={item.city}         
        />
      </List.Item>
    )}
  />
);

export default ContentBox2;