import React from 'react'

export default function Card({title, description}) {
  return (
    <div>
        <h1 className='text-2xl'>{title}</h1>
        <p className='text-xl'>{description}</p>
    </div>
  )
}
