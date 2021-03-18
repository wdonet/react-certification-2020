import styled from "styled-components";

const Title = styled.h1`
    font-size: 1.8rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.9;
    letter-spacing: 0.0075em;
    color:#FFF;
    text-align: center;
`;

const HomeGrid = styled.div`
    display: inline-block;
    width: 100%;
    padding: 0 20px 10px;
`;

const Styled = { Title, HomeGrid };
export default Styled;