import { useEffect, useState } from "react";
import { 
  BrowserRouter, 
  Routes, 
  Route,
  useLocation 
} from "react-router-dom";

import Header01 from "./components/Header01";
import Header02 from "./components/Header02";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import PresidentMessage from "./pages/PresidentMessage";

import PerProject from "./components/PerProject";
import LoadingSpinnerCompo from "./components/LoadingSpinnerCompo";
import RecentProjectCompo from "./components/RecentProjectsCompo";
import OtherClubCompo from "./components/OtherClubCompo";



function UpdateTitle() {
  const location = useLocation();

  useEffect(() => {
    let pageTitle = "IEEE Computer Society KDU";

    switch (location.pathname) {
      case "/":
        pageTitle = "IEEE Computer Society KDU";
        break;
      case "/projects":
        pageTitle = "Projects | IEEE Computer Society KDU";
        break;
      case "/team":
        pageTitle = "Team | IEEE Computer Society KDU";
        break;
      case "/chairPersonMessage":
        pageTitle = "Chair Person Message | IEEE CS KDU";
        break;
      case "/#about":
        pageTitle = "About | IEEE Computer Society KDU";
        break;
      case "/#contact":
        pageTitle = "Contact | IEEE Computer Society KDU";
        break;

      default:
        break;
    }

    document.title = pageTitle;
  }, [location]);

  return null;
}

function AppRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <LoadingSpinnerCompo />}
      <Header01 />
      <Header02 />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home"><Home /></section>
              <section id="about"><About /></section>
              <OtherClubCompo/>
              <RecentProjectCompo/>
              <section id="contact"><Contact /></section>
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/project/:projectID" element={<PerProject />} />
        <Route path="/chairPersonMessage" element={<PresidentMessage />} />

      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <UpdateTitle />
      {initialLoading ? <LoadingSpinnerCompo /> : <AppRoutes />}
    </BrowserRouter>
  );
}
