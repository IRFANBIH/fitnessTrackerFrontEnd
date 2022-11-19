import React, { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { deleteRoutine, deleteActivity } from "../api"

const SingleRoutine = ({ routine, userData, setEditRoutine, userRoutines, setUserRoutines }) => {
  const [userActivities, setUserActivities] = useState([])
  console.log(userActivities, "line 7")
  const routineId = routine.id
  const localToken = localStorage.getItem("token")
  const { routineActivityId } = useParams()
  const activities = routine.activities
  console.log(activities, "line 11")

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

    if (deleted.success) {
      const updatedArray = activities.filter((activity) => {
        if (activity.id == deleted.activityId) {
          return false
        }
        return true
      })

      setUserActivities(updatedArray)
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
                      <button
                        onClick={() => {
                          // setEditActivity(activity)
                        }}>
                        Edit Activity
                      </button>
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
