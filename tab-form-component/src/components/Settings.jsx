import React from "react";

function Settings({ data: { theme }, setData }) {
    const handleChange = (e)=>{
        setData((prev)=>(
            {
                ...prev,
                theme:e.target.name
            }
        ))
    }
    console.log(theme);
    
  return (
    <div>
      <div>
        {" "}
        <label>
          <input onChange={(e)=>handleChange(e)} type="radio" name="Dark" checked={theme === "Dark"} />
          Dark
        </label>
      </div>
      <div>
        {" "}
        <label>
          <input onChange={(e)=>handleChange(e)} type="radio" name="Light" checked={theme === "Light"} />
          Light
        </label>
      </div>
    </div>
  );
}

export default Settings;
