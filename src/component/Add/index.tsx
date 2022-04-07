import React, { useState } from 'react'

const Add = () => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    url: '',
    note: ''

  })
  const handleChange = (e:React.ChangeEvent<HTMLInputElement |HTMLTextAreaElement>) => {
    setInput({   ...input,
  [e.target.name]: e.target.value} )
  }
return (
  <div className='AddToList'>
    <input
      type='text'
      placeholder='Enter Name..'
      className='AddToList-input '
      value={input.name}
      onChange={handleChange}
      name='name'
    />
    <input
      type='text'
      placeholder='Enter  image Url..'
      className='AddToList-input '
      value={input.url}
      onChange={handleChange}
      name='url'



    />     <input
      type='number'
      placeholder='Enter age..'
      className='AddToList-input '
      value={input.age}
      onChange={handleChange}
      name='age'



    />   
      <textarea
      placeholder='Enter Note..'
      className='AddToList-input '
      value={input.note}
      onChange={handleChange}
      name='note'



    />
  </div>
)
}

export default Add