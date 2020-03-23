import React, {Component} from "react";
import Test2 from "./test2.json"

function Test() {
    const testStr = JSON.stringify(Test2);
    var arr = JSON.parse(testStr);
    var myStyle = {
        backgroundColor:'yellow'
    }
    
    function handleClick(nama) {
        console.log("hello " + nama);
    }

    function changeState(arr, idX, idY) {
        arr.test[idX][idY] = !arr.test[idX][idY];
        myStyle = {
            backgroundColor:'red'
        }
        console.log(arr.test[idX][idY]);
    }

    return(
        <div>
            <button onClick={changeState.bind(this, arr, 0, 0)} style={myStyle}>test</button>
        </div>
    );
}

export default Test;