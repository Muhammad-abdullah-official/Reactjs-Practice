
// simple function component
function App() {
const myName = 'Abdullah'
let student = 'Student of bahria university'
let learning = 'Currently learning React js'
  return (
    <>
    <h1>{myName}</h1>
    <h2>{student}</h2>
    <h3>{learning}</h3>
    </>
  )
}

// arrow function componenet
const MyInfo = ()=>{
  let aim = 'To be a MERN Stack Developer and AWS solution architect and AWS Developer'

  return(

<>
<h3>{aim}</h3>

</>

  )

}

export  {App, MyInfo}
