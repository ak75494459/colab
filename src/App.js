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

function App() {
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
               <Header />
                {" "}
                <div className="w-[100%] relative top-[7rem] ">
                  <TestStartPage />
                </div>
              </>
            }
          />
          <Route
            path="/mycourse/details/testpage/6652626512727363723627asdc662525"
            element={
              <>
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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
