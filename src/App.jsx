import "./App.css";
import Contact from "./Componants/Contact";
import Github from "./Componants/Github";
import Hero from "./Componants/Hero";
function App() {
  return (
    <>
      <div className="container mx-auto px-4 py-12 items-center justify-between">
        <Hero />
        <Github />
        <Contact />
      </div>
    </>
  );
}

export default App;
