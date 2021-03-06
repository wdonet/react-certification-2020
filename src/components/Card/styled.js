import styled from "styled-components";

const Card = styled.div`
    width: 32%;
    float: left;
    background: #FFF;
    margin-right: 14px;
    min-height: 490px;
    margin-bottom: 14px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const CardImg = styled.div`
    min-height: 180px;
    background-position: center top;
    background-size: auto 100%;
    background-image: url(${props => props.imgUrl});
    cursor: pointer;
`;

const CardContent = styled.div`
    display: grid;
    width: 100%;
    padding: 20px;
`;

const CardTitle = styled.h3`
    font-size: 1.25rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;
    cursor: pointer;
`;

const CardDescription = styled.p`
    font-size: 0.875rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    color: rgba(0, 0, 0, 0.54);
`;

const Styled = { Card, CardImg, CardContent, CardTitle, CardDescription };
export default Styled;