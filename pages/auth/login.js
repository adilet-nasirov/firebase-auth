import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { auth } from "../../utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  if (user) {
    router.push("/dashboard");
  } else {
    console.log("login");
  }

  return (
    <div className="shadow-xl mt-32 p-10 text-gray-700">
      <h2 className="text=3xl font-medium">Join Today</h2>
      <div className="py-4">
        <h3>Sign in whith one of the providers</h3>
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => googleLogin()}
          className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2"
        >
          <FcGoogle className="text-2xl" />
          Sign in with Google
        </button>
        <button className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2">
          <BsFacebook className="text-2xl" />
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
