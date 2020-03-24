import React, {useState} from "react";
import Test2 from "./test2.json"
import axios from "axios";

function Test() {
    // const testStr = JSON.stringify(Test2);
    // var arr = JSON.parse(testStr);
    var myStyle = {
        backgroundColor:'yellow'
    }

    const [projects, setProjects] = useState({
        arr: {}
    });

    const dataStates = async project =>
        await axios.get(`https://my-json-server.typicode.com/ryukago/dummy-json/db`, project);
    
    const getState = async () => {
        let res = await axios.get(`https://my-json-server.typicode.com/ryukago/dummy-json/db`);
        projects.arr = res.data;
        console.log(JSON.stringify(projects.arr))
    }

    function handleClick(nama) {
        console.log("hello " + nama);
    }

    function changeState(arr, idX, idY) {
        arr.test[idX][idY] = !arr.test[idX][idY];
        myStyle = {
            backgroundColor:'red'
        }
        axios.post(`https://localhost:3000/datatest`, { arr })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        // console.log(arr.test[idX][idY]);
    }

    return(
        <div>
            <button onClick={getState} style={myStyle}>get</button>
            <button onClick={changeState.bind(this, arr, 0, 0)} style={myStyle}>post</button>
        </div>
    );
}

export default Test;