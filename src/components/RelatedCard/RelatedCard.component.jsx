import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export default function RelatedCard({videoInfo}) {

    console.log(videoInfo);

    const classes = useStyles();
    const { title, channelTitle, thumbnails } = videoInfo.snippet;
    const { videoId } = videoInfo.id;

    return (
        <Link to={`/${videoId}`} className={classes.link}>
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography noWrap component="h5" variant="h5" className={classes.title}>
                        { title }
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" className={classes.channel}>
                        { channelTitle }
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={thumbnails.medium.url}
                    title="Live from space album cover"
                />
            </Card>
        </Link>
        
  );
}