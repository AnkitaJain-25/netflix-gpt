import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen w-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_medium.jpg"
          alt="bg-img"
        />
      </div>
      <form className="absolute w-3/12 bg-black opacity-87 p-8 my-36 mx-auto right-0 left-0 flex flex-col text-white">
        <h1 className="text-3xl mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 p-2 m-2 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="border border-gray-300 p-2 m-2 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-2 m-2 rounded-md"
        />
        {!isSignInForm && (
          <button className="bg-red-600 p-2 m-2 rounded-md">Sign Up</button>
        )}
        {isSignInForm && (
          <>
            <button className="bg-red-600 p-2 m-2 rounded-md">Sign In</button>
            <div className="text-gray-400 m-4 text-center">OR</div>
            <button className="bg-gray-600 p-2 m-2 rounded-md">
              Use a sign-in code
            </button>
          </>
        )}

        <p className="text-gray-400 mt-4">
          {isSignInForm ? "New to Netflix? " : "Already have an account? "}
          <span
            className="text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now" : "Sign in now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
