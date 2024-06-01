import Image from "next/image";
import Marquee from "react-fast-marquee";

export const Partners = () => {
  return (
    <div>
      <h3 className="xl2:text-[36px] xl2:leading-[50px] mb-5 text-center text-[18px] font-bold uppercase leading-[24px]">
        Наші партнери
      </h3>
      <Marquee>
        <Image
          className="mr-7"
          src="/assets/images/partners/partner1.png"
          key="partner1"
          alt="Partner 1"
          width={70}
          height={64}
        />
        <Image
          className="mr-7"
          src="/assets/images/partners/partner2.png"
          key="partner2"
          alt="Partner 2"
          width={70}
          height={64}
        />
        <Image
          className="mr-7"
          src="/assets/images/partners/partner3.png"
          key="partner3"
          alt="Partner 3"
          width={67}
          height={64}
        />
        <Image
          className="mr-7"
          src="/assets/images/partners/partner4.png"
          key="partner4"
          alt="Partner 4"
          width={64}
          height={64}
        />
        <Image
          className="mr-7"
          src="/assets/images/partners/partner5.png"
          key="partner5"
          alt="Partner 5"
          width={64}
          height={64}
        />
        <Image
          className="mr-7"
          src="/assets/images/partners/partner6.png"
          key="partner6"
          alt="Partner 6"
          width={60}
          height={64}
        />
      </Marquee>
    </div>
  );
};
