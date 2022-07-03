import React from 'react'

function Email() {
  return (
    <>
      <div className='email'>
        <h1>email</h1>
        <h1><i className="bi bi-envelope-fill"></i></h1>
      </div>
      <form action="" className='form'>
        <label htmlFor="Email">Email</label>
        <input type="text" placeholder='email' />

        <label htmlFor="Password">Password</label>
        <input type="text" placeholder='password' />

        <button type="submit" className='button'>click</button>
      </form>
    </>
  )
}

export default Email
