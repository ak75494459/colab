import React from "react";
import ReactDom from "react-dom";
import ProgressTest from "./ProgressTest";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  backgroundColor: "#FFFFFF",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
  width: "60%",
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

export default function Modal1() {
  return ReactDom.createPortal(
    <>
    
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
          <div className="text-[1.2rem] m-5 font-bold flex ml-[3rem]">
            Exam_Title
          </div>
        <div className="w-[90%] m-auto outline outline-[0.5px] outline-[#EAEAEA]" />
        <ProgressTest/>
      </div>
    
    </>,
    document.getElementById("test-start-root")
  );
}
