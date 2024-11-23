import "./App.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Main from "./components/Main";
import TestStartPage from "./components/TestStartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <SideMenu />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
              </>
            }
          />
          <Route
            path="/mycourse/details"
            element={
              <>
                {" "}
                <div className="w-[100%] relative top-[7rem] ">
                  <TestStartPage />
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
