import Image from "next/image";

const Installation = () => {
  return (
    <section className="mt-5 px-4">
      <h3 className="xl2:text-[36px] xl2:leading-[50px] mb-5 text-center text-[18px] font-bold uppercase leading-[24px]">
        Демонтаж та монтаж
      </h3>
      <div className="relative h-[275px] w-full md:h-[528px] md:w-[427px]">
        <Image
          layout="fill"
          objectFit="contain"
          quality={100}
          src="/assets/images/transformer1.png"
          alt="Transformer"
        />
      </div>
      <p className="text-[15px] leading-[22.5px]">
        Однією з наших великих переваг є наша команда кваліфікованих та
        досвідчених спеціалістів. Вони мають досвід у проведенні лабораторних
        іспитів та підключенні трансформаторів у роботу, що гарантує високу
        якість та безпеку виконаної роботи.
        <br />
        <br />
        Ми проводимо детальні перевірки та тестування на коженому етапі роботи,
        щоб гарантувати безперебійну роботу трансформаторів.
      </p>
    </section>
  );
};

export default Installation;
