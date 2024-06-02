import Image from "next/image";

const Desktop = () => {
  return (
    <div className="flex justify-center px-[20px]">
      <div className="flex gap-[28px] lg:gap-[72px]">
        <Image
          src="/assets/images/partners/partner1.png"
          key="partner1"
          alt="Partner 1"
          width={142}
          height={130}
        />
        <Image
          src="/assets/images/partners/partner2.png"
          key="partner2"
          alt="Partner 2"
          width={142}
          height={130}
        />
        <Image
          src="/assets/images/partners/partner3.png"
          key="partner3"
          alt="Partner 3"
          width={136}
          height={130}
        />
        <Image
          src="/assets/images/partners/partner4.png"
          key="partner4"
          alt="Partner 4"
          width={130}
          height={130}
        />
        <Image
          src="/assets/images/partners/partner5.png"
          key="partner5"
          alt="Partner 5"
          width={130}
          height={130}
        />
        <Image
          src="/assets/images/partners/partner6.png"
          key="partner6"
          alt="Partner 6"
          width={120}
          height={130}
        />
      </div>
    </div>
  );
};

export default Desktop;
