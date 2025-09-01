import React from "react";

import SajuLayout from "./SajuLayout";
import SajuTable1 from "./SajuTable1";

// 추후 챕터 추가에 따라 수정, 확장하기

const ContentViewer = () => {
  return (
    <>
      <div className="max-w-md mx-auto">
        <div className="scene_1 relative bg-[#F5F3EC]">
          <img
            src="character_title.png"
            alt="제 1장 캐릭터 등장"
            className="w-full h-auto"
          />
          <div className="absolute top-[85.5%] left-[10%] right-[40%] text-center md:top-[85%] md:left-[10%] md:right-[40%]">
            {/* <p className="text-xl xs:text-sm md:text-2xl">이제 본격적으로</p> */}
            <p className="text-[clamp(8px,5vw,20px)] leading-tight">
              이제 본격적으로
            </p>

            {/* <p className="text-xl xs:text-sm md:text-2xl">OO님의 사주팔자를</p> */}
            <p className="text-[clamp(8px,5vw,20px)] leading-tight">
              OO님의 사주팔자를
            </p>
            {/* <p className="text-xl xs:text-sm md:text-2xl">분석해볼 차례네요.</p> */}
            <p className="text-[clamp(8px,5vw,20px)] leading-tight">
              분석해볼 차례네요.
            </p>
          </div>
        </div>
        <div className="scene_2 relative bg-[#F5F3EC]">
          <img
            src="scene_writing.png"
            alt="붓글씨"
            className="w-full h-auto relative"
          />
        </div>
        <div className="scene_3 relative bg-[#F5F3EC]">
          <img
            src="character_explaining.png"
            alt="사주 설명 시작"
            className="w-full h-auto"
          />
          <div className="absolute top-[12%] left-[12%] right-[34%] text-center md:top-[12%] md:left-[10%] md:right-[32%]">
            <p className="text-[clamp(8px,5vw,20px)] leading-tight">
              제가 oo님의 사주를
            </p>
            <p className="text-[clamp(8px,5vw,20px)] leading-tight">
              보기 쉽게 표로 정리했어요
            </p>
          </div>
        </div>
        <div>
          <SajuLayout></SajuLayout>
          <SajuTable1 />
        </div>
      </div>
    </>
  );
};

export default ContentViewer;
