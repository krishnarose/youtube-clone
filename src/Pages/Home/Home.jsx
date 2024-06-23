import React, { useState } from 'react'
import Feed from '../../Components/Feed'


const Home = () => {
const [category, setCategory]= useState(0);

  return (
    <>
    <div >
      <Feed/>
    </div>
    </>
  )
}

export default Home
