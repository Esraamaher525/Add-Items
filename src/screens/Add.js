import React,{Component} from 'react'
import {Text,View,TouchableOpacity,TextInput,ToastAndroid} from 'react-native';
import { Container,Content } from 'native-base';
import {Actions} from 'react-native-router-flux';
type props={};
export default class Add extends Component<props>{
    constructor(props){
        super(props);
        this.state={text:''}
       
    }
    showError(){
       if(this.state.text===1){
            return(
                <View style={{marginRight:125,marginBottom:12}}>
                    <Text style={{fontSize: 16 ,color: '#FF0000'}}>Numbers not allowed</Text>
                </View>
            
            )

       }
       else if(this.state.text===2){
        return(
            <View style={{marginRight:125,marginBottom:12}}>
                <Text style={{fontSize: 16 ,color: '#FF0000'}}>Empty not allowed</Text>
            </View>
        
        )
       }
    }
    
    render(){
        return(
            <Container style={{backgroundColor: "#FAFAFA"}}>
                <Content>
                    <View style={{marginTop:36}}>
                        <Text style={{color:'#707070',fontSize:30,letterSpacing:1,fontWeight:'bold',textAlign:'center'}}>Add new item</Text>
                        <Text style={{color:'#999999',fontSize:14,letterSpacing:1,marginBottom:16,textAlign:'center'}}>Subtitle goes here</Text>
                        <View style={{marginTop:168,justifyContent:'center',alignItems:'center'}}>
                            <TextInput style={{width:326,height:63,backgroundColor:'#FFFFFF',borderColor:'#707070',borderRadius:10,fontSize:18,paddingHorizontal:25,marginBottom:12}}
                            placeholder="item name" placeholderTextColor='#999999'
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            />
                            {this.showError()}
                            <TouchableOpacity onPress={()=>{
                                 if(isNaN(this.state.text)){
                                    Actions.Home({val:this.state.text}) 
                                }else if(this.state.text.length==0){
                                    this.setState({text:2})
                                }
                                else{
                                    this.setState({text:1})
                               
                                }
                                
                            }
                                
                            } style={{paddingVertical:16.97,backgroundColor:'#1D7281',height:60,width:327}}>
                                
                                <Text style={{fontSize:20,color:'#FFFFFF',textAlign:'center',paddingBottom:10,fontWeight:'bold'}}>
            
                            Add</Text>
                            </TouchableOpacity>

                        </View>
                    
                    </View>
                </Content>
            </Container>
          
        )
    }

}

