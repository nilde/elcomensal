import * as React from 'react';
import Title from 'reactjs-title'
import restaurantRegister from '../restaurantRegister.jpg';
import elcomensal from '../elcomensal.png';
import landing1 from '../landing1.jpg';
import landing2 from '../landing2.jpg';
import landing3 from '../landing3.jpg';
import frame from '../frame.png';
import elcomensal_light from '../elcomensal_light.svg';
import {Animated, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback,TextInput,FlatList } from 'react-native';
import { Link } from 'react-router-dom';
export default class App extends React.Component {
    render() {
  
      return (
          <View style={{width:window.innerWidth,height:window.innerHeight,backgroundColor:"#fff",flexDirection:"row-reverse"}}>

 <View style={{width:"35%",height:"100%",backgroundColor:"#fff",}}>
 <Text style={{marginTop:window.innerHeight*0.025, color: "#000", fontWeight: "500", fontSize: "1.5rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
                        Iniciar sesión
                        </Text>
                        <Text style={{marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        Bienvenido al panel de administración para restaurantes.
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.01, color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.02, textAlign: "left", width: "100%" }}>
                       Nombre de usuario
                        </Text>
                    <TextInput numberOfLines={1} placeholder={"restaurantegourmet"} style={{marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
           
                    <Text style={{marginTop:window.innerHeight*0.025, color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.02, textAlign: "left", width: "100%" }}>
                        Contraseña
                        </Text>
                    <TextInput numberOfLines={1} placeholder={"Contraseña"} style={{marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
                    <TouchableOpacity onPress={()=>this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')}  style={{alignSelf:"center",marginBottom:window.innerHeight*0.03, alignItems: "center", backgroundColor: "#fff", width: "90%"}}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{textDecorationLine:"underline", color: "#000", fontWeight: "400", fontSize: "0.8rem", paddingHorizontal: window.innerWidth*0.01, paddingVertical: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
                    ¿Has olvidado la contraseña?
                    </Text>
                </View>
                </TouchableOpacity>
                  
                  
                    
                    <TouchableOpacity onPress={()=>this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')}  style={{alignSelf:"center",marginBottom:window.innerHeight*0.03, alignItems: "center", backgroundColor: "#FFC627", width: "90%" }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.025, textAlign: "center", width: "100%" }}>
                    Iniciar sesión
                    </Text>
                </View>
                
                </TouchableOpacity>

               <TouchableOpacity onPress={()=>this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')}  style={{alignSelf:"center",marginBottom:window.innerHeight*0.03, alignItems: "center", backgroundColor: "#fff", width: "90%"}}>
                <Link to="/register" style={{height:"100%", width:"100%",textDecoration:"none",color:"#000"}} >
                 <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{textDecorationLine:"underline", color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.025, textAlign: "center", width: "100%" }}>
                    ¿Aún no tienes cuenta? Únete
                    </Text>
                </View></Link>
                </TouchableOpacity>
                
 </View>
 <View style={{width:"65%",height:"100%",backgroundColor:"#f5f5f5"}}>
 <Image source={landing1} style={{width: window.innerWidth*0.65, height:window.innerHeight, zIndex: 0,opacity:1 }} resizeMode="cover" />

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