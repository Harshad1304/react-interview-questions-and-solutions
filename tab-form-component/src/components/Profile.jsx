import React from "react";

function Profile({ data: { name, age, email },setData,errors }) {
    
    const handleDataChange = (e,item)=>{
        setData(prev=>({
            ...prev,
            [item]:e.target.value,
        }))

    }
  
    
  return (
    <div>
      <div>
        <label htmlFor="name">Name:</label>
        <input onChange={(e)=>handleDataChange(e,"name")} type="text" id="name" value={name} />
        {errors.name && <span className="error">{errors.name}</span> }
      </div>
      
      <div>
        {" "}
        <label htmlFor="email">Email:</label>
        <input onChange={(e)=>handleDataChange(e,"email")} type="email" id="email" value={email} />
        {errors.email && <span className="error">{errors.email}</span> }
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input onChange={(e)=>handleDataChange(e,"age")} type="number" id="age" value={age} />
        {errors.age && <span className="error">{errors.age}</span> }
      </div>
    </div>
  );
}

export default Profile;
