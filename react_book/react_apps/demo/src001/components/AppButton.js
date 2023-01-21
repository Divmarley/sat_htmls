import React from 'react'

export default function AppButton({onClick,label}) {
  return (
    <button type="submit" onClick={onClick}>{label}</button>
  )
}
