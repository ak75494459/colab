import React, { useState, useEffect } from "react";

export default function ProgressTest() {
  // Initialize state for seconds
  const [seconds, setSeconds] = useState(60);

  // Countdown logic
  useEffect(() => {
    const interval = window.setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1; // Decrease seconds
        } else {
          clearInterval(interval); // Stop the interval when seconds reach 0
          return 0;
        }
      });
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []); // Only run once on mount

  return (
    <>
      <div className="flex justify-between mx-[3rem] mt-[3rem] mb-[1.5rem]">
        <div className="flex gap-2">
          <div className="bg-pink-100 p-[4px] h-[28px] rounded-xl">
            <img
              className="w-5"
              src="https://cdn-icons-png.flaticon.com/512/8486/8486459.png"
              alt="icon"
            />
          </div>
          <div className="font-bold">Attempts: 1</div>
        </div>
        <div className="flex flex-col justify-between items-center gap-2">
          <div>
            Test starts in &nbsp;<span className="font-bold">{seconds}</span>
          </div>
          <progress
            value={seconds}
            max={60}
            className="h-[6px] w-[7.2rem] rounded-xl"
          />
        </div>
      </div>
      <div className="mx-4  mb-[5rem]">
        <div className="flex outline outline-[0.5px] outline-[#EAEAEA] mx-3 mt-3  bg-[#EAEEFF] rounded-t font-bold ">
          <div className="w-[25%] mr-[10px] p-4">Sections</div>
          <div className="w-[25%] mr-[10px] p-4">Questions</div>
          <div className="w-[25%] mr-[10px] p-4">Duration(min)</div>
          <div className="w-[20%] mr-[10px] p-4">Marks</div>
        </div>
        <div className="flex outline outline-[0.5px] outline-[#EAEAEA] mx-3  gap-[9%] text-[1rem] bg-[#F7F9FC]">
          <div className="w-[25%] p-4">COD</div>
          <div className="w-[25%] p-4">2</div>
          <div className="w-[25%] p-4">50</div>
          <div className="w-[25%] p-4">20</div>
        </div>
        <div className="flex outline outline-[0.5px] outline-[#EAEAEA] mx-3  gap-[9%] text-[1rem] font-bold">
          <div className="w-[25%] p-4 text-[#3456FF]">total</div>
          <div className="w-[25%] p-4">02</div>
          <div className="w-[25%] p-4">50</div>
          <div className="w-[25%] p-4">20</div>
        </div>
      </div>
    </>
  );
}
