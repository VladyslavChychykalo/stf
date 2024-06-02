import { TmModel, TmgModel, TmzModel } from "./all-models";

const Models = () => {
  return (
    <section className="mt-[48px] w-full bg-[#FAFAFA] lg:mt-[120px]">
      <h3 className="mb-[20px] text-center text-[18px] font-bold uppercase leading-[24px] lg:mb-[48px] lg:text-[36px]">
        Види Трансформаторів
      </h3>
      <div className="flex flex-col gap-10 lg:gap-[100px]">
        <TmModel />
        <TmgModel />
        <TmzModel />
      </div>
    </section>
  );
};

export default Models;
