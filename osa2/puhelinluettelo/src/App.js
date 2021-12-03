import React, { useState } from 'react'

const Names = ({persons}) => persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addNew = (event) => {
    event.preventDefault()
    if (!(persons.every((person) => person.name !== newName))) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({name:newName, number:newNumber}))
    }
  }

  const handleChange = (event) => setNewName(event.target.value) 

  const handeNumberchange = (event) => setNewNumber(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNew}>
        <div>
          name: <input value={newName} onChange={handleChange}/>
          <br/>
          number: <input value={newNumber} onChange={handeNumberchange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Names persons={persons} />
    </div>
  )

}

export default App