import React from "react"


const Activities = ({allActivities}) => {




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
