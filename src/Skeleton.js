import React from 'react'
import styles from './skeleton.module.scss'

const RGBskeleton = ({ type, width, height, className }) => {
  return (
    <div
      style={{ width: width, height: height }}
      className={`${styles.RGBskeletonBase} ${
        type === 'red'
          ? styles.RGBskeletonBase__red
          : type === 'green'
          ? styles.RGBskeletonBase__green
          : styles.RGBskeletonBase__blue
      } ${className}`}
    ></div>
  )
}

export default RGBskeleton
