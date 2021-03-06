import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const useStyles = _theme => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 180,
      width: 345
    },
    link: {
        textDecoration: 'none'
    }
  });

class CardVideo extends React.Component {
    constructor(props){
        super(props);
        
        this.classes =  props.classes;
        this.videoInfo = props.videoInfo;
        this.videoId = (typeof this.videoInfo.id === 'object') ? this.videoInfo.id.videoId : this.videoInfo.id;
    }

    render() {
        return (
            <Grid item>
                <Link to={`/${this.videoId}`} className={this.classes.link}>
                    <Card className={this.classes.root} >
                        <CardActionArea>
                            <CardMedia
                                className={this.classes.media}
                                image={this.videoInfo.snippet.thumbnails.high.url}
                                title={this.videoInfo.snippet.title}
                            />
                            <CardContent>
                                <Typography noWrap gutterBottom variant="h5" component="h2">
                                    {this.videoInfo.snippet.title}
                                </Typography>
                                <Typography noWrap variant="body2" color="textSecondary" component="p">
                                    {this.videoInfo.snippet.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </Grid>
        );
    }
}

export default withStyles(useStyles)(CardVideo);