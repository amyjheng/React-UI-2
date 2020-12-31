import React from "react";
import "./styles.css";
import {Button, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
const useStyles= makeStyles({
helloThereStyle:{
  fontStyle:"oblique",
  color:"red",
  fontSize:"20px"
},
buttonStyles:{
  color:"green",
  border:0
}
});

export default function App() {
  const classes=useStyles();
  return (
    <div className="App">
      <Typography 
      className={classes.helloThereStyle}
      variant="h1"
      color="primary">
        Hello there
      </Typography>
      <Button className={classes.buttonStyles}
      color="secondary" variant="outlined">
        My first Button!
        </Button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
