import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const TypingEffect = () => {
  const handleType = () => {};
  const [cursorStyle, setCursorStyle] = useState("|");
  const [cursorBlinking, setCursorBlinking] = useState(true);
  const handleDone = () => {};

  return (
    <>
      <Typewriter
        words={["Rules", "Walls", "Limits"]}
        loop={false}
        cursor
        cursorStyle={""}
        typeSpeed={120}
        deleteSpeed={50}
        delaySpeed={1000}
        onLoopDone={handleDone}
        onType={handleType}
        cursorBlinking={false}
      />
    </>
  );
};

export default TypingEffect;
