import React from 'react'

export default function AppInput({placeholder,mytype,onChange}) {
 
  return (
    <input type={mytype} placeholder={placeholder} onChange={onChange}/>
  )
}
