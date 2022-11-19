import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editMyActivity } from "../api"

const EditActivity = ({ userToken }) => {
  const navigate = useNavigate()
  const { routineActivityId } = useParams()
  const [formData, setFormData] = useState({
    count: "",
    duration: "",
    activityId: ""
  })

  async function handleEditActivity(event) {
    event.preventDefault()
    const count = formData.count
    const duration = formData.duration

    navigate("/MyRoutines")

    await editMyActivity(userToken, count, duration, routineActivityId)
  }

  return (
    <div className="activity">
      <form className="activity-form">
        <h2>EDIT ACTIVITY</h2>

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
        <button onClick={handleEditActivity}>Edit Your Activity </button>
      </form>
    </div>
  )
}

export default EditActivity
