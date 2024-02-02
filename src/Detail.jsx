import axios from 'axios'
import {formatDistanceToNow} from 'date-fns'

function Detail({workout}) {

     function handleDelete(){
        axios.delete(`http://localhost:4000/api/workouts/${workout._id}`)
     }
      console.log(workout)
    return (
     
   <div id='new'>
     <h1>{workout.title}</h1>
    <h1>Load(kg):{workout.load}</h1>
    <h1>Number of reps:{workout.Reps}</h1>
    <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p> 
   
    <span className="material-symbols-outlined" onClick={handleDelete}>delete</span>

    
   </div>   
   );
 
 
 }
 
export default Detail