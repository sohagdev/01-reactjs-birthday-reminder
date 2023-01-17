import React from 'react'

const List = ({ persons }) => {
  return (
    <>
      {persons.map((person) => {
        const { id, name, image, age } = person
        return (
          <article className='main' key={id}>
            <div className='person'>
              <img src={image} alt={name} />
              <div>
                <h3>{name}</h3>
                <p>{age} Years</p>
              </div>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
