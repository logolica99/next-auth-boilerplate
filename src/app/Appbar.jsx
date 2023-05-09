import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut, signUp } from "next-auth/react";

import { useScrollPosition } from "../hooks/useScrollPosition";

export default function AppBar() {
  const { data: session } = useSession();

  const scrollPosition = useScrollPosition();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div
      className={classNames(
        "transition ease-in-out-150  sticky top-0 z-30 w-full  border-b border-gray-800 ",
        scrollPosition > 0
          ? " bg-slate-900 bg-opacity-50 py-4 backdrop-filter backdrop-blur "
          : "py-8"
      )}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto sm:px-6  ">
        <Link href={"/"}>
          <div>Logo</div>
        </Link>
        <div className=" gap-6 hidden md:flex">
          <Link href={"/"} className="transition-colors   hover:text-slate-500">
            Home
          </Link>
          <Link
            href={"/admin"}
            className="transition-colors   hover:text-slate-500"
          >
            Admin
          </Link>
          <Link
            href={"/admin/panel"}
            className="transition-colors hover:text-slate-500"
          >
            Panel
          </Link>
        </div>

        <div>
          {session?.user ? (
            <>
              <p>{session.user.username}</p>
              <button onClick={() => signOut()}>Sign Out</button>
            </>
          ) : (
            <div className="flex gap-6">
              <button
                onClick={() => signIn()}
                className="transition-colors hover:text-slate-500 font-semibold"
              >
                Sign In
              </button>
              <button
                onClick={() => signUp()}
                className="transition-colors hover:bg-blue-700 font-semibold bg-blue-500 px-6 py-2 rounded"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
