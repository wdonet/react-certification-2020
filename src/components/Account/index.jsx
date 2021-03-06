import React from 'react';
import { Link } from 'react-router-dom';
import { AccountIcon, Dropdown, Button } from './styled';
import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';
import { useAuth } from '../../providers/Auth';

const Account = () => {
  const { logout } = useAuth();
  const [openDrop, setOpenDrop] = React.useState(false);
  const isLogged = storage.get(AUTH_STORAGE_KEY);
  const logIn = (
    <Link to="/login">
      <span>LogIn</span>
    </Link>
  );
  const logOut = <Button onClick={() => logout()}>LogOut</Button>;

  return (
    <div>
      <AccountIcon
        onClick={() => {
          setOpenDrop(!openDrop);
        }}
      />
      <Dropdown openDrop={openDrop} onClick={() => setOpenDrop(!openDrop)}>
        {isLogged ? logOut : logIn}
      </Dropdown>
    </div>
  );
};

export default Account;
