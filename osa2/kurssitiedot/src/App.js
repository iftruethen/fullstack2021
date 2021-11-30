import React from 'react'

const Course = ({course}) => {
  return (
    <div>
      <Header header={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

const Header = ({header}) => (
  <h1>{header}</h1>
)

const Content = ({parts}) => parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)

const Part = ({name,exercises}) => <p>{name} {exercises}</p>

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App