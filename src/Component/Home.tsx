import React from "react";
import {

    HomeOutlined,
    UserOutlined,
    TeamOutlined,
    CarryOutOutlined,
    ShareAltOutlined,
    FileTextOutlined, 
    LayoutOutlined,
    HeartOutlined,
    LeftOutlined,
    SettingOutlined,
  } from '@ant-design/icons';
  import '../index.css';
  import { Layout, Menu ,Row,Col,Avatar} from 'antd';
  
import HEADER from "./Header";
import ContentBox1 from "./ContentBox1";
import ContentBox2 from "./ContentBox2";



  
  
  const { Header, Sider, Content } = Layout;
  
  const Home: React.FC = () => {

  
    return (
      <Layout>
        <Sider theme="light" width="70px" className="sider"style={{minHeight:"100vh",position:"fixed"}}>
          <div className="demo-logo-vertical" />
          <Menu
            mode="inline"
            defaultSelectedKeys={['2']}
            items={[
              {
                key: '1',
                icon: < Avatar icon={<UserOutlined style={{marginLeft:7}}/>} style={{ fontSize: '100%',marginLeft:-12}}/>,
              },
              {
                key: '2',
                icon: <HomeOutlined style={{ fontSize: '100%',marginLeft:-5}} />,
              },
              {
                key: '3',
                icon: <TeamOutlined   style={{ fontSize: '100%',marginLeft:-5}}/>,
              },
              {
                key: '4',
                icon: <CarryOutOutlined  style={{ fontSize: '100%',marginLeft:-5}}/>,
              },
              {
                key: '5',
                icon: <ShareAltOutlined  style={{ fontSize: '100%',marginLeft:-5}} />,
              },
              {
                key: '6',
                icon: <FileTextOutlined   style={{ fontSize: '100%',marginLeft:-5}}/>,
              },
              {
                key: '7',
                icon: <LayoutOutlined style={{ fontSize: '100%',marginLeft:-5}}/>,
              },
              {
                key: '8',
                icon: <HeartOutlined  style={{ fontSize: '100%',marginLeft:-5}} />,
              },
              {
                key: '9',
                icon: <LeftOutlined  style={{ fontSize: '100%',marginLeft:-5}}/>,
              },

              
            ]}
          />
          <SettingOutlined  style={{ fontSize: '100%',marginLeft:25,marginTop:220,marginBottom:10,display:"flex"}}/>
          < Avatar style={{ backgroundColor: '#e3f1fa', color: '#1777b3',fontSize: '100%',marginLeft:15 }}>AS</Avatar>
        </Sider>
        <Layout style={{backgroundColor:"#e3f1fa"}}>
          <Header className="header" style={{
            background: "#e3f1fa",
            marginLeft:70
            }}>
            <HEADER/>            
          </Header>
          <Content
            style={{
              marginLeft:100,
              marginTop:10,
              padding: 24,
              minHeight: "100vh",
              background: "#e3f1fa",
            }}
          >
            <Row justify="space-between">
                <Col span={8}>
                  <ContentBox1/>
                </Col>
                <Col span={16}>
                  <ContentBox2/>
                </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default Home;