import LoginForm from "@/app/ui/auth/LoginForm";
import React from "react";
import LeftSidebar from "../ui/auth/LeftSidebar";
import Link from "next/link";
import FormContainer from "../ui/auth/FormContainer";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="w-full h-screen flex">
      <LeftSidebar />
      <FormContainer>
        <h1 className="text-2xl font-semibold mb-10">Log In</h1>
        <LoginForm />
        <div className="mt-8 text-center max-w-xs">
          <p className="text-gray-600">
            By logging in, you agree to our{" "}
            <Link href="/terms" className="text-blue-500 hover:text-blue-600">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-blue-500 hover:text-blue-600">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </FormContainer>
    </div>
  );
};

export default Login;
