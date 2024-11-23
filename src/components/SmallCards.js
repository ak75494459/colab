import React from "react";

export default function ({ icon, title, count }) {
  return (
    <div className="h-[60px] w-[98%] shadow rounded-[6px] flex  items-center justify-center gap-8 p-3 font-bold bg-white ">
      <div className="bg-[#EAEEFF] rounded-[20px] p-2">
        <img className="w-[2rem]" src={icon} alt="..." />
      </div>
      <div className="text-[16px] mr-3 w-[100%]">{title}</div>
      <div className="text-[16px]">{count}</div>
    </div>
  );
}
