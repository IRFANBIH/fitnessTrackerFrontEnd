import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
import { NewActivity } from "../api";


const CreateActivity = ({userToken}) => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
      name: "",
      description: "",
  
    })
  
    async function makeActivity(event) {
      event.preventDefault()
      const name = formData.name
      const description = formData.goal
      navigate("/activities")
  
      const createdActivity = await NewActivity(userToken, name, description)
  
      if (!userToken) {
        alert(createdActivity.message)
      }
    }
  
    return (
      <div>
        <div id="create-activity" onSubmit={makeActivity}>
          <h1> CREATE AN ACTIVITY</h1>
          
          <form>
            <label htmlFor="name">
              Activity Name
              <input
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                value={formData.name}
                type="text"
                name="name"
              />
            </label>
            <label htmlFor="goal">
              Activity Description
              <input
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                value={formData.description}
                type="text"
                name="description"
              />
            </label>
            <input type="submit" value="Create Activity" />
          </form>
        </div>
      </div>
    )
  }











export default CreateActivity