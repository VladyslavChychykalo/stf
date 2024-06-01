import Image from "next/image";

export const TmModel = () => {
  return (
    <div>
      <div className="mb-2 flex h-10 items-center justify-center bg-[#1B4A9D] font-bold uppercase text-[#FAFAFA]">
        ТМ
      </div>

      <div className="relative mx-auto mb-3 h-[127px] w-[102px] xl:h-[417px] xl:w-[336px]">
        <Image
          src="/assets/images/models/model1.png"
          alt="Model transformer"
          fill
        />
      </div>

      <div className="px-9">
        <table>
          <tbody>
            <tr>
              <td>TM 25/10/0,4</td>
              <td>TM 160/10/0,4</td>
              <td>TM 1000/10/0,4</td>
            </tr>
            <tr>
              <td>TM 25/6/0,4</td>
              <td>TM 160/6/0,4</td>
              <td>TM 1000/6/0,4</td>
            </tr>
            <tr>
              <td>TM 40/10/0,4</td>
              <td>TM 250/10/0,4</td>
              <td>TM 1600/10/0,4</td>
            </tr>
            <tr>
              <td>TM 40/6/0,A4</td>
              <td>TM 250/6/0,4</td>
              <td>TM 1600/6/0,4</td>
            </tr>
            <tr>
              <td>TM 63/10/0,4</td>
              <td>TM 400/10/0,4</td>
              <td>TM 2500/35/10</td>
            </tr>
            <tr>
              <td>TM 63/6/0,4</td>
              <td>TM 400/6/0,4</td>
              <td>TM 2500/35/6</td>
            </tr>
            <tr>
              <td>TM 100/10/0,4</td>
              <td>TM 630/10/0,4</td>
              <td>TM 4000/35/10</td>
            </tr>
            <tr>
              <td>TM 100/6/0,4</td>
              <td>TM 630/6/0,4</td>
              <td>TM 4000/35/6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const TmgModel = () => {
  return (
    <div>
      <div className="mb-2 flex h-10 items-center justify-center bg-[#1B4A9D] font-bold uppercase text-[#FAFAFA]">
        ТМГ
      </div>
      <div className="relative mx-auto mb-3 h-[127px] w-[118px] xl:h-[346px] xl:w-[320px]">
        <Image
          src="/assets/images/models/model2.png"
          alt="Model transformer"
          fill
        />
      </div>
      <div className="px-7">
        <table>
          <tbody>
            <tr>
              <td>TMF 25/10/0,4</td>
              <td>TMF 100/10/0,4</td>
              <td>TMF 400/10/0,4</td>
            </tr>
            <tr>
              <td>TMF 25/10/0,4</td>
              <td>TMF 100/6/0,4</td>
              <td>TMF 400/10/0,4</td>
            </tr>
            <tr>
              <td>TMF 40/10/0,4</td>
              <td>TMF 160/10/0,4</td>
              <td>TMF 630/10/0,4</td>
            </tr>
            <tr>
              <td>TMF 40/6/0,4</td>
              <td>TMF 160/6/0,4</td>
              <td>TMF 630/6/0,4</td>
            </tr>
            <tr>
              <td>TMF 63/6/0,4</td>
              <td>TMF 250/10/0,4</td>
              <td>TMF 1000/10/0,4</td>
            </tr>
            <tr>
              <td>TM 63/6/0,4</td>
              <td>TMF 250/6/0,4</td>
              <td>TMF 1000/10/0,4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const TmzModel = () => {
  return (
    <div>
      <div className="mb-2 flex h-10 items-center justify-center bg-[#1B4A9D] font-bold uppercase text-[#FAFAFA]">
        ТМЗ
      </div>

      <div className="flex flex-row-reverse gap-[59px] px-7 pl-4 pr-[60px]">
        <div className="relative mb-3 h-[134px] w-[126px] min-w-[126px] xl:h-[352px] xl:w-[329px]">
          <Image
            src="/assets/images/models/model3.png"
            alt="Model transformer"
            fill
          />
        </div>

        <table>
          <tbody>
            <tr>
              <td>ТМЗ 630/10/0,4</td>
            </tr>
            <tr>
              <td>ТМЗ 630/6/0,4</td>
            </tr>
            <tr>
              <td>ТМЗ 1000/10/0,4</td>
            </tr>
            <tr>
              <td>ТМЗ 1000/6/0,4</td>
            </tr>
            <tr>
              <td>ТМЗ 1600/10/0,4</td>
            </tr>
            <tr>
              <td>ТМЗ 1600/6/0,4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
