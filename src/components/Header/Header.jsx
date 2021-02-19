import React from 'react';
import { Navbar, Form, Col } from 'react-bootstrap';
import { HiMenu } from 'react-icons/hi';

import { Button } from '../Buttons/Button';
import InputText from '../TextInput/TextInput';
import ProfileImage from '../ProfileImage/ProfileImage';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Col sm={6}>
        <Button>
          <HiMenu />
        </Button>
        <InputText placeholder="Search" />
      </Col>
      <Col sm={{ offset: 3, span: 3 }}>
        <Form inline>
          <Form.Check type="switch" id="custom-switch" label="Dark mode" />
          <ProfileImage src="https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0x00ffffff-no-rj" />
        </Form>
      </Col>
    </Navbar>
  );
}

export default Header;
