/* eslint-disable react/react-in-jsx-scope */
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  return (
    <main className="h-[100vh] bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
