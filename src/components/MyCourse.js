import React from "react";

export default function MyCourse() {
  return (
    <div className="flex justify-between">
      <div className="font-bold text-xl flex items-center">My Courses</div>
      <div className="flex">
        <button className="flex p-3 justify-between bg-white w-[15rem]  mr-3 border-2 rounded-lg">
          <div>Sort By</div>
          <svg
            class="lucide lucide-chevron-down"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
        <button className="flex justify-between bg-white p-3 mr-6 border-2 rounded-lg ">
          <div className="mr-[4rem]">
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
              class="lucide lucide-sliders-horizontal"
            >
              <line x1="21" x2="14" y1="4" y2="4" />
              <line x1="10" x2="3" y1="4" y2="4" />
              <line x1="21" x2="12" y1="12" y2="12" />
              <line x1="8" x2="3" y1="12" y2="12" />
              <line x1="21" x2="16" y1="20" y2="20" />
              <line x1="12" x2="3" y1="20" y2="20" />
              <line x1="14" x2="14" y1="2" y2="6" />
              <line x1="8" x2="8" y1="10" y2="14" />
              <line x1="16" x2="16" y1="18" y2="22" />
            </svg>
          </div>
          <div>Filter</div>
        </button>
      </div>
    </div>
  );
}
