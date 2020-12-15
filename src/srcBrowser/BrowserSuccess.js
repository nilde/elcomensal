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
export default class App extends React.Component {
    render() {
  
      return (
          <View style={{width:"100%",height:window.innerHeight,backgroundColor:"#fff",flexDirection:"row-reverse"}}>


 <View style={{width:"100%",height:"100%",backgroundColor:"#f5f5f5"}}>
 <Image source={landing1} style={{width: window.innerWidth, height:window.innerHeight, zIndex: 0,opacity:1 }} resizeMode="cover" />

 </View>
 <View style={{position:"absolute",top:0,left:0,width:"15%",height:window.innerHeight*0.08}}>
 <Link to="/landing" style={{paddingLeft:window.innerWidth*0.01, height:"100%", width:"100%",textDecoration:"none",color:"#000"}} >
                
 <Image source={elcomensal_light} style={{alignSelf:"center", width:"70%", height: "100%", zIndex: 0 }} resizeMode="contain" />
</Link>

 </View>
 <View style={{position:"absolute",top:window.innerHeight*0.3,left:window.innerWidth*0.35,width:window.innerWidth*0.3,backgroundColor:"#fff",paddingTop:window.innerHeight*0.03}}>
 <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.5rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
                        ¡Bienvenido!
                        </Text>
                        <Text style={{marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        Ahora ya formas parte de nuestra plataforma. Empieza a gestionar tu carta desde el panel de administración.
                        </Text>
      
                   
                  
                    
                    <TouchableOpacity style={{alignSelf:"center",marginBottom:window.innerHeight*0.03, alignItems: "center", backgroundColor: "#FFC524", width: "90%",marginTop:window.innerHeight*0.01 }}>
                    <Link to="/manage" style={{width:"100%", alignSelf:"flex-start",textDecoration:"none",color:"#000"}} >
   
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.025, textAlign: "center", width: "100%" }}>
                    Empezar
                    </Text>
                </View>
                </Link>
                
                </TouchableOpacity>
             
 </View>
          </View>
      )
    }
}