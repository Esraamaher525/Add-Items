import React,{Component} from 'react'
import {platform,Text,View,Button,SafeAreaView,ScrollView,TouchableOpacity,Image,AsyncStorage} from 'react-native';
import { Container,Content } from 'native-base';
import {Actions} from 'react-native-router-flux';
type props={};
let i=1;
export default class Home extends Component<props>{
  
    constructor(props){
        super(props);
        this.state={
            items:['expedita','nisi','fuga','repellat','placeat']
        }
    }
    componentDidMount(){
        this.setState({
            items:this.state.items.concat(this.props.val)
        })
    }
    
    
    render(){
        return(
            <Container style={{backgroundColor: "#FAFAFA"}}>
                <Content>
                    <View style={{marginTop:36,marginHorizontal:24}}>
                        <Text style={{color:'#1D7281',fontSize:30,letterSpacing:1,fontWeight:'bold'}}>Items</Text>
                        <Text style={{color:'#999999',fontSize:14,letterSpacing:1,marginBottom:16}}>Subtitle goes here</Text>
                         <SafeAreaView>
                            <ScrollView > 
                                <View elevation={5} style={{backgroundColor:'#FFFFFF',paddingVertical:31,paddingLeft:36,marginBottom:23,shadowColor:'#000000',shadowOpacity:1,shadowRadius:2,shadowOffset:{height:1,width:1},width:328,height:591,marginLeft:2}}>
                                    {this.state.items.map((item,key)=>{
                                        return(
                                        <Text key={++i} style={{color:'#666666',fontSize:20,marginTop:31,fontWeight:'bold'}}>{item}</Text>
                                        )
                                    }) }   
                                </View>
                            </ScrollView>
                        </SafeAreaView>
                                <TouchableOpacity onPress={()=>{Actions.Add()}} style={{paddingVertical:16.97,backgroundColor:'#00CCFF',height:60,width:327,justifyContent:'center',flexDirection:'row',flexWrap:'wrap',marginBottom:26}}>
                                <Image source={require('../images/Group6.png')} style={{width:34,height:34,marginRight:12.07}}/> 
                                    <Text style={{fontSize:20,color:'#FFFFFF',textAlign:'center',fontWeight:'bold'}}>
                
                                Add new item</Text>
                                </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        
          
        )
    }
   

}

