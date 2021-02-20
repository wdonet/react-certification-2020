import React from 'react';
import styled from 'styled-components';
import Emoji from '../../components/Emoji';
import Button from '../../components/Button';

const CurrentDiv = styled.div`
    width: 100%;
    height: 10%;
    min-height: 6vh;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-radius: 1em;
    border-style: solid 5px;
    background-color: #2183d3;
`;

function HeaderSection() {
    return (
        <CurrentDiv>
            <Button size="2em">
                <Emoji symbol="☰" />
            </Button>

            <Button size="1em">
                <input type="search" id="site-search" placeholder="Search the site..." />
                <Emoji symbol="🔍" />
            </Button>
        </CurrentDiv>
    );
}

export default HeaderSection;
