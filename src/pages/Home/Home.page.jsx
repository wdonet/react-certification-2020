import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import { Header, HomeView } from '../../components';
import './Home.styles.css';

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
      <Header />
      {authenticated ? (
        <>
          <HomeView>
            <Link to="/" onClick={deAuthenticate}>
              logout
            </Link>
          </HomeView>
        </>
      ) : (
        <>
          <HomeView>
            <Link to="/" onClick={deAuthenticate}>
              logout
            </Link>
          </HomeView>
        </>
      )}
    </section>
  );
}

export default HomePage;
