import React, { useState } from 'react'
import { RGBbutton, RGBslider, RGBchip } from 'rgb-ui'
import 'rgb-ui/dist/index.css'

const App = () => {
  const [input, setInput] = useState(40)
  const [input2, setInput2] = useState(40)
  const [input3, setInput3] = useState(40)

  const handleRangeChange = (e) => {
    setInput(e.target.value)
  }
  const handleRangeChange2 = (e) => {
    setInput2(e.target.value)
  }
  const handleRangeChange3 = (e) => {
    setInput3(e.target.value)
  }
  return (
    <>
      <div className='rangecontainer'>
        <RGBslider
          type='red'
          min={0}
          max={40}
          value={input}
          onChange={handleRangeChange}
        />
        <RGBchip label={input} type='red' />
        <br />
      </div>
      <div className='rangecontainer'>
        <RGBslider
          type='green'
          min={0}
          max={40}
          value={input2}
          onChange={handleRangeChange2}
        />
        <RGBchip label={input2} type='green' />
        <br />{' '}
      </div>
      <div className='rangecontainer extrabottommargin'>
        <RGBslider
          type='blue'
          min={0}
          max={40}
          step={10}
          value={input3}
          onChange={handleRangeChange3}
        />
        <RGBchip label={input3} type='blue' />
        <br />
      </div>
      <RGBbutton label='RGB-UI' type='scratch' className='customClass' />

      <p className='classifier'>{"<RGBbutton label='Click Me'/>"}</p>
      <RGBbutton label='Click Me' />
      <p className='classifier'>
        {"<RGBbutton label='Click Me' type='scratch'/>"}
      </p>
      <RGBbutton label='Click Me' type='scratch' />
      <p className='classifier'>
        {"<RGBbutton label='Click Me' type='lines'/>"}
      </p>
      <RGBbutton label='Click Me' type='lines' />
    </>
  )
}

export default App
