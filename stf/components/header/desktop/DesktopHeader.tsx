import Image from "next/image";

const DesktopHeader = () => {
  return (
    <div className="flex justify-between bg-white px-[135px]">
      <Image
        src="assets/icons/header/logo_desktop.svg"
        alt="contact"
        width={102}
        height={92}
      />

      <div className="flex gap-11">
        <div className="flex items-center gap-3">
          <Image
            src="assets/icons/header/phone.svg"
            alt="contact"
            width={24}
            height={24}
          />
          <p>+380679761647</p>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="assets/icons/header/mail.svg"
            alt="contact"
            width={24}
            height={24}
          />
          <p>st_energo@i.ua</p>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
