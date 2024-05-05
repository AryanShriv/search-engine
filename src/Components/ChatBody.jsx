import React, { useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";

const ChatBody = ({ chat }) => {
  const aiStyle = "bg-white bg-opacity-40 backdrop-blur-lg shadow-md mr-auto";

  const parent = useRef(null);
  const bottomRef = useRef(null);

  // only for auto animations
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  // for scrolling to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div className="flex flex-col gap-4" ref={parent}>
      {chat.map((message, i) => (
        <div
          key={i}
          className={`rounded-xl self-end px-3 py-3 max-w-[80%] ${
            message.sender === "ai" && aiStyle
          }`}
          style={{
            boxShadow:
              message.sender === "ai"
                ? "2px 2px 5px rgba(0, 0, 0, 0.2)"
                : "none",
          }}
        >
          <pre className="whitespace-pre-wrap">
            <span>{message.message}</span>
          </pre>
        </div>
      ))}
      <div ref={bottomRef} className="h-3"></div>
    </div>
  );
};

export default ChatBody;
