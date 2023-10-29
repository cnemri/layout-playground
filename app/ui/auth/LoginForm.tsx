import React from "react";

type Props = {};

const LoginForm = (props: Props) => {
  return (
    <form className="flex flex-col space-y-4 w-72 mb-5 mx-auto" action="">
      <div className="flex flex-col space-y-2">
        <label htmlFor="username" className="font-medium">
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="jdoe"
          className="border-2 border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="password" className="font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="••••••••••"
          className="border-2 border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 hover:text-gray-100 transition-colors duration-200"
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
