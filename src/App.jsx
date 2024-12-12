import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects , Home} from "./pages";
import {Blog} from "./pages/BlogManager"

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={< About />} />
                  <Route path='/projects' element={< Projects />} />
                  <Route path='/contact' element={< Contact />} />
                  <Route path='/home' element={< Home />} />
                  <Route path='/Blog' element={< Blog />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
