import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = _theme => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 180,
      width: 345
    },
  });

class CardVideo extends React.Component {
    render() {
        const { classes, videoInfo} = this.props;

        return (
            <Grid item>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={videoInfo.snippet.thumbnails.high.url}
                            title={videoInfo.snippet.title}
                        />
                        <CardContent>
                            <Typography noWrap gutterBottom variant="h5" component="h2">
                                {videoInfo.snippet.title}
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p">
                                {videoInfo.snippet.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            
        );
    }
}

export default withStyles(useStyles)(CardVideo);