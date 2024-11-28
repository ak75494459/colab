import React, { useState } from "react";
import { Search } from "lucide-react";
import Modal from "./Modal";


export default function TestStartPage() {
  const [hide, setHide] = useState(true);
  const [viewTestInstruction, setViewTestInstruction] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-[#054F56] h-[8rem] ml-[6rem] mr-[2rem] max-md:hidden rounded flex items-center justify-between">
        <div className="flex items-center gap-6 ml-[2rem] mb-[1rem]">
          <div className="w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded bg-[#3456FF]">
            <svg
              style={{ color: "white" }}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-book-minus"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
              <path d="M9 10h6" />
            </svg>
          </div>
          <div className="font-bold text-white">CSE202_CA3_28 NOV_2 to 3</div>
        </div>
        <div className="flex gap-3 justify-center justify-center mr-10  mb-[1rem]">
          <div>
            <progress
              value={0}
              max={100}
              className="h-[6px] w-[13rem] rounded-xl"
            />
          </div>
          <div className="text-white">0%</div>
        </div>
      </div>

      <div className="card flex ml-[6rem] mr-[2rem] gap-4 max-md:hidden  relative bottom-[18px]">
        <div className="w-[13rem] h-[2.5rem] rounded shadow bg-white flex justify-center items-center  justify-between px-[15px]">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex gap-3">
              <img
                src="https://lpucolab438.examly.io/assets/images/common/startDateGreen.svg"
                alt=""
                className="w-[15px]"
              />
            </div>
            <div className="font-bold text-[11px]">Start Date</div>
          </div>
          <div className="font-bold text-[#55BA45] text-[12px]">28 Nov,24</div>
        </div>
        <div className="w-[13rem] h-[2.5rem]  rounded shadow bg-white flex justify-center items-center  justify-between px-[15px]">
          <div className="flex items-center gap-3">
            <div className="flex gap-3">
              <img
                src="https://lpucolab438.examly.io/assets/images/common/endDateRed.svg"
                alt=""
                className="w-[15px]"
              />
            </div>
            <div className="font-bold text-[11px]">End Date</div>
          </div>
          <div className="font-bold text-[#FF5E5B] text-[12px]">28 Nov,24</div>
        </div>
        <div className="w-[13rem] h-[2.5rem]   rounded shadow bg-white flex justify-center items-center  justify-between px-[15px]">
          <div className="flex items-center gap-3">
            <div className="flex gap-3">
              <img
                src="https://lpucolab438.examly.io/assets/images/common/badgesBlue.svg"
                alt=""
                className="w-[15px]"
              />
            </div>
            <div className="font-bold text-[11px]">Badges</div>
          </div>
          <div className="font-bold text-[#800080] text-[12px]">0</div>
        </div>
        <div className="w-[13rem] h-[2.5rem]   rounded shadow bg-white flex justify-center items-center  justify-between px-[15px] max-lg:hidden">
          <div className="flex items-center gap-3 ">
            <div className="flex gap-3">
              <img
                src="https://lpucolab438.examly.io/assets/images/common/superBadgesOrange.svg"
                alt=""
                className="w-[15px]"
              />
            </div>
            <div className="font-bold text-[11px]">Super Badges</div>
          </div>
          <div className="font-bold text-[#FEB145] text-[12px]">0</div>
        </div>
        <div className="w-[13rem] h-[2.5rem] max-md:hidden  rounded shadow bg-white flex justify-center items-center  justify-between px-[15px] max-lg:hidden">
          <div className="flex items-center gap-3 ">
            <div className="flex gap-3">
              <img
                src="https://lpucolab438.examly.io/assets/images/common/testBlue.svg"
                alt=""
                className="w-[15px]"
              />
            </div>
            <div className="font-bold text-[11px]">Test</div>
          </div>
          <div className="font-bold text-[#022277] text-[12px]">1</div>
        </div>
      </div>
      <div className="max-md:hidden hidden max-xl:inline">
        <div className="float-right bg-[#FDFDFE] rounded relative top-[-3.6rem] mr-[1rem] z-[50] py-[8px] opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
        <div className="float-left bg-[#FDFDFE] rounded relative top-[-3.6rem]  z-[50] py-[8px] ml-[5.3rem] opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </div>
      </div>
      <div className="ml-[6rem] mr-[2rem] h-[40rem] flex gap-4 bg-[#FFFFFF] outline outline-[0.5px] outline-[#EAEAEA] shadow-lg max-md:mt-[3rem] max-md:m-auto">
        <div className="w-[35%] h-full max-lg:hidden p-3 rounded">
          <div className="search bg-[#FFFFFF] flex outline outline-1 outline-[#EAEAEA]  rounded p-2">
            <Search />
            <input
              type="text"
              id="first_name"
              className="w-full text-gray-900 bg-[#FFFFFF] text-lg   focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-3 outline-none"
              placeholder="Search"
            />
          </div>
          <div className="test-card outline outline-1 outline-[#EAEAEA] mt-[16px] cursor-pointer">
            <div
              className="flex justify-between p-3 bg-[#FFFFFF] rounded  items-center"
              onClick={() => setHide(!hide)}
            >
              <div className="flex gap-2">
                {hide ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#AAAAAA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-up"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                )}

                <h1 className="font-bold">Slot 1</h1>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 44 44"
                height="44"
                width="44"
                class="ng-star-inserted"
              >
                <defs></defs>
                <circle
                  cx="22"
                  cy="22"
                  r="-30"
                  fill="transparent"
                  fill-opacity="1"
                  stroke="transparent"
                  stroke-width="0"
                  class="ng-star-inserted"
                ></circle>
                <circle
                  cx="22"
                  cy="22"
                  r="18"
                  fill="none"
                  stroke="#e7e8ea"
                  stroke-width="4"
                  class="ng-star-inserted"
                ></circle>
                <text
                  alignment-baseline="baseline"
                  x="22"
                  y="22"
                  text-anchor="middle"
                  class="ng-star-inserted"
                >
                  <tspan
                    x="22"
                    y="22"
                    dy="0.32em"
                    font-size="10"
                    font-weight="600"
                    fill="#666666"
                    class="ng-star-inserted"
                  >
                    {" "}
                    0%{" "}
                  </tspan>
                </text>
              </svg>
            </div>

            {hide ? (
              <div className="p-2 outline outline-[0.5px] outline-[#EAEAEA] shadow-lg">
                <div className="box text-[#666666] ">
                  <div className="flex items-center ml-[3px]">
                    <div className="w-[12px] h-[12px] rounded-[9px] bg-[#666666]"></div>
                    <h1 className="font-bold ml-[22px]">
                      1. CSE202_28Nov _CA 3
                    </h1>
                  </div>
                  <div className="flex ml-[3rem] text-[13px] gap-4 pb-[6px]">
                    <div>Start : 28 Nov 24</div>
                    <div>End : 28 Nov 24</div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-[65%] h-full max-lg:w-[100%] max-md:m-auto  rounded m-2">
          <div className="1 bg-[#EAEEFF] flex p-5 justify-between rounded-t-lg">
            <h1 className="font-bold">CSE202_28 Nov_CA 3</h1>
            <div className="flex gap-3 items-center">
              <div className="text-[#3456FF]">View Instructions</div>
              <button
                className="bg-[#3456FF] items-center flex px-2 text-white font-bold text-[14px] h-[2rem] rounded "
                onClick={() => setViewTestInstruction(true)}
              >
                Take Test
              </button>
            </div>
          </div>
          <div className="flex justify-between outline outline-[0.5px] outline-[#EAEAEA]">
            <div className="flex gap-2 cursor-pointer">
              <h1 className="text-[#3456FF] font-bold text-[15px] py-4 px-3 bg-gradient-to-t from-[#DEE3FF] to-[#F3F5FF]">
                Overview
              </h1>

              <h1 className="text-[#666666] font-bold text-[15px] py-4">
                Attempt
              </h1>
            </div>
            <div className="flex mr-4 items-center font-bold text-[13px]">
              <div>Attempts: 01/01</div>
            </div>
          </div>
          <div
            className="h-[3px] bg-[#3456FF] relative bottom-[2px] rounded"
            style={{ width: "93px" }}
          ></div>
          <div className="h-[30rem] outline outline-[0.5px] outline-[#EAEAEA] relative bottom-[2px]">
            <h2 className="text-center text-[11px] pt-[16px] text-[#E90F0F] items-center flex justify-center">
              <div className="h-[1px] w-[7rem] bg-[#E90F0F] opacity-10 mr-[5px]"></div>
              Start Before: 28 Nov 24 | 1:30 PM (GMT +05:30)
              <div className="h-[1px] w-[7rem] bg-[#E90F0F] opacity-10 ml-[5px]"></div>
            </h2>
            <div className="flex outline outline-[0.5px] outline-[#EAEAEA] mx-3 mt-3  bg-[#EAEEFF] rounded-t font-bold ">
              <div className="w-[20%] mr-[10px] p-3">SNo</div>
              <div className="w-[20%] mr-[10px] p-3">Name</div>
              <div className="w-[20%] mr-[10px] p-3">Questions</div>
              <div className="w-[20%] mr-[10px] p-3">Duration(min)</div>
              <div className="w-[10%] mr-[10px] p-3">Marks</div>
            </div>
            <div className="flex outline outline-[0.5px] outline-[#EAEAEA] mx-3  gap-[9%] text-[1rem] bg-[#F7F9FC]">
              <div className="w-[20%] ml-4 p-3">1</div>
              <div className="w-[20%] p-3">COD</div>
              <div className="w-[20%] p-3">2</div>
              <div className="w-[20%] p-3">60</div>
              <div className="w-[20%] p-3">20</div>
            </div>
            <div className="flex outline outline-[0.5px] outline-[#EAEAEA] mx-3  gap-[9%] text-[1rem] bg-[#F7F9FC]">
              <div className="w-[20%] ml-4 p-3">1</div>
              <div className="w-[20%] p-3">MCQ</div>
              <div className="w-[20%] p-3">10</div>
              <div className="w-[20%] p-3">60</div>
              <div className="w-[20%] p-3">10</div>
            </div>
            <div className="flex outline outline-[0.5px] outline-[#EAEAEA] mx-3  gap-[9%] text-[1rem] font-bold">
              <div className="w-[20%] ml-4 p-3"></div>
              <div className="w-[20%] p-3 text-[#3456FF]">total</div>
              <div className="w-[20%] p-3">02</div>
              <div className="w-[20%] p-3">50</div>
              <div className="w-[20%] p-3">30</div>
            </div>
          </div>
        </div>
      </div>
      {viewTestInstruction ? (
        <Modal onClose={() => setViewTestInstruction(false)}>
          
        </Modal>
      ) : null}
    </div>
  );
}
