import React from "react"


const SingleRoutine = ({routine, allRoutines}) => {




  return (
    <div>
      <div className="single-routine">
        <h3>{routine.name}</h3>
        <p>
          <b>Creator: </b>
          {routine.creatorName}
        </p>
        <p>{routine.goal}</p>
        {/* <NavLink to='editRoutines'><button>Edit Routine</button></NavLink> */}

        <p><b>Activities</b></p>
        {routine.activities.map((activity) => {
          return (
            <div className="activity-list" key={`activity-id${activity.id}`}>
              <ul>
                <li><b>Activity:</b> {activity.name}</li>
                <li><b>Description:</b> {activity.description}</li>
                <li><b>Duration:</b> {activity.duration}</li>
                <li><b>Count:</b> {activity.count}</li>
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SingleRoutine;
