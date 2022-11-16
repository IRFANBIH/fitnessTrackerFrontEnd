import React, {useEffect, useState} from "react"
import { getUserRoutines } from "../api"
import {SingleRoutine} from './'

const MyRoutines = ({ userToken, userData}) => {
  const [userRoutines, setUserRoutines] = useState([])
  const username = userData.username
  console.log(username, "does username work here?")
  
    useEffect(() => {
      const localToken = localStorage.getItem("token")

    async function allMyRoutines() {
      if (localToken && username) {
      console.log(username, "is this the username from line 13 in My Routines")
      const routines = await getUserRoutines(username, localToken)
      setUserRoutines(routines)}
    }
     allMyRoutines()
  }, [userToken]);

  return (
    <div>
      <h1>My Routines</h1>
      {userRoutines.map((routine) => {
        return (
          <SingleRoutine
            key={`routine-id${routine.id}`}
            routine={routine}
          />
        )
      })}
    </div>
  )
}

export default MyRoutines
