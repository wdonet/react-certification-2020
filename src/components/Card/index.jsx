import React from "react";
import Styled from "./styled";

function Card(props) {
    return (
        <Styled.Card>
            <Styled.CardImg imgUrl={props.imgUrl} ></Styled.CardImg>
            <Styled.CardContent>
                <Styled.CardTitle> {props.title} </Styled.CardTitle>
                <Styled.CardDescription> {props.description} </Styled.CardDescription>
            </Styled.CardContent>
        </Styled.Card>
    );
  };
  
export default Card;