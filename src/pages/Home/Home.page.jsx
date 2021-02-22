import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import mockedData from '../../utils/mocked-youtube.json';
import VideoList from '../../components/VideoList';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  const { items } = mockedData;

  return (
    <section ref={sectionRef}>
      {authenticated || true ? (
        <VideoList
          title="Welcome to Orlando's YouTube Client"
          items={items}
          filter="videos"
        />
      ) : (
        <Link to="/login">let me in →</Link>
      )}
    </section>
  );
}

export default HomePage;
