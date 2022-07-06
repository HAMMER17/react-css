import React from 'react'
import '../module/clock.css'

const Githab = () => {
  let res = []
  for (let i = 1; i < 13; i++) {
    res.push(<div key={i} className={`num num${i}`}>{i}</div>)
  }
  return (
    <>
      <div className='githab'>
        <h1>githab</h1>
        <h1><i className="bi bi-github"></i></h1>
      </div>
      <div className='div'>
        <div className='clock'>
          <div className='hand hour'></div>
          <div className='hand minute'></div>
          <div className='hand second'></div>

          {/* <div className="num num1">1</div>
          <div className="num num2">2</div>
          <div className="num num3">3</div>
          <div className="num num4">4</div>
          <div className="num num5">5</div>
          <div className="num num6">6</div>
          <div className="num num7">7</div>
          <div className="num num8">8</div>
          <div className="num num9">9</div>
          <div className="num num10">10</div>
          <div className="num num11">11</div>
          <div className="num num12">12</div> */}
          <div>{res}</div>
        </div>
      </div>
    </>
  )
}

export default Githab
