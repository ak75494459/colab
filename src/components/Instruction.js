import React from "react";

export default function Instruction({ setAccept }) {
  return (
    <div className="flex flex-col overflow-hidden">
    
        <>         
          <div className="ml-[1rem] text-gray-500 bg-[#FFFFFF]">
            <h1 className="font-bold  py-6 text-[19px] item-center">
              Please carefully read and agree to the below:
            </h1>
            <div className="h-[23.4rem] overflow-scroll">
              <div className="flex mb-3 ">
                {" "}
                <img
                  className="w-[10px] mr-2"
                  src="https://svgsilh.com/svg/157403.svg"
                  alt=""
                />
                <div className=" flex  text-[13px]">
                  It is NOT advisable to attempt coding problems from a mobile
                  phone. Use a laptop or desktop instead.
                </div>{" "}
              </div>
              <div className="flex mb-3">
                {" "}
                <img
                  className="w-[10px] mr-2"
                  src="https://svgsilh.com/svg/157403.svg"
                  alt=""
                />
                <div className=" flex  justify-center text-[13px]">
                  Disconnecting from internet for 60 seconds will automatically
                  pause the test.
                </div>{" "}
              </div>
              <div className="flex mb-3">
                {" "}
                <img
                  className="w-[10px] mr-2 mb-[14px]"
                  src="https://svgsilh.com/svg/157403.svg"
                  alt=""
                />
                <div className=" flex   text-[13px]">
                  Please ensure to load the test in the latest version of Google
                  Chrome browser (above version 60) or latest version of
                  Firefox.
                </div>{" "}
              </div>
              <div className="flex mb-3">
                {" "}
                <img
                  className="w-[10px] mr-2"
                  src="https://svgsilh.com/svg/157403.svg"
                  alt=""
                />
                <div className=" flex  justify-center text-[13px]">
                  Make sure third-party cookies are enabled in your browser
                  settings.
                </div>{" "}
              </div>
              <div className="flex mb-3">
                {" "}
                <img
                  className="w-[10px] mr-2 mb-[14px]"
                  src="https://svgsilh.com/svg/157403.svg"
                  alt=""
                />
                <div className=" flex  justify-center text-[13px]">
                  The system should have uninterrupted internet connectivity
                  with a minimum download and upload speed of 2 Mbps and 2 Mbps
                  respectively.
                </div>{" "}
              </div>
              <div className="flex mb-3">
                {" "}
                <img
                  className="w-[10px] mr-2"
                  src="https://svgsilh.com/svg/157403.svg"
                  alt=""
                />
                <div className=" flex  justify-center text-[13px]">
                  Please ensure that your system clock is set to (GMT +5:30)
                  Mumbai, Kolkata, Chennai, New Delhi timezone.
                </div>{" "}
              </div>
              <div className="flex mb-3">
                {" "}
                <img
                  className="w-[10px] mr-2"
                  src="https://svgsilh.com/svg/157403.svg"
                  alt=""
                />
                <div className=" flex  justify-center text-[13px]">
                  No tab switches are allowed during the test. It may result in
                  submission of the test mid-way through.
                </div>{" "}
              </div>
              <div className="flex mb-3">
                {" "}
                <img
                  className="w-[10px] mr-2 mb-[14px]"
                  src="https://svgsilh.com/svg/157403.svg"
                  alt=""
                />
                <div className=" flex  justify-center text-[13px]">
                  Any notifications or pop-ups during the test will be counted
                  as tab switch and may result in submission of test. Please
                  ensure it is turned off.
                </div>{" "}
              </div>
              <div className="flex mb-3">
                {" "}
                <img
                  className="w-[10px] mr-2 mb-[14px]"
                  src="https://svgsilh.com/svg/157403.svg"
                  alt=""
                />
                <div className=" flex  justify-center text-[13px]">
                  Some Anti-virus software will prevent you from login and from
                  taking the test. In such cases disable the anti-virus and try.
                </div>{" "}
              </div>
              <div className="flex mb-3">
                {" "}
                <img
                  className="w-[10px] mr-2"
                  src="https://svgsilh.com/svg/157403.svg"
                  alt=""
                />
                <div className=" flex  justify-center text-[13px]">
                  All third-party extensions are restricted except platform's
                  extension (NeoExamShield).
                </div>{" "}
              </div>
              <div className="flex mb-3">
                {" "}
                <img
                  className="w-[10px] mr-2"
                  src="https://svgsilh.com/svg/157403.svg"
                  alt=""
                />
                <div className=" flex  justify-center text-[13px]">
                  Instructions to Enable Microphone & Camera:
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="flex justify-end flex mr-[2rem]">
            <button className="px-10 py-2 outline outline-[0.2px] outline-gray-300  my-4 mr-2 text-[13px] font-bold rounded">
              Close
            </button>
            <button
              className="px-4 py-2 outline outline-[0.2px] outline-gray-300  my-4  text-[13px] font-bold rounded text-white bg-[#3456FF]"
              onClick={() => setAccept(false)}
            >
              Agree & proceed
            </button>
          </div>
          <div className="flex justify-center gap-3 mx-auto mt-[1rem] mb-[2rem]">
            <div className="w-[1rem] h-[5px] bg-[#3456FF] rounded"></div>
            <div className="w-[1rem] h-[5px] bg-gray-300 rounded"></div>
            <div className="w-[1rem] h-[5px] bg-gray-300 rounded"></div>
            <div className="w-[1rem] h-[5px] bg-gray-300 rounded"></div>
          </div>
        </>
    </div>
  );
}
