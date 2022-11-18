import React from "react"


const Activities = ({allActivities}) => {




  return (
    <div>
      <h1>Available Activities To Add To Your Routines</h1>
      <h3>If you don't see one that meets your needs, create your own!</h3><button>Create Activity</button>
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
