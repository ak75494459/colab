import React, { useState } from "react";
import "./css/mcq.css";

export default function SideBar() {

  const [style, setStyle] = useState("not choose");

  const chooseOption = () => {
    if (style === "choose") {
      setStyle("notchoose");
    }
  };

  

  return (
    <div className="flex flex-col w-[6%] bg-[#FFFFFF] m-2 rounded" style={{ height: "calc(100vh - 140px)" }}>
      <div className="flex">
        <button className={`m-2 item-center justify-center w-[1.7rem] font-bold text-[12px] h-[2rem] rounded ${style}`}
          onClick={chooseOption}>
          1
        </button>
        <button
          className={`m-2 item-center justify-center w-[1.7rem] font-bold text-[12px] h-[2rem] rounded ${style}`}
          onClick={chooseOption}
        >
          2
        </button>
      </div>

      <div className="flex-1">
        {/* Main content can go here */}
      </div>

      <div className="tabs flex flex-col justify-end">
        <div className="w-full flex flex-col justify-center items-center text-[10px] font-bold border-t-[1px] p-1 bg-gradient-to-t from-[#F1F8EE] to-[#FAFCF9]">
          <div>Answered</div>
          <div>0/2</div>
        </div>
        <div className="w-full h-[3px] bg-[#55BA45]"></div>
        <div className="w-full flex flex-col justify-center items-center text-[10px] font-bold border-t-[1px] p-1 bg-gradient-to-t from-[#FFF8EE] to-[#FFFBF8]">
          <div>Bookmarked</div>
          <div>0/2</div>
        </div>
        <div className="w-full h-[3px] bg-[#FFAD3A]"></div>
        <div className="w-full flex flex-col justify-center items-center text-[10px] font-bold border-t-[1px] p-1 bg-gradient-to-t from-[#FFEFEB] to-[#FFF6F4]">
          <div>Skipped</div>
          <div>0/2</div>
        </div>
        <div className="w-full h-[3px] bg-[#FF5E5B]"></div>
        <div className="w-full flex flex-col justify-center items-center text-[10px] font-bold border-t-[1px] p-1 bg-gradient-to-t from-[#FBFCFE] to-[#FEFFFF]">
          <div>Not Viewed</div>
          <div>1/2</div>
        </div>
        <div className="w-full h-[3px] bg-[#666666]"></div>
        <div className="w-full flex flex-col justify-center items-center text-[10px] font-bold border-t-[1px] p-1">
          <div>saved in server</div>
          <div>0/2</div>
        </div>
        <div className="font-bold text-[#3456FF] text-[11px] text-center py-2">View more</div>
      </div>
    </div>
  );
}
