import React from 'react';
import { useState } from 'react';
import NavBar from './NavBar';
import axios from "axios";
import './pages-style.css'



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
      <h1 className="title">Done List:</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="Done list"></label>
        <input
          className="input"
          name="Done List"
          type="text"
          value={donelist}
          placeholder={"List what you have accomplished today!"}
          onChange={(e) => setDoneList(e.target.value)}
        />
        <button type="submit" className="add-btn">Done</button>
      </form>
      <div className="input-return">
      {props.doneListData.map((dl) => (
        <span>{dl.fields.donelist}</span>
      ))}</div>
    </div>
  );
}

export default DoneList;