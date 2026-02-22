import { useState } from "react";
import VoiceChat from "./pages/VoiceChat";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 overflow-hidden">
      <Routes>
        <Route path="/" element={<VoiceChat />} />
      </Routes>
    </div>
  );
}

export default App;
