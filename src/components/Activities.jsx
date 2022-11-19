import React from "react"
import { useNavigate } from "react-router-dom"


const Activities = ({allActivities}) => {
  const navigate = useNavigate()




  return (
    <div>
      <h1>Available Activities To Add To Your Routines</h1>
      <h2>If you don't see one that meets your needs, create your own!</h2><button id="activity-button" onClick={()=>navigate('/CreateActivity')}>Create Activity</button>
      {allActivities.map((activity) => {
        return (
          <div className="activity-list" key={`activity-id${activity.id}`}>
            <ul>
              <li>
                <b>Activity:</b> {activity.name}
              </li>
              <li>
                <b>Description:</b> {activity.description}
              </li>
            </ul>
          </div>
          
        )
      })}
    </div>
  )
}

export default Activities
