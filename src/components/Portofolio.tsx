import Navbar from "./portofolio/navbar";
import Home from "./portofolio/home";
import About from "./portofolio/about";
import Project from "./portofolio/project";
import Contact from "./portofolio/contact";

export default function Portfolio() {
  return (
    <div className="bg-DarkGreen">
      <Navbar />
      <div className="flex flex-col justify-center">
        <Home />
        <About/>
        <Project />
        <Contact />
      </div>
    </div>
  );
}
