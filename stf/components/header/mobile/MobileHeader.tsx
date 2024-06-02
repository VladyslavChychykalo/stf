import { Navbar } from "@/components/shared";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute w-full">
      <div
        className={`flex h-[82px] items-center justify-between bg-white pl-[19px] pr-[32px] shadow-custom ${
          !isOpen && "rounded-small"
        }`}
      >
        <Image
          src="assets/icons/header/logo_desktop.svg"
          alt="logo"
          width={78}
          height={68}
        />
        <button onClick={() => setIsOpen(!isOpen)}>
          <Image
            src={`assets/icons/menu/${isOpen ? "close" : "menu"}.svg`}
            width={44}
            height={44}
            alt="menu"
          />
        </button>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 translate-y-[-100%]"
        enterTo="transform opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100 translate-y-0"
        leaveTo="transform opacity-0 translate-y-[-100%]"
        className="absolute z-20 mt-[-1px] w-full rounded-small shadow-custom"
        style={{
          maxHeight: isOpen ? "340px" : "82px",
          minHeight: "82px",
          background: "#fff",
        }}
      >
        <Navbar />
      </Transition>
    </div>
  );
};

export default MobileHeader;
