import React from "react";
import { render } from "react-dom";
import MuiTreeView from "material-ui-treeview";
import TextField from "@material-ui/core/TextField";
import { useAsync } from "react-async"
import { func } from "prop-types";
import "./styles.css";

var fhirtree = [];
var i = 0;
var resourceCount = 0  
getFHIRFolders();

export async function getFHIRFolders(){
  fetch("http://localhost:3001/metadata")
  .then((res) => res.json())
  .then(
    (result) => {
      for (const refname of result.rest[0].resource){
        var resourceName = refname.type;
        try
        {
          getResourceCount(resourceName);              
        }      
        catch(err){}        
      };   
    }, 
  );
} 

export async function getResourceCount(resourceName){
  await fetch("http://localhost:3001/" + resourceName)
  .then((res) => res.json())
  .then(
    (result) => {
      console.log(resourceName + result.total);
      fhirtree[i] = {value: resourceName + ' (' + result.total + ')' };
      i++;
    }, 
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>FHIR</h1>
      <h2>These are the Folders on your FHIR Server</h2>
      Search: <TextField />
      <MuiTreeView tree={fhirtree}  />
    </div>
  );
}
