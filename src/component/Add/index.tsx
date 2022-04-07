import React, { useState } from 'react'
import {IState as Props} from "../../App"

interface IProps{
people:Props['people']
setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const Add :React.FC<IProps> = ({people,setPeople}) => {
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

  const handleClick=():void =>{
if(!input){
  return 
}
setPeople([
  ...people,
  {
    name: input.name,
    age: parseInt(input.age),
    url: input.url,
    note: input.note

  }]
)
setInput({
  name: '',
  age: '',
  url: '',
  note: ''
})
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
    <button className='AddToList-btn ' 
    onClick={handleClick}>
Submit
    </button>
  </div>
)
}

export default Add