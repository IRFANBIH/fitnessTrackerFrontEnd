import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editMyRoutine } from "../api"

const EditRoutine = ({ userToken, editRoutine, userData }) => {
  let { routineId } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: editRoutine.name,
    goal: editRoutine.goal,
    isPublic: editRoutine.isPublic
  })

  async function editedRoutine(event) {
    event.preventDefault()
    const name = formData.name
    const goal = formData.goal
    const isPublic = formData.isPublic
    navigate("/MyRoutines")

    const updatedRoutine = await editMyRoutine(userToken, name, goal, isPublic, routineId)

    if (Error) {
      alert(updatedRoutine.message)
    }
    if (userData.id === updatedRoutine.creatorId);
  }

  return (
    <div id="create-routine" onSubmit={editedRoutine}>
      <h1> EDIT YOUR ROUTINE</h1>
      <form>
        <label htmlFor="name">
          Routine Name
          <input
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
            type="text"
            name="name"
          />
        </label>
        <label htmlFor="goal">
          Routine Goal
          <input
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
            value={formData.goal}
            type="text"
            name="goal"
          />
        </label>
        <label htmlFor="private-routine">
          Private Routine
          <input
            onChange={() => setFormData({ ...formData, isPublic: false })}
            value={formData.isPublic}
            type="radio"
            name="private-routine"
          />
        </label>
        <label htmlFor="public-routine">
          Public Routine
          <input
            onChange={() => setFormData({ ...formData, isPublic: true })}
            value={formData.isPublic}
            type="radio"
            name="private-routine"
          />
        </label>
        <input type="submit" value="Update Routine" />
      </form>
    </div>
  )
}

export default EditRoutine
