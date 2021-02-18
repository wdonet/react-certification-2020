import React from 'react';
import { Row } from 'antd';
import Thumbnail from 'components/Thumbnail';
import styled from 'styled-components';
import { VIDEOS } from 'mockData/youtube-videos-mock';

const StyledHomePage = styled.div`
  margin: 0.5rem 1rem;
`;

const HomePage = () => {
  const listVideos = (videos) =>
    videos.map((video) => <Thumbnail key={video.etag} data={video} />);

  return (
    <StyledHomePage>
      <Row gutter={[16, 22]}>{listVideos(VIDEOS.items)}</Row>
    </StyledHomePage>
  );

  // return (
  //   <section className="homepage" ref={sectionRef}>
  //     <h1>Hello stranger!</h1>
  //     {authenticated ? (
  //       <>
  //         <h2>Good to have you back</h2>
  //         <span>
  //           <Link to="/" onClick={deAuthenticate}>
  //             ← logout
  //           </Link>
  //           <span className="separator" />
  //           <Link to="/secret">show me something cool →</Link>
  //         </span>
  //       </>
  //     ) : (
  //       <Link to="/login">let me in →</Link>
  //     )}
  //   </section>
  // );
};

export default HomePage;
