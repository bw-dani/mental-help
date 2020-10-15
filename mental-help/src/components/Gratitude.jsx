import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import './pages-style.css'

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
    <div className="gratitudeDiv">
      <NavBar/>
      <h1 className="title"> Gratitude Log:</h1>

      <form onSubmit={handleSubmit} className="form">
        
        <input
          className="input"
          name="gratitude log"
          type="text"
          value={gratitudeLog}
            onChange={(e) => setGratitudeLog(e.target.value)}
            placeholder={"What are grateful for today?"}
          />
      
        <button type="submit" className="add-btn">Add Gratitude</button>
      </form>
      <div className="input-return" >
      {props.gratitudeData.map((grat) => (
        <span key={gratitudeLog.id}>{grat.fields.gratitudeLog}</span>
      ))}</div>
    </div>
  );
}

export default Gratitude;
