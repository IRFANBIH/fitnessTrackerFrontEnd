import React, { useState } from "react"
import { addActivity } from "../api"
import { useNavigate, useParams } from "react-router-dom"

const AddRoutineActivity = ({ allActivities }) => {
  const navigate = useNavigate()

  let { routineId } = useParams()

  const [formData, setFormData] = useState({
    count: "",
    duration: "",
    activityId: ""
  })

  const count = Number(formData.count)
  const duration = Number(formData.duration)
  const activityId = Number(formData.activityId)

  async function handleAddActivity(event) {
    event.preventDefault()

    await addActivity(activityId, count, duration, routineId)
    navigate("/MyRoutines")
  }

  return (
    <div id="add-activity">
      <form>
        <h2>ADD ACTIVITIES TO YOUR ROUTINE</h2>

        <select
          onChange={(e) => {
            setFormData({ ...formData, activityId: e.target.value })
          }}
          name="activity"
          id="activity-select">
          <option value="">--Please choose an activity--</option>
          {allActivities.map((activity) => {
            return <option key={activity.id} value={activity.id}>{`${activity.name}`}</option>
          })}
        </select>

        <label htmlFor="count">
          Count
          <input
            onChange={(e) => {
              setFormData({ ...formData, count: e.target.value })
            }}
            value={formData.count}
            type="text"
            name="count"
          />
        </label>
        <label htmlFor="duration">
          Duration
          <input
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            value={formData.duration}
            type="text"
            name="duration"
          />
        </label>
        <button onClick={handleAddActivity}>Add Activity To Routine</button>
      </form>
    </div>
  )
}

export default AddRoutineActivity
