import React from 'react'
import {Home} from "./pages/Home.jsx"
import {Projects} from "./pages/Projects.jsx"
import {Work} from "./pages/Work.jsx"
import {Nopage} from "./pages/Nopage.jsx"
import {Sidenav} from "./components/Sidenav.jsx"

import { Routes, Route } from "react-router-dom"

function App() {

  return (
    
    <div className='min-h-screen bg-bgMain dark:bg-bgMain-dark'>
      <Sidenav />

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
