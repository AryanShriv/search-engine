import React, { useState } from "react";
import loader from "../Assets/loader.gif";
import send from "../Assets/send.png";

const ChatInput = ({ sendMessage, loading }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value.trim()) return;
    sendMessage({ sender: "user", message: value.trim() });
    setValue("");
  };

  return (
    <div className="w-full bg-white bg-opacity-10 rounded-lg px-4 py-4 overflow-auto relative">
      {loading ? (
        <img src={loader} className="w-8 m-auto" alt="Loading..." />
      ) : (
        <>
          <textarea
            rows={1}
            className="border-0 bg-transparent outline-none w-11/12 resize-none"
            placeholder="Type your message..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />
          <button
            onClick={handleSubmit}
            className="absolute top-4 right-3 bg-transparent border-none cursor-pointer flex items-center justify-center"
          >
            <img
              src={send}
              width={20}
              alt="Send"
              className="hover:scale-125 transition-transform duration-100 mt-1"
            />
          </button>
        </>
      )}
    </div>
  );
};

export default ChatInput;
