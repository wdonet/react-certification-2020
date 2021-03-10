import React from 'react';

import styled from 'styled-components';

const MyLi = styled.li`
    list-style-type: none;
    margin: 0 2vw;
    font-size: 2vh;
    color: white;
    padding: 1vw;
    float: right;
`;

const MyLiLogo = styled.li`
    list-style-type: none;
    margin: 0 2vw;
    font-size: 2vh;
    font-weight: bold;
    color: white;
    padding: 1vw;
    float: left;
`;

const MyNav = styled.nav`
    width: 100vw;
    background-color: #c0392b;
`;

const MyUl = styled.ul`
    margin: 0;
    padding: 0;
    overflow: auto;
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
                <MyLiLogo>WIZELINE</MyLiLogo>
                <MyLi><a href="http://">Login</a></MyLi>
                <MyLi><input type="checkbox"/>Theme</MyLi>
                <MyLi>
                    <form action="" method="post">
                        <MyInput type="text" placeholder="Search..."></MyInput>
                    </form>
                </MyLi>
            </MyUl>
        </MyNav>
    )
}

export default NavBar;