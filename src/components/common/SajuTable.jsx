import React from "react";

const SajuTable = () => {
  return (
    <div className="max-w-md mx-auto bg-[#F5F3EC] mb-10">
      {/* 상단 연장선 */}
      <div className="relative">
        <div className="absolute top-[2.4px] left-[-0.1px] border-r-[1px] w-[20px] h-[20px] border-[#2B557E]"></div>
        <div className="absolute top-[2.4px] right-[-0.1px] border-l-[1px] w-[20px] h-[20px] border-[#2B557E]"></div>
        <div className="absolute top-[0.2px] left-[-0.1px] border-b-[1px] w-[20px] h-[20px] border-[#2B557E]"></div>
        <div className="absolute top-[0.2px] right-[-0.1px] border-b-[1px] w-[20px] h-[20px] border-[#2B557E]"></div>
      </div>
      <div className="border-[3px] border-[#1B2F49] p-4 ">
        <div className="border-[#2B557E] border-[1px]">
          <div className="saju_title grid grid-cols-[1fr,6fr,1fr]">
            <div className="flex items-center justify-left">
              <img
                src="layer_left.png"
                alt="왼쪽 레이어"
                className="w-[56px] h-[38px]"
              />
            </div>
            <div className="text-center m-6">
              <p className="text-[clamp(10px,3vw,16px)] text-[#424242]">
                김로켓님의 사주
              </p>
              <p className="text-[clamp(14px,4vw,20px)] font-bold text-[#424242]">
                1980년 8월 27일 08:10
              </p>
            </div>
            <div className="flex items-center justify-right">
              <img
                src="layer_right.png"
                alt="오른쪽 레이어"
                className="w-[56px] h-[38px]"
              />
            </div>
          </div>

          {/* 사주팔자표 내용 */}
          <div className="w-[90%] mx-auto my-5 max-w-md">
            {/* 헤더 행 */}
            <div className="header-row grid grid-cols-5 text-3xl">
              <div className="border-b-[1.05px] border-r-[1.05px] border-b-black-dark border-r-black-dark p-2"></div>
              <div className="border-b-[1.05px] border-r-[0.49px] border-b-black-dark border-r-gray-medium p-2 text-center font-medium">
                時
              </div>
              <div className="border-b-[1.05px] border-r-[0.49px] border-b-black-dark border-r-gray-medium p-2  text-center font-medium">
                日
              </div>
              <div className="border-b-[1.05px] border-r-[0.49px] border-b-black-dark border-r-gray-medium p-2  text-center font-medium">
                月
              </div>
              <div className="border-b-[1.05px] border-r-[1.05px] border-b-black-dark  border-r-black-dark p-2 text-center font-medium">
                年
              </div>
            </div>
            {/* 첫 번째 행 */}
            <div className="basic-row grid grid-cols-5">
              <div className="border-b-[1.05px] text-center flex flex-col items-center justify-center border-r-[1.05px] border-b-black-dark border-r-black-dark p-1 leading-none">
                <p className="font-normal text-xl text-center mb-1">十星</p>
                <p className="font-bold text-2xs text-center">(십성)</p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[0.49px] text-center flex flex-col items-center justify-center border-b-black-dark border-r-black-dark p-1 leading-tight">
                <p className="font-normal text-2xl text-center mb-1">傷官</p>
                <p className="font-bold text-xs text-center">(상관)</p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[0.49px] text-center flex flex-col items-center justify-center border-b-black-dark border-r-black-dark p-1 leading-tight">
                <p className="font-normal text-2xl text-center mb-1">傷官</p>
                <p className="font-bold text-xs text-center">(상관)</p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[0.49px] text-center flex flex-col items-center justify-center border-b-black-dark border-r-black-dark p-1 leading-tight">
                <p className="font-normal text-2xl text-center mb-1">傷官</p>
                <p className="font-bold text-xs text-center">(상관)</p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[1.05px] text-center flex flex-col items-center justify-center border-b-black-dark border-r-black-dark p-1 leading-tight">
                <p className="font-normal text-2xl text-center mb-1">傷官</p>
                <p className="font-bold text-xs text-center">(상관)</p>
              </div>
            </div>
            {/* 천간행 */}
            <div className="basic-row grid grid-cols-5">
              <div className="border-b-[1.05px] text-center flex flex-col items-center justify-center leading-none border-r-[1.05px] border-b-gray-light border-r-black-dark p-1">
                <p className="font-bold text-center pb-1 mb-1">天干</p>
                <p className="text-sm text-center font-bold">(천간)</p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[0.49px] border-b-gray-light border-r-gray-medium p-2 flex items-center justify-center">
                <div className="color-container p-2 leading-none rounded-xl flex flex-col text-white justify-center items-center w-[55.45px] h-[55.45px] bg-black-medium">
                  <p className="text-center font-normal text-3xs mb-1">임</p>
                  <p className="text-center font-normal text-3xl ">壬</p>
                  <p className="text-center font-normal text-3xs mt-1">
                    (십성)
                  </p>
                </div>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[0.49px] border-b-gray-light border-r-gray-medium p-2 flex items-center justify-center">
                <div className="color-container p-2 leading-none rounded-xl flex flex-col text-white justify-center items-center w-[55.45px] h-[55.45px] bg-red-medium">
                  <p className="text-center font-normal text-3xs mb-1">임</p>
                  <p className="text-center font-normal text-3xl ">壬</p>
                  <p className="text-center font-normal text-3xs mt-1">
                    (십성)
                  </p>
                </div>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[0.49px] border-b-gray-light border-r-gray-medium p-2 flex items-center justify-center">
                <div className="color-container p-2 leading-none rounded-xl flex flex-col text-white justify-center items-center w-[55.45px] h-[55.45px] bg-black-medium">
                  <p className="text-center font-normal text-3xs mb-1">임</p>
                  <p className="text-center font-normal text-3xl ">壬</p>
                  <p className="text-center font-normal text-3xs mt-1">
                    (십성)
                  </p>
                </div>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[1.05px] border-b-gray-light border-r-black-dark p-2 flex items-center justify-center">
                <div className="color-container p-2 leading-none rounded-xl flex flex-col text-white justify-center items-center w-[55.45px] h-[55.45px] bg-black-medium">
                  <p className="text-center font-normal text-3xs mb-1">임</p>
                  <p className="text-center font-normal text-3xl ">壬</p>
                  <p className="text-center font-normal text-3xs mt-1">
                    (십성)
                  </p>
                </div>
              </div>
            </div>
            {/* 지지행 */}
            <div className="basic-row grid grid-cols-5">
              <div className="border-b-[1.05px] text-center flex flex-col items-center justify-center leading-none border-r-[1.05px] border-b-black-dark border-r-black-dark p-1">
                <p className="font-bold text-center pb-1 mb-1">地支</p>
                <p className="text-sm text-center font-bold">(지지)</p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[0.49px] border-b-black-dark border-r-gray-medium p-2 flex items-center justify-center">
                <div className="color-container p-2 leading-none rounded-xl flex flex-col text-white justify-center items-center w-[55.45px] h-[55.45px] bg-turquoise">
                  <p className="text-center font-normal text-3xs mb-1">임</p>
                  <p className="text-center font-normal text-3xl ">壬</p>
                  <p className="text-center font-normal text-3xs mt-1">
                    (십성)
                  </p>
                </div>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[0.49px] border-b-black-dark border-r-gray-medium p-2 flex items-center justify-center">
                <div className="color-container p-2 leading-none rounded-xl flex flex-col text-white justify-center items-center w-[55.45px] h-[55.45px] bg-red-medium">
                  <p className="text-center font-normal text-3xs mb-1">임</p>
                  <p className="text-center font-normal text-3xl ">壬</p>
                  <p className="text-center font-normal text-3xs mt-1">
                    (십성)
                  </p>
                </div>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[0.49px] border-b-black-dark border-r-gray-medium p-2 flex items-center justify-center">
                <div className="color-container p-2 leading-none rounded-xl flex flex-col text-white justify-center items-center w-[55.45px] h-[55.45px] bg-black-medium">
                  <p className="text-center font-normal text-3xs mb-1">임</p>
                  <p className="text-center font-normal text-3xl ">壬</p>
                  <p className="text-center font-normal text-3xs mt-1">
                    (십성)
                  </p>
                </div>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[1.05px] border-b-black-dark border-r-black-dark p-2 flex items-center justify-center">
                <div className="color-container p-2 leading-none rounded-xl flex flex-col border-black-dark border-[0.98px] justify-center items-center w-[55.45px] h-[55.45px]">
                  <p className="text-center font-normal text-3xs mb-1">임</p>
                  <p className="text-center font-normal text-3xl ">壬</p>
                  <p className="text-center font-normal text-3xs mt-1">
                    (십성)
                  </p>
                </div>
              </div>
            </div>
            {/* 지지행끝 */}
            {/* 십성행 */}
            <div className="basic-row grid grid-cols-5">
              <div className="border-b-[1.05px] text-center flex flex-col items-center justify-center border-r-[1.05px] border-b-black-dark border-r-black-dark p-1 leading-none">
                <p className="font-normal text-xl text-center mb-1">十星</p>
                <p className="font-bold text-2xs text-center">(십성)</p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[0.49px] text-center flex flex-col items-center justify-center border-b-black-dark border-r-black-dark p-1 leading-tight">
                <p className="font-normal text-2xl text-center mb-1">傷官</p>
                <p className="font-bold text-xs text-center">(상관)</p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[0.49px] text-center flex flex-col items-center justify-center border-b-black-dark border-r-black-dark p-1 leading-tight">
                <p className="font-normal text-2xl text-center mb-1">傷官</p>
                <p className="font-bold text-xs text-center">(상관)</p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[0.49px] text-center flex flex-col items-center justify-center border-b-black-dark border-r-black-dark p-1 leading-tight">
                <p className="font-normal text-2xl text-center mb-1">傷官</p>
                <p className="font-bold text-xs text-center">(상관)</p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[1.05px] text-center flex flex-col items-center justify-center border-b-black-dark border-r-black-dark p-1 leading-tight">
                <p className="font-normal text-2xl text-center mb-1">傷官</p>
                <p className="font-bold text-xs text-center">(상관)</p>
              </div>
            </div>
            {/* 십이운성행 */}
            <div className="basic-row grid grid-cols-5">
              <div className="border-b-[1.05px] text-center flex flex-col items-center justify-center border-r-[1.05px] border-b-black-dark border-r-black-dark p-1 leading-none">
                <p
                  className="font-normal text-[clamp(8px,8vw,18px)] text-center mb-1"
                  style={{ wordBreak: "break-all", width: "4em" }}
                >
                  十二運星
                </p>
                <p
                  className="font-bold text-[clamp(6px,4vw,8px)] text-center mb-1"
                  style={{ wordBreak: "break-all", width: "6em" }}
                >
                  (십이운성)
                </p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[0.49px] text-center flex flex-col items-center justify-center border-b-black-dark border-r-black-dark p-1 leading-tight">
                <p className="font-normal text-2xl text-center mb-1">傷官</p>
                <p className="font-bold text-xs text-center">(상관)</p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[0.49px] text-center flex flex-col items-center justify-center border-b-black-dark border-r-black-dark p-1 leading-tight">
                <p className="font-normal text-2xl text-center mb-1">傷官</p>
                <p className="font-bold text-xs text-center">(상관)</p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[0.49px] text-center flex flex-col items-center justify-center border-b-black-dark border-r-black-dark p-1 leading-tight">
                <p className="font-normal text-2xl text-center mb-1">傷官</p>
                <p className="font-bold text-xs text-center">(상관)</p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[1.05px] text-center flex flex-col items-center justify-center border-b-black-dark border-r-black-dark p-1 leading-tight">
                <p className="font-normal text-2xl text-center mb-1">傷官</p>
                <p className="font-bold text-xs text-center">(상관)</p>
              </div>
            </div>
            {/* 십이신살행 */}
            <div className="basic-row grid grid-cols-5">
              <div className="border-b-[1.05px] text-center flex flex-col items-center justify-center border-r-[1.05px] border-b-black-dark border-r-black-dark p-1 leading-none">
                <p
                  className="font-normal text-[clamp(8px,8vw,18px)] text-center mb-1"
                  style={{ wordBreak: "break-all", width: "4em" }}
                >
                  十二神殺
                </p>
                <p
                  className="font-bold text-[clamp(6px,4vw,8px)] text-center mb-1"
                  style={{ wordBreak: "break-all", width: "6em" }}
                >
                  (십이신살)
                </p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[0.49px] text-center flex flex-col items-center justify-center border-b-black-dark border-r-black-dark p-1 leading-tight">
                <p className="font-normal text-2xl text-center mb-1">傷官</p>
                <p className="font-bold text-xs text-center">(상관)</p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[0.49px] text-center flex flex-col items-center justify-center border-b-black-dark border-r-black-dark p-1 leading-tight">
                <p className="font-normal text-2xl text-center mb-1">傷官</p>
                <p className="font-bold text-xs text-center">(상관)</p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[0.49px] text-center flex flex-col items-center justify-center border-b-black-dark border-r-black-dark p-1 leading-tight">
                <p className="font-normal text-2xl text-center mb-1">傷官</p>
                <p className="font-bold text-xs text-center">(상관)</p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[1.05px] text-center flex flex-col items-center justify-center border-b-black-dark border-r-black-dark p-1 leading-tight">
                <p className="font-normal text-2xl text-center mb-1">傷官</p>
                <p className="font-bold text-xs text-center">(상관)</p>
              </div>
            </div>

            {/* 귀인행 */}
            <div className="basic-row grid grid-cols-5">
              <div className="border-b-[1.05px] text-center flex flex-col items-center justify-center border-r-[1.05px] border-b-black-dark border-r-black-dark p-1 leading-none">
                <p className="font-normal text-xl text-center mb-1">貴人</p>
                <p className="font-bold text-2xs text-center">(귀인)</p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[0.49px] text-center flex flex-col items-center justify-center border-b-black-dark border-r-black-dark p-1 leading-tight">
                <p className="font-bold text-xs text-center">(없음)</p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[0.49px] text-center flex flex-col items-center justify-center border-b-black-dark border-r-black-dark p-1 leading-tight">
                <p className="font-bold text-xs text-center">(없음)</p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[0.49px] text-center flex flex-col items-center justify-center border-b-black-dark border-r-black-dark p-1 leading-tight">
                <p className="font-bold text-xs text-center">(없음)</p>
              </div>
              <div className="border-b-[1.05px] bg-white border-r-[1.05px] text-center flex flex-col items-center justify-center border-b-black-dark border-r-black-dark p-1 leading-tight">
                <p className="font-normal text-2xl text-center mb-1">天乙</p>
                <p
                  className="font-bold text-[clamp(6px,4vw,10px)] text-center mb-1"
                  style={{ wordBreak: "break-all", width: "6em" }}
                >
                  (천을귀인)
                </p>
                <p className="font-normal text-2xl text-center mb-1">天乙</p>
                <p
                  className="font-bold text-[clamp(6px,4vw,10px)] text-center mb-1"
                  style={{ wordBreak: "break-all", width: "6em" }}
                >
                  (천을귀인)
                </p>
                <p className="font-normal text-2xl text-center mb-1">天乙</p>
                <p
                  className="font-bold text-[clamp(6px,4vw,10px)] text-center mb-1"
                  style={{ wordBreak: "break-all", width: "6em" }}
                >
                  (천을귀인)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 연장선 */}
      <div className="relative">
        <div className="absolute bottom-[19px] left-[-0.1px] border-b-[1px] w-[20px] h-[50px] border-[#2B557E]"></div>
        <div className="absolute bottom-[19px] right-[-0.1px] border-b-[1px] w-[20px] h-[20px] border-[#2B557E]"></div>
        <div className="absolute bottom-[0.2px] left-[-0.1px] border-r-[1px] w-[20px] h-[40px] border-[#2B557E]"></div>
        <div className="absolute bottom-[0.2px] right-[-0.1px] border-l-[1px] w-[20px] h-[40px] border-[#2B557E]"></div>
      </div>
    </div>
  );
};

export default SajuTable;
