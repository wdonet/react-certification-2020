import React from 'react';
import { useAuth } from '../../providers/Auth';
import { Image } from './styled';

const Avatar = () => {
  const { authenticated } = useAuth();

  const imgUrl = authenticated
    ? 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png'
    : 'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg';

  return <Image src={imgUrl} alt="photo" />;
};

export default Avatar;
