import React from 'react';
import { 
    Card, 
    CardImage, 
    CardTitle, 
    CardContent, 
    CardDescription 
} from "../ui/index"

const VideoCard = ({ video }) => {

    const image = video.snippet.thumbnails.high.url;
    const { title, description } = video.snippet;

    return (<Card role="figure">
        <CardImage src={image} alt={title}/>
        <CardContent>
            <CardTitle title="video-title">{ title }</CardTitle>
            <CardDescription >{ description }</CardDescription>
        </CardContent>
    </Card>);
};

export default VideoCard;