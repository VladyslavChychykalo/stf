import Image from "next/image";

const Installation = () => {
  return (
    <section className="mt-[52px] px-4 lg:mt-[126px] lg:px-36">
      <h3 className="mb-5 text-center text-[18px] font-bold uppercase leading-[24px] lg:mb-20 lg:text-[36px] lg:leading-[50px]">
        Демонтаж та монтаж
      </h3>
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-[76px]">
        <div className="relative mb-[12px] h-[275px] w-[215px] lg:mb-0 lg:h-[528px] lg:min-w-[427px]">
          <Image
            quality={100}
            src="/assets/images/installation.png"
            alt="installation"
            width={427}
            height={528}
          />
        </div>
        <p className="text-[15px] leading-[22.5px] lg:text-[20px] lg:leading-[40px]">
          Однією з наших великих переваг є наша команда кваліфікованих та
          досвідчених спеціалістів. Вони мають досвід у проведенні лабораторних
          іспитів та підключенні трансформаторів у роботу, що гарантує високу
          якість та безпеку виконаної роботи.
          <br />
          <br />
          Ми проводимо детальні перевірки та тестування на коженому етапі
          роботи, щоб гарантувати безперебійну роботу трансформаторів.
        </p>
      </div>
    </section>
  );
};

export default Installation;
