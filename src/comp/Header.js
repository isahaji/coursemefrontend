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
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import { app } from '../Firebase';




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
  // console.log(app.name)
  const [log, setLog] = useState(false)
  const [photo, setPhoto] = useState("")
  const [name, setName] = useState("")
  const [eemail , setEmail] = useState("")
  
  function sign() {
    const auth = getAuth();
    let user = auth.currentUser
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(`You are signed in`)
        setLog(true)
      }).catch((error) => {
          console.log(error)
      });

    }

    function signout() {
      const auth = getAuth();
      signOut(auth).then(() => {
        setLog(false)
        console.log("You have Signed out ")
      }).catch((error) => {
        console.log(error)
      });
    }

    
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          const name = user.displayName;
          const email = user.email;
          const photo = user.photoURL;
          setPhoto(photo)
          setName(name)
          setEmail(email)
        }else {
          setName(null)
          setPhoto(null)
        }
      });
    


  
  return(

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
   {log ? (<button onClick={signout} className=""> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>  </button>) : (  <button onClick={sign} className=""> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
</svg> </button> )}


{log && (<div className="ml-2 flex flex-col items-center">
<img src={photo} alt="" className="h-8 rounded-full " />
<h4>{name}</h4>
</div>)  }




        </Toolbar>
      </AppBar>

      
    </div>

  );
}

export default Header