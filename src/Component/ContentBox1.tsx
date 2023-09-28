import React from 'react'
import {Input,Tooltip, List,Typography} from 'antd';
import { InfoCircleOutlined, SearchOutlined,FileTextOutlined,DownOutlined } from '@ant-design/icons';

const data = [
  'Personal Information',
  'Education',
  'Work Experience',
  'Activity Filter',
  'Advanced Filter',
];
const ContentBox1:React.FC = () => {
  return (
    <>
    <Input
      placeholder="Search by name,edu,exp or #tag'"
      style={{height:50,marginBottom:10,width:400,borderRadius:10}}
      prefix={<SearchOutlined className="site-form-item-icon" />}
      suffix={
        <Tooltip title="Extra information">
          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
        </Tooltip>
      }
    />
      <List
        header={
        <span>Filter <span style={{marginLeft:250}}>0 Selected</span></span>
      }
        bordered
        style={{backgroundColor:"white",width:400,borderRadius:10}}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text>
              <FileTextOutlined style={{marginRight:10}} />
              {item}
            </Typography.Text>
            
            <DownOutlined style={{color:"blue"}}/>
          </List.Item>
        )}
      />
    </>
  )
}

export default ContentBox1