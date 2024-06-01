import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col items-center rounded-big bg-custom-blue px-[16px] pb-[36px] pt-[141px] md:flex-row md:justify-center">
      <h3 className="font-montserrat z-10 mb-[100px] text-[40px] font-bold uppercase leading-[80px] text-custom-white">
        ревізія, продаж, демонтаж та
        <br />
        монтаж силових
        <br /> трансформаторів
      </h3>

      {/* <h3 className="font-montserrat z-10 text-[20px] font-bold uppercase leading-[32px] text-custom-white">
        ревізія, продаж, демонтаж
        <br />
        та монтаж силових
        <br /> трансформаторів
      </h3> */}
      <div className="relative h-[338px] w-full md:h-[617px] md:w-[617px]">
        <Image
          src="/assets/images/transformer.png"
          alt="Transformer"
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>
    </section>
  );
};

export default Hero;
