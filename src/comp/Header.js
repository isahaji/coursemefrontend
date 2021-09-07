import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Tooltip } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import BookIcon from '@material-ui/icons/Book';
import { Add } from '@material-ui/icons/'; 



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (

    <div className={classes.root}  >
      <AppBar position="static" >
        <Toolbar style={{backgroundColor:'#10b981'}} >
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <BookIcon style={{color: 'white' }}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            CourseMe
          </Typography>
          <Tooltip title="Add a Course">
           <Button href="https://kce4yvol0sb.typeform.com/to/UnfPM453?typeform-source=admin.typeform.com" color="inherit"> <Add /> </Button> 
          </Tooltip>

        </Toolbar>
      </AppBar>

      
    </div>

  );
}

export default Header