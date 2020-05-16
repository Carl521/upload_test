import React from 'react';
import ReactDOM from 'react-dom';


const Part = (props) =>{
  return(
    <div>     
     <p> {props.part} {props.number_of_ex} </p>    
     </div>
   
     )

}

const Header = (props) =>{
  return(
         
     <p> {props.course_name} </p>    
     

  )}
const Content = (props) =>{
  const name_of_part1 = props.part_name1
  const exercises_number1 = props.number_of_exercises1
  const name_of_part2 = props.part_name2
  const exercises_number2 = props.number_of_exercises2
  const name_of_part3 = props.part_name3
  const exercises_number3 = props.number_of_exercises3
  return(
   <div>     
    <Part part = {name_of_part1} number_of_ex = {exercises_number1} />
    <Part part = {name_of_part2} number_of_ex = {exercises_number2} />
    <Part part = {name_of_part3} number_of_ex = {exercises_number3} />
    </div>
  
    )}
const Total = (props) =>{
  return(
   <div>     
    <p> Number of exercises {props.tot_number_of_exercises} </p>    
    </div>
      
        )}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course_name={course} />
      
      <Content part_name1 = {part1} number_of_exercises1 = {exercises1} 
      part_name2 = {part2} number_of_exercises2 = {exercises2} 
      part_name3 = {part3} number_of_exercises3 = {exercises3}/>
      
      <Total tot_number_of_exercises =  {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

