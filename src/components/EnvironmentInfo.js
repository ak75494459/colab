import React, { useState } from "react";

export default function EnvironmentInfo({setHide}) {
  
  const[passkey ,setPasskey] = useState("")

  const copyPasskey =()=>{
    navigator.clipboard.writeText(passkey);
      setHide(false)
  }
  return (
    <>
      <div className="flex flex-col">
        <div className="w-[90%] m-auto outline outline-[0.5px] outline-[#EAEAEA]"></div>
        <img
          className="w-[15rem] m-auto"
          src="https://img.freepik.com/free-vector/website-setup-illustration-concept_114360-817.jpg?t=st=1731437914~exp=1731441514~hmac=869e57f6ef36650fd664ac148364026db19b505b65ac8998a3cf9ae03fd82583&w=1060"
          alt="not showing"
        />
        <div className="w-[95%] m-auto bg-gray-50 p-5 rounded">
          <div className="flex">
          <img
            className="w-[1.5rem]"
            src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
            alt=""
          />
          <div className="ml-3">Validating test access</div>
          </div>
          <div>
            <div className="mt-5 text-[13px]">Logged in as: <span className="font-bold">12312571@neocolab.ai</span></div>
            <div className="mt-8 font-bold text-[13px]">Enter 4-digit Access Key</div>
            <input type="text"  className="w-full p-2 mt-2 outline outline-[0.5px] outline-gray-300 rounded bg-gray-50" onChange={(e)=>setPasskey(e.target.value)}/>
            <button onClick={copyPasskey} id="myInput" className="flex m-auto px-[2rem] py-[.4rem] rounded text-[13px] font-bold text-white p-1 mt-[10px] bg-blue-500">Verify</button>
          </div>
        </div>
        <div className="flex justify-center gap-3 mx-auto mt-[10rem] mb-[2rem]">
          <div className="w-[1rem] h-[5px] bg-gray-300 rounded"></div>
          <div className="w-[1rem] h-[5px]  bg-[#3456FF]  rounded"></div>
          <div className="w-[1rem] h-[5px] bg-gray-300 rounded"></div>
          <div className="w-[1rem] h-[5px] bg-gray-300 rounded"></div>
        </div>
      </div>
    </>
  );
}
