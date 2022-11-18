import React, { useState } from "react"
import { NavLink, useNavigate} from "react-router-dom"
import {  NewRoutine } from "../api"

const CreateRoutine = ({ userToken}) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    goal: "",
    isPublic: ""

  })

  async function makeRoutine(event) {
    event.preventDefault()
    const name = formData.name
    const goal = formData.goal
    const isPublic = formData.isPublic
    navigate("/MyRoutines")

    const createdRoutine = await NewRoutine(userToken, name, goal, isPublic)

    if (!userToken) {
      alert(createdRoutine.message)
    }
  }

  return (
    <div>
      <div id="create-routine" onSubmit={makeRoutine}>
        <h1> CREATE A ROUTINE</h1>
        
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
          <input type="submit" value="Create Routine" />
        </form>
      </div>
    </div>
  )
}

export default CreateRoutine
