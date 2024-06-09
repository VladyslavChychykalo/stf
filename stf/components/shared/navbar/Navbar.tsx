import { NAV_ITEMS } from "@/utils/data";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="lg:flex lg:justify-center lg:py-[43px]">
      <ul className="flex flex-col gap-4 p-6 lg:w-[1000px] lg:flex-row lg:gap-8 lg:p-0">
        {NAV_ITEMS.map((item) => (
          <li className="nav-item m-auto" key={item.name}>
            <Link legacyBehavior href={item.href} passHref>
              <a className="text-[16px] font-semibold text-custom-grey lg:text-[20px] lg:text-custom-white">
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
