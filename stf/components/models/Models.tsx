import { TmModel, TmgModel, TmzModel } from "./all-models";

const Models = () => {
  return (
    <section className="w-full bg-[#FAFAFA] pb-[52px] pt-8">
      <h3 className="mb-[20px] text-center text-[18px] font-bold uppercase leading-[24px]">
        Види Трансформаторів
      </h3>
      <div className="flex flex-col gap-10">
        <TmModel />
        <TmgModel />
        <TmzModel />
      </div>
    </section>
  );
};

export default Models;
