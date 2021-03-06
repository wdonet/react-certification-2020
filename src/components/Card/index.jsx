import React, {useState} from "react";
import Styled from "./styled";

const Card = ({ video, handleVideoSelected }) =>{
    
    return (
        <Styled.Card>
            <Styled.CardImg imgUrl={video.snippet.thumbnails.medium.url} onClick={() => handleVideoSelected(video)} ></Styled.CardImg>
            <Styled.CardContent>
                <Styled.CardTitle onClick={() => handleVideoSelected(video)}> {video.snippet.title} </Styled.CardTitle>
                <Styled.CardDescription> {video.snippet.description} </Styled.CardDescription>
            </Styled.CardContent>
        </Styled.Card>
    );
  };
  
export default Card;