import React,{Component} from 'react';
import './splitDoneComp.css';
import IconButton from '@material-ui/core/IconButton';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import DoneIcon from '@material-ui/icons/Done';
import { green } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';

class SplitDone extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="App">
        <div className="navbar">
          <CloseIcon></CloseIcon>
        </div>
        <div className="App-header">
            <DoneIcon style={{ color: green[500] }} fontSize="large"/>
            <div>image splitted </div>       
        </div>
        <div className="lowerPage">
          <div>
          <IconButton aria-label="upload"> <CloudUploadIcon fontSize="large"/></IconButton>
                <div>upload to cloud </div>
          </div>       
          <div style={{marginLeft:"10vw"}}>
          <IconButton aria-label="save"> <SaveAltIcon fontSize="large"/> </IconButton>
              <div>save locally</div>
              </div>
          </div>
        </div>
    );
    
  }
}

export default SplitDone;
