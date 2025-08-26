import React from "react";

// 더미 사주 데이터
const dummySajuData = {
  si: { cheongan: "甲", jiji: "子" },
  il: { cheongan: "乙", jiji: "丑" },
  wol: { cheongan: "丙", jiji: "寅" },
  nyeon: { cheongan: "丁", jiji: "卯" },
};

const SajuTable = () => {
  return (
    <div className="max-w-md mx-auto bg-[#F5F3EC]">
      <div className="relative">
        <div className="absolute top-[2.4px] left-[-1px] border-r-[1px] w-[20px] h-[20px] border-[#2B557E]"></div>
        <div className="absolute top-[2.4px] right-[-0.9px] border-l-[1px] w-[20px] h-[20px] border-[#2B557E]"></div>
        <div className="absolute top-[1px] left-[-1px] border-b-[1px] w-[20px] h-[20px] border-[#2B557E]"></div>
        <div className="absolute top-[2.4px] right-[-0.9px] border-b-[1px] w-[20px] h-[20px] border-[#2B557E]"></div>
      </div>

      <div className="border-[3px] border-[#1B2F49] p-4">
        <div className="border-[#2B557E] border-[1px] p-5">
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
              <p className="text-[clamp(16px,3vw,20px)] text-[#424242]">
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
          {/* 사주팔자표 */}
          <div className="bg-white rounded-lg border-2 border-gray-300 overflow-hidden shadow-sm">
            {/* 헤더 행 */}
            <div className="grid grid-cols-4 bg-gray-100">
              <div className="border border-gray-300 p-3 text-center font-medium text-[clamp(14px,4vw,16px)]">
                시
              </div>
              <div className="border border-gray-300 p-3 text-center font-medium text-[clamp(14px,4vw,16px)]">
                일
              </div>
              <div className="border border-gray-300 p-3 text-center font-medium text-[clamp(14px,4vw,16px)]">
                월
              </div>
              <div className="border border-gray-300 p-3 text-center font-medium text-[clamp(14px,4vw,16px)]">
                년
              </div>
            </div>

            {/* 천간 행 */}
            <div className="grid grid-cols-4">
              <div className="border border-gray-300 p-3 text-center bg-blue-50 text-[clamp(16px,5vw,20px)] font-bold">
                {dummySajuData.si.cheongan}
              </div>
              <div className="border border-gray-300 p-3 text-center bg-red-50 text-[clamp(16px,5vw,20px)] font-bold text-red-600">
                {dummySajuData.il.cheongan}
              </div>
              <div className="border border-gray-300 p-3 text-center bg-blue-50 text-[clamp(16px,5vw,20px)] font-bold">
                {dummySajuData.wol.cheongan}
              </div>
              <div className="border border-gray-300 p-3 text-center bg-green-50 text-[clamp(16px,5vw,20px)] font-bold text-green-600">
                {dummySajuData.nyeon.cheongan}
              </div>
            </div>

            {/* 지지 행 */}
            <div className="grid grid-cols-4">
              <div className="border border-gray-300 p-3 text-center bg-blue-50 text-[clamp(16px,5vw,20px)] font-bold">
                {dummySajuData.si.jiji}
              </div>
              <div className="border border-gray-300 p-3 text-center bg-yellow-50 text-[clamp(16px,5vw,20px)] font-bold text-yellow-700">
                {dummySajuData.il.jiji}
              </div>
              <div className="border border-gray-300 p-3 text-center bg-red-50 text-[clamp(16px,5vw,20px)] font-bold text-red-600">
                {dummySajuData.wol.jiji}
              </div>
              <div className="border border-gray-300 p-3 text-center bg-green-50 text-[clamp(16px,5vw,20px)] font-bold text-green-600">
                {dummySajuData.nyeon.jiji}
              </div>
            </div>

            {/* 하단 추가 정보 */}
            <div className="grid grid-cols-4 bg-gray-50">
              <div className="border border-gray-300 p-2 text-center text-[clamp(10px,3vw,12px)] text-gray-600">
                申酉
              </div>
              <div className="border border-gray-300 p-2 text-center text-[clamp(10px,3vw,12px)] text-gray-600">
                戌亥
              </div>
              <div className="border border-gray-300 p-2 text-center text-[clamp(10px,3vw,12px)] text-gray-600">
                子丑
              </div>
              <div className="border border-gray-300 p-2 text-center text-[clamp(10px,3vw,12px)] text-gray-600">
                寅卯
              </div>
            </div>
          </div>

          {/* 해석 박스 */}
          <div className="mt-4 bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-green-100 rounded px-2 py-1 text-center text-[clamp(10px,3vw,12px)]">
                <span className="font-medium text-green-700">吉</span>
              </div>
              <div className="bg-yellow-100 rounded px-2 py-1 text-center text-[clamp(10px,3vw,12px)]">
                <span className="font-medium text-yellow-700">中</span>
              </div>
              <div className="bg-red-100 rounded px-2 py-1 text-center text-[clamp(10px,3vw,12px)]">
                <span className="font-medium text-red-700">凶</span>
              </div>
              <div className="bg-purple-100 rounded px-2 py-1 text-center text-[clamp(10px,3vw,12px)]">
                <span className="font-medium text-purple-700">平</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute bottom-[2.4px] left-[-1px] border-r-[1px] w-[20px] h-[40px] border-[#2B557E]"></div>
        <div className="absolute bottom-[2.4px] right-[-0.9px] border-l-[1px] w-[20px] h-[40px] border-[#2B557E]"></div>
      </div>
    </div>
  );
};

export default SajuTable;
