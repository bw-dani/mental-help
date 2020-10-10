import React, { useState } from "react";
import GResp from "./GResp";
import axios from "axios";

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
    // props.setFetchGratitude(!props.fetchGratitude);
    setGratitudeLog("");
  };

  return (
    <div>
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
      <GResp />
    </div>
  );
}

export default Gratitude;
