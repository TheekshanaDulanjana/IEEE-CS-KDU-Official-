import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header01 from "./components/Header01";
import Header02 from "./components/Header02";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Projects from "./pages/Projects";


export default function App() {
  return (
    <BrowserRouter>
      <Header01 />
      <Header02 />
      
    <Routes>
        <Route
          path="/" 
          element={
            <>
              <section id="home"><Home /></section>
              <div className="-mt-35">
              <section id="about"><About /></section>
              </div>
              <div className="">
              <section id="projects"><Projects /></section>
              </div>
              <div className="-mt-40 ">
              <section id="contact"><Contact /></section>
              </div>
            </>
          }
        />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
