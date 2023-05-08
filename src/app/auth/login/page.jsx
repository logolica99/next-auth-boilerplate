"use client";
import React, { useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { useRef } from "react";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const userName = useRef("");
  const pass = useRef("");

  const error = useSearchParams().get("error");
  

 


  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
      <input
        lableText="User Name"
        onChange={(e) => (userName.current = e.target.value)}
      />
      <input
        lableText="Password"
        type={"password"}
        onChange={(e) => (pass.current = e.target.value)}
      />
      {error && <SignInError error={error} />}
      <button onClick={onSubmit}>Login</button>
    </div>
  );
};

const errors = {
  Signin: "Try signing with a different account.",
  OAuthSignin: "Try signing with a different account.",
  OAuthCallback: "Try signing with a different account.",
  OAuthCreateAccount: "Try signing with a different account.",
  EmailCreateAccount: "Try signing with a different account.",
  Callback: "Try signing with a different account.",
  OAuthAccountNotLinked:
    "To confirm your identity, sign in with the same account you used originally.",
  EmailSignin: "Check your email address.",
  CredentialsSignin:
    "Sign in failed. Check the details you provided are correct.",
  default: "Unable to sign in.",
};

const SignInError = ({ error }) => {
  const errorMessage = error && (errors[error] ?? errors.default);
  return <div>{errorMessage}</div>;
};

export default LoginPage;
