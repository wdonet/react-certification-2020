import React, { useRef } from 'react';
import { Section, Title } from './styled';
import Content from '../../components/Content';
import content from '../../jsons/youtube-videos-mock.json';

function HomePage() {
  const sectionRef = useRef(null);
  const items = content.items.slice(1);

  return (
    <Section className="homepage" ref={sectionRef}>
      <Title>Welcome to my challenge #1!</Title>
      <Content items={items} />
    </Section>
  );
}

export default HomePage;
