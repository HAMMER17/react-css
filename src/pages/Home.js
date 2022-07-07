import React from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";
function Home() {
  const [time, setTime] = React.useState()
  const [time2, setTime2] = React.useState()
  const [time3, setTime3] = React.useState()
  React.useEffect(() => {
    setInterval(() => {
      const data = new Date()
      const hh = data.getHours()
      const mm = data.getMinutes()
      const ss = data.getSeconds()
      if (hh < 10) {
        setTime('0' + hh)
      } else {
        setTime(hh)
      }
      if (mm < 10) {
        setTime2('0' + mm)
      } else {
        setTime2(mm)
      }
      if (ss < 10) {
        setTime3('0' + ss)
      } else {
        setTime3(ss)
      }
      // setTime(data.toLocaleTimeString())
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

      <div className='timer'><span>{time}</span>:<span>{time2}</span>:<span>{time3}</span></div>

    </>
  )
}

export default Home
