import DesktopHeader from "./desktop/DesktopHeader";
import MobileHeader from "./mobile/MobileHeader";

const Header = () => {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopHeader />
      </div>
      <div className="block lg:hidden">
        <MobileHeader />
      </div>
    </>
  );
};

export default Header;
