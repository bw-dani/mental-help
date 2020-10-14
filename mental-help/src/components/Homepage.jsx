import React from "react";
import { Link } from "react-router-dom";
import './homepage.css'



function Homepage(props) {
  return (
    <div className="homepageDiv" >

      <h1 className="hp-h1">Welcome</h1>
      <p className="homepage-p">
        Mental Help is a website that allows you to log your feelings and cope
        with your emotions just like a bullet journal but digital. Keeping a
        journal is a good way to track your moods, energy levels, and mental
        health symptoms. Over time, journaling these things might help you
        recognize things that trigger depression and anxiety.
      </p>
      <div className="divButton">
      <button className="start-btn" >
        <Link to="/components/Gratitude" className='link-btn'>START YOUR JOURNAL</Link>
        </button>
      </div>
    </div>
  );
}

export default Homepage;
