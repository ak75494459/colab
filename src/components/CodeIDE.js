import React from "react";

export default function CodeIDE() {
  return (
    <div
      className="w-[60%] m-2 rounded-xl"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="flex rounded-t-md bg-[#1E2431] items-center justify-between p-2">
        <div className="font-bold text-white text-[15px] ml-[10px]">
          Fill your code here
        </div>
        <div className="text-white flex items-center mr-[10px] gap-2">
          <div className="flex text-[13px] font-bold justify-center">
            C(17){" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          <div className="rounded-[5rem] w-[1.5rem] bg-[#060D1A] m-2">
            <img
              className=""
              style={{ stroke: "white" }}
              src="https://img.icons8.com/ios/50/moon-symbol.png"
              alt="moon-symbol"
            />
          </div>
          <div>
            <img src="" alt="instruction svg" />
          </div>
        </div>
      </div>
      <div className="code-area h-[73vh] overflow-scroll">
        <div className="h-full flex">
          {/* Sidebar (5% width) */}
          <div className="bg-[#1E2431] rounded-es w-[5%] h-[100%]"></div>
          {/* Main input area (95% width) */}
          <div className="w-[95%] h-full">
            <textarea
              className="w-full h-full outline-none bg-[#060C1A] text-white placeholder-[#75715E] text-[16px] font-bold"
              placeholder="// You are using GCC"
              rows="10" // Optional: Adjust to fit your content size
            />
          </div>
        </div>
        <div className="bg-white flex p-3 gap-2">
          <input className="cursor-pointer" type="checkbox" name="customInput" id="custom" />
          <div className="font-bold text-[#666666]">Provide Custoom Input</div>
        </div>
      </div>

      <div className="bg-[#EAEEFF] w-full  flex gap-3  p-3 rounded-b-md text-[#666666] font-bold text-[15px]">
        <button className="outline otline-[0.5px] outline-[#A9A9A9] px-3 rounded py-2 text-[12px] ">
          {" "}
          Clear
        </button>
        <div className="m-auto flex gap-2">
          <button className="outline otline-[0.5px] outline-[#A9A9A9] px-3 rounded py-2 text-[12px]">
            Compile & Run
          </button>
          <button className="px-3 bg-[#3454FA] text-white rounded py-2 text-[12px]">
            Submit Code
          </button>
        </div>
        <button className="outline otline-[0.5px] outline-[#A9A9A9] px-3 rounded py-2 text-[12px] mr-2">
          Next
        </button>
      </div>
    </div>
  );
}
