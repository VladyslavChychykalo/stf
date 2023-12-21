import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute w-full">
      <div
        className={`shadow-custom h-80 bg-white flex justify-between items-center ${
          !isOpen && "rounded-small"
        }`}
      >
        <h1>LOGO</h1>
        <button onClick={() => setIsOpen(!isOpen)}>Click</button>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 translate-y-[-100%]"
        enterTo="transform opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100 translate-y-0"
        leaveTo="transform opacity-0 translate-y-[-100%]"
        className="absolute w-full z-20 rounded-small shadow-custom"
        style={{
          maxHeight: isOpen ? "340px" : "82px",
          minHeight: "82px",
          background: "#fff",
        }}
      >
        Content
      </Transition>
    </div>
  );
};

export default MobileHeader;
