const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api"

// FUNCTION FOR GETTING ALL PUBLIC ROUTINES

export async function getAllPublicRoutines() {
  try {
    const getRoutines = {
      headers: { "Content-Type": "application/json" }
    }
    const response = await fetch(`${BASE_URL}/routines`, getRoutines)
    const routines = await response.json()
    return routines
  } catch (error) {
    console.log(error, "AN ERROR OCCURRED WHILE GETTING ALL PUBLIC ROUTINES")
  }
}

// FUNCTION FOR GETTING ALL PUBLIC ACTIVITIES

export async function getAllActivities() {
  try {
    const options = {
      headers: { "Content-Type": "application/json" }
    }
    const response = await fetch(`${BASE_URL}/activities`, options)
    const activities = await response.json()

    return activities
  } catch (error) {
    console.log(error, "AN ERROR OCCURRED WHILE GETTING ALL PUBLIC ACTIVITIES")
  }
}

// FUNCTION FOR REGISTERING A NEW USER

export async function registerNewUser(username, password) {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password
      })
    }

    const response = await fetch(`${BASE_URL}/users/register`, options)
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error, "THERE WAS AN ERROR REGISTERING")
  }
}

// FUNCTION FOR LOGGING IN A USER

export async function loginUser(username, password) {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password
      })
    }
    const response = await fetch(`${BASE_URL}/users/login`, options)
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error, "THERE WAS AN ERROR LOGGING IN")
  }
}

// FUNCTION FOR CREATING A NEW ROUTINE

export async function NewRoutine(userToken, name, goal, isPublic) {
  try {
    let options = {}
    if (userToken) {
      options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`
        },
        body: JSON.stringify({
          name,
          goal,
          isPublic
        })
      }
    }

    const response = await fetch(`${BASE_URL}/routines`, options)
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error, "THERE WAS AN ERROR CREATING ROUTINE")
  }
}

// FUNCTION TO ADD AN ACTIVITY TO A ROUTINE

export async function addActivity(activityId, count, duration, routineId) {
  try {


    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        activityId: activityId,
        count: count,
        duration: duration
      })
    }
    const response = await fetch(`${BASE_URL}/routines/${routineId}/activities`, options)
    const result = response.json()
    return result
  } catch (error) {
    console.log(error, "THERE WAS AN ERROR ADDING ACTIVITY TO ROUTINE")
  }
}

// FUNCTION FOR EDITING ROUTINE

export async function editMyRoutine(userToken, name, goal, isPublic, routineId) {
  try {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic
      })
    }

    const response = await fetch(`${BASE_URL}/routines/${routineId}`, options)
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}

// FUNCTION FOR EDITING ACTIVITY
export async function editMyActivity(count, duration) {
  try {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`
      },
      body: JSON.stringify({
        count,
        duration
      })
    }

    const response = await fetch(`${BASE_URL}/routine_activities/${routineActivityId}`, options)
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}


// FUNCTION FOR DELETING ROUTINE

export async function deleteRoutine(localToken, routineId) {
  try {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localToken}`
      }
    }
    const response = await fetch(`${BASE_URL}/routines/${routineId}`, options)
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}

// FUNCTION FOR RETRIEVING ROUTINES BY A PARTICULAR USER * ALSO RETURNS CURRENT LOGGED-IN USER'S PUBLIC AND PRIVATE ROUTINES TO THEIR MY ROUTINES PAGE

export async function getUserRoutines(username, userToken) {
  try {
    let options = {}
    if (userToken) {
      options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`
        }
      }
    } else {
      options = {
        headers: {
          "Content-Type": "application/json"
        }
      }
    }

    const response = await fetch(`${BASE_URL}/users/${username}/routines`, options)
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error, "THERE WAS AN ERROR GETTING USER ROUTINES")
  }
}

// FUNCTION FOR GETTING LOGGED-IN USER DATA * username and id

export async function getUserData(userToken) {
  try {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`
      }
    }

    const response = await fetch(`${BASE_URL}/users/me`, options)
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error, "THERE WAS AN ERROR GETTING ME DATA")
  }
}
