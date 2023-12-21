import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col items-center md:flex-row bg-custom-blue md:justify-center px-[16px] pt-[141px] pb-[36px] rounded-big">
      <h3 className="uppercase text-custom-white z-10 text-[20px] font-bold leading-[32px]">
        ревізія, продаж, демонтаж
        <br /> та монтаж силових <br /> трансформаторів
      </h3>
      <div className="relative w-full h-[338px] md:h-[617px] md:w-[617px]">
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
