import React from 'react'

const Header = (props) => (
  <h1>{props.name}</h1>
)

const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
)

const Content = (props) => (
  <div>
    <Part name={props.name1} exercises={props.exercises1} />
    <Part name={props.name2} exercises={props.exercises2} />
    <Part name={props.name3} exercises={props.exercises3} />
  </div>
)

const Total = (props) => (
  <p>
    Number of exercises {props.total}
  </p>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header name={course} />
      <Content name1={part1.name} name2={part2.name} name3={part3.name} exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
      <Total total={part1.exercises+part2.exercises+part3.exercises} />
    </div>
  )
}

export default App