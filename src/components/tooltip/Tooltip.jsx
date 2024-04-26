import React, { useState } from "react";

const Tooltip = ({ children, content, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      {...props}
    >
      {children}
      {isVisible && (
        <div className="absolute bottom-full mb-2 px-3 py-1 bg-black text-white text-sm rounded z-10">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
