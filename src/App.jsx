import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About/About'
import Project from './Pages/Project/Project'
import Contact from './Components/Contactus/Contact'
import Loader from './Components/Loader'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="app">
       {
        loading ?<Loader/>:
        <>
           <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
        </Routes>
       <Contact/>
        </>
       }
      </div>
    </>
  )
}

export default App
