import React from "react";

export default function McqQuestion() {
  return (
    <div className="w-[35%] m-2" style={{ height: "calc(100vh - 140px)" }}>
      <div className="bg-[#EAEEFF] w-full flex justify-between  p-2 rounded-t-md">
        <div className="text-[#666666]">
          <strong>Question No : 1 / 10</strong>
        </div>
        <div className="mr-[10px] w-[1.5rem] h-[1.6rem] outline outline-[o.5px] outline-[#FFAD3A] flex items-center justify-center rounded p-1 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFAD3A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-bookmark"
          >
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
          </svg>
        </div>
      </div>
      <div className="h-[74vh] bg-[#FFFFFF] overflow-scroll ">
        <div className="z-0 text-[6rem] rotate-[-45deg] fixed top-[20rem] left-[9rem] font-bold text-[#C2CCFF]">
          12312571
        </div>
        <div className="m-4 z-50 text-[#666666] relative">
          <div className="font-bold text-[20px] text-black">
            Multi Choice Type Question
          </div>
          <div>
            The Warshall algorithm can be applied to a graph with ___________
            edges without any issues. Note: This kind of question will be
            helpful in clearing Infosys recruitment.
          </div>
        </div>
      </div>
      <div className="bg-[#EAEEFF] w-full  flex gap-3  p-3 rounded-b-md text-[#666666] font-bold text-[15px]">
        <div>Marks:10</div>
        <div>Negative Mark:0</div>
      </div>
    </div>
  );
}
