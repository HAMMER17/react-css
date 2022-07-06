import React from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";
function Home() {
  const [time, setTime] = React.useState()
  React.useEffect(() => {
    setInterval(() => {
      const data = new Date()
      setTime(data.toLocaleTimeString())
    }, 1000)
  })
  return (
    <>
      <div className='home'>
        <h1>home</h1>
        <h1><i className="bi bi-house-fill"></i></h1>
      </div>
      <div className='louder'>
        <PacmanLoader color='blue' size={50} />
      </div>

      <h1>{time}</h1>

    </>
  )
}

export default Home
