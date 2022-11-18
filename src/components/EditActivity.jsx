import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom"
import { editMyActivity } from "../api";

const EditActivity = ({allActivities})=>{
    const [formData, setFormData] = useState({
        count: "",
        duration: "",
        activityId: ""
      })
    
    return( 
    <div id="edit-activity">
      <form>
        <h2>EDIT YOUR ACTIVITIES TO YOUR ROUTINE</h2>

        <select
          onChange={(e) => {
            setFormData({ ...formData, activityId: e.target.value })
            console.log(e.target.value)
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
              console.log(e.target.value)}}
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
        {/* <button onClick={handleAddActivity}>Edit Your Activity </button> */}

      </form>
    </div>
    )
}







export default EditActivity