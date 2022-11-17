import React from "react"
import { SingleRoutine } from "./"

const Routines = ({setEditRoutine, userData, allRoutines, userToken} ) => {
// let setEditRoutine= props.setEditRoutine
// let allRoutines= props.allRoutines
// let userData = props.userData

  return (
    <div>
      <h1> Here are some free Routines!</h1>

      <div id="post-display">
        {allRoutines.map((routine) => {
          return <SingleRoutine setEditRoutine={setEditRoutine} userData={userData} key={`routine-id${routine.id}`} routine={routine} userToken={userToken}  />
        })}
      </div>
    </div>
  )
}

export default Routines
