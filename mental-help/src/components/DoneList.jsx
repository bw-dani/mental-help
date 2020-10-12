import React from 'react';
import { useState } from 'react';
import NavBar from './NavBar';
import axios from "axios";



function DoneList(props) {
  const [donelist, setDoneList] = useState("")
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      donelist,
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

    props.setFetchDoneListData(!props.fetchDoneListData);
    setDoneList("");
  };

  return (
    <div>
      <NavBar/>
      <h1>Done List:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Done list"></label>
        <input
          name="Done List"
          type="text"
          value={donelist}
          onChange={(e) => setDoneList(e.target.value)}
        />
        <button type="submit">Done</button>
      </form>
      
      {props.doneListData.map((dl) => (
        <p>{dl.fields.donelist}</p>
      ))}
    </div>
  );
}

export default DoneList;