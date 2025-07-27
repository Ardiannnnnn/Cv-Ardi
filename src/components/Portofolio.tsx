import Navbar from "./portofolio/navbar";
import Home from "./portofolio/home";
import About from "./portofolio/about";

export default function Portfolio() {
  return (
    <div className="bg-DarkGreen">
      <Navbar />
      <div className="flex flex-col justify-center">
        <Home />
        <About/>
      </div>
    </div>
  );
}
