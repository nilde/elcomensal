import * as React from 'react';
import Title from 'reactjs-title'
import { Animated, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback, TextInput, FlatList } from 'react-native';
import { IoIosClose, IoMdRadioButtonOff, IoMdRadioButtonOn, IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import Dropdown from 'react-dropdown';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Collapsible from 'react-collapsible';
import { Background } from 'react-parallax';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            manageStatus: ""
        }
    }




    render() {

        return (
            <View style={{ zIndex: 0, width: window.innerWidth, height: window.innerHeight, backgroundColor: "#fff" }}>
                <Text style={{ paddingTop: window.innerHeight * 0.03, textDecorationLine: "none", color: "#000", fontWeight: "500", fontSize: "2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                    Perfil
                  </Text>
             
                <View style={{ width: window.innerWidth, flexDirection: "row" }}>
                    <View style={{ width: "50%" }}>
                        <Text style={{ paddingBottom: window.innerHeight * 0.03, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                            Foto de perfil
                  </Text>
                    </View>
                    <View style={{ width: "50%" }}>
                        <Text style={{ paddingBottom: window.innerHeight * 0.03, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                            Nombre del restaurante
                  </Text>
                        <TextInput numberOfLines={1} placeholder={"Buscar un menú"} style={{ marginLeft: window.innerWidth * 0.01, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "30%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />

                        <Text style={{ paddingBottom: window.innerHeight * 0.03, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                            Dirección
                  </Text>
                        <TextInput numberOfLines={1} placeholder={"Buscar un menú"} style={{ marginLeft: window.innerWidth * 0.01, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "30%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />

                    </View>

                </View>
                <View style={{width:"100%",flexDirection:"row"}}>
                <View style={{ width: "50%" }}>
                        <Text style={{ paddingBottom: window.innerHeight * 0.03, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                            Correo electrónico
                           
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"Buscar un menú"} style={{ marginLeft: window.innerWidth * 0.01, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "30%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />

                    </View>
                    <View style={{ width: "50%" }}>
                        <Text style={{ paddingBottom: window.innerHeight * 0.03, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                            Número de teléfono
                            
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"Buscar un menú"} style={{ marginLeft: window.innerWidth * 0.01, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "30%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />

                    </View>
                </View>
                <View style={{width:"100%",flexDirection:"row"}}>
                <View style={{ width: "50%" }}>
                        <Text style={{ paddingBottom: window.innerHeight * 0.03, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                            Inhabilitar cuenta
                           
                  </Text>
                  <Text style={{width:window.innerWidth*0.3, paddingBottom: window.innerHeight * 0.03, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                  Puedes inhabilitar la cuenta. Tu menú dejará de estar disponible pero puedes volver a activarlo cúando desees.
                           
                  </Text>
                  <TouchableOpacity style={{width:window.innerWidth*0.2,alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"flex-start",marginLeft:window.innerWidth*0.01}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "center",paddingVertical:window.innerHeight*0.02 }}>
                                        Inhabilitar
                  </Text>
                  


                </TouchableOpacity>
                    </View>
                    <View style={{ width: "50%" }}>
                        <Text style={{ paddingBottom: window.innerHeight * 0.03, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                        Eliminar cuenta
                            
                  </Text>
                  <Text style={{width:window.innerWidth*0.3, paddingBottom: window.innerHeight * 0.03, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                  Si eliminas tu cuenta se perderán todos tus menús y la carta. Tendrás que volver a crear una nueva cuenta    
                  </Text>
                  <TouchableOpacity style={{width:window.innerWidth*0.2,alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"flex-start",marginLeft:window.innerWidth*0.01}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Eliminar
                  </Text>
                  


                </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}