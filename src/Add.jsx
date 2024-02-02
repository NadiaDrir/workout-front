import axios from 'axios'

import { useState, useEffect } from 'react'


function Add() {
    const [title, settitle] = useState('')
    const [load, setload] = useState('')
    const [Reps, setReps] = useState('')
 
function clickhandler(e){
    e.preventDefault()
    let workout ={title, load ,Reps}

    axios.post('http://localhost:4000/api/workouts',workout)
    
}
  
    return (

     <form  onSubmit={(e) => e.preventDefault()}> 
        <div id='form'>
         <h1>ADD WORKOUT </h1>
         <label htmlFor="workoutTitle">Workout Title</label>
     <input type='text' placeholder='workouttitle' onChange={(e) => settitle(e.target.value)} value={title}></input>
         <label htmlFor="load">Load</label>
     <input type='number' placeholder='load' onChange={(e) => setload(e.target.value)} value={load}></input>
          <label htmlFor="number">Number</label>
     <input type='number' placeholder='Reps' onChange={(e) => setReps(e.target.value)} value={Reps}></input>
     <button type='submit' onClick={(e)=>clickhandler(e)}> add workout  </button>
     </div>
 
     </form>
   );
 
 
 }
 
 
export default Add