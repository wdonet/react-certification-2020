import React, { useRef } from 'react';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import VideosList from '../../components/VideosList';

function HomePage() {
  //  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated } = useAuth();

  /*  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }*/

  return (
    <section className="homepage" ref={sectionRef}>
      <VideosList title="Welcome to the Challenge!" />
      {authenticated ? <></> : <></>}
    </section>
  );
}

export default HomePage;
