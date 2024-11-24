import React from "react";

export default function SubmitTest() {
  return (
    <div className="mx-[2.3rem]">
      <div className="mt-[3rem]  text-[#666666] font-bold ">
        Are you sure you want to submit this test?
      </div>
      <div className="mt-[1rem] mb-[1rem] text-[#E90F0F] text-[14px] ">
        By typing END, the entire test will get submitted.
      </div>

      <div>
        <div className="bg-[#EAEEFF] font-bold m-auto flex justify-center text-[#666666] p-1 text-[14px] rounded-t-md">
          Test Summary
        </div>
        <div className="bg-[#F6F8FB] flex justify-between text-[#666666] p-3 text-[14px] font-bold">
          <div>No of sections</div>
          <div>2</div>
        </div>
        <div className="bg-[#F6F8FB] flex justify-between text-[#666666] p-3 text-[14px] font-bold">
          <div>No of questions</div>
          <div>2</div>
        </div>
        <div className="bg-[#F6F8FB] flex justify-between text-[#666666] p-3 text-[14px] font-bold">
          <div>Answered</div>
          <div>2</div>
        </div>
        <div className="bg-[#F6F8FB] flex justify-between text-[#666666] p-3 text-[14px] font-bold">
          <div>Saved in Server</div>
          <div>2</div>
        </div>
        <div className="bg-[#F6F8FB] flex justify-between text-[#666666] p-3 text-[14px] font-bold">
          <div>Skipped</div>
          <div>2</div>
        </div>
        <div className="bg-[#F6F8FB] flex justify-between text-[#666666] p-3 text-[14px] font-bold rounded-b-md">
          <div>Not Viewed</div>
          <div>0</div>
        </div>
      </div>

      <div className="font-bold text-[15px] mt-[1rem] text-[#666666]">
        Enter "END" to confirm
      </div>
      <div>
        <input
          type="text"
          className="bg-[#F7F9FC] outline ouline-[0.5px] outline-[#D9D9D9] w-[19rem] p-2 rounded py-[.3rem] mt-[.3rem] mb-1"
        />
      </div>
      <div className="py-[3rem] flex gap-2 justify-end">
      <button className="outline otline-[0.5px] outline-[#A9A9A9] px-[3.3rem] text-[15px] rounded py-[6px]  ">
          {" "}
          No
        </button>
      <button className="px-[3.3rem] text-[15px] rounded py-[6px] bg-[#7189FF] text-white font-bold">
          {" "}
          Yes
        </button>
      </div>
    </div>
  );
}
