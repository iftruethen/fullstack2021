import React, { useState,useEffect } from 'react'
import axios from 'axios'

const Persons = ({persons,searchTerm}) => persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase())).map(person => <p key={person.name}>{person.name} {person.number}</p>)

const Filter = ({searchTerm,handleSearchTermChange}) => (
  <div>
    filter shown with <input value={searchTerm} onChange={handleSearchTermChange} />
  </div>
)

const PersonForm = ({addNew,newName,newNumber,handleChange,handeNumberchange}) => (
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
)

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  console.log(persons)
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then(data => setPersons(data.data))
  },[])
  console.log(persons)

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

  const handleSearchTermChange = (event) => setSearchTerm(event.target.value)

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} />

      <h2>add a new</h2>

      <PersonForm addNew={addNew} newName={newName} newNumber={newNumber} 
      handleChange={handleChange} handeNumberchange={handeNumberchange} />

      <h2>Numbers</h2>

      <Persons persons={persons} searchTerm={searchTerm} />
    </div>
  )

}

export default App