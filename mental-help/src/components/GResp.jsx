import React, { useState, useEffect } from "react";
import axios from "axios";
import Gratitude from "./Gratitude";

function GResp(props) {
  const [gratitude, setGratitude] = useState([]);
  const [fetchGratitude, setFetchGratitude] = useState(false);

  useEffect(() => {
    const getLog = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/mentalhelp`;
      console.log(airtableURL);
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setGratitude(response.data.records);
      console.log(response.data.records);
    };
    getLog();
  }, [fetchGratitude]);

  return (
    <div>
      {gratitude.map((grat) => (
        <li>{grat.fields.gratitudeLog}</li>
      ))}
    </div>
  );
}
export default GResp;
