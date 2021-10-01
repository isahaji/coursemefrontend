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
      .then((result) => {
        console.log(`You are signed in`);
        setLog(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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

    },1500);
  }

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setPerson(user);

      
    } else {
    }
  });

  return (
    <div className="flex bg-gray-200 justify-between items-center ">
      <div className="ml-2 flex gap-2">
        <BookIcon></BookIcon> <p className="text-gray-700">CourseMe. </p>
      </div>

      <div className="flex items-center">
        

        { log ? (<div className="">
          <div class="m-3 flex gap-2">
            <button
              onClick={signout}
              class="bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
            >
              <span class="mx-auto">
                <LogoutIcon></LogoutIcon>
              </span>
            </button>
            <div className="mr-2">
            <img src={person.photoURL} className="rounded-full h-11" alt="" />
        </div>
          </div>
        </div>) :

              (<div className="">
          <div class="m-3">
            <button
              onClick={sign}
              class=" bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
            >
              <span class="mx-auto">
                <LoginIcon></LoginIcon>
              </span>
            </button>
          </div>
        </div>)}
        
      </div>
    </div>
  );
};

export default Header;

// {/* {log ? (
//   <button onClick={signout} className="">
//     {" "}
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       class="h-6 w-6"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         stroke-width="2"
//         d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//       />
//     </svg>{" "}
//   </button>
// ) : (
//   <button onClick={sign} className="">
//     {" "}
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       class="h-6 w-6"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         stroke-width="2"
//         d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
//       />
//     </svg>{" "}
//   </button>
// )}

// {log && (
//   <div className="ml-2 flex flex-col items-center">
//     <img src={photo} alt="" className="h-8 rounded-full " />
//     <h4>{name}</h4>
//   </div>
// )} */}
