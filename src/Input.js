import React from 'react'
import styles from './skeleton.module.scss'

const RGBinput = ({ type, value, onChange, className }) => {
  return type === 'red' ? (
    <input
      value={value}
      onChange={onChange}
      className={`m-1 p-0.5 caret-white border-gray-700  border-2 bg-black focus:shadow-redShadow focus:border-pureRed focus:outline-none rounded-md text-white ${className}`}
    />
  ) : type === 'green' ? (
    <input
      value={value}
      onChange={onChange}
      className={`m-1 p-0.5 caret-white border-gray-700  border-2 bg-black focus:shadow-greenShadow focus:border-pureGreen focus:outline-none rounded-md text-white ${className}`}
    />
  ) : (
    <input
      value={value}
      onChange={onChange}
      className={`m-1 p-0.5 caret-white border-gray-700  border-2 bg-black focus:shadow-blueShadow focus:border-pureBlue focus:outline-none rounded-md text-white ${className}`}
    />
  )
}

export default RGBinput
