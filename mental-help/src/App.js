import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Homepage from "./components/Homepage";
import Gratitude from "./components/Gratitude";
import Rant from "./components/Rant"
import Affirmations from "./components/Affirmations";
import DoneList from "./components/DoneList";
import Resources from './components/Resources';


import { Route, Switch } from "react-router-dom";



function App() {
  const [gratitude, setGratitude] = useState([]);
  const [rant, setRant] = useState([])
  const [affirmations, setAffirmations] = useState([])
  const [doneList, setDoneList] = useState([])
  const [fetchData, setFetchData] = useState(false);
  

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
      setRant(response.data.records)
      setAffirmations(response.data.records)
      setDoneList(response.data.records)

      console.log(response);
      
    };

    getLog();
  }, [fetchData]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/components/Gratitude">
          <Gratitude className="grat-div"
            gratitudeData={gratitude}
            fetchData={fetchData}
            setFetchData={setFetchData}
          />
        </Route>
        
        <Route path="/components/Rant">
          <Rant
            rantData={rant}
            fetchRantData={fetchData}
            setFetchRantData={setFetchData}
          />
        </Route>

        <Route path="/components/Affirmations">
          <Affirmations
            affirmationsData={affirmations}
            fetchAffirmationsData={fetchData}
            setFetchAffirmationsData={setFetchData}
          />
        </Route>
        <Route path="/components/DoneList">
          <DoneList
           doneListData={doneList}
           fetchDoneListData={fetchData}
           setFetchDoneListData={setFetchData}
          />
        </Route>
        <Route path="/components/Resources">
          <Resources/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
