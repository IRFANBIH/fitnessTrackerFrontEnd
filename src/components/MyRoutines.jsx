import React, {useEffect} from "react"
import { getUserRoutines } from "../api"
import {SingleRoutine} from './'

const MyRoutines = ({ userToken, setUserRoutines, userRoutines, userData}) => {
  
    useEffect(() => {

    async function allMyRoutines() {
      const routines = await getUserRoutines(userData.username, userToken)
      setUserRoutines(routines)
    }
    // allMyRoutines()

  }, []);

  return (
    <div>
      <h1>My Routines</h1>
      {userRoutines.map((routine) => {
        return (
          <SingleRoutine
            allRoutines={allRoutines}
            key={`routine-id${routine.id}`}
            routine={routine}
          />
        )
      })}
    </div>
  )
}

export default MyRoutines
