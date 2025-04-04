import React from "react";

const BlinkingText = ({ text, className = "" }) => {
  return (
    <>
      <style jsx>{`
        @keyframes blinker {
          50% {
            opacity: 0;
          }
        }

        .blinking {
          animation: blinker 1.5s linear infinite;
        }
      `}</style>

      <span className={`blinking ${className}`}>{text}</span>
    </>
  );
};

export default BlinkingText;
