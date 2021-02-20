import React, { useRef } from 'react';
import Card from '../../components/Card';
import mockedData from "../../youtube-videos-mock.json";
import Styled from "./styled";

const { items } = mockedData;

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <Styled.Title>Welcome to the Challenge!</Styled.Title>
          <Styled.HomeGrid> 
          {items.map(({ etag, snippet }) => (
              <Card
                key={etag}
                title={snippet.title}
                description={snippet.description}
                imgUrl={snippet.thumbnails.medium.url}
              />
            ))}

          </Styled.HomeGrid>

    </section>
  );
}

export default HomePage;
