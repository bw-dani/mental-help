import React, { useState }  from 'react';
import NavBar from './NavBar'
import axios from "axios";


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
    <div>
      <NavBar/>
      <h1>Rant:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="rant"
          value={rant}
          onChange={(e) => setRant(e.target.value)}
        />
        <button type="submit">Add Rant</button>
      </form>
      {props.rantData.map((rt) => (
        <p>{rt.fields.rant}</p>
      ))}
    </div>
  );
}

export default Rant;