import React, { useState } from 'react'

const Button = ({ text,handler }) => {
  return(
    <button onClick={handler}>
      {text}
    </button>
  )
}

const StatisticLine = ({text,value}) => {
  if (text === "positive") {
    return (
      <>
        <>{text} {value} %</>
        <br />
      </>
    )
  }
  return (
    <>
      <>{text} {value}</>
      <br />
    </>
  )
}

const Statistics = ({good,bad,neutral}) => {
  return (
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={good+bad+neutral} />
      <StatisticLine text="average" value={(good-bad)/(bad+good+neutral)} />
      <StatisticLine text="positive" value={(good)/(bad+good+neutral)*100} />
    </>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const GoodHandler = () => setGood(good + 1)
  const NeutralHandler = () => setNeutral(neutral + 1)
  const BadHandler = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handler={GoodHandler} />
      <Button text="neutral" handler={NeutralHandler} />
      <Button text="bad" handler={BadHandler} />
      <h1>statistics</h1>
      <>good {good}</>
      <br />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App