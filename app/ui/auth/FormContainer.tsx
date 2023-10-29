import React from "react";

type Props = {
  children: React.ReactNode;
};

const FormContainer = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center flex-grow bg-gray-50 p-8">
      <div className="w-full max-w-2xl flex flex-col items-center justify-center">
        <div className="text-slate-600">{children}</div>
      </div>
    </div>
  );
};

export default FormContainer;
