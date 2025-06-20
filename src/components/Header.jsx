import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute px-8 py-2 w-full h-20 bg-gradient-to-b z-10 from-black flex justify-between">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />
      {user && <div className="flex items-center space-x-4">
        <img
          alt="User Avatar"
          className="h-10 w-10 rounded-lg ml-auto"
          src={user?.photoURL}
        />
        <button
          onClick={handleSignOut}
          className="bg-red-600 p-2 m-2 rounded-md cursor-pointer text-white"
        >
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
