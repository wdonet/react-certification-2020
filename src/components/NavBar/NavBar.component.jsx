import React from 'react';

import styled from 'styled-components';

const MyLi = styled.li`
    list-style-type: none;
    margin: 0 2vw;
    font-size: 3vh;
    color: white;
    padding: 1vw;
`;

const MyA = styled.a`
    text-decoration: none;
`;

const MyNav = styled.nav`
    width: 100vw;
    background-color: #8E44AD;
`;

const MyUl = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
`;

const MyInput = styled.input`
    display: flex;
    padding: 1vw;
    height: 30px;
    border: 1px solid grey;
    border-radius: 5px;
`;

function NavBar(){
    return(
        <MyNav>
            <MyUl>
                <MyLi><a href="http://">Login</a></MyLi>
                <MyLi>Theme</MyLi>
                <MyLi>
                    <form action="" method="post">
                        <MyInput type="text" placeholder="Search..."></MyInput>
                    </form>
                </MyLi>
            </MyUl>
        </MyNav>
    )
}

export default NavBar