import React from "react";

// 더미 사주 데이터
// const dummySajuData = {
//   si: { cheongan: "甲", jiji: "子" },
//   il: { cheongan: "乙", jiji: "丑" },
//   wol: { cheongan: "丙", jiji: "寅" },
//   nyeon: { cheongan: "丁", jiji: "卯" },
// };

const SajuTable = () => {
  return (
    <div className="max-w-md mx-auto bg-[#F5F3EC] mb-10">
      {/* 상단 연장선 */}
      <div className="relative">
        <div className="absolute top-[2.4px] left-[-1px] border-r-[1px] w-[20px] h-[20px] border-[#2B557E]"></div>
        <div className="absolute top-[2.4px] right-[-0.9px] border-l-[1px] w-[20px] h-[20px] border-[#2B557E]"></div>
        <div className="absolute top-[1px] left-[-1px] border-b-[1px] w-[20px] h-[20px] border-[#2B557E]"></div>
        <div className="absolute top-[2.4px] right-[-0.9px] border-b-[1px] w-[20px] h-[20px] border-[#2B557E]"></div>
      </div>
      <div className="border-[3px] border-[#1B2F49] p-4 ">
        <div className="border-[#2B557E] border-[1px] bg-red-200">
          <div className="saju_title grid grid-cols-[1fr,6fr,1fr]">
            <div className="flex items-center justify-left">
              <img
                src="layer_left.png"
                alt="왼쪽 레이어"
                className="w-[56px] h-[38px]"
              />
            </div>
            <div className="text-center">
              <p className="text-[clamp(12px,4vw,16px)] text-[#424242]">
                김로켓님의 사주
              </p>
              <p className="text-[clamp(16px,3vw,20px)] font-bold text-[#424242]">
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
          <div className="w-[90%] mx-auto my-5">
            {/* 헤더 행 */}
            <div className="header-row grid grid-cols-5">
              <div className="border-b-[1.05px] border-r-[1.05px] border-b-black border-r-black p-2"></div>
              <div className="border-b-[1.05px] border-r-[0.49px] border-b-black border-r-gray-medium p-2  text-center font-medium">
                時
              </div>
              <div className="border-b-[1.05px] border-r-[0.49px] border-b-black border-r-gray-medium p-2  text-center font-medium">
                日
              </div>
              <div className="border-b-[1.05px] border-r-[0.49px] border-b-black border-r-gray-medium p-2  text-center font-medium">
                月
              </div>
              <div className="border-b-[1.05px] border-r-[1.05px] border-b-black p-2 text-center font-medium">
                年
              </div>
            </div>

            {/* 첫 번째 행 */}
            <div className="basic-row grid grid-cols-5">
              <div className="border-b-[1.05px] border-r-[1.05px] border-b-black border-r-black p-1">
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(십성)</p>
              </div>
              <div className="border-b-[1.05px] border-r-[0.49px] border-b-black border-r-gray-medium p-1">
                <p className="font-bold text-center pb-1 mb-1"></p>
                <p className="text-sm text-center font-bold">(십성)</p>
              </div>
              <div className="border-b-[1.05px] border-r-[0.49px] border-b-black border-r-gray-medium p-1">
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(십성)</p>
              </div>
              <div className="border-b-[1.05px] border-r-[0.49px] border-b-black border-r-gray-medium p-1">
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(십성)</p>
              </div>
              <div className="border-b-[1.05px] border-r-[1.05px] border-b-black p-1">
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(십성)</p>
              </div>
            </div>
            {/* 천간행 */}
            <div className="basic-row grid grid-cols-5">
              <div className="border-b-[1.05px] border-r-[1.05px] border-b-black border-r-black p-1">
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(천간)</p>
              </div>
              <div className="border-b-[1.05px] border-r-[0.49px] border-b-black border-r-gray-medium p-2 flex items-center justify-center">
                <div className="color-container p-2 rounded-xl flex flex-col text-white justify-center items-center w-[55.45px] h-[55.45px] bg-red-medium">
                  <p className="text-center font-normal text-2xs mb-1 leading-none">
                    임
                  </p>
                  <p className="text-center font-normal text-3xl leading-none">
                    壬
                  </p>
                  <p className="text-center font-normal text-2xs mt-1 leading-none">
                    (십성)
                  </p>
                </div>
              </div>
              <div className="border-b-[1.05px] border-r-[0.49px] border-b-black border-r-gray-medium p-1">
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(십성)</p>
              </div>
              <div className="border-b-[1.05px] border-r-[0.49px] border-b-black border-r-gray-medium p-1">
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(십성)</p>
              </div>
              <div className="border-b-[1.05px] border-r-[1.05px] border-b-black p-1">
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(십성)</p>
              </div>
            </div>

            {/* 지지행 */}
            <div className="basic-row grid grid-cols-5">
              <div className="border-b-[1.05px] border-r-[1.05px] border-b-black border-r-black p-1">
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(십성)</p>
              </div>
              <div className="border-b-[1.05px] border-r-[0.49px] border-b-black border-r-gray-medium p-1">
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(십성)</p>
              </div>
              <div className="border-b-[1.05px] border-r-[0.49px] border-b-black border-r-gray-medium p-1">
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(십성)</p>
              </div>
              <div className="border-b-[1.05px] border-r-[0.49px] border-b-black border-r-gray-medium p-1">
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(십성)</p>
              </div>
              <div className="border-b-[1.05px] border-r-[1.05px] border-b-black p-1">
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(십성)</p>
              </div>
            </div>
            <div className="basic-row grid grid-cols-5">
              <div className="border-b-[1.05px] border-r-[1.05px] border-b-black border-r-black p-1">
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(십성)</p>
              </div>
              <div className="border-b-[1.05px] border-r-[0.49px] border-b-black border-r-gray-medium p-1">
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(십성)</p>
              </div>
              <div className="border-b-[1.05px] border-r-[0.49px] border-b-black border-r-gray-medium p-1">
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(십성)</p>
              </div>
              <div className="border-b-[1.05px] border-r-[0.49px] border-b-black border-r-gray-medium p-1">
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(십성)</p>
              </div>
              <div className="border-b-[1.05px] border-r-[1.05px] border-b-black p-1">
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(십성)</p>
              </div>
            </div>
            <div className="basic-triple-row grid grid-cols-5">
              <div className="border-b-[1.05px] border-r-[1.05px] border-b-black border-r-black p-1">
                <p className="text-sm text-center font-bold">(없음)</p>
              </div>
              <div className="border-b-[1.05px] border-r-[0.49px] border-b-black border-r-gray-medium p-1">
                <p className="text-sm text-center font-bold">(없음)</p>
              </div>
              <div className="border-b-[1.05px] border-r-[0.49px] border-b-black border-r-gray-medium p-1">
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(천을귀인)</p>
              </div>
              <div className="border-b-[1.05px] border-r-[0.49px] border-b-black border-r-gray-medium p-1">
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(십성)</p>
              </div>
              <div className="border-b-[1.05px] border-r-[1.05px] border-b-black p-1">
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(십성)</p>
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(십성)</p>
                <p className="font-bold text-center pb-1 mb-1">好事</p>
                <p className="text-sm text-center font-bold">(십성)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 연장선 */}
      <div className="relative">
        <div className="absolute bottom-[2.4px] left-[-1px] border-r-[1px] w-[20px] h-[40px] border-[#2B557E]"></div>
        <div className="absolute bottom-[2.4px] right-[-0.9px] border-l-[1px] w-[20px] h-[40px] border-[#2B557E]"></div>
      </div>
    </div>
  );
};

export default SajuTable;
