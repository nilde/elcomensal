import * as React from 'react';
import Title from 'reactjs-title'
import { Animated, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback, TextInput, FlatList } from 'react-native';
import { IoIosClose, IoMdRadioButtonOff, IoMdRadioButtonOn, IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import Dropdown from 'react-dropdown';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Collapsible from 'react-collapsible';
import { Background } from 'react-parallax';
import Dropzone from "react-dropzone"
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            manageStatus: ""
        }
    }




    render() {

        return (
            <ScrollView style={{ zIndex: 0, width: window.innerWidth, height: window.innerHeight, backgroundColor: "#fff" }}>
                
                <View style={{ width: window.innerWidth, flexDirection: "row" }}>
                    
                    <View style={{ width: "50%" }}>
                    <Text style={{ paddingTop: window.innerHeight * 0.03, textDecorationLine: "none", color: "#000", fontWeight: "500", fontSize: "2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                    Perfil
                  </Text>
                  <View style={{width:"100%",height:window.innerHeight*0.02}}/>
                        <Text style={{ paddingTop: window.innerHeight * 0.02, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                            Foto del restaurante
                  </Text>
                  <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
  {({getRootProps, getInputProps}) => (
    <View style={{width:"85%",justifyContent:"center",alignItems:"center", alignSelf:"flex-start",marginLeft:window.innerWidth*0.01,height:200,backgroundColor:"#f5f5f5",marginVertical:window.innerHeight*0.02,borderRadius:40}}>

      <div style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}} {...getRootProps()}>
        <input style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}} {...getInputProps()} />
        <Text style={{position:"absolute",top:"45%",alignSelf:"center",justifySelf:"center",textDecorationLine: "none", color: "gray", fontWeight: "400", fontSize: "1rem", textAlign: "center", width:"100%",paddingHorizontal:window.innerWidth*0.02 }}>
        Arrastra una imagen o pulsa para subir una desde tu ordenador (opcional)
                  </Text>
       
      </div>
    </View>
  )}
</Dropzone>
<Text style={{ paddingBottom: window.innerHeight * 0.01, paddingTop: window.innerHeight * 0.02, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                        Eliminar cuenta
                            
                  </Text>
                  <Text style={{width:window.innerWidth*0.3, paddingBottom: window.innerHeight * 0.03, textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                  Si eliminas tu cuenta se perderán todos tus menús y la carta. Tendrás que volver a crear una nueva cuenta    
                  </Text>
                  <TouchableOpacity style={{borderRadius:10,width:window.innerWidth*0.3,alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"flex-start",marginLeft:window.innerWidth*0.01}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.03 }}>
                                        Eliminar
                  </Text>
                  

                </TouchableOpacity>

              
                 
                    </View>
                    <View style={{ width: "50%" }}>
                        <Text style={{ paddingBottom: window.innerHeight * 0.01, paddingTop: window.innerHeight * 0.05, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                            Nombre del restaurante
                  </Text>
                        <TextInput numberOfLines={1} placeholder={"Restaurante gourmet"} style={{marginTop:window.innerHeight*0.01, borderRadius:10,marginLeft: window.innerWidth * 0.01, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "60%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />

                        <Text style={{ paddingBottom: window.innerHeight * 0.01, paddingTop: window.innerHeight * 0.02, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                            Dirección
                  </Text>
                        <TextInput numberOfLines={1} placeholder={"C/ Bruc 26, Barcelona"} style={{ marginTop:window.innerHeight*0.01,borderRadius:10,marginLeft: window.innerWidth * 0.01, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "60%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                        <Text style={{ paddingBottom: window.innerHeight * 0.01, paddingTop: window.innerHeight * 0.02, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                            Correo electrónico
                           
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"restaurantegourmet@mail.com"} style={{ marginTop:window.innerHeight*0.01,borderRadius:10,marginLeft: window.innerWidth * 0.01, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "60%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <Text style={{ paddingBottom: window.innerHeight * 0.01, paddingTop: window.innerHeight * 0.02, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                            Número de teléfono
                            
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"930000000"} style={{ marginTop:window.innerHeight*0.01,borderRadius:10,marginLeft: window.innerWidth * 0.01, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "60%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />

                  <Text style={{ paddingBottom: window.innerHeight * 0.01, paddingTop: window.innerHeight * 0.02, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                   Contraseña
                                   
                         </Text>
                         <TextInput numberOfLines={1} placeholder={"930000000"} style={{ marginTop:window.innerHeight*0.01,borderRadius:10,marginLeft: window.innerWidth * 0.01, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "60%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
       
                         <Text style={{ paddingBottom: window.innerHeight * 0.01, paddingTop: window.innerHeight * 0.02, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                   Repetir contraseña
                                   
                         </Text>
                         <TextInput numberOfLines={1} placeholder={"930000000"} style={{marginTop:window.innerHeight*0.01,borderRadius:10,marginLeft: window.innerWidth * 0.01, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "60%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                         <TouchableOpacity style={{borderRadius:10, width:window.innerWidth*0.3,alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"flex-start",marginLeft:window.innerWidth*0.01,marginTop:window.innerHeight*0.02}}>
       <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.03 }}>
                                               Guardar cambios
                         </Text>
                         
       
       
                       </TouchableOpacity>
                    </View>

                </View>
              
                
                <View style={{width:"100%",height:window.innerHeight*0.1}}/>
            </ScrollView>
        )
    }
}