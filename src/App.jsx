import { Header } from "./components/layout/Header";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export function App() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Header />
      <main>
        <Home />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;