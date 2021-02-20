import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './styles';

export default function Navbar(props){
    const classes = useStyles();
    const width = window.innerWidth;

    function handleSearch(event){
        if(event.key === 'Enter'){
            props.handleSearch(event.target.value)
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="sticky" color="default">
                <Toolbar>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" className={classes.navbarTitle}>
                    { width < 480 ? "RB" : "React Bootcamp" }
                  </Typography>
                  <div className={classes.search}>
                      <div className={classes.searchIcon}>
                        <SearchIcon />
                      </div>
                      <InputBase
                        laceholder="Search a Video…"
                        onKeyPress={handleSearch}
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                      />
                  </div>
                  <Button className={classes.loginBtn}>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}