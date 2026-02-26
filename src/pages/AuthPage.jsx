import React from "react";
import LeftPanelAuth from "../components/LeftPanelAuth";
import RightPanelAuth from "../components/RightPanelAuth";

const AuthPage = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-blue-950 overflow-hidden relative">
      <div className="absolute top-[10%] left-[5%] w-72 h-72 lg:w-96 lg:h-96 bg-[#0B6E6E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-56 h-56 lg:w-72 lg:h-72 bg-[#F5A623]/[0.07] rounded-full blur-3xl pointer-events-none" />

      <LeftPanelAuth />
      <RightPanelAuth />
    </div>
  );
};

export default AuthPage;
