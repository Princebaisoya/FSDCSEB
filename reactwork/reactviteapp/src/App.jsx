import React from 'react'
import Student from './Student';
function App() {
  const h1=<h1>Hello World</h1>
  const mystyle={
    color:'red',
    backgroundColor:'yellow'
  }
  return (
    <div style={{backgroundColor:'cyan'}}> 
      {h1}
      <div style={mystyle}> ABES Engineering College</div>
      <div>
        <Student college="ABES Engineering College" 
        name="Prince"
        branch="CSE"
        section="B"
        roll="12"
         />

      <Student college="ABES Engineering College" 
        name="Rahul"
        pic={<img src='https://tse1.mm.bing.net/th?id=OIP.da9lBtFNfdFQwErbLcMQwAHaFW&pid=Api&P=0&h=180' height={100} width={100}></img>}
        branch="CSE"
        section="C"
        roll="12"
         />
        
        <Student college="ABES Engineering College" 
        name="Rohit"
        branch="CS-DS"
        section="N"
        roll="12"
         />
      </div>
    </div>
  )
}

export default App
