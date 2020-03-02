import React,{Component} from 'react';
import './App.css';
import SplitDone from './components/splitDone/splitDoneComp'

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <SplitDone/>
    )
  }
}

export default App;
