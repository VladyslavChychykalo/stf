import { NAV_ITEMS } from "@/utils/data";

export const Navbar = () => {
  return (
    <nav className="lg:flex lg:justify-center lg:py-[43px]">
      <ul className="flex flex-col gap-8 p-6 lg:w-[1000px] lg:flex-row lg:p-0">
        {NAV_ITEMS.map((item) => (
          <li className="m-auto" key={item.name}>
            <a
              href={item.href}
              className="text-custom-grey text-[16px] font-semibold lg:text-[20px] lg:text-custom-white"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
