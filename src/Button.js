import React from 'react'

export default function Button({length, count,getPage}) {
  const button = Math.ceil(length/count)
  const arr = Array.from({length: button}, (_, index) => index + 1)

  return (
    <div className='btnContainer'>
      {
        arr?.map((el, index)=>{
          return  <button className='btn' key = {index} onClick = {(event)=> getPage(event.target.value)} value= {el}>{el}</button>
        })
      }
    </div>
  )
}
