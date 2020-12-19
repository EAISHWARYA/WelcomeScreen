import React ,{Component}from 'react';
import {View ,Text,StyleSheet,TouchableOpacity,TextInput, Alert} from 'react-native';
 import firebase from 'firebase';
 import db from '../config';

export default class WelcomeScreen extends Component{
constructor(){
    super()
    this.state={
        emailId:'',
        password:''
    }
}
userSignUp(email,password){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      
      return alert("User successfully Logged in")
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      return alert(errorMessage)
    });
}
userLogin(email,password){
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
  return alert("User successfully added")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    return alert(errorMessage)
  });
}
render(){
    return(
        <View style={styles .container}>
            <Text style={{fontFamily:'bold',fontSize:50,margin:50,}}>BOOK SANTA</Text>
           <TextInput style={styles.inputBox}
           placeholder='e.g.abc@gmail.com'
           keyboardType='email-address'
           onChangeText={(text)=>{this.setState({emailId:text})}}
           />
           <TextInput style={styles.inputBox}
           placeholder='*****'
            secureTextEntry={true}
           onChangeText={(text)=>{this.setState({password:text})}}
           />
           <TouchableOpacity style={styles.button}
           onPress={()=>{this.userSignUp(this.state.emailId,this.state.password)}}>
               <Text style={styles.buttonText}>SignUp</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.button}
           onPress={()=>{this.userLogin(this.state.emailId,this.state.password)}}>
               <Text style={styles.buttonText}>Login</Text>
           </TouchableOpacity>
        </View>
    )
}
 }
 const styles=StyleSheet.create(
     {
         container:{
             flex:1,
             backgroundColor:'pink',
             alignItems: 'center',
            justifyContent: 'center',
         },
         inputBox:{
            width:'100%',
            height:30,
            borderRadius:5,
            borderColor:'black',
            borderWidth:1.5,
            margin:20,
            padding:30,
            color:'red',
            
            
         },
         button:{
             textAlign:'center',
             backgroundColor:'grey',
             width:120,
             height:50,
             justifyContent:'center',
             alignContent:'center',
             borderRadius:5
            

         },
         buttonText:{
             color:'red',
             fontSize:30,
            
         }
     }
 )
