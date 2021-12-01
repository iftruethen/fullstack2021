import React from 'react'

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

export default Course