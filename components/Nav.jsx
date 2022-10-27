import React from "react";
import Link from "next/link";
const Nav = () => {
  return (
    <nav>
      <Link href={"/"}>Logo</Link>
      <ul>
        <Link href={"/auth/login"}>
          <p className="py-2 px-4 text-lg bg-teal-500 text-white rounded-lg font-medium ml-8">
            Join Now!
          </p>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
