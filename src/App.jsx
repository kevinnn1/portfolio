import React from 'react'
import {Home} from "./pages/Home.jsx"
import {Projects} from "./pages/Projects.jsx"
import {Work} from "./pages/Work.jsx"
import {Nopage} from "./pages/Nopage.jsx"
import {Sidenav} from "./components/Sidenav.jsx"
import { useState, useEffect } from 'react'

import { Routes, Route } from "react-router-dom"

function App() {
  const [theme, setTheme] = useState("light")
  useEffect(() => {
    theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
}, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className='min-h-screen bg-bgMain dark:bg-bgMain-dark'>
      <Sidenav />
      <div className="fixed bottom-4 right-4 z-10">
        <button className="bg-green-200 dark:bg-blue-200 p-4 rounded-3xl" onClick={handleThemeSwitch}>
          Dark Mode
         </button>
      </div>
      <Routes>
        <Route path ="/portfolio/" element={<Home />} />
        <Route path ="/portfolio/home" element={<Home />} />
        <Route path ="/portfolio/projects/" element={<Projects />} />
        <Route path ="/portfolio/work/" element={<Work />} />
        <Route path ="*" element={<Nopage />} />
      </Routes>

    </div>
    
  )
}

export default App
