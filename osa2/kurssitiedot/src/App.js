import React from 'react'

const Courses = ({courses}) => courses.map(course => <Course key={course.id} course={course} />)

const Course = ({course}) => {
  return (
    <div>
      <Header header={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({header}) => (
  <h2>{header}</h2>
)

const Content = ({parts}) => parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)

const Part = ({name,exercises}) => <p>{name} {exercises}</p>

const Total = ({parts}) => {
  const tot = parts.reduce(function(sum,part) {
    return sum + part.exercises
  }, 0)
  return (
    <p><b>total of {tot} exercises</b></p>
  )
}

const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Courses courses={courses} />
    </div>
  )
}

export default App