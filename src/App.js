import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Githab from './pages/Githab';
import Twitter from './pages/Twitter';
import Phone from './pages/Phone';
import Email from './pages/Email';


function App() {

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/githab' element={<Githab />}></Route>
          <Route path='/twitter' element={<Twitter />}></Route>
          <Route path='/phone' element={<Phone />}></Route>
          <Route path='/email' element={<Email />}></Route>
        </Routes>

      </Router>
    </>
  )
}

export default App;
