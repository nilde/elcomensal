import * as React from 'react';
import Title from 'reactjs-title'
import restaurantLogin from '../restaurantLogin.jpg'

import elcomensal from '../elcomensal.png'

import {Animated, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback,TextInput,FlatList } from 'react-native';
export default class App extends React.Component {
 
 


    render() {
  
      return (

          <View style={{zIndex:99,position:"absolute",top:0,width:"100%",height:"100%",backgroundColor:"#f5f5f5",justifyContent:"center",alignItems:"center"}}>
         <Image source={restaurantLogin} style={{ position: "absolute", top: 0, width: window.innerWidth, height: "100%", zIndex: 0 }} blurRadius={0} resizeMode="cover" />
       <View style={{width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.3)",position:"absolute",top:0}}/>
<View style={{width:"100%"}}>
        <View style={{width:"90%",alignItems:"center",justifyContent:"center",backgroundColor:"#fff",alignSelf:"center"}}>
        <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "left", width: "100%" }}>
                    Usuario
                    </Text>
                    <TextInput numberOfLines={1} placeholder={"Nombre de usuario"} style={{fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.02}} />
           
                    <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "left", width: "100%" }}>
                    Contraseña
                    </Text>
                    <TextInput numberOfLines={1} placeholder={"Contraseña"} style={{fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.02}} />
                    <Text style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "left", width: "100%" }}>
                    He olvidado mi contraseña
                    </Text>
                    <TouchableOpacity onPress={()=>this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')}  style={{ alignItems: "center", backgroundColor: "#000",alignSelf:"center",marginBottom:window.innerHeight*0.02, width: "90%",marginTop:window.innerHeight*0.03 }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#fff", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "center", width: "100%" }}>
                    Iniciar sesión
                    </Text>
                </View>

              </TouchableOpacity>
             
              
        </View>
        <Text style={{ color: "#fff",textDecorationLine:"underline", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "center", width: "100%" }}>
                   ¿No tienes cuenta? Registrate
                    </Text>
</View>
        <View style={{width:"100%",height:window.innerHeight*0.08,position:"absolute",top:0,backgroundColor:"#fff",flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
        <TouchableOpacity style={{justifyContent:"center",alignItems:"center",width:"15%",backgroundColor:"#fff",position:"absolute",left:0}}>
        
<Image source={elcomensal} style={{  width: window.innerWidth*0.20, height: window.innerHeight*0.02, zIndex: 0 }} resizeMode="contain" />
         </TouchableOpacity> 
         <TouchableOpacity onPress={()=>this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')}  style={{alignSelf:"center", alignItems: "center", width: window.innerWidth*0.3,marginRight:window.innerWidth*0.01 }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "2.5%", paddingVertical: window.innerHeight * 0.015, textAlign: "center", width: "100%" }}>
                    Registrarse
                    </Text>
                </View>
                

              </TouchableOpacity>

              </View>
          </View>
      )
    }
}