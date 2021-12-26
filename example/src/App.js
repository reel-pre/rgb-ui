import React, { useState } from 'react'
import {
  RGBGlowButton,
  RGBslider,
  RGBchip,
  RGBcheckbox,
  RGBskeleton,
  RGBinput,
  RGBbutton,
  RGBalert
} from 'rgb-ui'
import 'rgb-ui/dist/index.css'

const App = () => {
  const [input, setInput] = useState(40)
  const [input2, setInput2] = useState(40)
  const [input3, setInput3] = useState(40)
  const [inputText, setInputText] = useState('')
  const [inputText2, setInputText2] = useState('')
  const [inputText3, setInputText3] = useState('')

  const [showmsg, setShowmsg] = useState(false)
  const [showmsg2, setShowmsg2] = useState(false)
  const [showmsg3, setShowmsg3] = useState(false)
  const [checkbox, setCheckbox] = useState(false)
  const [checkbox2, setCheckbox2] = useState(false)
  const [checkbox3, setCheckbox3] = useState(false)
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
      <RGBGlowButton label='RGB-UI' type='scratch' className='customClass' />
      <div className='rangediv'>
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
        </div>
      </div>
      <div className='skeletondiv'>
        Loading skeleton :
        <br />
        <div className='skeltonHolder'>
          <RGBskeleton height='30px' width='30px' type='red' />
          <RGBskeleton height='45px' width='100%' type='red' />
          <RGBskeleton height='15px' width='100%' type='red' />
          <RGBskeleton height='5px' width='100%' type='red' />
          <RGBskeleton height='5px' width='100%' type='red' />
        </div>
        <div className='skeltonHolder'>
          <RGBskeleton height='30px' width='30px' type='green' />
          <RGBskeleton height='45px' width='100%' type='green' />
          <RGBskeleton height='15px' width='100%' type='green' />
          <RGBskeleton height='5px' width='100%' type='green' />
          <RGBskeleton height='5px' width='100%' type='green' />
        </div>
        <div className='skeltonHolder'>
          <RGBskeleton height='30px' width='30px' type='blue' />
          <RGBskeleton height='45px' width='100%' type='blue' />
          <RGBskeleton height='15px' width='100%' type='blue' />
          <RGBskeleton height='5px' width='100%' type='blue' />
          <RGBskeleton height='5px' width='100%' type='blue' />
        </div>
      </div>
      <br />
      <div className='checkboxdiv'>
        Checkbox input: <br />
        <RGBcheckbox
          label='red checkbox'
          type='red'
          checkstate={checkbox}
          onClick={() => {
            setCheckbox((prevState) => !prevState)
          }}
        />
        <br />
        <RGBcheckbox
          label='green checkbox'
          type='green'
          checkstate={checkbox2}
          onClick={() => {
            setCheckbox2((prevState) => !prevState)
          }}
        />
        <br />
        <RGBcheckbox
          label='blue checkbox'
          type='blue'
          checkstate={checkbox3}
          onClick={() => {
            setCheckbox3((prevState) => !prevState)
          }}
        />
      </div>
      <br />
      TEXT INPUT:
      <br />
      <RGBinput
        className=''
        type='red'
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <br />
      TEXT INPUT:
      <br />
      <RGBinput
        className=''
        type='green'
        value={inputText2}
        onChange={(e) => {
          setInputText2(e.target.value)
        }}
      />
      <br />
      TEXT INPUT:
      <br />
      <RGBinput
        className=''
        type='blue'
        value={inputText3}
        onChange={(e) => {
          setInputText3(e.target.value)
        }}
      />
      <br />
      <div className='buttondiv'>
        Buttons:
        <br />
        <RGBbutton type='red' label='Subscribe' />
        <RGBbutton type='green' label='Subscribe' />
        <RGBbutton type='blue' label='Subscribe' />
      </div>
      <br />
      <div className='alertdiv'>
        ALERT DEMO:
        <br />
        {showmsg ? (
          <RGBalert
            type='red'
            label='An error occured and we are working on it to see what went wrong !'
          />
        ) : (
          ''
        )}
        <RGBbutton
          type='blue'
          label='Show error alert'
          onClick={() => {
            setShowmsg(true)
          }}
        />
        <br />
        {showmsg2 ? (
          <RGBalert
            type='green'
            label='Your files has been successfully created, please check your mail for the output.'
          />
        ) : (
          ''
        )}
        <RGBbutton
          type='blue'
          label='Show success alert'
          onClick={() => {
            setShowmsg2(true)
          }}
        />
        <br />
        {showmsg3 ? (
          <RGBalert
            type='blue'
            label='Your file has been saved and you can mail this file to yourself from settings.'
          />
        ) : (
          ''
        )}
        <RGBbutton
          type='blue'
          label='Show info alert'
          onClick={() => {
            setShowmsg3(true)
          }}
        />
        <br />
      </div>
      <p className='classifier'>{"<RGBGlowButton label='Click Me'/>"}</p>
      <RGBGlowButton label='Click Me' />
      <p className='classifier'>
        {"<RGBGlowButton label='Click Me' type='scratch'/>"}
      </p>
      <RGBGlowButton label='Click Me' type='scratch' />
      <p className='classifier'>
        {"<RGBGlowButton label='Click Me' type='lines'/>"}
      </p>
      <RGBGlowButton label='Click Me' type='lines' />
    </>
  )
}

export default App
