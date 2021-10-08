import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/CustomButtonComponent";

let counterDecrease = 0;

function App(this: any): JSX.Element {
    
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Super cool and very well thought out welcome message!
                </p>
                <div style={{position:"fixed", right:300, top:450}}> {counterDecrease} </div>
                <div style = {{ position:"fixed", right:300}}> 
                    <Button 
                        borderColor="none"
                        color="none"
                        height="20px" 
                        width={"75px"}                
                        onClick={ decreaseCounter }> Decrease </Button> 
                </div>

            </header>
            
        </div>
    );
}

const decreaseCounter = () => {
    counterDecrease -= 1;
    console.log(counterDecrease);
};

export default App;
