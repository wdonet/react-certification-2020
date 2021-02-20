import React from 'react';
import HeaderSection from '../Header/Header.page';
import Card from '../Card/Card.page';
import mockedData from '../../data/mockItems.json';

function HomePage() {

    console.table(mockedData.items);

    return (
        <div>
            <HeaderSection />
            {mockedData.items.map((item) => (
                <Card
                    title={item.snippet.title}
                    description={item.snippet.description}
                    image={item.snippet.thumbnails.default.url}
                    width={item.snippet.thumbnails.default?.width ?? 120}
                    height={item.snippet.thumbnails.default?.height ?? 90}
                />
            ))}
        </div>
    );
}

export default HomePage;
