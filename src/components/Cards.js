import { Link } from "react-router-dom";
import React from "react";

export default function Cards({ svg, svgColor , courseName ,value ,courseTrack , percentage}) {
  return (
    <Link to="/mycourse/details">
    <div className="w-[318px] h-[350px] shadow-md shadow-gray-200 max-md:w-[100%] bg-white hover:scale-105 cursor-pointer">
      <div className="p-[13px] flex justify-between">
        <div
          className="w-[3.5rem] h-[3.5rem] flex justify-center items-center rounded-xl p-2 shadow-xl shadow-gray-300"
          style={{ backgroundColor: svgColor }}
        >
          {svg}
        </div>
        <svg
          className="mb-[10rem]"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-info"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      </div>
      <div>
        <h1 className="font-bold text-[15px] p-3 h-[3rem]">{courseName}</h1>
      </div>
      <div className="loading px-4">
        <progress
          value={value}
          max={100}
          className="h-[5px] mt-6 w-full border-radius-2"
        />
      </div>
      
      <div className="flex justify-between px-4">
        <h3>{courseTrack}</h3>
        <h3>{percentage}</h3>
      </div>
      <div className="flex justify-between px-3 pt-3 flex-wrap">
        <div className="flex">
          <div className="flex justify-center bg-[#F7F9FC] h-[2.2rem] p-2 rounded-lg  mr-2 mt-2 ">
            <img
              className=""
              src="https://lpucolab438.examly.io/assets/images/courseList/assessment.svg"
              alt="not showing"
            />
          </div>
          <div className="size-">
            <h1>1</h1>
            <h3 className="">Assignment</h3>
          </div>
        </div>
        <div className="flex">
          <div className="flex justify-center bg-[#F7F9FC] h-[2.2rem] p-2 rounded-lg mr-2 mt-2 ">
            <img
              className=""
              src="https://lpucolab438.examly.io/assets/images/courseList/practice_test.svg"
              alt="not showing"
            />
          </div>
          <div className="size-">
            <h1>--</h1>
            <h3 className="">Practice Test</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-3 pt-3 flex-wrap">
        <div className="flex ">
          <div className="flex justify-center bg-[#F7F9FC] h-[2.2rem] p-2 rounded-lg mr-2  mt-2 ">
            <img
              className=""
              src="https://lpucolab438.examly.io/assets/images/common/start_Date.svg"
              alt="not showing"
            />
          </div>
          <div className="size-">
            <h1 className="font-bold">25 Oct,24</h1>
            <h3 className="">Start Date</h3>
          </div>
        </div>
        <div className="flex mr-3">
          <div className="flex justify-center bg-[#F7F9FC] h-[2.2rem] p-2 rounded-lg mr-2  mt-2">
            <img
              className=""
              src="https://lpucolab438.examly.io/assets/images/common/start_Date.svg"
              alt="not showing"
            />
          </div>
          <div className="size-">
            <h1 className="font-bold">26 Oct,24</h1>
            <h3 className="">End Date</h3>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}
