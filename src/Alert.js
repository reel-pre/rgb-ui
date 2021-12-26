import React from 'react'
import styles from './skeleton.module.scss'

const RGBalert = ({ type, onClick, className, label }) => {
  return type === 'red' ? (
    <div className='select-none cursor-default animate-bounce-slow flex items-center w-full border-pureRed border-2 pl-4 pt-1 pb-1 rounded-md bg-darkRed text-white'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
      <div className='ml-2'>{label}</div>
    </div>
  ) : type === 'green' ? (
    <div className='select-none cursor-default animate-bounce-slow flex items-center w-full border-pureGreen border-2 pl-4 pt-1 pb-1 rounded-md bg-darkGreen text-white'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
      <div className='ml-2'>{label}</div>
    </div>
  ) : (
    <div className='select-none cursor-default animate-bounce-slow flex items-center w-full border-pureBlue border-2 pl-4 pt-1 pb-1 rounded-md bg-darkBlue text-white'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
      <div className='ml-2'>{label}</div>
    </div>
  )
}

export default RGBalert
