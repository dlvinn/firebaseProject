import React from "react";
import './App.css';


function Aapp(){

    return(
    <div className="App">
    <Job salary = {4000} position = "manager" company = "awrosoft"/>
    </div>
    )
}

function Job(props){
    return (<>
    <h1>{props.salary}</h1>
    <h2>{props.position}</h2>
    <h2>{props.company}</h2></>
    )
}

export default Aapp;