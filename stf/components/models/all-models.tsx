import Image from "next/image";

export const TmModel = () => {
  return (
    <div>
      <div className="mb-2 flex h-10 items-center justify-center bg-[#1B4A9D] font-bold uppercase text-[#FAFAFA] lg:mb-12 lg:h-[70px] lg:text-[32px]">
        ТМ
      </div>

      <div className="flex flex-col items-center justify-between lg:flex-row-reverse lg:gap-[48px] lg:px-40">
        <div className="relative mb-3 h-[127px] w-[102px] lg:mb-0 lg:h-[417px] lg:min-w-[336px]">
          <Image
            src="/assets/images/models/model1.png"
            alt="model"
            height={417}
            width={336}
          />
        </div>

        <div className="w-full px-9 lg:px-0">
          <table className="min-w-full">
            <tbody>
              <tr>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 25/10/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 160/10/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 1000/10/0,4
                </td>
              </tr>
              <tr>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 25/6/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 160/6/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 1000/6/0,4
                </td>
              </tr>
              <tr>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 40/10/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 250/10/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 1600/10/0,4
                </td>
              </tr>
              <tr>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 40/6/0,A4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 250/6/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 1600/6/0,4
                </td>
              </tr>
              <tr>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 63/10/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 400/10/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 2500/35/10
                </td>
              </tr>
              <tr>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 63/6/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 400/6/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 2500/35/6
                </td>
              </tr>
              <tr>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 100/10/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 630/10/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 4000/35/10
                </td>
              </tr>
              <tr>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 100/6/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 630/6/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
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
      <div className="mb-2 flex h-10 items-center justify-center bg-[#1B4A9D] font-bold uppercase text-[#FAFAFA] lg:mb-12 lg:h-[70px] lg:text-[32px]">
        ТМГ
      </div>

      <div className="flex flex-col items-center justify-between lg:flex-row lg:gap-[88px] lg:px-36">
        <div className="relative mb-3 h-[127px] w-[118px] lg:mb-0 lg:h-[346px] lg:min-w-[320px]">
          <Image
            src="/assets/images/models/model2.png"
            alt="model"
            height={346}
            width={320}
          />
        </div>
        <div className="w-full px-9 lg:px-0">
          <table className="min-w-full">
            <tbody>
              <tr>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TMF 25/10/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TMF 100/10/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TMF 400/10/0,4
                </td>
              </tr>
              <tr>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TMF 25/10/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TMF 100/6/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TMF 400/10/0,4
                </td>
              </tr>
              <tr>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TMF 40/10/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TMF 160/10/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TMF 630/10/0,4
                </td>
              </tr>
              <tr>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TMF 40/6/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TMF 160/6/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TMF 630/6/0,4
                </td>
              </tr>
              <tr>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TMF 63/6/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TMF 250/10/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TMF 1000/10/0,4
                </td>
              </tr>
              <tr>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TM 63/6/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TMF 250/6/0,4
                </td>
                <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                  TMF 1000/10/0,4
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
      <div className="mb-2 flex h-10 items-center justify-center bg-[#1B4A9D] font-bold uppercase text-[#FAFAFA] lg:mb-12 lg:h-[70px] lg:text-[32px]">
        ТМЗ
      </div>

      <div className="flex flex-row-reverse gap-[59px] px-7 pl-4 pr-[60px] lg:justify-end lg:gap-[220px] lg:pl-36 lg:pr-0">
        <div className="relative mb-3 h-[134px] w-[126px] min-w-[126px] lg:mb-0 lg:h-[352px] lg:min-w-[329px]">
          <Image
            src="/assets/images/models/model3.png"
            alt="model"
            height={352}
            width={329}
          />
        </div>

        <table className="lg:w-auto">
          <tbody>
            <tr>
              <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                ТМЗ 630/10/0,4
              </td>
            </tr>
            <tr>
              <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                ТМЗ 630/6/0,4
              </td>
            </tr>
            <tr>
              <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                ТМЗ 1000/10/0,4
              </td>
            </tr>
            <tr>
              <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                ТМЗ 1000/6/0,4
              </td>
            </tr>
            <tr>
              <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                ТМЗ 1600/10/0,4
              </td>
            </tr>
            <tr>
              <td className="text-left lg:px-[20px] lg:py-[5px] lg:text-[20px] lg:leading-[50px]">
                ТМЗ 1600/6/0,4
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
