import React from "react";
import { UserIcon, EnvelopeIcon, KeyIcon } from "@heroicons/react/24/outline";

type Props = {};

const SignUpForm = (props: Props) => {
  return (
    <div className="text-slate-600 bg-gray-50 p-6 rounded-md">
      <form className="flex flex-col space-y-4 w-72">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="john.doe@example.com"
            className="border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Choose a strong password"
            className="border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="confirmPassword" className="font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Repeat your password"
            className="border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
