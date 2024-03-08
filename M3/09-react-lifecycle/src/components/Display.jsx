import React, { Component } from "react";

export default class Display extends Component {

  componentDidMount() {
    //* Lógica de JS
    console.log("Display se montó al DOM");
  }

  componentWillUnmount() {
    //* Lógica de JS
    console.log("Display se desmontará del DOM");
  }

  render() {
    return(
      <div style={{backgroundColor: "darkslateblue"}}>
        <h3>Display</h3>
      </div>
    )
  }
}