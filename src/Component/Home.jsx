import React, { useContext } from 'react'

import "./Home.css"
import { Context } from './Context'
import Main from './Main'
function Home() {
  const{isActive,setIsActive}=useContext(Context)

  return (
    <div>
        <Main/>
        <div className={`${isActive ? "blur" : ""}`}></div>
    </div>
  )
}

export default Home