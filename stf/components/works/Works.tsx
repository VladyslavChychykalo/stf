import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Desktop from "./desktop/Desktop";
import Mobile from "./mobile/Mobile";

const Works = () => {
  return (
    <section
      id="works"
      className="swiper-container mb-5 mt-[52px] lg:mt-[100px]"
    >
      <h3 className="mb-5 text-center text-[18px] font-bold uppercase leading-[24px] lg:mb-12 lg:text-[36px] lg:leading-[50px]">
        Наші роботи
      </h3>
      <div className="block lg:hidden">
        <Mobile />
      </div>
      <div className="hidden lg:block">
        <Desktop />
      </div>
    </section>
  );
};

export default Works;
