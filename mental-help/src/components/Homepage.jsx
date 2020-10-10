import React from "react";
import { Link } from "react-router-dom";

function Homepage(props) {
  return (
    <div>
      <h1>Welcome</h1>
      <p>
        Mental Help is a website that allows you to log your feelings and cope
        with your emotions just like a bullet journal but digital. Keeping a
        journal is a good way to track your moods, energy levels, and mental
        health symptoms. Over time, journaling these things might help you
        recognize things that trigger depression and anxiety.
      </p>
      <button>
        <Link to="/components/Gratitude">START YOUR JOURNAL</Link>
      </button>
    </div>
  );
}

export default Homepage;
