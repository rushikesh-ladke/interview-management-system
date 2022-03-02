import React from 'react';
import './login.scss';

import { Button, Card, Tooltip } from 'antd';
import { Input } from 'antd';
import {
  InfoCircleOutlined,
  UserOutlined,
  ReconciliationTwoTone ,
} from '@ant-design/icons';
import { loginPageText } from '../../util/english';

const Login = () => {
  return (
    <div className='login-card'>
      <div className='content'>
        <Card bordered={false} style={{ width: 350 }}>
          <div className='brand-logo'>
          <ReconciliationTwoTone twoToneColor="#52c41a" className='brand-logo-icon' />
          </div>
          <Input
            placeholder={loginPageText.email}
            prefix={<UserOutlined className='site-form-item-icon' />}
            suffix={
              <Tooltip title={loginPageText.extraInfo}>
                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
          />
          <div className='generic-padding'></div>
          <Input.Password placeholder={loginPageText.password} />
          <div className='generic-padding'></div>
          <Button type='primary' block shape='round'>
          {loginPageText.login}
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Login;