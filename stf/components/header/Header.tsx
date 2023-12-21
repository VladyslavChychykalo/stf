import MobileHeader from "./mobile/MobileHeader";
import DesktopHeader from "./desktop/DesktopHeader";

const Header = () => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopHeader />
      </div>
      <div className="block md:hidden">
        <MobileHeader />
      </div>
    </>
  );
};

export default Header;
