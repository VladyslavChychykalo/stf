import Image from "next/image";

const Contacts = () => {
  return (
    <section id="contacts" className="mt-[52px] lg:mt-[100px]">
      <h3 className="mb-5 text-center text-[18px] font-bold uppercase leading-[24px] lg:mb-12 lg:text-[36px] lg:leading-[50px]">
        Контакти
      </h3>
      <div className="flex flex-col xl:flex-row-reverse xl2:gap-[120px]">
        <div>
          <div className="relative z-10 mx-auto w-custom max-w-[710px] rounded-[12px] bg-white px-5 py-4 shadow-custom-contact lg:w-full lg:px-16 lg:py-11">
            <p className="mb-4 text-center text-[16px] font-semibold leading-[24px] lg:mb-6 lg:text-start lg:text-[24px]">
              Зв’яжіться з нами
            </p>
            <p className="text-[15px] lg:text-[20px] lg:leading-[50px]">
              Якщо ви хочете дізнатися більше інформації, або у вас є питання.
              Ми будемо раді допомогти вам!
            </p>
          </div>

          <div className="relative mt-[-30px] hidden min-w-[755px] lg:block">
            <Image
              src="/assets/images/contacts/desktop_contact.png"
              alt="contacts"
              className="w-full"
              width={755}
              height={503}
            />
          </div>

          <div className="relative mt-[-30px] w-full lg:hidden">
            <Image
              src="/assets/images/contacts/mobile_contact.png"
              alt="contacts"
              className="w-full"
              width={403}
              height={160}
            />
          </div>
        </div>

        <ul className="flex flex-col gap-3 px-4 xl:gap-4">
          <li className="flex flex-col gap-2">
            <p className="text-[16px] font-bold leading-[50px] xl:text-[20px]">
              Відділ продажу
            </p>
            <div className="flex h-[44px] items-center gap-3 xl:h-auto">
              <Image
                src="assets/icons/contacts/phone.svg"
                alt="contact"
                width={24}
                height={24}
              />
              <a href="tel:+380630705100">+380630705100</a>
            </div>
            <div className="flex h-[44px] items-center gap-3 xl:h-auto">
              <Image
                src="assets/icons/contacts/mail.svg"
                alt="contact"
                width={24}
                height={24}
              />
              <a href="mailto:trans.energo@ukr.net">trans.energo@ukr.net</a>
            </div>
          </li>
          <li className="flex flex-col gap-2">
            <p className="text-[16px] font-bold leading-[50px] xl:text-[20px]">
              Відділ технічної підтримки
            </p>
            <div className="flex h-[44px] items-center gap-3 xl:h-auto">
              <Image
                src="assets/icons/contacts/phone.svg"
                alt="contact"
                width={24}
                height={24}
              />
              <a href="tel:+380968972440">+380968972440</a>
            </div>
          </li>
          <li className="flex flex-col gap-2">
            <p className="text-[16px] font-bold leading-[50px] xl:text-[20px]">
              Директор
            </p>
            <p className="text-[16px] leading-[23px]">
              Стефанов Василь Олександрович
            </p>
            <div className="flex h-[44px] items-center gap-3 xl:h-auto">
              <Image
                src="assets/icons/contacts/phone.svg"
                alt="contact"
                width={24}
                height={24}
              />
              <a href="tel:+380679761647">+380679761647</a>
            </div>
            <div className="flex h-[44px] items-center gap-3 xl:h-auto">
              <Image
                src="assets/icons/contacts/mail.svg"
                alt="contact"
                width={24}
                height={24}
              />
              <a href="mailto:st_energo@i.ua">st_energo@i.ua</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
