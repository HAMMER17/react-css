import React from 'react'

function Twitter() {
  const [chat, setChat] = React.useState([])
  const [val, setVal] = React.useState('')
  function addChat(e) {
    e.preventDefault()
    setChat([...chat, val], setVal(''))
    console.log(val)
  }
  function del(id) {
    setChat(chat.filter(el => el !== id))
  }
  const result = chat.map((el, i) => {
    if (i % 2 === 0) {
      return <li key={i} className='key'>{el}<i className="bi bi-x x" onClick={() => del(el)}></i></li>
    } else
      return <li key={i} className='key2'>{el}<i className="bi bi-x x" onClick={() => del(el)}></i></li>

  })
  return (
    <>
      <div className='twitter'>
        <h1>twitter</h1>
        <h1><i className="bi bi-twitter"></i></h1>
      </div>
      <form action="" className='form'>
        <input type="text" id='input' onChange={(e) => setVal(e.target.value)} value={val} />
        <button className='button' onClick={addChat}>text</button>
      </form>
      <ul>{result}</ul>

    </>
  )
}

export default Twitter
