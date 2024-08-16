//import logo from "./logo.svg";
import "./App.css";
import { Home } from "./MyComponents/home";
import { About } from "./MyComponents/about";
import Skills from "./MyComponents/skills";
import Footer from "./MyComponents/footer";
import Contact from "./MyComponents/contact";
function App() {
  return (
    <>
      <Home />
      <br />
      <About />
      <br />
      <div className="bg-colorgrey">
        <Skills />
      </div>
      <br />
      <hr />
      <div>
        <Contact />
      </div>
      <br />
      <hr />

      <Footer />
    </>
  );
}
export default App;
