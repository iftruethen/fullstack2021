import React, { useState } from 'react'

const Nappi = ({ text,handler }) => {
  return(
    <button onClick={handler}>
      {text}
    </button>
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
      <Nappi text="good" handler={GoodHandler} />
      <Nappi text="neutral" handler={NeutralHandler} />
      <Nappi text="bad" handler={BadHandler} />
      <h1>statistics</h1>
      <>good {good}</>
      <br />
      <>neutral {neutral}</>
      <br />
      <>bad {bad}</>
    </div>
  )
}

export default App