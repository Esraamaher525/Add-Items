import React,{Component} from 'react';
import {Scene,Router,Stack} from 'react-native-router-flux';
import Home from './src/screens/Home';
import Add from './src/screens/Add';
type props={};
export default class App extends Component<props>{
  render(){
    return(
    <Router>
      <Stack key="root">
        <Scene key="Home" component={Home} title="Home" hideNavBar={true}/>
        <Scene key="Add" component={Add} title="Add"  hideNavBar={true}/>
      </Stack>
    </Router>
    )
  }
}