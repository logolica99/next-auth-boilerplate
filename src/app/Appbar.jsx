import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function AppBar() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className=" p-5 bg-indigo-200 flex gap-5 text-xl  font-bold">
      <Link
        href={"/"}
        className="transition  ease-in-out delay-150  hover:text-red-800"
      >
        Home
      </Link>
      <Link
        href={"/admin"}
        className="transition  ease-in-out delay-150 hover:text-red-800"
      >
        Admin
      </Link>
      <Link
        href={"/admin/panel"}
        className="transition  ease-in-out delay-150 hover:text-red-800"
      >
        Panel
      </Link>

      <div>
        {session?.user ? (
          <>
            <p>{session.user.username}</p>
            <button onClick={() => signOut()}>sign out</button>
          </>
        ) : (
          <button onClick={() => signIn()}>sign in</button>
        )}
      </div>
    </div>
  );
}
