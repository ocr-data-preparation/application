import React from "react";
import Test2 from "./test2.json"

function Test() {
    const testStr = JSON.stringify(Test2);
    var arr = JSON.parse(testStr);
    
    function handleClick(nama) {
        console.log("hello " + nama);
    }

    function changeState(arr, idX, idY) {
        arr.test[idX][idY] = !arr.test[idX][idY];
        console.log(arr.test[idX][idY]);
    }

    return(
        <div>
            <button onClick={changeState.bind(this, arr, 0, 0)}>test</button>
        </div>
    );
}

export default Test;