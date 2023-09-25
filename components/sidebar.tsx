import type { NextPage } from "next";

const Sidebar: NextPage = () => {
  return (
    <div className="relative rounded-lg bg-white shadow-[0px_4px_50px_rgba(0,_0,_0,_0.06)] w-16 h-[864px]">
      <div className="absolute top-[11px] left-[0px] h-[841px] flex flex-col items-start justify-start gap-[14px]">
        <div className="flex-1 flex flex-col items-center justify-start gap-[10px]">
          <div className="rounded-181xl w-10 h-10 flex flex-row items-start justify-start">
            <img
              className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/logo@2x.png"
            />
          </div>
          <div className="relative box-border w-[65px] h-px border-t-[1px] border-solid border-gray-1001" />
          <div className="rounded flex flex-row items-start justify-start p-1">
            <img
              className="relative rounded w-8 h-8 overflow-hidden shrink-0"
              alt=""
              src="/logo1.svg"
            />
          </div>
          <div className="relative box-border w-[65px] h-px border-t-[1px] border-solid border-gray-1001" />
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div className="rounded bg-primary-purple-50 flex flex-row items-center justify-center p-2.5">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/dashboardcircle.svg"
              />
            </div>
            <div className="rounded bg-white flex flex-row items-center justify-center p-2.5">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/analytics01.svg"
              />
            </div>
            <div className="rounded bg-white flex flex-row items-center justify-center p-2.5">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/dashboardcircle1.svg"
              />
            </div>
            <div className="rounded bg-white flex flex-row items-center justify-center p-2.5">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/wallet01.svg"
              />
            </div>
            <div className="rounded bg-white flex flex-row items-center justify-center p-2.5">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/chartring.svg"
              />
            </div>
            <div className="rounded bg-white flex flex-row items-center justify-center p-2.5">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/file01.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[10px]">
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="rounded bg-white flex flex-row items-center justify-center p-2.5">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/helpcircle.svg"
              />
            </div>
            <div className="rounded bg-white flex flex-row items-center justify-center p-2.5">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/setting01.svg"
              />
            </div>
          </div>
          <div className="relative box-border w-[65px] h-px border-t-[1px] border-solid border-gray-1001" />
          <div className="rounded-181xl bg-white flex flex-row items-start justify-start p-1">
            <div className="relative rounded-181xl w-8 h-8 bg-[url('/avatar@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <div className="absolute right-[-1.5px] bottom-[-1.5px] rounded bg-secondary-green-500-g box-border w-[11px] h-[11px] overflow-hidden border-[1.5px] border-solid border-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
