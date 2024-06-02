import { Navbar } from "@/components/shared";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="rounded-big bg-custom-blue px-[16px] pb-[36px] pt-[141px] lg:rounded-b-[140px] lg:pb-[52px] lg:pt-0">
      <div className="hidden lg:block">
        <Navbar />
      </div>

      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:pt-[20px]">
        <h3 className="font-montserrat z-10 text-[20px] font-bold uppercase leading-[32px] text-custom-white lg:mb-[125px] lg:text-[40px] lg:leading-[80px]">
          ревізія, продаж, демонтаж
          <br />
          та монтаж силових
          <br /> трансформаторів
        </h3>

        <div className="relative h-[338px] w-full lg:ml-[-100px] lg:h-[617px] lg:w-[617px]">
          <Image
            src="/assets/images/transformer.png"
            alt="Transformer"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
