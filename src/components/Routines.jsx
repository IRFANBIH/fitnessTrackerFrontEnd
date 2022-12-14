import React from "react"
import { SingleRoutine } from "./"

const Routines = ({ setEditRoutine, userData, allRoutines, userToken }) => {
  return (
    <div>
      <h1> Here Are Some Routines To Get You Started!</h1>

      <div id="post-display">
        {allRoutines.map((routine) => {
          return (
            <SingleRoutine
              setEditRoutine={setEditRoutine}
              userData={userData}
              key={`routine-id${routine.id}`}
              routine={routine}
              userToken={userToken}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Routines
