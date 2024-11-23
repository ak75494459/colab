import React from "react";
import ReactDom from "react-dom";


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
  backgroundColor: "white",
  zIndex: 1000,
};

export default function Modal1({children}) {
  return ReactDom.createPortal(
    <>
    
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
          
       {children}
      </div>
    
    </>,
    document.getElementById("test-start-root")
  );
}
