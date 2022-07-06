import React from 'react'

function Phone() {
  return (
    <>
      <div className='phone'>
        <h1>phone</h1>
        <h1><i className="bi bi-telephone-fill"></i></h1>

      </div>
      <div className='form'>
        <label htmlFor="">Phone</label>
        <input type="text" placeholder='+7(999)111 222 333' />
      </div>

    </>
  )
}

export default Phone
