import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import mockedData from "./mocked-youtube.json";
import Header from '../../components/Header'
import VideoCard from '../../components/VideoCard'

const { } = mockedData;

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <section className="homepage" ref={sectionRef}>
      {authenticated || true ? (
        <>
          <Header></Header>
          <h1>Welcome to my YouTube Custom Client!</h1>
          <VideoCard></VideoCard>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )}
    </section>
  );
}

export default HomePage;
