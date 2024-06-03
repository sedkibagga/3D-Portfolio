import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./Pages";
import { LoadingProvider } from "./Pages/Context";
const App = () => {
  return (
    <LoadingProvider>
    <main className='bg-slate-300/20 h-full'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                {/* <Footer /> */}
              </>
            }
          />
        </Routes>
      </Router>
    </main>
    </LoadingProvider>
  );
};

export default App;