import React from "react";

function Interest({ data: { interests }, setData,errors }) {

    const handleChange = (e)=>{
        setData((prev)=>({
            ...prev,
            interests:e.target.checked ?[...prev.interests, e.target.name] : prev.interests.filter((i)=> i !== e.target.name)
        }))
        
    }
    console.log(interests)
    
  return (
    <div>
      <div>
        {" "}
        <label>
          <input
          onChange={handleChange}
            type="checkbox"
            name="coding"
            checked={interests?.includes("coding")}
          />
          Coding
        </label>
      </div>
      <div>
        {" "}
        <label>
          <input
          onChange={handleChange}
            type="checkbox"
            name="music"
            checked={interests?.includes("music")}
          />
          Music
        </label>
      </div>
      <div>
        {" "}
        <label>
          <input
          onChange={handleChange}
            type="checkbox"
            name="javascript"
            checked={interests?.includes("javascript")}
          />
          JavaScript
        </label>
      </div>
      {errors.interests && <span className="error">{errors.interests}</span> }
    </div>
  );
}

export default Interest;
