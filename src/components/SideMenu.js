import React from "react";
import { Link } from "react-router-dom";

export default function SideMenu() {
  return (
    <div>
      <div
        className="w-[5rem] h-[49rem] fixed max-md:hidden z-50"
        style={{ backgroundColor: "#111643", height: "-webkit-fill-available" }}
      >
        <Link to="/">
          <div className="icon rounded flex justify-center items-center relative top-[17px] left-[18px] w-[47px] h-[47px] bg-[#FFFFFF]">
            <img
              className="w-[2.3rem] h-[2.3rem]"
              src="https://upload.wikimedia.org/wikipedia/en/3/3a/Lovely_Professional_University_logo.png"
              alt=""
            />
          </div>
        </Link>
        <Link to="/">
          <div className="w-[100%] bg-[#263CB2] h-[4rem] relative top-10 flex text-white">
            <img
              className="h-[4rem]"
              src="https://lpucolab438.examly.io/assets/images/sidebar/Rect.svg"
              alt=""
            />

            <div className="relative top-3  text-white">
              <svg
                style={{ left: "26px", position: "relative" }}
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fdf2f2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-book-open"
              >
                <path d="M12 7v14" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
              </svg>
              <div className="relative my-1 left-[15px] font-bold text-[10px]">
                Courses
              </div>
            </div>
          </div>
        </Link>
        <div className="text-white relative flex flex-col items-center  text-[10px] top-[3rem] gap-1 cursor-pointer hover:bg-[#263CB2] p-3">
          <img
            src="https://lpucolab438.examly.io/assets/images/sidebar/open_ide.svg"
            alt=""
          />
          <div>Open IDE</div>
        </div>
      </div>
    </div>
  );
}
