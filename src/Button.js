import React from 'react'
import styles from './skeleton.module.scss'

const RGBbutton = ({ type, onClick, className, label }) => {
  return type === 'red' ? (
    <button
      onClick={onClick}
      className={`bg-black border-2 focus:border-4 rounded-lg m-2 px-4 py-1 text-white border-pureRed focus:shadow-redShadow ${
        className ? className : ''
      }`}
    >
      {label}
    </button>
  ) : type === 'green' ? (
    <button
      onClick={onClick}
      className={`bg-black border-2 focus:border-4 rounded-lg m-2 px-4 py-1 text-white border-pureGreen focus:shadow-greenShadow ${
        className ? className : ''
      }`}
    >
      {label}
    </button>
  ) : (
    <button
      onClick={onClick}
      className={`bg-black border-2 focus:border-4 rounded-lg m-2 px-4 py-1 text-white border-pureBlue focus:shadow-blueShadow ${
        className ? className : ''
      }`}
    >
      {label}
    </button>
  )
}

export default RGBbutton
