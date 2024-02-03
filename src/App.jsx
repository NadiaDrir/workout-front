
import { useState, useEffect } from 'react'
import Add from './Add'
import Detail from './Detail'
import axios from 'axios'
import './index.css'

function App() {
 
  const [workout, setworkout] = useState([
    
])

  useEffect(() => {
   
    axios.get('https://workout-cf6n.onrender.com/api/workouts')  //ramene moi de API URL cequi correspond a ma variable search
      //.then(res=>console.log(res.data.search))// puis recupere dansune la fonction res les donné data.search
      .then(res => {setworkout(res.data.workout)})//je recupre dans la variable set movie
      .catch(err => console.log(err))// si il a erreur il faut signalé 

  },[])
    console.log(workout)
  return (

    
    <>
     <div >
      <h4 className='navigation'> WORKOUT </h4>
      <div  className='main'>
        <div className='det'>{workout.map((work)=>
          <Detail workout={work} />
        )
        }
            </div>
      <Add   />
      
      </div>
    </div>
      
    </>
  )
}

export default App
