import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Onboarding from "./pages/Onboarding";
import ChatPage from "./pages/ChatPage";
import ChatRoom from "./pages/ChatRoom";
import './index.css';
import useSocket from "./hooks/useSocket";
import { useEffect } from "react";

const App = () => {

  const {socket, io, registerNewUser} = useSocket();

  return(
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/chat" element={<ChatPage />}>
        <Route path="/chat/*" element={<div>404</div>} />
        <Route path="/chat/:username" element={<ChatRoom />} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  )
}

export default App;