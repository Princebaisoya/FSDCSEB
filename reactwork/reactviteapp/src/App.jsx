import React from 'react'
import Student from './Student';
import Imagemanipulation from './Imagemanipulation';
import MyUseEffect from './MyUseEffect';
import UseFetchAPI from './UseFetchAPI';
function App() {
  const h1=<h1>Hello World</h1>
  const mystyle={
    color:'red',
    backgroundColor:'yellow'
  }
  



  const studentData=[{
    college:"ABES Engineering College",
    name:"Rahul",
    branch:"CSE",
    roll:"23",
    section:"B"
  },
  {
    college:"ABES Engineering College",
    name:"Prince",
    branch:"CSE",
    section:"B",
    roll:"12",
  },
  {
    college:"ABES Engineering College",
    name:"Raj",
    branch:"CSE",
    section:"B",
    roll:"435",

  }
  
]
  return (
    <div>
      <h2>Hello using use state Hook</h2>
      <div>
        {/* <UseStudentState/> */}
        {/* <Imagemanipulation/> */}
        {/* <MyUseEffect /> */}
        <UseFetchAPI/>
      </div>
    </div>
  //   <div style={{backgroundColor:'cyan'}}> 
  //     {h1}
  //     <div style={mystyle}> ABES Engineering College</div>
  //     <div style={{display:'flex'}}>
  //       {/* <Student data={studentData[0]}/> */}
  //       {
  //         studentData.map(
  //           (ele)=>{
  //            return <Student data={ele}/>

  //           }
  //         )
  //       }
  //       {/* <Student college="ABES Engineering College" 
  //       name="Prince"
  //       branch="CSE"
  //       section="B"
  //       roll="12"
  //        />

  //     <Student 
  //       name="Rahul"
  //       pic={<img src='https://tse1.mm.bing.net/th?id=OIP.da9lBtFNfdFQwErbLcMQwAHaFW&pid=Api&P=0&h=180' height={100} width={100}></img>}
  //       branch="CSE"
  //       section="C"
  //       roll="12"
  //        />
        
  //       <Student college="ABES Engineering College" 
  //       name="Rohit"
  //       branch="CS-DS"
  //       section="N"
  //       roll="12"
  //        /> */}
  //     </div>
  //   </div>
  // 
  )
}

export default App
