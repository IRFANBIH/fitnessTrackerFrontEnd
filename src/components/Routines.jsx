import React from "react"
import { SingleRoutine } from "./"

const Routines = ({allRoutines, userData, setEditRoutine}) => {



  return (
    <div>
      <h1> Here are some free Routines!</h1>

      <div id="post-display">
        {allRoutines.map((routine) => {
          return <SingleRoutine setEditRoutine={props.setEditRoutine} userData={userData} key={`routine-id${routine.id}`} routine={routine}  />
        })}
      </div>
    </div>
  )
}

export default Routines
