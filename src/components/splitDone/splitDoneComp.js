import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CheckCircle } from "@material-ui/icons";
import Buttons from "../Split/Buttons";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    width: "30vw",
  },
  doneIcon: {
    fontSize: "20vw",
    color: "#FF5A5F",
  },
  desc: {
    margin: "2vw",
  },
}));

function SplitDone(props) {
  const classes = useStyles();
  const booleanList = props.booleanList;
  const [data, setData] = useState({
    submit: false,
    back: false,
    excludes: props.excludes,
    path: props.path,
    squared_path: props.squaredPath,
  });

  let countImage = [];
  for (let i = 0; i < booleanList.length; i++) {
    let count = 0;
    for (let j = 0; j < booleanList[i].length; j++) {
      // console.log(booleanList[i]);
      if (booleanList[i][j] === true) {
        count++;
      }
    }
    countImage.push(
      <p>
        Number {i}: {count} image(s)
      </p>
    );
  }

  function handleBack() {
    setData({
      ...data,
      back: true,
      loading: true
    });

    console.log(data.excludes);
    console.log(data.path);
    console.log(data.squared_path);
  }

  const handleSubmit = async () => {
    setData({ 
      ...data, 
      submit: true,
      loading: true });
  };
   
  return (
    <div className={classes.root}>
      {!data.back ? (
        <div>
          <CheckCircle className={classes.doneIcon} />
          <h1 className={classes.desc}>Image Splitted!</h1>
          {countImage}
    
          <button onClick={handleBack}>
            BACK
          </button>
          <button onClick={handleSubmit}>
            EXIT
          </button>
        </div>
      ) : (
        <Buttons>
          squared_path={data.squared_path}
          path={data.path}
          excludes={data.excludes}
        </Buttons>
      )}

    </div>
  );
}

export default SplitDone;
