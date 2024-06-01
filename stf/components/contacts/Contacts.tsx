import Image from "next/image";

const Contacts = () => {
  return (
    <section className="mt-5 px-4">
      <h3 className="xl2:text-[36px] xl2:leading-[50px] mb-5 text-center text-[18px] font-bold uppercase leading-[24px]">
        Контакти
      </h3>
      <div className="shadow-custom-contact w-custom mx-auto max-w-[710px] rounded-[12px] bg-white px-7 py-5 lg:px-8 lg:py-10">
        <p className="mb-3 text-center text-[16px] font-semibold leading-[24px]">
          Зв’яжіться з нами
        </p>
        <p className="text-[16px]">
          Якщо ви хочете дізнатися більше інформаціії, або у вас є питання. Ми
          будемо раді допомогти вам!
        </p>
      </div>
      <ul>
        <li>
          <p className="text-[16px] font-bold leading-[50px]">Відділ продажу</p>
          <div className="mt-4 flex gap-8">
            <Image
              src="assets/icons/contacts/phone.svg"
              alt="contact"
              width={24}
              height={24}
            />
            <p>+380630705100</p>
          </div>
          <div className="mt-4 flex gap-8">
            <Image
              src="assets/icons/contacts/mail.svg"
              alt="contact"
              width={24}
              height={24}
            />
            <p>trans.energo@ukr.net</p>
          </div>
        </li>
        <li>
          <p className="text-[16px] font-bold leading-[50px]">
            Відділ технічної підтримки
          </p>
          <div className="mt-4 flex gap-8">
            <Image
              src="assets/icons/contacts/phone.svg"
              alt="contact"
              width={24}
              height={24}
            />
            <p>+380630705100</p>
          </div>
        </li>
        <li>
          <p className="text-[16px] font-bold leading-[50px]">Директор</p>
          <p className="text-[16px] leading-[23px]">
            Стефанов Василь Олександрович
          </p>
          <div className="mt-4 flex gap-8">
            <Image
              src="assets/icons/contacts/phone.svg"
              alt="contact"
              width={24}
              height={24}
            />
            <p>+380630705100</p>
          </div>
          <div className="mt-4 flex gap-8">
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
    </section>
  );
};

export default Contacts;
