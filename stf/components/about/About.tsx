import Image from "next/image";

const About = () => {
  return (
    <section className="px-[16px] mt-[20px]">
      <ul>
        <li>
          <p className="text-[15px] leading-[22.5px] pb-[16px]">
            <span className="font-semibold leading-[22.5px]">
              ТОВ “СТФ ЕНЕРГО”
            </span>
            має багаторічний досвід у сфері ревізії, ремонту, обслуговування та
            монтажу силових трансформаторів. Ми пропонуємо трансформатори різних
            типів та потужностей. Використовуємо індивідуальний підхід до
            кожного замовника, забезпечуючи оптимальні рішення для ваших потреб
            та завдань.
          </p>
          <div className="relative w-full h-[292px] md:h-[460px] md:w-[467px]">
            <Image
              layout="fill"
              objectFit="contain"
              quality={100}
              src="/assets/images/transformer1.png"
              alt="Transformer"
            />
          </div>
        </li>
        <li>
          <p className="text-[15px] leading-[22.5px] py-[16px]">
            Промисловий ресурс країни може слугувати ефективним засобом для
            економіії ваших коштів. Тому ми пропонуємо вам обладнання скадського
            зберігання, та яке було у використанні, що дозволить заощадити кошти
            та сконцентрувати їх на розвитку вашого бізнесу. Наші клієнти
            відзначають якість наших послуг та задоволені результатами
            співпраці.
          </p>
          <div className="relative w-full h-[405px] md:h-[537px] md:w-[425px]">
            <Image
              layout="fill"
              objectFit="contain"
              quality={100}
              src="/assets/images/transformer2.png"
              alt="Transformer"
            />
          </div>
        </li>
        <li>
          <p className="text-[15px] leading-[22.5px] py-[16px]">
            Ми віримо, що успіх вашого бізнесу є важливим кроком для розвитку
            нашої країни. Тому ми прагнемо спільно працювати з вами в команді,
            щоб вирішити ваші завдання.
            <br />
            <br /> Зверніться до нас сьогодні, і ми з радістю надамо вам
            докладну інформацію про наші послуги та ціни.
          </p>
          <div className="relative w-full h-[222px] md:h-[326px] md:w-[492px]">
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
