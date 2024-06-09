import { NAV_ITEMS } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="mt-[10px] flex w-full flex-col justify-between bg-custom-blue px-[80px] pb-[30px] pt-[34px] xl:mt-[181px] xl:flex-row xl2:pb-[49px] xl2:pl-[136px] xl2:pr-[139px] xl2:pt-[61px]">
      <div className="hidden xl:block">
        <Image
          src="assets/icons/footer/footer_logo.svg"
          alt="contact"
          width={187}
          height={168}
        />
      </div>

      <nav>
        <ul className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <li
              className="nav-item flex justify-center px-[10px] py-[8px] xl:justify-start"
              key={item.name}
            >
              <Link legacyBehavior href={item.href} passHref>
                <a className="text-[16px] font-semibold  text-custom-white">
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-8 flex flex-col items-center gap-6 xl:mt-0 xl:items-start xl:gap-4">
        <p className="text-[15px] font-bold text-custom-white xl:leading-[50px]">
          Адреса
        </p>
        {/* <p className="text-custom-white">вул. Каштанова 19 а, м. Бар,</p> */}
        <p className="text-custom-white">Вінницька обл., Україна</p>
      </div>

      <div className="mt-0 hidden flex-col items-start gap-4 xl:flex">
        <p className="text-[15px] font-bold leading-[50px] text-custom-white">
          Контакти
        </p>
        <p className="text-custom-white">+380679761647</p>
        <p className="text-custom-white">trans.energo@ukr.net</p>
      </div>
    </section>
  );
};

export default Footer;

// xl
