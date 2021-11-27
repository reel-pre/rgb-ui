import React from 'react'
import styles from './slider.module.scss'

const RGBslider = ({ type, value, onChange, min, max }) => {
  const calculateBackground = () => {
    const differencePercent = (value / (max - min)) * 100
    return (
      'linear-gradient(to right, #000000 0%, #000000 ' +
      differencePercent +
      '%, #fff ' +
      differencePercent +
      '%, #fff 100%)'
    )
  }

  return (
    <input
      style={{
        background: calculateBackground()
      }}
      type='range'
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      className={`${styles.rgbSlider}  ${
        type === 'red'
          ? styles['rgbSlider--red']
          : type === 'blue'
          ? styles['rgbSlider--blue']
          : styles['rgbSlider--green']
      }`}
    />
  )
}

export default RGBslider
