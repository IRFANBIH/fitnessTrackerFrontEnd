import React, {useEffect, useState} from "react"
import { getUserRoutines } from "../api"
import {SingleRoutine} from './'

const MyRoutines = ({ userToken, userData, setEditRoutine}) => {
  const [userRoutines, setUserRoutines] = useState([])
  const username = userData.username
  const id = userData.id
  
  
    useEffect(() => {
      const localToken = localStorage.getItem("token")

    async function allMyRoutines() {
      if (localToken && username && id) {
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
          <SingleRoutine setEditRoutine={setEditRoutine} userData={userData}
            key={`routine-id${routine.id}`}
            routine={routine}
          />
        )
      })}
    </div>
  )
}

export default MyRoutines
