import { useNavigate } from "react-router-dom";
import Logo from "../img/netflix-logo.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/90 to-transparent px-4 py-3 md:px-8 md:py-4 flex justify-between items-center">
      <img
        src={Logo}
        alt="Netflix Logo"
        className="w-24 md:w-40 object-contain"
      />

      {user && (
        <div className="flex items-center gap-3">
          <img
            src={user?.photoURL}
            alt="User"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
          />
          <button
            onClick={handleSignOut}
            className="text-white text-sm md:text-base hover:underline"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
