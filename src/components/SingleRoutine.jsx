import React from "react"
import { NavLink} from "react-router-dom"
import { deleteRoutine } from "../api"

const SingleRoutine = ({routine, userData, setEditRoutine}) => {
const routineId = routine.id
const localToken= localStorage.getItem("token")



  return (

    <div>
      <div className="single-routine">
        <h3>{routine.name}</h3>
        <p>
          <b>Creator: </b>
          {routine.creatorName}
        </p>
        <p>{routine.goal}</p>

        {userData.id === routine.creatorId ?  
        <>
        <NavLink to={`/routines/${routine.id}`}> 
        <button onClick={() => {setEditRoutine(routine)}}>Edit Routine</button>
        </NavLink>
        <button onClick={() => {deleteRoutine(localToken, routineId)}}> Delete Routine </button> 
        </> : null}
        
       
        

        <p><b>Activities</b></p>
        {routine.activities.map((activity) => {
          return (
            <div className="activity-list" key={`activity-id${activity.id}`}>
              <ul>
                <li><b>Activity:</b> {activity.name}</li>
                <li><b>Description:</b> {activity.description}</li>
                <li><b>Duration:</b> {activity.duration}</li>
                <li><b>Count:</b> {activity.count}</li>
              </ul>
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default SingleRoutine;
