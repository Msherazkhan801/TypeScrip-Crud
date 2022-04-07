import React from 'react'

const Add = () => {
  return (
    <div className='AddToList'>
      <input
        type='text'
        placeholder='Enter Name..'
        className='.AddToList-input '
      />
      <input
        type='text'
        placeholder='Enter  image Url..'
        className='.AddToList-input '
      />     <input
        type='number'
        placeholder='Enter age..'
        className='.AddToList-input '
      />     <textarea
        placeholder='Enter Note..'
        className='.AddToList-input '
      />
    </div>
  )
}

export default Add