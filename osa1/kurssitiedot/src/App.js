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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header name={course} />
      <Content name1={parts[0]['name']} name2={parts[1]['name']} name3={parts[2]['name']} exercises1={parts[0]['exercises']} exercises2={parts[1]['exercises']} exercises3={parts[2]['exercises']} />
      <Total total={parts[0]['exercises']+parts[1]['exercises']+parts[2]['exercises']} />
    </div>
  )
}

export default App