import Desktop from "./desktop/Desktop";
import Mobile from "./mobile/Mobile";

const Partners = () => {
  return (
    <section className="mt-[52px] lg:mt-[100px]">
      <h3 className="mb-5 text-center text-[18px] font-bold uppercase leading-[24px] lg:mb-12 lg:text-[36px] lg:leading-[50px]">
        Наші партнери
      </h3>

      <div className="hidden sm:block">
        <Desktop />
      </div>
      <div className="block sm:hidden">
        <Mobile />
      </div>
    </section>
  );
};

export default Partners;
