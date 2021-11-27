import React from 'react'
import styles from './chip.module.scss'

const RGBchip = ({ type, label }) => {
  return (
    <div
      className={`${styles.RGBchip}  ${
        type === 'red'
          ? styles['RGBchip--red']
          : type === 'blue'
          ? styles['RGBchip--blue']
          : styles['RGBchip--green']
      }`}
    >
      {label}
    </div>
  )
}

export default RGBchip
