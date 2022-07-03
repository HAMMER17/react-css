import React from 'react'

function Email() {
  const [email, setEmail] = React.useState('')
  const [pass, setPass] = React.useState('')
  function regist(e) {
    e.preventDefault()
    setEmail('')
    setPass('')
    console.log(email, pass)
  }
  return (
    <>
      <div className='email'>
        <h1>email</h1>
        <h1><i className="bi bi-envelope-fill"></i></h1>
      </div>
      <form action="" className='form'>
        <label htmlFor="Email">Email
          <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email} />
        </label>
        <label htmlFor="Password">Password
          <input type="text" placeholder='password' onChange={(e) => setPass(e.target.value)} value={pass} />
        </label>
        <button type="submit" className='button' onClick={regist}>click</button>
      </form>
    </>
  )
}


export default Email
