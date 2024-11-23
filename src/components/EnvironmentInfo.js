import React from "react";

export default function EnvironmentInfo() {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-[90%] m-auto outline outline-[0.5px] outline-[#EAEAEA]"></div>
        <img
          className="w-[15rem] m-auto"
          src="https://img.freepik.com/free-vector/website-setup-illustration-concept_114360-817.jpg?t=st=1731437914~exp=1731441514~hmac=869e57f6ef36650fd664ac148364026db19b505b65ac8998a3cf9ae03fd82583&w=1060"
          alt="not showing"
        />
        <div className="w-[95%] m-auto bg-gray-50 flex p-5 rounded">
          <img
            className="w-[1.5rem]"
            src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
            alt=""
          />
          <div className="ml-3">Collecting environment information</div>
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
