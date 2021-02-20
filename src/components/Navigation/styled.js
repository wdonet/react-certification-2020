import styled from "styled-components";

const Navigation = styled.header`
    width: 100%;
    display: flex;
    z-index: 1100;
    box-sizing: border-box;
    flex-shrink: 0;
    flex-direction: column;
    color: #fff;
    background-color: #1C5476;
`;

const NavigationContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    min-height: 64px;
    padding-left: 24px;
    padding-right: 24px;
`;

const MainMenu = styled.button`
    color: #FFF;
    padding: 12px;
    overflow: visible;
    font-size: 1rem;
    text-align: center;
    background: none;
    border: none;
`;

const SearchBar = styled.div`
    width: 30%;
    position: relative;
    padding-left: 24px;
    padding-right: 16px;
    border-radius: 4px;
`;

const SearchInput = styled.input`
    font: inherit;
    width: 100%;
    border: 0;
    padding: 5px;
    margin: 0;
    display: block;
    min-width: 0;
    box-sizing: content-box;
    letter-spacing: inherit;
    opacity: 0.5;
    border-radius: 4px;
  `;


const EmptyBar = styled.div`
    width:50%;
`;

const SetupBar = styled.div`
  width:15%;
  display: flex;
`;


const DarkMode = styled.div`
  font-weight: bold;
  padding: 5px 10px;
`;

const SessionMenu = styled.div`
    font-weight: bold;
    font-size: 1.3em;
    padding-left: 15px;
`;


const Styled = { Navigation, NavigationContainer, MainMenu, SearchBar, SearchInput, SetupBar, DarkMode, SessionMenu, EmptyBar };
export default Styled;
