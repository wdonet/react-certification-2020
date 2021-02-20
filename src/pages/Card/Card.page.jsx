import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 22%;
    border-style: solid;
    margin: 1em;
    border-radius: 1em;
    display: flex;
    justify-content: space-between;
    float: left;
    background-color: #d47b7b;
    word-wrap: break-word;
`;

function Card({ title, description, image, width, height }) {
    return (
        <div>
            <Container>
                <center>
                    <h2> {title} </h2>
                    <img src={image} alt={title} width={width} height={height} />
                    <p> {description}</p>
                </center>
            </Container>
        </div>
    );
}

export default Card;
