import React from 'react';
import { useState } from 'react';
import NavBar from './NavBar';
import axios from "axios";
import './pages-style.css'


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
      <h1 className="title">Affirmations:</h1>
      <form onSubmit={handleSubmit} className="form">
      <label htmlFor="Affirmations log"></label>
        <input
          className="input"
          type="text"
          name="affirmations"
          value={affirmations}
          placeholder={"I AM ..."}
          onChange={(e) => setAffirmations(e.target.value)}
        />
        <button type="submit" className="add-btn">Add Affirmations</button>
      </form>
      <div className="input-return">
      {props.affirmationsData.map((afft) => (
        <span>{afft.fields.affirmations}</span>
      ))}
      </div>
    </div>
  );
}

export default Affirmations;