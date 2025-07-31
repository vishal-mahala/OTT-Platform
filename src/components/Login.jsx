import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { user_URL } from "../utils/constants";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
    setErrorMessage(null);
  };

  const handleButtonClick = () => {
    const nameVal = !signInForm ? name.current.value : "";
    const message = checkValidData(
      email.current.value,
      password.current.value,
      nameVal
    );
    setErrorMessage(message);
    if (message) return;

    if (!signInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameVal,
            photoURL: user_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.code + " - " + error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-2]">
        <img
          src="https://i.redd.it/zjgs096khv591.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
        {/* Black fade top overlay */}
        <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-[-1]" />
      </div>

      <Header />

      {/* Centered Form */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-md bg-black/80 text-white rounded-xl p-8 md:p-12 shadow-xl backdrop-blur-sm"
        >
          <h1 className="font-bold text-3xl md:text-4xl py-2 text-center">
            {signInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!signInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 my-3 w-full bg-black/60 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="p-3 my-3 w-full bg-black/60 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-3 w-full bg-black/60 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          {errorMessage && (
            <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
          )}

          <button
            className="p-3 my-4 bg-red-600 w-full rounded-md hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={handleButtonClick}
          >
            {signInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-center text-sm">
            {signInForm ? "New to Netflix? " : "Already a user? "}
            <span
              className="text-red-500 cursor-pointer font-semibold"
              onClick={toggleSignInForm}
            >
              {signInForm ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
