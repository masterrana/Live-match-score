import React, {Fragment, useEffect, useState} from "react";
import "./App.css";
import { Grid, Typography } from "@material-ui/core";
import Navbar from "./components/Navebar";
import MyCard from "./components/MyCard";
import { getMatches } from "./api/Api";

function App() {

 const [matches, setMatches] = useState([]);

  useEffect(() => {
      getMatches().then((data)=> setMatches(data.matches))
      .catch((error)=>alert("Could not load data"));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Typography variant="h3" style={{marginTop:20}}> Welcome to my Live Score APP</Typography>
  <Grid container>
  <Grid  sm="2"></Grid>
  <Grid sm="8">
      { matches.map((match)=>(
          //<MyCard key={match.unique_id} match={match}/>
          <Fragment  key={match.unique_id}>
            {
              match.type=="Twenty20" ? (
                <MyCard key={match.unique_id} match={match}/>
              ):(
                ""
              )
            }
          </Fragment>

      ))}
      </Grid>
        </Grid>
    </div>
  );
}

export default App;
