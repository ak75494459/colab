import React from "react";

export default function Question1() {
  return (
    <div className="w-[35%] m-2" style={{ height: "calc(100vh - 80px)" }}>
      <div className="bg-[#EAEEFF] w-full flex justify-between  p-2 rounded-t-md">
        <div className="text-[#666666]">
          <strong>Question No : 1 / 2</strong>
        </div>
        <div className="mr-[10px] w-[1.5rem] h-[1.6rem] outline outline-[o.5px] outline-[#FFAD3A] flex items-center justify-center rounded p-1 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFAD3A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-bookmark"
          >
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
          </svg>
        </div>
      </div>
      <div className="h-[75vh] bg-[#FFFFFF] overflow-scroll ">
        <div className="z-0 text-[6rem] rotate-[-45deg] fixed top-[20rem] left-[9rem] font-bold text-[#C2CCFF]">
          12312571
        </div>
        <div className="m-4 z-50 text-[#666666] relative">
          <div className="font-bold text-[20px] text-black">
            Single File Programming Question
          </div>
          <div className="underline font-bold my-[15px]">Problem Statement</div>
          <div>
            Nila is in the process of developing a web crawling application
            aimed at mapping the structure of a website. In this representation,
            the website is depicted as a graph, where each webpage serves as a
            node and the hyperlinks connecting webpages act as edges.
          </div>
          <br />
          <div>
            Your task is to create a program that utilizes Breadth-First Search
            (BFS) traversal to explore and map the structure of a website,
            starting from a given URL and discovering all linked pages within
            the website.
          </div>

          <div className="font-bold my-[15px] text-black">Input format :</div>

          <div>
            The first line of input consists of two space-separated integers, V
            and E, representing the number of webpages and hyperlinks on the
            website.
          </div>
          <div>
            {" "}
            The next lines of input consists of two space-separated integers,
            Details about each hyperlink are represented by two integers u and
            v, indicating a hyperlink from webpage u to webpage v.
          </div>
          <div className="font-bold my-[15px] text-black">Output format :</div>
          <div>
            The output displays the order in which webpages were visited during
            the BFS traversal, separated by spaces. The traversal order serves
            as a map of the website structure, indicating how webpages are
            connected.
          </div>
          <div className="font-bold my-[15px] text-black">
            Code constraints :
          </div>
          <div>
            The test cases will fall under the following constraints:
            <br />1 = V = 10
          </div>
          <div className="font-bold my-[15px] text-black">
            Sample test cases :
          </div>
          <div className="flex gap-2 ">
            <div className="w-[50%] h-[11rem] bg-[#F7F9FC] rounded">
              <div className="mx-2 my-3">
                <div>Input 1 :</div>
                <div>4 4</div>
                <div>0 1</div>
                <div>0 2</div>
                <div>1 3</div>
                <div>2 3</div>
              </div>
            </div>
            <div className="w-[50%] h-[11rem] bg-[#F7F9FC] rounded">
              <div className="mx-2 my-3">
                <div>Input 1 :</div>
                <div>4 4</div>
                <div>0 1</div>
                <div>0 2</div>
                <div>1 3</div>
                <div>2 3</div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="w-[50%] h-[11rem] bg-[#F7F9FC] rounded">
              <div className="mx-2 my-3">
                <div>Input 1 :</div>
                <div>4 4</div>
                <div>0 1</div>
                <div>0 2</div>
                <div>1 3</div>
                <div>2 3</div>
              </div>
            </div>
            <div className="w-[50%] h-[11rem] bg-[#F7F9FC] rounded">
              <div className="mx-2 my-3">
                <div>Input 1 :</div>
                <div>4 4</div>
                <div>0 1</div>
                <div>0 2</div>
                <div>1 3</div>
                <div>2 3</div>
              </div>
            </div>
          </div>
          <div className="w-[100%] bg-[#F7F9FC] rounded">
            <div className="m-2">
            <div className="font-bold my-[15px] text-black">Note :</div>
            <div>
              The program will be evaluated only after the “Submit Code” is
              clicked. Extra spaces and new line characters in the program
              output will result in the failure of the test case.
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#EAEEFF] w-full  flex gap-3  p-3 rounded-b-md text-[#666666] font-bold text-[15px]">
        <div>Marks:10</div>
        <div>Negative Mark:0</div>
      </div>
    </div>
  );
}
