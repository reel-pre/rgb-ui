import React, { useState } from 'react'
import styles from './checkbox.module.scss'
import { ReactComponent as Tick } from './tick.svg'
const RGBcheckbox = ({ label, checkstate, onClick, type }) => {
  const outlineColorClass = () => {
    return `${styles.RGBcheckboxContainer__main} ${
      checkstate
        ? type === 'red'
          ? styles.RGBcheckboxContainer__mainActiveRed
          : type === 'green'
          ? styles.RGBcheckboxContainer__mainActiveGreen
          : styles.RGBcheckboxContainer__mainActiveBlue
        : styles.RGBcheckboxContainer__mainInactive
    }`
  }
  const fillColorClass = () => {
    return checkstate
      ? type === 'red'
        ? styles.RGBcheckboxContainer__main__glowRed
        : type === 'green'
        ? styles.RGBcheckboxContainer__main__glowGreen
        : styles.RGBcheckboxContainer__main__glowBlue
      : styles.RGBcheckboxContainer__main__dim
  }

  return (
    <div className={styles.RGBcheckboxContainer} onClick={onClick}>
      <div className={outlineColorClass()}>
        <div className={fillColorClass()}>{checkstate ? <Tick /> : ' '}</div>
      </div>
      <div className={styles.RGBcheckboxContainer__label}>{label}</div>
    </div>
  )
}

export default RGBcheckbox
