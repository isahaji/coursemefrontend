import BookIcon from "@mui/icons-material/Book";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState, useEffect } from "react";
// eslint-disable-next-line
import { app } from "../Firebase";
import useDarkMode from "../hooks/DarkMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  // console.log(app.name)
  const [log, setLog] = useState(false);
  const [person, setPerson] = useState({});
  const [colorTheme, setTheme] = useDarkMode();

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
       
        <ListItem button key={2}>
          <a href="/">
            <ListItemText primary={`+ ${"Home"}`} />
          </a>
        </ListItem>
        <ListItem button key={1}>
          <a href="/add">
            <ListItemText primary={`+ ${"ADD A COURSE"}`} />
          </a>
        </ListItem>
      </List>


      <Divider />

        <div className="flex bg-green-400 gap-3 p-2 justify-center">
          <div className="">
          <a href="https://twitter.com/iisahaji">
          <TwitterIcon className="hover:text-blue-600"></TwitterIcon>
        </a>
          </div>
          <div className=""> <a href="https://github.com/isahaji">
          <GitHubIcon className="hover:text-black "> </GitHubIcon>
        </a></div>
        </div>


    </Box>
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [setTheme]);

  function sign() {
    const auth = getAuth();
    // eslint-disable-next-line
    let user = auth.currentUser;
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        console.log(`You are signed in`);
        setLog(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // function ghub() {
  //   const provider = new GithubAuthProvider();
  //   const auth = getAuth();
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a GitHub Access Token. You can use it to access the GitHub API.
  //       console.log(`You are signed in`);
  //       setLog(true);

  //       // The signed-in user info.
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       console.log(error);
  //       // ...
  //     });
  // }

  function signout() {
    const auth = getAuth();
    setTimeout(() => {
      signOut(auth)
        .then(() => {
          setLog(false);
          console.log("You have Signed out ");
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1500);
  }

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setPerson(user);
    }
  });

  return (
    <Router>
      <div className="flex bg-gray-200 justify-between items-center ">
        {" "}
        <div className="ml-2 flex justify-center items-center gap-2">
          <Button onClick={toggleDrawer("left", true)}>
            <MenuIcon className="text-black " />
          </Button>

          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
          <a href="/">
            <div className="flex justify-between items-center">
              <BookIcon></BookIcon> <p className="text-gray-700">CourseMe. </p>
            </div>
          </a>
        </div>
        <div className=""></div>
        <div className="flex items-center">
          <button
            className="cursor-pointer  rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 ring-offset-2 px-5 py-2  hover:bg-green-400 bg-green-500 text-gray-50"
            onClick={() => setTheme(colorTheme)}
          >
            {" "}
            {colorTheme === "light" ? <LightModeIcon /> : <DarkModeIcon />}{" "}
          </button>

          {log ? (
            <div className="">
              <div className="m-3 flex gap-2">
                <button
                  onClick={signout}
                  className="bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                >
                  <span className="mx-auto">
                    <LogoutIcon></LogoutIcon>
                  </span>
                </button>
                <div className="mr-2">
                  <img
                    src={person.photoURL}
                    className="rounded-full h-11"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="">
              <div className="m-3">
                <button
                  onClick={sign}
                  className=" bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                >
                  <span className="mx-auto">
                    <LoginIcon></LoginIcon>
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Router>
  );
};

export default Header;
