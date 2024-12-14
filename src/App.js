import "./App.css";
import "@google/model-viewer/dist/model-viewer.min.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import EquipmentList from "./components/EquipmentList/EquipmentList";
import About from "./components/About/About";
import ErrorPage from "./components/ErrorPage/ErrorPage";
// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Feedback from "./components/Feedback/Feedback";
import SignIn from "./components/SignIn/Signin";

const App = () => {

  console.log("App component loaded!");
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/arviewer" element={<EquipmentList />} />
          <Route path="/arviewer/sign-in" element={<SignIn />} />
          <Route path="/arviewer/about" element={<About />} />
          <Route path="/arviewer/feedback" element={<Feedback />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
