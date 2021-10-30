import BookIcon from "@mui/icons-material/Book";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
// eslint-disable-next-line
import { app } from "../Firebase";

const Header = () => {
  // console.log(app.name)
  const [log, setLog] = useState(false);
  const [person, setPerson] = useState({});

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
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setPerson(user);
    }
  });

  return (
    <div className="flex bg-gray-200 justify-between items-center ">
      <a href="/"> <div className="ml-2 flex gap-2">
        <BookIcon ></BookIcon>{" "}
        <p className="text-gray-700">CourseMe. </p>
      </div></a>

      <div className="flex items-center">
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
  );
};

export default Header;
