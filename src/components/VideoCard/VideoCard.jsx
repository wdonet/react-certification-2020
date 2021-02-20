import React from "react";
import Style from "./VideoCard.styles";

const VideoCard = props => {
    return (
        <Style.card>
            <img src={props.thumbnail} />
            <p>{props.title}</p>
        </Style.card>
    )
}

export default VideoCard;