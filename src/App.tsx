/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
//import logo from "./logo.svg";
import React, { useState} from "react";
import "./App.css";
import Button from "./components/CustomButtonComponent";

function App(this: any): JSX.Element {  
    let buttonID = "";
    const [counterIncrease, updateIncrease] = useState(0);
    const [counterDecrease, updateDecrease] = useState(0);
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Super cool and very well-thought-out welcome message!
                </p>
                <div style={{ position:"relative", right:660, bottom:250 }}> {counterIncrease} </div>
                <div style = {{ position:"relative", right:700, bottom:230 }}> 
                    <Button 
                        borderColor="none"
                        color="cyan"
                        height="20px" 
                        width={"100px"}                
                        onClick={ () => {
                            buttonID = "increase";
                            updateCounter(buttonID, counterIncrease, updateIncrease);
                        }}> Increase Me! </Button> 
                </div>
                <div style={{ position:"relative", left:740, bottom:320 }}> {counterDecrease} </div>
                <div style = {{ position:"relative", left:700, bottom:300 }}> 
                    <Button 
                        borderColor="none"
                        color="coral"
                        height="20px" 
                        width={"100px"}                
                        onClick={ () => {
                            buttonID = "decrease";
                            updateCounter(buttonID, counterDecrease, updateDecrease);
                        }}> Decrease Me! </Button> 
                </div>

            </header></div>
    );
}

function updateCounter(buttonID: string, counterUpdate: number, updateFunc: { (value: React.SetStateAction<number>): void; (arg0: number): void; }) {
    if (buttonID == "increase") {
        counterUpdate += 1;
        updateFunc(counterUpdate);
    } else if (buttonID == "decrease"){
        counterUpdate -= 1;
        updateFunc(counterUpdate);
    } else {
        console.log("well that's not good");
    }
}

export default App;
