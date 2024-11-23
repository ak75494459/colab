import React from 'react'

export default function CheckSecurity() {
  return (
     <>
      <div className="flex flex-col">
        <div className="w-[90%] m-auto outline outline-[0.5px] outline-[#EAEAEA]"></div>
        <img
          className="w-[15rem] m-auto"
          src="https://www.yartu.io/_nuxt/img/main-drive-animated.e1f9f7c.svg"
          alt="not showing"
        />
        <div className="w-[95%] m-auto bg-gray-50 flex p-5 rounded">
          <img
            className="w-[1.5rem]"
            src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
            alt=""
          />
          <div className="ml-3">Validating test status</div>
        </div>
        <div className="flex justify-center gap-3 mx-auto mt-[10rem] mb-[2rem]">
          <div className="w-[1rem] h-[5px] bg-gray-300 rounded"></div>
          <div className="w-[1rem] h-[5px] bg-gray-300 rounded"></div>
          <div className="w-[1rem] h-[5px] bg-[#3456FF] rounded"></div>
          <div className="w-[1rem] h-[5px] bg-gray-300 rounded"></div>
        </div>
      </div>
    </>
  )
}
