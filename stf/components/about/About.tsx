import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="mt-5 max-w-[1200px] px-4">
      <ul>
        <li className="flex flex-col lg:mt-[-60px] lg:flex-row-reverse lg:gap-[68px]">
          <p className="pb-4 text-[15px] leading-[22.5px] lg:mt-[100px] lg:text-[20px] lg:leading-[40px]">
            <span className="font-semibold leading-[22.5px] lg:text-[24px] lg:leading-[40px]">
              ТОВ “СТФ ЕНЕРГО”{" "}
            </span>
            має багаторічний досвід у сфері ревізії, ремонту, обслуговування та
            монтажу силових трансформаторів. Ми пропонуємо трансформатори різних
            типів та потужностей. Використовуємо індивідуальний підхід до
            кожного замовника, забезпечуючи оптимальні рішення для ваших потреб
            та завдань.
          </p>
          <div className="relative h-[292px] w-full lg:h-[460px] lg:min-w-[467px]">
            <Image
              layout="fill"
              objectFit="contain"
              quality={100}
              src="/assets/images/transformer1.png"
              alt="Transformer"
            />
          </div>
        </li>
        <li className="flex flex-col lg:flex-row lg:gap-[150px] xl2:mt-[-90px]">
          <p className="py-4 text-[15px] leading-[22.5px] lg:mt-[80px] lg:text-[20px] lg:leading-[40px] xl2:mt-[120px]">
            Промисловий ресурс країни може слугувати ефективним засобом для
            економії ваших коштів. Тому ми пропонуємо вам обладнання складського
            зберігання і яке було у використанні, що дозволить заощадити кошти
            та сконцентрувати їх на розвитку вашого бізнесу. Наші клієнти
            відзначають якість наших послуг та задоволені результатами
            співпраці.
          </p>
          <div className="relative h-[405px] w-full lg:h-[537px] lg:min-w-[425px]">
            <Image
              layout="fill"
              objectFit="contain"
              quality={100}
              src="/assets/images/transformer2.png"
              alt="Transformer"
            />
          </div>
        </li>
        <li className="flex flex-col lg:flex-row-reverse lg:gap-[70px] xl2:mt-[-90px]">
          <p className="py-4 text-[15px] leading-[22.5px] lg:text-[20px] lg:leading-[40px] xl2:mt-[120px]">
            Ми віримо, що успіх вашого бізнесу є важливим кроком для розвитку
            нашої країни. Тому ми прагнемо спільно працювати з вами в команді,
            щоб вирішити ваші завдання.
            <br />
            <br /> Зверніться до нас сьогодні, і ми з радістю надамо вам
            докладну інформацію про наші послуги та ціни.
          </p>
          <div className="relative h-[222px] w-full lg:h-[326px] lg:min-w-[492px]">
            <Image
              layout="fill"
              objectFit="contain"
              quality={100}
              src="/assets/images/transformer3.png"
              alt="Transformer"
            />
          </div>
        </li>
      </ul>
    </section>
  );
};

export default About;
