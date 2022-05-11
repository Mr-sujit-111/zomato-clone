import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Delivery from './components/delivery/Delivery';
// import BackToTop from 'react-back-to-top';
import ZomatoState from './context/contextState';

function App() {
  return (
    <>
      <ZomatoState>
        <BrowserRouter>
          <div className="container-fluid">
            <div className="row __header">
              <Navbar />
              <Header />
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Home />}>

            </Route>
            <Route path="/delivery" element={<Delivery />}>
            </Route>
          </Routes>
          <div className="container">
            <div className="row mt-4 ">
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </ZomatoState>
    </>
  );
}

export default App;
