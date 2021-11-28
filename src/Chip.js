import React from 'react'
import styles from './chip.module.scss'

const RGBchip = ({ type, label, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.RGBchip} ${className} ${
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
