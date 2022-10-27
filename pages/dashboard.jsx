import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  if (loading) return <h1>Loading...</h1>;
  if (!user) router.push("/auth/login");
  if (user)
    return (
      <div>
        <h1>Welcome to your Dashboard {user.displayName}</h1>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </div>
    );
};

export default Dashboard;
