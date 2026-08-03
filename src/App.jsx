import { Header } from "./components/layout/Header";
import { Divider } from "./components/ui/Divider";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

export function App() {
  return (
    <div className="bg-[#020407] min-h-screen font-sans selection:bg-[#c300ff] selection:text-white">
      
      
      <main>
        <Header />
        <Home />

        <Divider />

        <About />

        <Divider />

        <Projects />

        <Divider />

        <Contact />
      </main>
    </div>
  );
}

export default App;
