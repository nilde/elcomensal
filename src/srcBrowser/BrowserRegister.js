import * as React from 'react';
import Title from 'reactjs-title'
import restaurantRegister from '../restaurantRegister.jpg';
import elcomensal from '../elcomensal.png';
import landing1 from '../landing1.jpg';
import landing2 from '../landing2.jpg';
import landing3 from '../landing3.jpg';
import frame from '../frame.png';
import {Animated, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback,TextInput,FlatList } from 'react-native';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone'
import elcomensal_light from '../elcomensal_light.svg';
import firebase from "firebase";
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      sendDisabled:true,
      newUser:{
        restaurant_name:"",
        direction:"",
        email:"",
        password:"",
        password_repeated:"",
        owner_name:"",
        phone:"",
      }
    }
  }


  assignField(key,value){
    var newUser=this.state.newUser
    newUser[key]=value
    this.setState({newUser})
  }


 async createUser(){
   /*
   await firebase.firestore().collection('users').add(this.state.newUser).then(()=>

   )
   */
  }


checkFormStatus(){
  var nextState=(
this.state.newUser.restaurant_name.length>0 &&
this.state.newUser.direction.length>0 &&
this.state.newUser.email.length>0 &&
this.state.newUser.password.length>0 &&
this.state.newUser.password_repeated.length>0 &&
this.state.newUser.owner_name.length>0 &&
this.state.newUser.phone.length>0
  )
  if(!nextState!=this.state.sendDisabled)
  this.setState({sendDisabled:!nextState})
}

  componentDidUpdate(){
    //check if it's possible to send form
    this.checkFormStatus()
  }

    render() {
  
      return (
          <View style={{width:"100%",height:window.innerHeight,backgroundColor:"#fff",flexDirection:"row-reverse"}}>

 <View style={{width:"35%",height:"100%",backgroundColor:"#fff",paddingTop:window.innerHeight*0.03}}>
 <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.5rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
                        Únete
                        </Text>
                        <Text style={{marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        El futuro de las cartas online está a solo un clic de distancia
                        </Text>
      
                    <TextInput
                    onChangeText={(e)=>this.assignField("restaurant_name",e)}
                     numberOfLines={1} placeholder={"Nombre del restaurante"} style={{marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
           
               
                    <TextInput
                    onChangeText={(e)=>this.assignField("direction",e)}
                     numberOfLines={1} placeholder={"Dirección Ej. C/ Bruc 23, Barcelona"} style={{marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
                 
                    <TextInput
                      onChangeText={(e)=>this.assignField("email",e)}
                     numberOfLines={1} placeholder={"Correo electrónico"} style={{marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015,marginBottom:window.innerHeight*0.015}} />
                    <TextInput
                    onChangeText={(e)=>this.assignField("password",e)}
                     numberOfLines={1} placeholder={"Contraseña"} style={{marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015,marginBottom:window.innerHeight*0.015}} />
                    
                    <TextInput 
                    onChangeText={(e)=>this.assignField("password_repeated",e)}
                    numberOfLines={1} placeholder={"Repetir contraseña"} style={{marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015,marginBottom:window.innerHeight*0.015}} />
             
                
                    <TextInput
                    onChangeText={(e)=>this.assignField("owner_name",e)}
                     numberOfLines={1} placeholder={"Nombre completo"} style={{marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
           
                 
                    <TextInput
                    onChangeText={(e)=>this.assignField("phone",e)}
                    numberOfLines={1} placeholder={"Número de teléfono: +34 000 000 000"} style={{marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
                
                  
                    
                    <TouchableOpacity disabled={this.state.sendDisabled} onPress={()=>this.createUser()}  style={{alignSelf:"center",marginBottom:window.innerHeight*0.03, alignItems: "center", backgroundColor:this.state.sendDisabled?"#EDEDED":"#FFC524", width: "90%",marginTop:window.innerHeight*0.01 }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.025, textAlign: "center", width: "100%" }}>
                    Unirse
                    </Text>
                </View>
                
                </TouchableOpacity>
                <Text style={{ color: "#000", fontWeight: "400", fontSize: "0.8rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.02, textAlign: "left", width: "100%" }}>
                    Al inscribirse aceptas los términos y condiciones.
                    </Text>
                    <TouchableOpacity onPress={()=>this.createUser()}  style={{alignSelf:"center",marginBottom:window.innerHeight*0.03, alignItems: "center", backgroundColor: "#fff", width: "90%",marginTop:window.innerHeight*0.01 }}>
                    <Link to="/login" style={{height:"100%", width:"100%",color:"#000"}} >
                
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.025, textAlign: "center", width: "100%" }}>
                    ¿Ya tienes cuenta? Inicia sesión
                    </Text>
                </View>
                </Link>
                </TouchableOpacity>
 </View>
 <View style={{width:"65%",height:"100%",backgroundColor:"#f5f5f5"}}>
 <Image source={restaurantRegister} style={{width: window.innerWidth*0.65, height:window.innerHeight, zIndex: 0,opacity:1 }} resizeMode="cover" />

 </View>
 <View style={{position:"absolute",top:0,left:0,width:"15%",height:window.innerHeight*0.08}}>
 <Link to="/landing" style={{paddingLeft:window.innerWidth*0.01, height:"100%", width:"100%",textDecoration:"none",color:"#000"}} >
                
 <Image source={elcomensal_light} style={{alignSelf:"center", width:"70%", height: "100%", zIndex: 0 }} resizeMode="contain" />
</Link>
 </View>
          </View>
      )
    }
}