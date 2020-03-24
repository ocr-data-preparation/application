import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import Test from "./test2.json";
import { makeStyles } from "@material-ui/core/styles";
import { URL_BASE_API } from "../../config";
import axios from "axios";

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
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(${-50}%, ${-50}%)`
  }
}));

function Buttons(props) {
  console.log(URL_BASE_API + "/" + props.squared_path);
  const classes = useStyles();

  const testStr = JSON.stringify(Test);
  var arr = JSON.parse(testStr);

  var btnStyle;

  const [projects, setProjects] = useState({
    arr: {},
    srcImage: "",
    pixel: 0
  });

  function styleButton(arr, idX, idY) {
    if (getState(arr, idX, idY)) {
      btnStyle = {
        backgroundColor: "yellow",
        opacity: "0.3",
        width: "40px",
        height: "40px"
      };
    } else {
      btnStyle = {
        backgroundColor: "transparent",
        opacity: "0.3",
        width: "40px",
        height: "40px"
      };
    }

    return btnStyle;
  }

  function changeState(id, arr, idX, idY) {
    arr.test[idX][idY] = !arr.test[idX][idY];

    if (getState(arr, idX, idY)) {
      document.getElementById(id).style.backgroundColor = "yellow";
    } else {
      document.getElementById(id).style.backgroundColor = "transparent";
    }

    console.log(arr.test[idX][idY]);
  }

  function getState(arr, idX, idY) {
    return arr.test[idX][idY];
  }

  function passState(arr) {
    // var request = new XMLHttpRequest();
    // request.open('POST', '${URL_BASE_API}/datatest', true);
    // request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    // request.send(JSON.stringify(arr));
    const postProjectsData = async project =>
      await axios.post(`${URL_BASE_API}/project`, project);

    console.log(JSON.stringify(arr));
  }

  return (
    <div container className={classes.container}>
      <div container className={classes.imageContainer}>
        <img
          src={URL_BASE_API + "/" + props.squared_path}
          style={{ width: "560px", height: "410px" }}
          alt="image"
        ></img>
        <div container className={classes.buttonsContainer}>
          <div>
            <button
              id={1}
              onClick={changeState.bind(this, 1, arr, 0, 0)}
              style={styleButton(arr, 0, 0)}
            ></button>
            <button
              id={2}
              onClick={changeState.bind(this, 2, arr, 0, 1)}
              style={styleButton(arr, 0, 1)}
            ></button>
            <button
              id={3}
              onClick={changeState.bind(this, 3, arr, 0, 2)}
              style={styleButton(arr, 0, 2)}
            ></button>
            <button
              id={4}
              onClick={changeState.bind(this, 4, arr, 0, 3)}
              style={styleButton(arr, 0, 3)}
            ></button>
            <button
              id={5}
              onClick={changeState.bind(this, 5, arr, 0, 4)}
              style={styleButton(arr, 0, 4)}
            ></button>
            <button
              id={6}
              onClick={changeState.bind(this, 6, arr, 0, 5)}
              style={styleButton(arr, 0, 5)}
            ></button>
            <button
              id={7}
              onClick={changeState.bind(this, 7, arr, 0, 6)}
              style={styleButton(arr, 0, 6)}
            ></button>
            <button
              id={8}
              onClick={changeState.bind(this, 8, arr, 0, 7)}
              style={styleButton(arr, 0, 7)}
            ></button>
            <button
              id={9}
              onClick={changeState.bind(this, 9, arr, 0, 8)}
              style={styleButton(arr, 0, 8)}
            ></button>
            <button
              id={10}
              onClick={changeState.bind(this, 10, arr, 0, 9)}
              style={styleButton(arr, 0, 9)}
            ></button>
            <button
              id={11}
              onClick={changeState.bind(this, 11, arr, 0, 10)}
              style={styleButton(arr, 0, 10)}
            ></button>
            <button
              id={12}
              onClick={changeState.bind(this, 12, arr, 0, 11)}
              style={styleButton(arr, 0, 11)}
            ></button>
            <button
              id={13}
              onClick={changeState.bind(this, 13, arr, 0, 12)}
              style={styleButton(arr, 0, 12)}
            ></button>
            <button
              id={14}
              onClick={changeState.bind(this, 14, arr, 0, 13)}
              style={styleButton(arr, 0, 13)}
            ></button>
          </div>
          <div>
            <button
              id={15}
              onClick={changeState.bind(this, 15, arr, 1, 0)}
              style={styleButton(arr, 1, 0)}
            ></button>
            <button
              id={16}
              onClick={changeState.bind(this, 16, arr, 1, 1)}
              style={styleButton(arr, 1, 1)}
            ></button>
            <button
              id={17}
              onClick={changeState.bind(this, 17, arr, 1, 2)}
              style={styleButton(arr, 1, 2)}
            ></button>
            <button
              id={18}
              onClick={changeState.bind(this, 18, arr, 1, 3)}
              style={styleButton(arr, 1, 3)}
            ></button>
            <button
              id={19}
              onClick={changeState.bind(this, 19, arr, 1, 4)}
              style={styleButton(arr, 1, 4)}
            ></button>
            <button
              id={20}
              onClick={changeState.bind(this, 20, arr, 1, 5)}
              style={styleButton(arr, 1, 5)}
            ></button>
            <button
              id={21}
              onClick={changeState.bind(this, 21, arr, 1, 6)}
              style={styleButton(arr, 1, 6)}
            ></button>
            <button
              id={22}
              onClick={changeState.bind(this, 22, arr, 1, 7)}
              style={styleButton(arr, 1, 7)}
            ></button>
            <button
              id={23}
              onClick={changeState.bind(this, 23, arr, 1, 8)}
              style={styleButton(arr, 1, 8)}
            ></button>
            <button
              id={24}
              onClick={changeState.bind(this, 24, arr, 1, 9)}
              style={styleButton(arr, 1, 9)}
            ></button>
            <button
              id={25}
              onClick={changeState.bind(this, 25, arr, 1, 10)}
              style={styleButton(arr, 1, 10)}
            ></button>
            <button
              id={26}
              onClick={changeState.bind(this, 26, arr, 1, 11)}
              style={styleButton(arr, 1, 11)}
            ></button>
            <button
              id={27}
              onClick={changeState.bind(this, 27, arr, 1, 12)}
              style={styleButton(arr, 1, 12)}
            ></button>
            <button
              id={28}
              onClick={changeState.bind(this, 28, arr, 1, 13)}
              style={styleButton(arr, 1, 13)}
            ></button>
          </div>
          <div>
            <button
              id={29}
              onClick={changeState.bind(this, 29, arr, 2, 0)}
              style={styleButton(arr, 2, 0)}
            ></button>
            <button
              id={30}
              onClick={changeState.bind(this, 30, arr, 2, 1)}
              style={styleButton(arr, 2, 1)}
            ></button>
            <button
              id={31}
              onClick={changeState.bind(this, 31, arr, 2, 2)}
              style={styleButton(arr, 2, 2)}
            ></button>
            <button
              id={32}
              onClick={changeState.bind(this, 32, arr, 2, 3)}
              style={styleButton(arr, 2, 3)}
            ></button>
            <button
              id={33}
              onClick={changeState.bind(this, 33, arr, 2, 4)}
              style={styleButton(arr, 2, 4)}
            ></button>
            <button
              id={34}
              onClick={changeState.bind(this, 34, arr, 2, 5)}
              style={styleButton(arr, 2, 5)}
            ></button>
            <button
              id={35}
              onClick={changeState.bind(this, 35, arr, 2, 6)}
              style={styleButton(arr, 2, 6)}
            ></button>
            <button
              id={36}
              onClick={changeState.bind(this, 36, arr, 2, 7)}
              style={styleButton(arr, 2, 7)}
            ></button>
            <button
              id={37}
              onClick={changeState.bind(this, 37, arr, 2, 8)}
              style={styleButton(arr, 2, 8)}
            ></button>
            <button
              id={38}
              onClick={changeState.bind(this, 38, arr, 2, 9)}
              style={styleButton(arr, 2, 9)}
            ></button>
            <button
              id={39}
              onClick={changeState.bind(this, 39, arr, 2, 10)}
              style={styleButton(arr, 2, 10)}
            ></button>
            <button
              id={40}
              onClick={changeState.bind(this, 40, arr, 2, 11)}
              style={styleButton(arr, 2, 11)}
            ></button>
            <button
              id={41}
              onClick={changeState.bind(this, 41, arr, 2, 12)}
              style={styleButton(arr, 2, 12)}
            ></button>
            <button
              id={42}
              onClick={changeState.bind(this, 42, arr, 2, 13)}
              style={styleButton(arr, 2, 13)}
            ></button>
          </div>
          <div>
            <button
              id={43}
              onClick={changeState.bind(this, 43, arr, 3, 0)}
              style={styleButton(arr, 3, 0)}
            ></button>
            <button
              id={44}
              onClick={changeState.bind(this, 44, arr, 3, 1)}
              style={styleButton(arr, 3, 1)}
            ></button>
            <button
              id={45}
              onClick={changeState.bind(this, 45, arr, 3, 2)}
              style={styleButton(arr, 3, 2)}
            ></button>
            <button
              id={46}
              onClick={changeState.bind(this, 46, arr, 3, 3)}
              style={styleButton(arr, 3, 3)}
            ></button>
            <button
              id={47}
              onClick={changeState.bind(this, 47, arr, 3, 4)}
              style={styleButton(arr, 3, 4)}
            ></button>
            <button
              id={48}
              onClick={changeState.bind(this, 48, arr, 3, 5)}
              style={styleButton(arr, 3, 5)}
            ></button>
            <button
              id={49}
              onClick={changeState.bind(this, 49, arr, 3, 6)}
              style={styleButton(arr, 3, 6)}
            ></button>
            <button
              id={50}
              onClick={changeState.bind(this, 50, arr, 3, 7)}
              style={styleButton(arr, 3, 7)}
            ></button>
            <button
              id={51}
              onClick={changeState.bind(this, 51, arr, 3, 8)}
              style={styleButton(arr, 3, 8)}
            ></button>
            <button
              id={52}
              onClick={changeState.bind(this, 52, arr, 3, 9)}
              style={styleButton(arr, 3, 9)}
            ></button>
            <button
              id={53}
              onClick={changeState.bind(this, 53, arr, 3, 10)}
              style={styleButton(arr, 3, 10)}
            ></button>
            <button
              id={54}
              onClick={changeState.bind(this, 54, arr, 3, 11)}
              style={styleButton(arr, 3, 11)}
            ></button>
            <button
              id={55}
              onClick={changeState.bind(this, 55, arr, 3, 12)}
              style={styleButton(arr, 3, 12)}
            ></button>
            <button
              id={56}
              onClick={changeState.bind(this, 56, arr, 3, 13)}
              style={styleButton(arr, 3, 13)}
            ></button>
          </div>
          <div>
            <button
              id={57}
              onClick={changeState.bind(this, 57, arr, 4, 0)}
              style={styleButton(arr, 4, 0)}
            ></button>
            <button
              id={58}
              onClick={changeState.bind(this, 58, arr, 4, 1)}
              style={styleButton(arr, 4, 1)}
            ></button>
            <button
              id={59}
              onClick={changeState.bind(this, 59, arr, 4, 2)}
              style={styleButton(arr, 4, 2)}
            ></button>
            <button
              id={60}
              onClick={changeState.bind(this, 60, arr, 4, 3)}
              style={styleButton(arr, 4, 3)}
            ></button>
            <button
              id={61}
              onClick={changeState.bind(this, 61, arr, 4, 4)}
              style={styleButton(arr, 4, 4)}
            ></button>
            <button
              id={62}
              onClick={changeState.bind(this, 62, arr, 4, 5)}
              style={styleButton(arr, 4, 5)}
            ></button>
            <button
              id={63}
              onClick={changeState.bind(this, 63, arr, 4, 6)}
              style={styleButton(arr, 4, 6)}
            ></button>
            <button
              id={64}
              onClick={changeState.bind(this, 64, arr, 4, 7)}
              style={styleButton(arr, 4, 7)}
            ></button>
            <button
              id={65}
              onClick={changeState.bind(this, 65, arr, 4, 8)}
              style={styleButton(arr, 4, 8)}
            ></button>
            <button
              id={66}
              onClick={changeState.bind(this, 66, arr, 4, 9)}
              style={styleButton(arr, 4, 9)}
            ></button>
            <button
              id={67}
              onClick={changeState.bind(this, 67, arr, 4, 10)}
              style={styleButton(arr, 4, 10)}
            ></button>
            <button
              id={68}
              onClick={changeState.bind(this, 68, arr, 4, 11)}
              style={styleButton(arr, 4, 11)}
            ></button>
            <button
              id={69}
              onClick={changeState.bind(this, 69, arr, 4, 12)}
              style={styleButton(arr, 4, 12)}
            ></button>
            <button
              id={70}
              onClick={changeState.bind(this, 70, arr, 4, 13)}
              style={styleButton(arr, 4, 13)}
            ></button>
          </div>
          <div>
            <button
              id={71}
              onClick={changeState.bind(this, 71, arr, 5, 0)}
              style={styleButton(arr, 5, 0)}
            ></button>
            <button
              id={72}
              onClick={changeState.bind(this, 72, arr, 5, 1)}
              style={styleButton(arr, 5, 1)}
            ></button>
            <button
              id={73}
              onClick={changeState.bind(this, 73, arr, 5, 2)}
              style={styleButton(arr, 5, 2)}
            ></button>
            <button
              id={74}
              onClick={changeState.bind(this, 74, arr, 5, 3)}
              style={styleButton(arr, 5, 3)}
            ></button>
            <button
              id={75}
              onClick={changeState.bind(this, 75, arr, 5, 4)}
              style={styleButton(arr, 5, 4)}
            ></button>
            <button
              id={76}
              onClick={changeState.bind(this, 76, arr, 5, 5)}
              style={styleButton(arr, 5, 5)}
            ></button>
            <button
              id={77}
              onClick={changeState.bind(this, 77, arr, 5, 6)}
              style={styleButton(arr, 5, 6)}
            ></button>
            <button
              id={78}
              onClick={changeState.bind(this, 78, arr, 5, 7)}
              style={styleButton(arr, 5, 7)}
            ></button>
            <button
              id={79}
              onClick={changeState.bind(this, 79, arr, 5, 8)}
              style={styleButton(arr, 5, 8)}
            ></button>
            <button
              id={80}
              onClick={changeState.bind(this, 80, arr, 5, 9)}
              style={styleButton(arr, 5, 9)}
            ></button>
            <button
              id={81}
              onClick={changeState.bind(this, 81, arr, 5, 10)}
              style={styleButton(arr, 5, 10)}
            ></button>
            <button
              id={82}
              onClick={changeState.bind(this, 82, arr, 5, 11)}
              style={styleButton(arr, 5, 11)}
            ></button>
            <button
              id={83}
              onClick={changeState.bind(this, 83, arr, 5, 12)}
              style={styleButton(arr, 5, 12)}
            ></button>
            <button
              id={84}
              onClick={changeState.bind(this, 84, arr, 5, 13)}
              style={styleButton(arr, 5, 13)}
            ></button>
          </div>
          <div>
            <button
              id={85}
              onClick={changeState.bind(this, 85, arr, 6, 0)}
              style={styleButton(arr, 6, 0)}
            ></button>
            <button
              id={86}
              onClick={changeState.bind(this, 86, arr, 6, 1)}
              style={styleButton(arr, 6, 1)}
            ></button>
            <button
              id={87}
              onClick={changeState.bind(this, 87, arr, 6, 2)}
              style={styleButton(arr, 6, 2)}
            ></button>
            <button
              id={88}
              onClick={changeState.bind(this, 88, arr, 6, 3)}
              style={styleButton(arr, 6, 3)}
            ></button>
            <button
              id={89}
              onClick={changeState.bind(this, 89, arr, 6, 4)}
              style={styleButton(arr, 6, 4)}
            ></button>
            <button
              id={90}
              onClick={changeState.bind(this, 90, arr, 6, 5)}
              style={styleButton(arr, 6, 5)}
            ></button>
            <button
              id={91}
              onClick={changeState.bind(this, 91, arr, 6, 6)}
              style={styleButton(arr, 6, 6)}
            ></button>
            <button
              id={92}
              onClick={changeState.bind(this, 92, arr, 6, 7)}
              style={styleButton(arr, 6, 7)}
            ></button>
            <button
              id={93}
              onClick={changeState.bind(this, 93, arr, 6, 8)}
              style={styleButton(arr, 6, 8)}
            ></button>
            <button
              id={94}
              onClick={changeState.bind(this, 94, arr, 6, 9)}
              style={styleButton(arr, 6, 9)}
            ></button>
            <button
              id={95}
              onClick={changeState.bind(this, 95, arr, 6, 10)}
              style={styleButton(arr, 6, 10)}
            ></button>
            <button
              id={96}
              onClick={changeState.bind(this, 96, arr, 6, 11)}
              style={styleButton(arr, 6, 11)}
            ></button>
            <button
              id={97}
              onClick={changeState.bind(this, 97, arr, 6, 12)}
              style={styleButton(arr, 6, 12)}
            ></button>
            <button
              id={98}
              onClick={changeState.bind(this, 98, arr, 6, 13)}
              style={styleButton(arr, 6, 13)}
            ></button>
          </div>
          <div>
            <button
              id={99}
              onClick={changeState.bind(this, 99, arr, 7, 0)}
              style={styleButton(arr, 7, 0)}
            ></button>
            <button
              id={100}
              onClick={changeState.bind(this, 100, arr, 7, 1)}
              style={styleButton(arr, 7, 1)}
            ></button>
            <button
              id={101}
              onClick={changeState.bind(this, 101, arr, 7, 2)}
              style={styleButton(arr, 7, 2)}
            ></button>
            <button
              id={102}
              onClick={changeState.bind(this, 102, arr, 7, 3)}
              style={styleButton(arr, 7, 3)}
            ></button>
            <button
              id={103}
              onClick={changeState.bind(this, 103, arr, 7, 4)}
              style={styleButton(arr, 7, 4)}
            ></button>
            <button
              id={104}
              onClick={changeState.bind(this, 104, arr, 7, 5)}
              style={styleButton(arr, 7, 5)}
            ></button>
            <button
              id={105}
              onClick={changeState.bind(this, 105, arr, 7, 6)}
              style={styleButton(arr, 7, 6)}
            ></button>
            <button
              id={106}
              onClick={changeState.bind(this, 106, arr, 7, 7)}
              style={styleButton(arr, 7, 7)}
            ></button>
            <button
              id={107}
              onClick={changeState.bind(this, 107, arr, 7, 8)}
              style={styleButton(arr, 7, 8)}
            ></button>
            <button
              id={108}
              onClick={changeState.bind(this, 108, arr, 7, 9)}
              style={styleButton(arr, 7, 9)}
            ></button>
            <button
              id={109}
              onClick={changeState.bind(this, 109, arr, 7, 10)}
              style={styleButton(arr, 7, 10)}
            ></button>
            <button
              id={110}
              onClick={changeState.bind(this, 110, arr, 7, 11)}
              style={styleButton(arr, 7, 11)}
            ></button>
            <button
              id={111}
              onClick={changeState.bind(this, 111, arr, 7, 12)}
              style={styleButton(arr, 7, 12)}
            ></button>
            <button
              id={112}
              onClick={changeState.bind(this, 112, arr, 7, 13)}
              style={styleButton(arr, 7, 13)}
            ></button>
          </div>
          <div>
            <button
              id={113}
              onClick={changeState.bind(this, 113, arr, 8, 0)}
              style={styleButton(arr, 8, 0)}
            ></button>
            <button
              id={114}
              onClick={changeState.bind(this, 114, arr, 8, 1)}
              style={styleButton(arr, 8, 1)}
            ></button>
            <button
              id={115}
              onClick={changeState.bind(this, 115, arr, 8, 2)}
              style={styleButton(arr, 8, 2)}
            ></button>
            <button
              id={116}
              onClick={changeState.bind(this, 116, arr, 8, 3)}
              style={styleButton(arr, 8, 3)}
            ></button>
            <button
              id={117}
              onClick={changeState.bind(this, 117, arr, 8, 4)}
              style={styleButton(arr, 8, 4)}
            ></button>
            <button
              id={118}
              onClick={changeState.bind(this, 118, arr, 8, 5)}
              style={styleButton(arr, 8, 5)}
            ></button>
            <button
              id={119}
              onClick={changeState.bind(this, 119, arr, 8, 6)}
              style={styleButton(arr, 8, 6)}
            ></button>
            <button
              id={120}
              onClick={changeState.bind(this, 120, arr, 8, 7)}
              style={styleButton(arr, 8, 7)}
            ></button>
            <button
              id={121}
              onClick={changeState.bind(this, 121, arr, 8, 8)}
              style={styleButton(arr, 8, 8)}
            ></button>
            <button
              id={122}
              onClick={changeState.bind(this, 122, arr, 8, 9)}
              style={styleButton(arr, 8, 9)}
            ></button>
            <button
              id={123}
              onClick={changeState.bind(this, 123, arr, 8, 10)}
              style={styleButton(arr, 8, 10)}
            ></button>
            <button
              id={124}
              onClick={changeState.bind(this, 124, arr, 8, 11)}
              style={styleButton(arr, 8, 11)}
            ></button>
            <button
              id={125}
              onClick={changeState.bind(this, 125, arr, 8, 12)}
              style={styleButton(arr, 8, 12)}
            ></button>
            <button
              id={126}
              onClick={changeState.bind(this, 126, arr, 8, 13)}
              style={styleButton(arr, 8, 13)}
            ></button>
          </div>
          <div>
            <button
              id={127}
              onClick={changeState.bind(this, 127, arr, 9, 0)}
              style={styleButton(arr, 9, 0)}
            ></button>
            <button
              id={128}
              onClick={changeState.bind(this, 128, arr, 9, 0)}
              style={styleButton(arr, 9, 0)}
            ></button>
            <button
              id={129}
              onClick={changeState.bind(this, 129, arr, 9, 0)}
              style={styleButton(arr, 9, 0)}
            ></button>
            <button
              id={130}
              onClick={changeState.bind(this, 130, arr, 9, 0)}
              style={styleButton(arr, 9, 0)}
            ></button>
            <button
              id={131}
              onClick={changeState.bind(this, 131, arr, 9, 0)}
              style={styleButton(arr, 9, 0)}
            ></button>
            <button
              id={132}
              onClick={changeState.bind(this, 132, arr, 9, 0)}
              style={styleButton(arr, 9, 0)}
            ></button>
            <button
              id={133}
              onClick={changeState.bind(this, 133, arr, 9, 0)}
              style={styleButton(arr, 9, 0)}
            ></button>
            <button
              id={134}
              onClick={changeState.bind(this, 134, arr, 9, 0)}
              style={styleButton(arr, 9, 0)}
            ></button>
            <button
              id={135}
              onClick={changeState.bind(this, 135, arr, 9, 0)}
              style={styleButton(arr, 9, 0)}
            ></button>
            <button
              id={136}
              onClick={changeState.bind(this, 136, arr, 9, 0)}
              style={styleButton(arr, 9, 0)}
            ></button>
            <button
              id={137}
              onClick={changeState.bind(this, 137, arr, 9, 0)}
              style={styleButton(arr, 9, 0)}
            ></button>
            <button
              id={138}
              onClick={changeState.bind(this, 138, arr, 9, 0)}
              style={styleButton(arr, 9, 0)}
            ></button>
            <button
              id={139}
              onClick={changeState.bind(this, 139, arr, 9, 0)}
              style={styleButton(arr, 9, 0)}
            ></button>
            <button
              id={140}
              onClick={changeState.bind(this, 140, arr, 9, 0)}
              style={styleButton(arr, 9, 0)}
            ></button>
          </div>
        </div>
      </div>

      <Link>
        <Fab variant="extended" onClick={passState.bind(this, arr)}>
          SPLIT
        </Fab>
      </Link>
    </div>
  );
}

export default Buttons;
