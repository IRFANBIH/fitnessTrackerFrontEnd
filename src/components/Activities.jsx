import React, { useEffect, useState } from "react"
import { getAllActivities } from "../api"

const Activities = ({allActivities}) => {
//   const [allActivities, setAllActivities] = useState([])

//   useEffect(() => {
//   async function getActivities() {
//     const publicActivities = await getAllActivities()
//     setAllActivities(publicActivities)  
//   }
//   getActivities()
// },[])



  return (
    <div>
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
