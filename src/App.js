import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import ChatBody from "./Components/ChatBody";
import ChatInput from "./Components/ChatInput";

function App() {
  const [chat, setChat] = useState([]);
  const [messageSent, setMessageSent] = useState(false);

  const sendMessage = (message) => {
    setChat((prev) => [...prev, { sender: "user", message }]);
    // Simulate AI response (replace with actual logic)
    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        { sender: "ai", message: "This is a sample AI response." },
      ]);
    }, 1000);

    // Set messageSent to true when a message is sent
    setMessageSent(true);
  };

  return (
    <div className="bg-[#212121] h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-between align-middle">
      <Sidebar/>
      <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-02 z-0 absolute"></div>

      <div
        className={`uppercase font-bold text-2xl text-center mb-3 ${
          messageSent ? "mt-3" : "my-auto"
        }`}
      >
        gpt
      </div>

      <div className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-md">
        <ChatBody chat={chat} />
      </div>

      <div className="w-full max-w-4xl min-w-[20rem] self-center">
        <ChatInput sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default App;
