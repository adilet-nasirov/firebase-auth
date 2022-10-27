import React from "react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
const Nav = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <nav className="flex justify-between items-start mt-4">
      <Link href={"/"}>Logo</Link>
      <ul>
        {!user && (
          <Link href={"/auth/login"}>
            <span className="py-2 px-4 text-lg bg-teal-500 text-white rounded-lg font-medium ml-8">
              Join!
            </span>
          </Link>
        )}
        {user && (
          <div>
            <Link href={"/dashboard"}>
              <img
                src="user.photoURL"
                alt="avatar"
                referrerPolicy="noreferrer"
                className="w-12 rounded-full"
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
