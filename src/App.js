import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Category from './components/Category';
import PopulerLocation from './components/Populer_location';
import GetApp from './components/GetApp';

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row __header">
          <Navbar />
          <Header />
        </div>
      </div>
      <div className="container">
        <div className="row __category">
          <Category sectionName="Category Section" />
        </div>
        <div className="__category">
          <Category sectionName="Collections Section" />
        </div>
        <div className="populer__location mt-5">
          <PopulerLocation />
        </div>
        <div className="row m-4 footer">
          <GetApp />
        </div>
      </div>
    </>
  );
}

export default App;
