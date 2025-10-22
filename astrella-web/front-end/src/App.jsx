import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from './pages/Home';


const App = () => {
  return (
    <>
    <Routes>
      <Routes path="/" elemeny={<Home/>}/>
    </Routes>
    </>
  )
}

export default App