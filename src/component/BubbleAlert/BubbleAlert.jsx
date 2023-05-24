import React from 'react'
import './bubbleAlert.css'

export default function BubbleAlert () {
  const items = 0

  if (items === 0) return null

  return (
    <span className='bubbleAlert'>
      {items >= 10
        ? '9+'
        : items
      }
    </span>
  )
}
