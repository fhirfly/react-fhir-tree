import React, { Component } from "react";
import { render } from "react-dom";
import SortableTree from "react-sortable-tree";
//import {FHIR} from "fhirclient";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch("http://localhost:3001/metadata")
      .then((res) => res.json())
      .then(
        (result) => {
          var treeData = [];          
          var i = 0;
          for (const refname of result.rest[0].resource){
            var resourceName = refname.type;
            this.getResource(resourceName);
            //call to get resource bundle
            
            treeData[i] = {title: refname.type, expanded:true}
            i++;
          };
          this.setState({
            isLoaded: true,
            treeData: treeData
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  getStats(bundle){
    return
  }

  getResource(resourceName){

    //const client = FHIR.client("https://r4.smarthealthit.org");
  }


  render() {
    return (
      <div style={{ height: 500 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={(treeData) => this.setState({ treeData })}
        />
      </div>
    );
  }
  //export default connect(null, mapDispatch)(WelcomeScreen);
}

render(<App />, document.getElementById("root"));
