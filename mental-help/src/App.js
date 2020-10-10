import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Homepage from "./components/Homepage";
// import Gratitude from "./components/Gratitude";
import { Route, Switch } from "react-router-dom";
import Gratitude from "./components/Gratitude";

function App() {
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
      console.log(response);
    };

    getLog();
  }, [fetchGratitude]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/components/Gratitude">
          <Gratitude
            gratitudeData={gratitude}
            fetchGratitude={fetchGratitude}
            setFetchGratitude={setFetchGratitude}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
