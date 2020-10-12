import React from 'react';
import { useState } from 'react';
import NavBar from './NavBar';
import axios from "axios";


function Affirmations(props) {
  const [affirmations, setAffirmations] = useState("")
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      affirmations,
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
    props.setFetchAffirmationsData(!props.fetchAffirmationsData);
    setAffirmations("")
  }

  return (
    <div>
<NavBar/>
      <h1>Affirmations:</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="Affirmations log"></label>
        <input
          type="text"
          name="affirmations"
          value={affirmations}
          onChange={(e) => setAffirmations(e.target.value)}
        />
        <button type="submit">Add Affirmations</button>
      </form>
      {props.affirmationsData.map((afft) => (
        <p>{afft.fields.affirmations}</p>
      ))}
    </div>
  );
}

export default Affirmations;