import React, { useState } from "react";


export default function McqOption() {
  const [selectedButton, setSelectedButton] = useState();

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <div
      className="w-[60%] m-2 rounded-xl"
      style={{ height: "calc(100vh - 140px)" }}
    >
      <div className="flex rounded-t-md bg-[#EAEEFF] items-center justify-between p-2">
        <div className="font-bold text-[#666666] text-[15px] ml-[10px]">
          Answer here
        </div>
      </div>
      <div className="code-area h-[73vh] bg-[#FFFFFF] overflow-scroll">
        <div className="h-full flex">
          <div className="w-[100%] h-full" >
            <div className={`flex  m-5 p-3 text-black rounded items-center gap-2 cursor-pointer ${
              selectedButton === 1 ? "bg-[#3456FF] text-white" : "bg-[#F5F7FA] text-black"
            }}`} onClick={()=>handleButtonClick(1)}>
              <div className={`outline outline-[0.5px] outline-[#B2B3B5] w-[1rem] h-[1rem] rounded-xl`} ></div>
              <div>Negative weight</div>
            </div>
            <div className={`flex  m-5 p-3 text-black rounded items-center gap-2 cursor-pointer ${
              selectedButton === 2 ? "bg-[#3456FF] text-white" : "bg-[#F5F7FA] text-black"
            }}`} onClick={()=>handleButtonClick(2)}>
              <div className="outline outline-[0.5px] outline-[#B2B3B5] w-[1rem] h-[1rem] rounded-xl"></div>
              <div>Cycles</div>
            </div>
            <div className={`flex  m-5 p-3 text-black rounded items-center gap-2 cursor-pointer ${
              selectedButton === 3 ? "bg-[#3456FF] text-white" : "bg-[#F5F7FA] text-black"
            }}`} onClick={()=>handleButtonClick(3)}>
              <div className="outline outline-[0.5px] outline-[#B2B3B5] w-[1rem] h-[1rem] rounded-xl"></div>
              <div>Disconnected components</div>
            </div>
            <div className={`flex  m-5 p-3 text-black rounded items-center gap-2 cursor-pointer ${
              selectedButton === 4 ? "bg-[#3456FF] text-white" : "bg-[#F5F7FA] text-black"
            }}`} onClick={()=>handleButtonClick(4)}>
              <div className="outline outline-[0.5px] outline-[#B2B3B5] w-[1rem] h-[1rem] rounded-xl"></div>
              <div>Parallel edges</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#EAEEFF] w-full  flex gap-3  p-3 rounded-b-md text-[#666666] font-bold text-[15px] justify-between">
        <button className="outline otline-[0.5px] outline-[#A9A9A9] px-3 rounded py-2 text-[12px] ">
          {" "}
          Clear
        </button>

        <button className="outline otline-[0.5px] outline-[#A9A9A9] px-3 rounded py-2 text-[12px] mr-2">
          Next
        </button>
      </div>
    </div>
  );
}
