import React from 'react'

import '../module/louder.css'
function Louder() {
  const [post, setPost] = React.useState([])
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
      .then(response => response.json())
      // .then(json => console.log(json))
      .then(json => setPost(json))
  }, [])
  console.log(post)
  return (
    <>
      {/* <div className='louder1'>
        <h1>google</h1>
        <h1><i className="bi bi-google"></i></h1>
      </div> */}
      <ul className='post'>
        {post.map((elem, id) => {
          return <li key={id}>{elem.id}
            <li className='blue'>{elem.title}</li>
            <li className='red'>{elem.body}</li>
          </li>
        })}
      </ul>
    </>
  )
}

export default Louder
