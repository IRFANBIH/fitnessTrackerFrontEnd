const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api"

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

export async function getAllActivities() {
  try {
    const getActivities = {
      headers: { "Content-Type": "application/json" }
    }
    const response = await fetch(`${BASE_URL}/activities`, getActivities)
    const activities = await response.json()
    return activities
  } catch (error) {
    console.log(error, "AN ERROR OCCURRED WHILE GETTING ALL PUBLIC ACTIVITIES")
  }
}
