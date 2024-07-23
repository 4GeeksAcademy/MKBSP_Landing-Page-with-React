// import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/home.jsx"; 

// include your styles into the webpack bundle
import "../styles/index.css";

// render your react application
ReactDOM.render(<Home />, document.getElementById('app'));
