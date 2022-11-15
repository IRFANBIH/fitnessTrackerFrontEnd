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

export async function registerNewUser(username, password ){
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

export async function loginUser(username, password){
  try{ 
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
