import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Githab from './pages/Githab';
import Twitter from './pages/Twitter';
import Phone from './pages/Phone';
import Email from './pages/Email';
import Louder from './pages/Louder';

function App() {
  const [theme, setTheme] = React.useState('theme' ? 'dark' : 'ligth')
  const dataTheme = () => {
    const newTheme = theme === 'ligth' ? 'dark' : 'ligth'
    setTheme(newTheme)
  }
  return (
    <div className='container' data-theme={theme}>
      <Router>
        <Navbar theme={dataTheme} />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/githab' element={<Githab />}></Route>
          <Route path='/twitter' element={<Twitter />}></Route>
          <Route path='/phone' element={<Phone />}></Route>
          <Route path='/email' element={<Email />}></Route>
          <Route path='/louder' element={<Louder />} />
        </Routes>

      </Router>
    </div>
  )
}

export default App;
