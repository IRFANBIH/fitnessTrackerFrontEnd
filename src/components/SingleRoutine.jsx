import React, { useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { deleteRoutine, deleteActivity } from "../api"

const SingleRoutine = ({ routine, userData, setEditRoutine, userRoutines, setUserRoutines }) => {
  const [userActivities, setUserActivities] = useState([routine.activities])
  console.log(userActivities, "this is userActivities state")

  const routineId = routine.id
  const localToken = localStorage.getItem("token")
  const { routineActivityId } = useParams()
  const activities = routine.activities

  async function handleDelete() {
    const deleted = await deleteRoutine(localToken, routineId)
    if (deleted.success) {
      const updatedArray = userRoutines.filter((routine) => {
        if (routine.id == deleted.id) {
          return false
        }
        return true
      })

      setUserRoutines(updatedArray)

    }
  }

  async function handleDeleteActivity(routineActivityId) {
    const localToken = localStorage.getItem("token")
    const deleted = await deleteActivity(localToken, routineActivityId)
    console.log(deleted.id)


    // this if statement for updating state after activity is deleted isn't working * hard refresh for state to update still required.

    if (deleted.success) {
      const updatedActivities = activities.filter((activity) => {
        if (activity.routineActivityId == deleted.id) {
          return false
        }
        return true
      })
        if(updatedActivities){
          console.log(updatedActivities, "THIS SHOULD NOT HAVE THE DELETED ACTIVITY ")
      setUserActivities(updatedActivities)
        }



    }
  }

  return (
    <div>
      <div className="single-routine">
        <h3>{routine.name}</h3>
        <p>
          <b>Creator: </b>
          {routine.creatorName}
        </p>
        <p>{routine.goal}</p>

        {userData.id === routine.creatorId ? (
          <>
            <NavLink to={`/routines/${routine.id}`}>
              <button
                onClick={() => {
                  setEditRoutine(routine)
                }}>
                Edit Routine
              </button>
            </NavLink>

            <NavLink to={`/routines/${routine.id}/activities`}>
              <button>Add Activities To Routine</button>
            </NavLink>

            <button onClick={handleDelete}> Delete Routine </button>
          </>
        ) : null}

        <p>
          <b>Activities</b>
        </p>
        {routine.activities.map((activity) => {
          return (
            <div className="activity-list" key={`activity-id${activity.id}`}>
              <ul>
                <li>
                  <b>Activity:</b> {activity.name}
                </li>
                <li>
                  <b>Description:</b> {activity.description}
                </li>
                <li>
                  <b>Duration:</b> {activity.duration}
                </li>
                <li>
                  <b>Count:</b> {activity.count}
                </li>
              </ul>

              <>
                {userData.id === routine.creatorId ? (
                  <>
                    <NavLink to={`/routine_activities/${activity.routineActivityId}`}>
                      <button onClick={() => {}}>Edit Activity</button>
                    </NavLink>
                    <button
                      onClick={() => {
                        handleDeleteActivity(activity.routineActivityId)
                        
                      }}>
                      Delete Activity
                    </button>
                  </>
                ) : null}
              </>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SingleRoutine
