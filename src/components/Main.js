import React from "react";
import Cards from "./Cards";
import SmallCards from "./SmallCards";
import MyCourse from "./MyCourse";
import GreaterthanDhash from "./GreaterthanDhash";

export default function Main() {
  return (
    <div className="flex justify-between w-[100%] bg-[#F6F8F]">
      <div className="card-1  relative top-[10rem] md:left-[7rem] md:top-[6rem]  max-md:w-[100%] w-[70%] max-xl:w-[60%] ">
        <h1 className="mb-[15px] md:relative font-bold text-xl">
          Recently Viewed
        </h1>
        <div className="flex flex-wrap gap-4">
          <Cards
            svg={
              <svg
                style={{ color: "white" }}
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-book-minus"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                <path d="M9 10h6" />
              </svg>
            }
            svgColor="#55BA45"
            courseName={"2027_LPU_DSA_CA1_Mock Test"}
            value={100}
            courseTrack={"Validity Expired"}
            percentage={"100%"}
          />
          <Cards
            svg={<GreaterthanDhash />}
            svgColor="#022277"
            courseName={"2027_CSE202_Object Oriented Programming Course"}
            value={32}
            courseTrack={"Course Incomplete"}
            percentage={"32%"}
          />
          <Cards
            svg={<GreaterthanDhash />}
            svgColor="#800080"
            courseName={"2027_CSE205_Data Structures and Algoritms Course"}
            value={35}
            courseTrack={"Course Incomplete"}
            percentage={"35%"}
          />
        </div>
        <div className="my-3">
          <MyCourse />
        </div>
        <div className="flex flex-wrap gap-4 ">
          <Cards
            svg={
              <svg
                style={{ color: "white" }}
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-book-minus"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                <path d="M9 10h6" />
              </svg>
            }
            svgColor="#3456FF"
            courseName={"CSE205_Competitive Readiness Practice Course_Stude..."}
            value={0}
            courseTrack={"Validity Expired"}
            percentage={"0%"}
          />
          <Cards
            svg={<GreaterthanDhash />}
            svgColor="#55BA45"
            courseName={"CSE202_CA2_25 Oct_9 to 10"}
            value={0}
            courseTrack={"Validity Expired"}
            percentage={"0%"}
          />
          <Cards
            svg={
              <svg
                style={{ color: "white" }}
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-book-minus"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                <path d="M9 10h6" />
              </svg>
            }
            svgColor="#022277"
            courseName={"CSE205_CA2_26 Oct_Slot 1"}
            value={0}
            courseTrack={"Validity Expired"}
            percentage={"0%"}
          />
          <Cards
            svg={
              <svg
                style={{ color: "white" }}
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-book-minus"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                <path d="M9 10h6" />
              </svg>
            }
            svgColor="#022277"
            courseName={"2027_LPU_CPP_CA1_Mock Test"}
            value={0}
            courseTrack={"Validity Expired"}
            percentage={"0%"}
          />
          <Cards
            svg={<GreaterthanDhash />}
            svgColor="#3456FF"
            courseName={"2027_CSE202_Object Oriented Programming Course"}
            value={32}
            courseTrack={"Course Incomplete"}
            percentage={"32%"}
          />
          <Cards
            svg={
              <svg
                style={{ color: "white" }}
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-book-minus"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                <path d="M9 10h6" />
              </svg>
            }
            svgColor="#55BA45"
            courseName={"2027_CSE205_Data Structures and Algorithms Course"}
            value={35}
            courseTrack={"Course Incomplete"}
            percentage={"35%"}
          />
          <Cards
            svg={<GreaterthanDhash />}
            svgColor="#800080"
            courseName={"CSE205_Competitive Readiness Practice Course_Stude..."}
            value={0}
            courseTrack={"Validity Expired"}
            percentage={"0%"}
          />
          <Cards
            svg={<GreaterthanDhash />}
            svgColor="#3456FF"
            courseName={"CSE202_CA2_25 Oct_9 to 10"}
            value={0}
            courseTrack={"Validity Expired"}
            percentage={"0%"}
          />
        </div>
      </div>
      <div className="card-2 relative top-[6rem] max-md:hidden ">
        <h1 className="font-bold text-xl mb-[15px]">Courses & Badges</h1>
        <div className="gap-4 w-[100%] flex flex-col">
          <SmallCards
            icon={
              "https://lpucolab438.examly.io/assets/images/courseList/courseEnrolled.svg"
            }
            title={"Courses Enrolled"}
            count={"14"}
          />
          <SmallCards
            icon={
              "https://lpucolab438.examly.io/assets/images/courseList/courseCompleted.svg"
            }
            title={"Courses Completed"}
            count={"4"}
          />
          <SmallCards
            icon={
              "https://lpucolab438.examly.io/assets/images/common/badges.svg"
            }
            title={"Badges"}
            count={"123"}
          />
          <SmallCards
            icon={
              "https://lpucolab438.examly.io/assets/images/common/superBadges.svg"
            }
            title={"Super Badges"}
            count={"2643"}
          />
        </div>
      </div>
    </div>
  );
}
