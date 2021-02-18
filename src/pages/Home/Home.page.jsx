import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import videos from '../../providers/mock/youtube-videos-mock.json';

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
      <div className="sidebar toggle-sidebar">
        <ul>
          <li>Home</li>
          <li>Favorites</li>
        </ul>
      </div>
      <div className="main">
        <div className="header-panel">
          <div className="ui icon button toggle-button">
            <i className="bars icon"></i>
          </div>
          <input type="text" className="search-input" placeholder="Search..."/>
          <div className="control-panel">
            <div className="ui toggle checkbox">
              <input type="checkbox" />
              <label>Dark mode</label>
            </div>
            <div className="ui red button">
              <i className="sign in alternate icon"></i>
              Sign In
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          { videos.items.map(video => {
            return (
              <div className="ui card">
                <div className="content">
                  <div className="header">{video.snippet.channelTitle}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <h1>Hello stranger!</h1>
      {authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )} */}
    </section>
  );
}

export default HomePage;
