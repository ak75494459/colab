import React, { useState, useEffect } from "react";
import Modal3 from "./Modal3";
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation

export default function TestHeader() {
  const [time, setTime] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const [selectedSection, setSelectedSection] = useState("section1");
  
  const navigate = useNavigate(); // Hook for programmatic navigation

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [paused]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  const handlePauseResume = () => {
    setPaused((prevPaused) => !prevPaused);
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedSection(value);
    if (value === "cod") {
      navigate("/mycourse/details/testpage/cod/6652626512727363723627asdc662525"); // Programmatic navigation
    }
   
  };

  return (
    <>
      <div className="flex w-[100%] bg-[#F7F9FC] p-1 items-center ml-auto">
        <div className="ml-[20px] font-bold text-[14px]">Exam name heading.....</div>
        
        <div className="w-[30%] flex item-center ml-auto mr-[10px]">
          <div className="w-full p-2 outline outline-[0.5px] outline-[#EAEAEA] m-2 rounded">
            <select 
              name="test-select" 
              className="bg-[#F7F9FC] w-full" 
              value={selectedSection} 
              onChange={handleSelectChange}
            >
              <option value="mcq">section1/2 &nbsp; | &nbsp; MCQ(10)</option>
              <option value="cod">section1/2 &nbsp; | &nbsp; COD(2)</option>
            </select>
          </div>
        </div>

        <div className="w-[25%] flex items-center text-[14px] mr-auto ml-[10px]">
          <div className="overflow-scroll flex cursor-pointer">
            <div className="color-gray-300 flex">
              Name&nbsp;:&nbsp;<strong>12312571_</strong>
            </div>
            <div className="mx-3">
              <div className="w-[1px] h-[20px] justify-between items-center bg-black"></div>
            </div>
            <div className="color-gray-300 flex">
              Roll&nbsp;Number:&nbsp;<strong>12312571</strong>
            </div>
            <div className="mx-3">
              <div className="w-1 h-full"></div>
            </div>
            <div className="color-gray-300 flex">
              Email&nbsp;:&nbsp;<strong>12312571@neocolab.ai</strong>
            </div>
            <div className="mx-3">
              <div className="w-1 h-full"></div>
            </div>
            <div className="color-gray-300 flex">
              Degree&nbsp;:&nbsp;<strong>B.tech</strong>
            </div>
            <div className="mx-3">
              <div className="w-1 h-full"></div>
            </div>
            <div className="color-gray-300 flex">
              Exam&nbsp;:&nbsp;<strong>Exam_name</strong>
            </div>
            <div className="mx-3">
              <div className="w-1 h-full"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mr-[15px]">
          <div className="timer flex items-center gap-1 text-[#55BA45] font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#837c7c"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-clock"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{formatTime(time)}</span>
          </div>

          <div
            className="p-2 m-2 outline outline-[0.5px] outline-[#D6D6D6] rounded"
            onClick={handlePauseResume}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1a0e0e"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-circle-pause"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="10" x2="10" y1="15" y2="9" />
              <line x1="14" x2="14" y1="15" y2="9" />
            </svg>
          </div>
          <div>
            <button className="bg-[#3456FF] text-white font-bold text-[14px] p-2 rounded" onClick={() => setShowSubmit(true)}>
              Submit Test
            </button>
          </div>
        </div>
      </div>
      {showSubmit ? <Modal3 /> : null}
    </>
  );
}
