import React ,{useState} from "react";
import "./App.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Main from "./components/Main";
import TestStartPage from "./components/TestStartPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SideBar from "./components/SideBar";
import Question1 from "./components/Question1";
import CodeIDE from "./components/CodeIDE";
import TestHeader from "./components/TestHeader";
import OnlineStatus from "./components/OnlineStatus";
import McqQuestion from "./components/McqQuestion";
import McqOption from "./components/McqOption";
import SideBar1 from "./components/SideBar1";

function App() {
  const [styles, setStyles] = useState(Array(10).fill("notchoose"));
  const [clickedButtonIndex, setClickedButtonIndex] = useState(null);

  const chooseOption = (index) => {
    setStyles((prevStyles) => {
      const newStyles = [...prevStyles];
      newStyles[index] = newStyles[index] === "notchoose" ? "choose" : "notchoose"; // Toggle style
      return newStyles;
    });

    // Update the clicked button index to show where the user clicked
    setClickedButtonIndex(index + 1); // We add 1 to make the button index human-readable (1-based)
  };
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SideMenu />
                <Header />
                <Main />
              </>
            }
          />
          <Route
            path="/mycourse/details"
            element={
              <>
                <SideMenu />
                <Header />{" "}
                <div className="w-[100%] relative top-[7rem] ">
                  <TestStartPage />
                </div>
              </>
            }
          />
          <Route
            path="/mycourse/details/testpage/cod/6652626512727363723627asdc662525"
            element={
              <>
                <OnlineStatus />
                <TestHeader />
                <div className="flex">
                  <SideBar />
                  <Question1 />
                  <div></div>
                  <CodeIDE />
                </div>
              </>
            }
          />
          <Route
            path="/mycourse/details/testpage/mcq/6652626512727363723627asdc662525"
            element={
              <>
                <OnlineStatus />
                <TestHeader />
                <div className="flex">
                  <SideBar1 style={styles} setStyle={setStyles} clickedButtonIndex={clickedButtonIndex} setClickedButtonIndex={setClickedButtonIndex} chooseOption={chooseOption}  />
                  <McqQuestion clickedButtonIndex={clickedButtonIndex} setClickedButtonIndex={setClickedButtonIndex} />
                  <div></div>
                  <McqOption />
                </div>
              </>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
