import React from "react"
import { SingleRoutine } from "./"

const Routines = ({allRoutines}) => {



  return (
    <div>
      <h1> THIS IS ROUTINES</h1>

      <div id="post-display">
        {allRoutines.map((routine) => {
          return <SingleRoutine allRoutines={allRoutines} key={`routine-id${routine.id}`} routine={routine} />
        })}
      </div>
    </div>
  )
}

export default Routines
