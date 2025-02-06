import React, { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";

function TabForm() {
  const [data, setData] = useState({
    name: "Harshad",
    age: "29",
    email: "harshad@gmail.com",
    interests: ["coding", "music", "javascript"],
    theme: "Dark",
  });
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 2) {
          err.email = "Email is not valid";
        }
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interest,
      validate:()=>{
        const err = {}
        if(data.interests.length <1){
            err.interests = "select atleast one interests"
        }
        setErrors(err)
        return err.interests ? false : true;
    }
    },
    {
      name: "Settings",
      component: Settings,
      validate:()=>true
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handleNext = () => {
    if(tabs[activeTab].validate()){
        setActiveTab((prev) => {
            return prev + 1;
          });
    }
   
  };

  const handlePrevClick = () => {
    if(tabs[activeTab].validate()){
        setActiveTab((prev) => {
            return prev - 1;
          });
    }
   
  };
  const handleSubmit = () => {
    console.log(data);
  };
  return (
    <div>
      <div className="heading-container">
        {tabs.map(({ name }, i) => (
          <div key={i} onClick={() => tabs[activeTab].validate() && setActiveTab(i)} className="heading">
            {name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNext}>next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
}

export default TabForm;
