import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Button = ({ onClick, namn }) => (  <button onClick={onClick}>    {namn}  </button>)

const Statistics = ({text, value}) => {
  return(
    <p> {text}: {value} </p>
  )
  }

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodClick = () => {
    setGood(good + 1)
    
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }
  const average = (good*1 +  bad*(-1)) / (good + neutral + bad)
  const positive = ((good) / (good + neutral + bad))*100
  
  if (good + neutral + bad > 0  ){
   return (
    <div>
      
      <h1> Give feedback </h1>

      <Button onClick={handleGoodClick} namn = 'good'/>
      <Button onClick={handleNeutralClick} namn= 'neutral'/>
      <Button onClick={handleBadClick} namn= 'bad'/>
      
      <h1> Statistics </h1>
      
      <Statistics text = 'good' value = {good}/>
      <Statistics text = 'neutral' value = {neutral}/>
      <Statistics text = 'bad' value = {bad}/>
      <Statistics text = 'average' value = {average}/>
      <Statistics text = 'positive' value = {positive} />
    
    </div>
  )}
  
  else{
   return (
    <div>
      <h1> Give feedback </h1>

      <Button onClick={handleGoodClick} namn = 'good'/>
      <Button onClick={handleNeutralClick} namn= 'neutral'/>
      <Button onClick={handleBadClick} namn= 'bad'/>
      
      <h1> Statistics </h1>

      <p> no feedback given </p>
    
    </div>
  )}
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
