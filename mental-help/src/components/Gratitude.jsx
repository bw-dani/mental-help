import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import './gratitude.css'

function Gratitude(props) {
  const [gratitudeLog, setGratitudeLog] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      gratitudeLog,
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

    props.setFetchData(!props.fetchData);
    setGratitudeLog("");
  };

  return (
    <div>
      <NavBar/>
      <h1> Gratitude Log:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="gratitude log"></label>
        <input
          name="gratitude log"
          type="text"
          value={gratitudeLog}
          onChange={(e) => setGratitudeLog(e.target.value)}
        />
        <button type="submit">Add Gratitude</button>
      </form>
      
      {props.gratitudeData.map((grat) => (
        <p>{grat.fields.gratitudeLog}</p>
      ))}
    </div>
  );
}

export default Gratitude;
