import React, { useState }  from 'react';
import NavBar from './NavBar'
import axios from "axios";
import './rant.css'

function Rant(props) {
  const [rant, setRant] = useState("")
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      rant,
    };
   const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/mentalhelp`;
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    props.setFetchRantData(!props.fetchRantData);
    setRant("")
  }

  return (
    <div className="rant-div">
      <NavBar/>
      <h1 className="rant-title">Rant:</h1>
      <form onSubmit={handleSubmit} className="rant-form">
        <input
          id="ranting"
          className="rant-input"
          type="text"
          name="rant"
          value={rant}
          placeholder={"What are you mad about today?"}
          onChange={(e) => setRant(e.target.value)}
        />
        <button type="submit" className="burn-btn" >BURN:</button>
      </form>
      <div className="input-return">
      {props.rantData.map((rt) => (
        <span>{rt.fields.rant}</span>
      ))}
      </div>
    </div>
  );
}

export default Rant;