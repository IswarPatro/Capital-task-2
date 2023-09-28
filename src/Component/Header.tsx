import React from 'react'
import {Row,Col,Select, Button,Divider} from 'antd';
import { Typography } from 'antd';
import {FaTag} from "react-icons/fa";
import {RiUserVoiceLine} from "react-icons/ri";
import {HiOutlineUserPlus} from "react-icons/hi2";
import {HiOutlineUserMinus} from "react-icons/hi2";
import {MailOutlined,DownOutlined} from '@ant-design/icons';

const { Title } = Typography;
const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log(value);
};


const Header:React.FC = () => {
    
    
  return (
    <>
    <Row>
        <Col span={8} style={{textAlign:"left"}}>
            <Title style={{color:"blue"}} level={3}>
            London Internship Program
            <Title style={{marginTop:0}}level={5}>London</Title>
            </Title>
        </Col>
        <Col span={16} style={{marginLeft:0,marginTop:10,marginRight:0}}>
            <Select
            labelInValue
            defaultValue={{ value: 'lucy', label: 'Lucy (101)' }}
            style={{ width: 350,height:33,}}
            onChange={handleChange}
            options={[
                {
                value: 'jack',
                label: 'Jack (100)',
                },
                {
                value: 'lucy',
                label: 'Lucy (101)',
                },
            ]}
            />
            <span style={{marginLeft:50}}>
            <Button size="middle"style={{marginRight:5}}>
            <FaTag style={{color:"blue",fontSize:15}}/>
            </Button> 
            <Button size="middle"style={{marginRight:5}}>
            <HiOutlineUserMinus style={{color:"red",fontSize:15}}/>
            </Button> 
            <Button size="middle"style={{marginRight:5}}>
            <HiOutlineUserPlus style={{fontSize:15}}/>
            </Button> 
            <Button size="middle"style={{marginRight:5}}>
            <RiUserVoiceLine style={{color:"blue",fontSize:15}}/>
            </Button> 
            <Button size="middle"style={{marginRight:5}}>
            <MailOutlined style={{color:"blue",fontSize:15}}/>
            </Button> 
            <Divider type="vertical" style={{fontSize:30}} />
            <Button size="middle" type="primary" style={{borderRadius:"5px 0px 0px 5px",border:"0.5px solid #e3f1fa"}}>Move To Video Interview</Button>
            <Button size="middle" type="primary" style={{borderRadius:"0px 5px 5px 0px",padding:"3px 5px",border:"0.5px solid #e3f1fa"}}><DownOutlined/></Button>            
            </span>
                     
            
        </Col>
    </Row>
    </>
  )
}

export default Header