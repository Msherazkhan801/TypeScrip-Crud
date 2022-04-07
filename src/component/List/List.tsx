import React from 'react'

interface IProps {
    people: {

        name: string,
        url: string,
        age: number,
        note: string
    }[]
}
const List: React.FC<IProps> = ({ people }) => {
    return (
        <ul>
            {people.map((user) => {
                return (
                  <li className='List'>
                      <div className='List-header'>
                          <img src={user.url} alt='person' className='List-img'/>
                          <h2>{user.name}</h2>
                          
                      </div>
                      <p>{user.age} year old</p>
                      <p className='List-note'>{user.note}</p>

                  </li>
                )
            })}
        </ul>
    )
}

export default List