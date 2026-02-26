import { useState } from "react";
import VoiceChat from "./pages/VoiceChat";
import { Route, Routes } from "react-router";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 overflow-hidden">
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/booking" element={<VoiceChat />} />
      </Routes>
    </div>
  );
}

export default App;
