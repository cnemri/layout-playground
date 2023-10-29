import React from "react";
import LeftSidebar from "../ui/auth/LeftSidebar";
import SignUpForm from "../ui/auth/SignUpForm";
import Link from "next/link";
import FormContainer from "../ui/auth/FormContainer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
};

const Signup = () => {
  return (
    <div className="w-full h-screen flex">
      {/* Left Sidebar */}
      <LeftSidebar isSignup />
      {/* Signup Form */}
      <FormContainer>
        <h1 className="text-2xl font-semibold mb-10">Sign Up</h1>
        <SignUpForm />
        <div className="mt-8 text-center max-w-xs">
          <p className="mt-6 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:text-blue-600">
              Log in
            </Link>
          </p>
        </div>
      </FormContainer>
    </div>
  );
};

export default Signup;
