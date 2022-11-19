import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getUserRoutines } from "../api"
import { SingleRoutine } from "./"

const MyRoutines = ({ userData, setEditRoutine }) => {
  const navigate = useNavigate()
  const [userRoutines, setUserRoutines] = useState([])
  const username = userData.username
  const id = userData.id

  useEffect(() => {
    const localToken = localStorage.getItem("token")

    async function allMyRoutines() {
      if (localToken && username && id) {
        const routines = await getUserRoutines(username, localToken)
        setUserRoutines(routines)
      }
    }
    allMyRoutines()
  }, [username])

  return (
    <div id="my-routines">
      <h1>My Routines</h1>
      <h2>Stuck in a routine rut? Create something new!</h2>
      <button id="routine-button" onClick={() => navigate("/CreateRoutine")}>
        Create New Routine
      </button>
      <div>
        {userRoutines ? (
          userRoutines.map((routine) => {
            return (
              <SingleRoutine
                setEditRoutine={setEditRoutine}
                userData={userData}
                key={`routine-id${routine.id}`}
                routine={routine}
                userRoutines={userRoutines}
                setUserRoutines={setUserRoutines}
              />
            )
          })
        ) : (
          <h2> Loading... </h2>
        )}
      </div>
    </div>
  )
}

export default MyRoutines
