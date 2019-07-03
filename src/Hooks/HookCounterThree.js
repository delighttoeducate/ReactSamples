import React, { useState } from "react";

function HookCounterThree() {
  // name object name
  const [name, setName] = useState({ firstname: "", lastname: "" });
  return (
    <div>
      <form>
          <input type="text" onChange={event=>setName({...name,firstname:event.target.value})} value={name.firstname}/>
          <input type='text' onChange={event=>setName({...name,lastname:event.target.value})} value={name.lastname}/>

          <h2>Your First name is - {name.firstname}</h2>
          <h2>Your Last name is  - {name.lastname}</h2>

          <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default HookCounterThree;
