import React, { useState, useEffect } from "react";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressBar() {
  const [percentage, setPercentage] = useState(50);

  // Effect to handle the progress increment

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage < 100) {
          return prevPercentage + 5; // Increment by 5 (adjust as needed)
        } else {
          clearInterval(interval); // Stop the interval when it reaches 100%
          return 100;
        }
      });
    }, 10); // Update every 100ms (adjust as needed)

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to request fullscreen
  const goFullScreen = () => {
    const docEl = document.documentElement; // The entire document
    if (docEl.requestFullscreen) {
      docEl.requestFullscreen(); // For most modern browsers
    } else if (docEl.mozRequestFullScreen) {
      // Firefox
      docEl.mozRequestFullScreen();
    } else if (docEl.webkitRequestFullscreen) {
      // Safari and older Chrome
      docEl.webkitRequestFullscreen();
    } else if (docEl.msRequestFullscreen) {
      // IE/Edge
      docEl.msRequestFullscreen();
    }
  };

  useEffect(() => {
    // Trigger fullscreen when the percentage reaches 100
    if (percentage === 100) {
      goFullScreen();
    }
  }, [percentage]);

 


    if (percentage === 100) {
      return (
        <Modal2>
          <Modal1 />
        </Modal2>
      );
    }

  


  return (
    <>
      <div className="flex flex-col">
        <div className="w-[90%] m-auto outline outline-[0.5px] outline-[#EAEAEA]"></div>
        <div className="w-[7rem] my-[3rem] m-auto">
          <CircularProgressbarWithChildren
            value={percentage}
            styles={buildStyles({
              pathColor: "#3456FF",
              textColor: "#f88",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          >
            <div className="flex flex-col items-center ">
              <strong className="text-[#3456FF]">{percentage}%</strong>
              <div className="font-bold text-[#666666]">Loading</div>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className="w-[95%] m-auto bg-gray-50 flex p-5 rounded">
          <img
            className="w-[1.5rem]"
            src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
            alt="Loading gif"
          />
          <div className="ml-3">Gathering necessary resources</div>
        </div>
        <div className="flex justify-center gap-3 mx-auto mt-[10rem] mb-[2rem]">
          <div className="w-[1rem] h-[5px] bg-gray-300 rounded"></div>
          <div className="w-[1rem] h-[5px]  bg-gray-300 rounded"></div>
          <div className="w-[1rem] h-[5px] bg-gray-300 rounded"></div>
          <div className="w-[1rem] h-[5px] bg-[#3456FF] rounded"></div>
        </div>
      </div>
    </>
  );
}
