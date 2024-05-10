import React from 'react'
import Spinner from './Spinner.gif'


function Loader() {
  return (
    <div className='text-center'>
        <img src={Spinner} alt="Loading"></img>
      </div>
  )
}

export default Loader