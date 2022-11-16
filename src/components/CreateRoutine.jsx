import React, {useState} from "react";

const CreateRoutine = ()=>{
    const [formData, setFormData] = useState({
        name: "",
        goal: "",
        isPublic: undefined
    })
    const name = formData.name
    const goal = formData.goal
    const isPublic = formData.isPublic



    return (
        <div id="create-routine">
            <h1> CREATE A ROUTINE</h1>
            <form>
            <label htmlFor="name">
                    Routine Name
                    <input onChange={(e) => setFormData({...formData, name: e.target.value})} value={formData.goal}type="text" name="name" />
                </label>
            <label htmlFor="goal">
                    Routine Goal
                    <input onChange={(e) => setFormData({...formData, goal: e.target.value})} value={formData.goal} type="text" name="goal" />
                </label>
            <label htmlFor="private-routine">
                Private Routine
                    <input onChange={() => setFormData({...formData, isPublic: false})} value={formData.isPublic} type="radio" name="private-routine" />
                </label>
            <label htmlFor="public-routine">
                Public Routine
                    <input onChange={() => setFormData({...formData, isPublic: true})} value={formData.isPublic} type="radio"  name="private-routine" />
                </label>







            </form>








        </div>




    )

}





export default CreateRoutine;