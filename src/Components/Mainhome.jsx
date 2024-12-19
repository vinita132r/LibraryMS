import React, { useRef } from 'react'
import Header from './Header'
import Homepg from './Homepg'
import Footer from './Footer'

function Mainhome() {
    const refabt=useRef()
    const onAbt=()=>{
        refabt.current.scrollIntoView()
    }
  return (
    <div>
        <Header a={onAbt}/>
        <div>
            <Homepg ref={refabt}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Mainhome