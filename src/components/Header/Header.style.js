import styled from "styled-components";


const header = styled.div`
    width: 100%;
    background-color: whitesmoke;
    opacity: 80%;
`

const burgerMenu = styled.div`
    display: inline-block;
    width: 80px;
`

const inputWrapper = styled.div`
    width: 70%;
    display: inline-block;
`

const inputSearch = styled.input`
    width: 250px;
    margin-left: 5%;
    height: 30px;
    border-radius: 8px;
    background: gray;
    opacity: 80%;
    border: none;
    color: white;
    padding: 0px 20px;
    &::-webkit-input-placeholder { 
        color: white; 
        font-size: 15px; 
    } 
`

const toggleWrapper = styled.div`
    position: relative;
    /* justify-content: left; */
    width: 15%;
    display: inline-block;
    padding-left: 3%
`

const toggleBox = styled.label`
    position: absolute;
    top: 13px;
    /* left: 0; */
    width: 42px;
    height: 26px;
    border-radius: 15px;
    background: #bebebe;
    cursor: pointer;
    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin: 3px;
        background: #ffffff;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.2s;
    }
`

const togglebutton = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 42px;
    height: 26px;
    &:checked + ${toggleBox} {
        background: #4fbe79;
        &::after {
            content: "";
            display: block;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            margin-left: 21px;
            transition: 0.2s;
        }
    }
`

const darkMode = styled.p`
    display: inline-block;
    font-size: 15px;
    margin-left: 10px;
`
const profile = styled.img`
    width: 50px;
    border-radius: 50%;
    box-shadow: 2px 2px 25px 3px black;
`


const Style = {burgerMenu, header, inputSearch, inputWrapper, toggleWrapper, toggleBox, togglebutton, darkMode, profile}
export default Style

