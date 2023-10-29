import React from "react";
import {
  CheckCircleIcon,
  CheckBadgeIcon,
  SparklesIcon,
  UserIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

type Props = {
  isSignup?: boolean;
};

const LeftSidebar = ({ isSignup }: Props) => {
  return (
    <div className="bg-blue-500 w-72 p-8 space-y-6 hidden md:block">
      {/* Using BadgeCheckIcon or SparklesIcon as a logo */}
      {isSignup ? (
        <CheckBadgeIcon className="h-16 w-16 text-white mb-4" />
      ) : (
        <SparklesIcon className="h-16 w-16 text-white mb-4" />
      )}

      {/* Main Heading */}
      <h2 className="text-white font-bold text-3xl mb-4">
        {isSignup ? "Join the Revolution!" : "Welcome Back!"}
      </h2>

      {/* Subheading with Icon */}
      <div className="flex items-center space-x-2 mb-4">
        <CheckCircleIcon className="h-6 w-6 text-white opacity-70" />
        <p className="text-white text-opacity-70">
          {isSignup
            ? "Sign up and unlock amazing features that will supercharge your workflow."
            : "Secure & Reliable Login"}
        </p>
      </div>

      {/* Information Text */}
      <p className="text-white text-opacity-70 mb-4">
        {isSignup
          ? "Sign up to continue accessing all our premium features, tailored just for you."
          : "Sign in to continue accessing all our premium features, tailored just for you."}
      </p>

      {/* Divider */}
      <hr className="border-t border-white border-opacity-20 my-4" />

      {/* Using UserIcon or LockClosedIcon as an illustrative icon */}
      <div className="flex flex-col items-center">
        {isSignup ? (
          <UserIcon className="h-24 w-24 text-white mb-4" />
        ) : (
          <LockClosedIcon className="h-24 w-24 text-white mb-4" />
        )}
        <p className="text-white text-opacity-70 text-center">
          {isSignup
            ? "Your data is protected with top-notch security protocols."
            : "Your data is protected with top-notch security protocols."}
        </p>
      </div>
    </div>
  );
};

export default LeftSidebar;
