import Image from "next/image";

const Contacts = () => {
  return (
    <section className="mt-[52px] lg:mt-[100px]">
      <h3 className="mb-5 text-center text-[18px] font-bold uppercase leading-[24px] lg:text-[36px] lg:leading-[50px]">
        Контакти
      </h3>
      <div className="xl2:gap-[120px] flex flex-col xl:flex-row-reverse">
        <div>
          <div className="shadow-custom-contact w-custom relative z-10 mx-auto max-w-[710px] rounded-[12px] bg-white px-5 py-4 lg:w-full lg:px-16 lg:py-11">
            <p className="mb-4 text-center text-[16px] font-semibold leading-[24px] lg:mb-6 lg:text-start lg:text-[24px]">
              Зв’яжіться з нами
            </p>
            <p className="text-[15px] lg:text-[20px] lg:leading-[50px]">
              Якщо ви хочете дізнатися більше інформаціії, або у вас є питання.
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
              <p>+380630705100</p>
            </div>
            <div className="flex h-[44px] items-center gap-3 xl:h-auto">
              <Image
                src="assets/icons/contacts/mail.svg"
                alt="contact"
                width={24}
                height={24}
              />
              <p>trans.energo@ukr.net</p>
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
              <p>+380630705100</p>
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
              <p>+380630705100</p>
            </div>
            <div className="flex h-[44px] items-center gap-3 xl:h-auto">
              <Image
                src="assets/icons/contacts/mail.svg"
                alt="contact"
                width={24}
                height={24}
              />
              <p>trans.energo@ukr.net</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
