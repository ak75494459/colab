import React, { useEffect, useState, useRef } from "react";
import ReactDom from "react-dom";
import Instruction from "./Instruction";
import CheckSecurity from "./CheckSecurity";
import EnvironmentInfo from "./EnvironmentInfo";
import ProgressBar from "./ProgressBar";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  backgroundColor: "#FFFFFF",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
  width: "50%",
  borderRadius: "1rem",
  overflow: "scroll",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Modal({ onClose }) {
  const [accept, setAccept] = useState(true);
  const [hide, setHide] = useState(true);
  const [hideSecond, setHideSecond] = useState(true);
  

  const intervalRefs = useRef([]);

  function SecurityCheck() {
    setHide(false);
  }

  function Progress() {
    setHideSecond(false);
  }

  useEffect(() => {
    // Start the intervals only when 'accept' changes to false
    if (!accept) {
      intervalRefs.current.push(setInterval(SecurityCheck, 1000));
      intervalRefs.current.push(setInterval(Progress, 2000));
    }

    // Cleanup the intervals when the component unmounts or when accept is true
    return () => {
      intervalRefs.current.forEach(clearInterval);
      intervalRefs.current = []; // Clear intervalRefs
    };
  }, [accept]); // Only run the effect when 'accept' changes

  // Decide which content to render based on the states
  const renderContent = () => {
    if (accept) {
      return <Instruction accept={accept} setAccept={setAccept} />;
    }
    if (hide) {
      return <EnvironmentInfo />;
    }
    if (hideSecond) {
      return <CheckSecurity />;
    }
    return <ProgressBar />;
  };

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div className="flex justify-between">
          <div className="text-[1.2rem] m-5 font-bold flex">
            {accept
              ? "Terms and Instructions"
              : hide
              ? "Checking System Requirements And Environment"
              : hideSecond
              ? "Checking Security"
              : "Progress"}
          </div>
          <button className="mr-6" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div className="w-[90%] m-auto outline outline-[0.5px] outline-[#EAEAEA]" />
        {renderContent()}
      </div>
    </>,
    document.getElementById("test-root") // Make sure this element exists in your HTML
  );
}
