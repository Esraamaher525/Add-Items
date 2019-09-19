import React,{Component} from 'react'
import {platform,StyleSheet,Text,View} from 'react-native'
type props={};
export default class Header extends Component<props>{
    constructor(props){
        super(props);
    } 
    render(){
        return(
            <View>
                <Text style={{color:'#1D7281',fontSize:30}}>{this.props.title}</Text>
                <Text style={{color:'#999999',fontSize:14}}>{this.props.subTitle}</Text>
            </View>
        )
    }
}
