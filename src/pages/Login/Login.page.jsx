import React from 'react';
import { Modal, Input, Button, Row, Col, Form } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

function LoginPage() {
  const history = useHistory();
  const { login, logout, authenticated } = useAuth();

  const handleClose = () => {
    history.goBack();
  };

  const handleFinish = async (values) => {
    await login(values.username, values.password);
    history.goBack();
  };

  const handleLogOut = async () => {
    await logout();
    history.push('/');
  };

  return (
    <Modal
      title={authenticated ? 'Are you sure?' : 'Log in'}
      visible
      onCancel={handleClose}
      footer={null}
    >
      {authenticated ? (
        <Row align="center">
          <Button block size="large" type="primary" onClick={handleLogOut}>
            Log out
          </Button>
        </Row>
      ) : (
        <Form name="login" onFinish={handleFinish}>
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Row gutter={[8, 8]}>
                <Col span={24}>
                  <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please enter your username' }]}
                  >
                    <Input
                      aria-label="input-username"
                      placeholder="Enter username"
                      size="large"
                      prefix={<UserOutlined />}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please enter your password' }]}
                  >
                    <Input.Password
                      aria-label="input-password"
                      placeholder="Password"
                      size="large"
                      prefix={<LockOutlined />}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Button
                  aria-label="button-signin"
                  block
                  size="large"
                  type="primary"
                  htmlType="submit"
                >
                  Sign in
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )}
    </Modal>
  );
}

export default LoginPage;
