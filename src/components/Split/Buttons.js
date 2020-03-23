import React from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import Test from "./test2.json"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: "10vw",
        textAlign: "center",
        direction: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        position: "relative",
        marginTop: "10vw",
        textAlign: "center",
        direction: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonsContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(${-50}%, ${-50}%)`
    }
}));


function Buttons() {
    const classes = useStyles();

    const testStr = JSON.stringify(Test);
    var arr = JSON.parse(testStr);

    
    var btnStyle;
    function styleButton(arr, idX, idY) {

        if (getState(arr, idX, idY)) {
            btnStyle = { 
                backgroundColor:'yellow',
                opacity:'0.3', 
                width:'20px', 
                height:'20px'
            };
        }
        else  {
            btnStyle = { 
                backgroundColor:'transparent', 
                width:'20px', 
                height:'20px'
            };
        }

        return btnStyle;
    }

    function changeState(arr, idX, idY) {
        arr.test[idX][idY] = !arr.test[idX][idY];

        btnStyle = {
            backgroundColor:'transparent', 
            width:'20px', 
            height:'20px'
        }
        
        console.log(arr.test[idX][idY]);
    }
    
    function getState(arr, idX, idY) {
        return(arr.test[idX][idY]);
    }

    function passState(arr) {
        //dummy
        if (arr.test[0][0]) {
            console.log("waw");
        }
        else {
            console.log("nope");
        }
    }

    return(
        <div container className={classes.container}>
            <div container className={classes.imageContainer}>
                <img src={require('./paper_filled.jpg')} style={{width:'280px', height:'210px'}} alt='image'></img>
                <div container className={classes.buttonsContainer}>
                    <div>
                        <button onClick={changeState.bind(this,arr,0,0)} 
                                style={styleButton(arr,0,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,0,1)} 
                                style={styleButton(arr,0,1)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,0,2)} 
                                style={styleButton(arr,0,2)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,0,3)} 
                                style={styleButton(arr,0,3)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,0,4)} 
                                style={styleButton(arr,0,4)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,0,5)} 
                                style={styleButton(arr,0,5)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,0,6)} 
                                style={styleButton(arr,0,6)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,0,7)} 
                                style={styleButton(arr,0,7)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,0,8)} 
                                style={styleButton(arr,0,8)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,0,9)} 
                                style={styleButton(arr,0,9)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,0,10)} 
                                style={styleButton(arr,0,10)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,0,11)} 
                                style={styleButton(arr,0,11)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,0,12)} 
                                style={styleButton(arr,0,12)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,0,13)} 
                                style={styleButton(arr,0,13)}>
                        </button>
                    </div>
                    <div>
                        <button onClick={changeState.bind(this,arr,1,0)} 
                                style={styleButton(arr,1,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,1,1)} 
                                style={styleButton(arr,1,1)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,1,2)} 
                                style={styleButton(arr,1,2)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,1,3)} 
                                style={styleButton(arr,1,3)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,1,4)} 
                                style={styleButton(arr,1,4)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,1,5)} 
                                style={styleButton(arr,1,5)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,1,6)} 
                                style={styleButton(arr,1,6)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,1,7)} 
                                style={styleButton(arr,1,7)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,1,8)} 
                                style={styleButton(arr,1,8)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,1,9)} 
                                style={styleButton(arr,1,9)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,1,10)} 
                                style={styleButton(arr,1,10)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,1,11)} 
                                style={styleButton(arr,1,11)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,1,12)} 
                                style={styleButton(arr,1,12)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,1,13)} 
                                style={styleButton(arr,1,13)}>
                        </button>
                    </div>
                    <div>
                        <button onClick={changeState.bind(this,arr,2,0)} 
                                style={styleButton(arr,2,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,2,1)} 
                                style={styleButton(arr,2,1)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,2,2)} 
                                style={styleButton(arr,2,2)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,2,3)} 
                                style={styleButton(arr,2,3)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,2,4)} 
                                style={styleButton(arr,2,4)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,2,5)} 
                                style={styleButton(arr,2,5)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,2,6)} 
                                style={styleButton(arr,2,6)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,2,7)} 
                                style={styleButton(arr,2,7)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,2,8)} 
                                style={styleButton(arr,2,8)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,2,9)} 
                                style={styleButton(arr,2,9)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,2,10)} 
                                style={styleButton(arr,2,10)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,2,11)} 
                                style={styleButton(arr,2,11)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,2,12)} 
                                style={styleButton(arr,2,12)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,2,13)} 
                                style={styleButton(arr,2,13)}>
                        </button>
                    </div>
                    <div>
                        <button onClick={changeState.bind(this,arr,3,0)} 
                                style={styleButton(arr,3,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,3,1)} 
                                style={styleButton(arr,3,1)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,3,2)} 
                                style={styleButton(arr,3,2)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,3,3)} 
                                style={styleButton(arr,3,3)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,3,4)} 
                                style={styleButton(arr,3,4)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,3,5)} 
                                style={styleButton(arr,3,5)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,3,6)} 
                                style={styleButton(arr,3,6)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,3,7)} 
                                style={styleButton(arr,3,7)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,3,8)} 
                                style={styleButton(arr,3,8)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,3,9)} 
                                style={styleButton(arr,3,9)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,3,10)} 
                                style={styleButton(arr,3,10)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,3,11)} 
                                style={styleButton(arr,3,11)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,3,12)} 
                                style={styleButton(arr,3,12)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,3,13)} 
                                style={styleButton(arr,3,13)}>
                        </button>
                    </div>
                    <div>
                        <button onClick={changeState.bind(this,arr,4,0)} 
                                style={styleButton(arr,4,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,4,1)} 
                                style={styleButton(arr,4,1)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,4,2)} 
                                style={styleButton(arr,4,2)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,4,3)} 
                                style={styleButton(arr,4,3)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,4,4)} 
                                style={styleButton(arr,4,4)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,4,5)} 
                                style={styleButton(arr,4,5)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,4,6)} 
                                style={styleButton(arr,4,6)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,4,7)} 
                                style={styleButton(arr,4,7)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,4,8)} 
                                style={styleButton(arr,4,8)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,4,9)} 
                                style={styleButton(arr,4,9)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,4,10)} 
                                style={styleButton(arr,4,10)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,4,11)} 
                                style={styleButton(arr,4,11)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,4,12)} 
                                style={styleButton(arr,4,12)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,4,13)} 
                                style={styleButton(arr,4,13)}>
                        </button>
                    </div>
                    <div>
                        <button onClick={changeState.bind(this,arr,5,0)} 
                                style={styleButton(arr,5,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,5,1)} 
                                style={styleButton(arr,5,1)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,5,2)} 
                                style={styleButton(arr,5,2)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,5,3)} 
                                style={styleButton(arr,5,3)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,5,4)} 
                                style={styleButton(arr,5,4)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,5,5)} 
                                style={styleButton(arr,5,5)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,5,6)} 
                                style={styleButton(arr,5,6)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,5,7)} 
                                style={styleButton(arr,5,7)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,5,8)} 
                                style={styleButton(arr,5,8)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,5,9)} 
                                style={styleButton(arr,5,9)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,5,10)} 
                                style={styleButton(arr,5,10)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,5,11)} 
                                style={styleButton(arr,5,11)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,5,12)} 
                                style={styleButton(arr,5,12)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,5,13)} 
                                style={styleButton(arr,5,13)}>
                        </button>
                    </div>
                    <div>
                        <button onClick={changeState.bind(this,arr,6,0)} 
                                style={styleButton(arr,6,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,6,1)} 
                                style={styleButton(arr,6,1)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,6,2)} 
                                style={styleButton(arr,6,2)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,6,3)} 
                                style={styleButton(arr,6,3)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,6,4)} 
                                style={styleButton(arr,6,4)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,6,5)} 
                                style={styleButton(arr,6,5)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,6,6)} 
                                style={styleButton(arr,6,6)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,6,7)} 
                                style={styleButton(arr,6,7)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,6,8)} 
                                style={styleButton(arr,6,8)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,6,9)} 
                                style={styleButton(arr,6,9)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,6,10)} 
                                style={styleButton(arr,6,10)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,6,11)} 
                                style={styleButton(arr,6,11)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,6,12)} 
                                style={styleButton(arr,6,12)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,6,13)} 
                                style={styleButton(arr,6,13)}>
                        </button>
                    </div>
                    <div>
                        <button onClick={changeState.bind(this,arr,7,0)} 
                                style={styleButton(arr,7,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,7,1)} 
                                style={styleButton(arr,7,1)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,7,2)} 
                                style={styleButton(arr,7,2)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,7,3)} 
                                style={styleButton(arr,7,3)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,7,4)} 
                                style={styleButton(arr,7,4)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,7,5)} 
                                style={styleButton(arr,7,5)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,7,6)} 
                                style={styleButton(arr,7,6)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,7,7)} 
                                style={styleButton(arr,7,7)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,7,8)} 
                                style={styleButton(arr,7,8)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,7,9)} 
                                style={styleButton(arr,7,9)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,7,10)} 
                                style={styleButton(arr,7,10)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,7,11)} 
                                style={styleButton(arr,7,11)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,7,12)} 
                                style={styleButton(arr,7,12)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,7,13)} 
                                style={styleButton(arr,7,13)}>
                        </button>
                    </div>
                    <div>
                        <button onClick={changeState.bind(this,arr,8,0)} 
                                style={styleButton(arr,8,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,8,1)} 
                                style={styleButton(arr,8,1)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,8,2)} 
                                style={styleButton(arr,8,2)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,8,3)} 
                                style={styleButton(arr,8,3)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,8,4)} 
                                style={styleButton(arr,8,4)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,8,5)} 
                                style={styleButton(arr,8,5)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,8,6)} 
                                style={styleButton(arr,8,6)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,8,7)} 
                                style={styleButton(arr,8,7)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,8,8)} 
                                style={styleButton(arr,8,8)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,8,9)} 
                                style={styleButton(arr,8,9)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,8,10)} 
                                style={styleButton(arr,8,10)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,8,11)} 
                                style={styleButton(arr,8,11)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,8,12)} 
                                style={styleButton(arr,8,12)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,8,13)} 
                                style={styleButton(arr,8,13)}>
                        </button>
                    </div>
                    <div>
                        <button onClick={changeState.bind(this,arr,9,0)} 
                                style={styleButton(arr,9,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,9,0)} 
                                style={styleButton(arr,9,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,9,0)} 
                                style={styleButton(arr,9,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,9,0)} 
                                style={styleButton(arr,9,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,9,0)} 
                                style={styleButton(arr,9,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,9,0)} 
                                style={styleButton(arr,9,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,9,0)} 
                                style={styleButton(arr,9,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,9,0)} 
                                style={styleButton(arr,9,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,9,0)} 
                                style={styleButton(arr,9,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,9,0)} 
                                style={styleButton(arr,9,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,9,0)} 
                                style={styleButton(arr,9,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,9,0)} 
                                style={styleButton(arr,9,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,9,0)} 
                                style={styleButton(arr,9,0)}>
                        </button>
                        <button onClick={changeState.bind(this,arr,9,0)} 
                                style={styleButton(arr,9,0)}>
                        </button>
                    </div>
                </div>
            </div>
            
            <Link>
                <Fab variant="extended" onClick={passState.bind(this,arr)}>
                    SPLIT
                </Fab>
            </Link>
        </div>
    );
}

export default Buttons;