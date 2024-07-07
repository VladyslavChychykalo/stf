import Image from "next/image";

export const TmModel = () => {
  return (
    <div>
      <div className="mb-2 flex h-10 items-center justify-center bg-[#1B4A9D] font-bold uppercase text-[#FAFAFA] xl:mb-12 xl:h-[70px] xl:text-[32px]">
        ТМ
      </div>

      <div className="m-auto flex max-w-[1200px] flex-col items-center justify-between xl:flex-row-reverse xl:gap-[48px]">
        <div className="relative mb-3 h-[127px] w-[102px] xl:mb-0 xl:h-[417px] xl:min-w-[336px]">
          <Image
            src="/assets/images/models/model1.png"
            alt="model"
            height={417}
            width={336}
          />
        </div>

        <div className="w-full px-9 xl:px-0">
          <table className="min-w-full">
            <tbody>
              <tr>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 25/10/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 160/10/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 1000/10/0,4
                </td>
              </tr>
              <tr>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 25/6/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 160/6/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 1000/6/0,4
                </td>
              </tr>
              <tr>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 40/10/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 250/10/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 1600/10/0,4
                </td>
              </tr>
              <tr>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 40/6/0,A4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 250/6/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 1600/6/0,4
                </td>
              </tr>
              <tr>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 63/10/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 400/10/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 2500/35/10
                </td>
              </tr>
              <tr>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 63/6/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 400/6/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 2500/35/6
                </td>
              </tr>
              <tr>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 100/10/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 630/10/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 4000/35/10
                </td>
              </tr>
              <tr>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 100/6/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 630/6/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TM 4000/35/6
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const TmgModel = () => {
  return (
    <div>
      <div className="mb-2 flex h-10 items-center justify-center bg-[#1B4A9D] font-bold uppercase text-[#FAFAFA] xl:mb-12 xl:h-[70px] xl:text-[32px]">
        ТМГ
      </div>

      <div className="m-auto flex max-w-[1200px] flex-col items-center justify-between xl:flex-row xl:gap-[88px]">
        <div className="relative mb-3 h-[127px] w-[118px] xl:mb-0 xl:h-[346px] xl:min-w-[320px]">
          <Image
            src="/assets/images/models/model2.png"
            alt="model"
            height={346}
            width={320}
          />
        </div>
        <div className="w-full px-[27px] xl:px-0">
          <table className="min-w-full">
            <tbody>
              <tr>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TMГ 25/10/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TMГ 100/10/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TMГ 400/10/0,4
                </td>
              </tr>
              <tr>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TMГ 25/10/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TMГ 100/6/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TMГ 400/10/0,4
                </td>
              </tr>
              <tr>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TMГ 40/10/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TMГ 160/10/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TMГ 630/10/0,4
                </td>
              </tr>
              <tr>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TMГ 40/6/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TMГ 160/6/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TMГ 630/6/0,4
                </td>
              </tr>
              <tr>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TMГ 63/6/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TMГ 250/10/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TMГ 1000/10/0,4
                </td>
              </tr>
              <tr>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TMГ 63/6/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TMГ 250/6/0,4
                </td>
                <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                  TMГ 1000/10/0,4
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const TmzModel = () => {
  return (
    <div>
      <div className="mb-2 flex h-10 items-center justify-center bg-[#1B4A9D] font-bold uppercase text-[#FAFAFA] xl:mb-12 xl:h-[70px] xl:text-[32px]">
        ТМЗ
      </div>

      <div className="m-auto flex max-w-[1200px] flex-row-reverse gap-[59px] px-7 pl-4 pr-[60px] xl:justify-end xl:gap-[220px] xl:pr-0">
        <div className="relative mb-3 h-[134px] w-[126px] min-w-[126px] xl:mb-0 xl:h-[352px] xl:min-w-[329px]">
          <Image
            src="/assets/images/models/model3.png"
            alt="model"
            height={352}
            width={329}
          />
        </div>

        <table className="xl:w-auto">
          <tbody>
            <tr>
              <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                ТМЗ 630/10/0,4
              </td>
            </tr>
            <tr>
              <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                ТМЗ 630/6/0,4
              </td>
            </tr>
            <tr>
              <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                ТМЗ 1000/10/0,4
              </td>
            </tr>
            <tr>
              <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                ТМЗ 1000/6/0,4
              </td>
            </tr>
            <tr>
              <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                ТМЗ 1600/10/0,4
              </td>
            </tr>
            <tr>
              <td className="text-left xl:px-[20px] xl:py-[5px] xl:text-[20px] xl:leading-[50px]">
                ТМЗ 1600/6/0,4
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
