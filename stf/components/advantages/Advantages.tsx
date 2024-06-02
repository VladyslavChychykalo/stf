import Image from "next/image";

type AdvantagesT = {
  title: string;
  description: string;
  icon: string;
};

const Advantages = () => {
  const advantagesArr: AdvantagesT[] = [
    {
      title: "Пакет документів",
      description:
        "До обладнання ми додаємо: паспорт, протоколи іспитів, гарантійні документи.",
      icon: "assets/icons/advantage1.svg",
    },
    {
      title: "Працюємо з ПДВ",
      description: "Маємо досвід  у роботі з податком на додану вартість.",
      icon: "assets/icons/advantage2.svg",
    },
    {
      title: "Постійний звʼязок",
      description:
        "Постійно тримаємо звʼязок та інформуємо замовників про етапи виконання роботи.",
      icon: "assets/icons/advantage3.svg",
    },
    {
      title: "Гарантія",
      description:
        "Завжди виконуємо гарантійні зобовʼязання. Гарантія - 1 рік.",
      icon: "assets/icons/advantage4.svg",
    },
    {
      title: "Термін виконання",
      description:
        "Дотримуємось термінів виконання робіт, щоб ви планували свою діяльність.",
      icon: "assets/icons/advantage5.svg",
    },
  ];

  return (
    <section className="relative mt-[52px] px-[43px]">
      <div
        className="bg-advantages-background absolute left-0 top-[-60px] z-[-1] h-[342px] w-full max-w-[445px] bg-cover bg-center"
        style={{ backgroundImage: "url('assets/images/electricity.png')" }}
      />
      <h3 className="mb-5 text-center text-[18px] font-bold uppercase leading-[24px] lg:mb-12 lg:text-[36px] lg:leading-[50px]">
        Наші переваги
      </h3>
      <ul className="flex flex-col gap-2 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-x-[88px] lg:gap-y-[44px]">
        {advantagesArr.map(({ title, description, icon }: AdvantagesT) => {
          return (
            <li
              className="flex flex-col items-center gap-1 rounded-[20px] border-[1px] border-solid border-custom-blue bg-white p-3 lg:w-[292px] lg:gap-[18px] lg:px-[20px] lg:pb-[32px] lg:pt-[20px] lg:shadow-lg"
              key={title}
            >
              <div className="h-8 w-8 lg:h-12 lg:w-12">
                <Image src={icon} alt="advantage" width={44} height={44} />
              </div>
              <h4 className="text-[15px] font-bold text-[#1B4A9D] lg:text-[18px]">
                {title}
              </h4>
              <p className="text-center text-[15px] lg:text-[16px]">
                {description}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Advantages;
