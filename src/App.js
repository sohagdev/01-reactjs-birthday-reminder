import React, { useState } from 'react'
import data from './data'
import List from './List'
const App = () => {
  const [lists, setLists] = useState(data)
  return (
    <main className='section'>
      <section className='container'>
        <h3>{lists.length} birthdays today</h3>
        <List persons={lists} />
        <button onClick={() => setLists([])}>
          {lists.length === 0 ? 'Items Cleared' : 'Clear All'}
        </button>
      </section>
    </main>
  )
}

export default App
