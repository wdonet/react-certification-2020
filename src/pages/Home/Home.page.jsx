import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import he from 'he';

import Videos from '../../mocks/youtube-videos-mock.json';

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const StyledInputBase = styled(InputBase)`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  color: white;
  margin-left: 50px;
  padding: 4px;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 140px;
`;

const StyledCard = styled(Card)`
  height: 350px;
`;

const VideoList = styled.div`
  padding: 20px 200px;
  text-align: center;
  p {
    text-align: left;
    color: rgba(169, 169, 169, 1);
  }
`;

const VideoCards = Videos.items.map(
  ({
    etag,
    snippet: {
      title,
      description,
      thumbnails: {
        high: { url: thumbnailsHigh },
      },
    },
  }) => {
    return (
      <Grid item xs={3} key={etag}>
        <StyledCard>
          <CardActionArea>
            <StyledCardMedia image={thumbnailsHigh} title="image" />
            <CardContent>
              <h2>{he.decode(title)}</h2>
              <p>{he.decode(description)}</p>
            </CardContent>
          </CardActionArea>
        </StyledCard>
      </Grid>
    );
  }
);

function HomePage() {
  return (
    <>
      <AppBar position="static">
        <StyledToolbar>
          <div>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <StyledInputBase placeholder="Search..." />
          </div>
          <div>
            <FormControlLabel label="Dark Mode" control={<Switch />} />
            <Button color="inherit">Login</Button>
          </div>
        </StyledToolbar>
      </AppBar>
      <VideoList>
        <h1>Youtube Video List</h1>
        <Grid container spacing={3}>
          {VideoCards}
        </Grid>
      </VideoList>
    </>
  );
}

export default HomePage;
