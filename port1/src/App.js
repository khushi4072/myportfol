import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Screen/Home.js'

import Contact from './component/Contact';
import Projects from './component/Projects';
import Touch from './component/Touch.js';
import Navbar from './component/Navbar';


import { BrowserRouter,Routes,
    Route, 
   } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      

      <BrowserRouter>
      <Navbar></Navbar>

      <Routes>

      <Route exact path="/" element={<Home></Home>}></Route>
      <Route exact path="/about" element={<Contact></Contact>}></Route>
      <Route exact path="/project" element={<Projects></Projects>}></Route>
      <Route exact path="/contact"element ={<Touch></Touch>}></Route>



      </Routes>
      </BrowserRouter>
    

    </div>
  );
}

export default App;