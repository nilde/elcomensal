import * as React from 'react';
import Title from 'reactjs-title'
import { Animated, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback, TextInput, FlatList } from 'react-native';
import { IoIosClose, IoMdRadioButtonOff, IoMdRadioButtonOn, IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import Dropdown from 'react-dropdown';
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader,SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Collapsible from 'react-collapsible';
import { Background } from 'react-parallax';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status:"ALL"
        }
    }



    render() {

        return (
            <View style={{zIndex: 0,width: window.innerWidth, height: window.innerHeight, backgroundColor: "#fff"}}>
            <View style={{width:"100%",height:window.innerHeight*0.07,backgroundColor:"#fff",flexDirection:"row",backgroundColor:"#fff"}}>

<TouchableOpacity onLongPress={()=>this.setState({status:"ALL"})} onPress={()=>this.setState({status:"ALL"})} style={{width:"10%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color:this.state.status=="ALL"?"#000":"gray", fontWeight: "400", fontSize: "1rem", textAlign: "center"}}>
                                        Mis facturas
                  </Text>
                  <View style={{position:"absolute",bottom:0, width:"60%",alignSelf:"center",height:this.state.status=="ALL"?4:0,backgroundColor:"#FFC524"}}/>

</TouchableOpacity>
<TouchableOpacity onLongPress={()=>this.setState({status:"DETAILS"})} onPress={()=>this.setState({status:"DETAILS"})} style={{width:"20%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: this.state.status=="DETAILS"?"#000":"gray", fontWeight: "400", fontSize: "1rem", textAlign: "center"}}>
                                        Datos de facturación
                  </Text>
                  <View style={{width:"100",height:4,position:"absolute",top:0,backgroundColor:"#000"}}></View>
                  <View style={{position:"absolute",bottom:0, width:"60%",alignSelf:"center",height:this.state.status=="DETAILS"?4:0,backgroundColor:"#FFC524"}}/>
</TouchableOpacity>


          </View>
          {this.state.status=="ALL" &&
          <View>
            <Text style={{ paddingTop: window.innerHeight * 0.03, textDecorationLine: "none", color: "#000", fontWeight: "500", fontSize: "2rem", textAlign: "left", marginLeft: window.innerWidth * 0.02 }}>
                                        Facturas
                  </Text>
                  <Text style={{paddingBottom: window.innerHeight * 0.03, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.3rem", textAlign: "left", marginLeft: window.innerWidth * 0.02 }}>
                  Revisa todas tus facturas
                  </Text>
                  <View style={{width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:window.innerHeight*0.08,backgroundColor:"#fff",flexDirection:"row"}}>
<View style={{width:"40%",alignItems:"flex-start",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.02 }}>
                                        Número de factura
                  </Text>
                  
</View>
<View style={{width:"20%",height:"100%"}}/>
<View style={{width:"20%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.02 }}>
                                        Importe
                  </Text>
                  
</View>
<View style={{width:"20%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.02 }}>
                                        Descargar
                  </Text>
                  
</View>

                </View>
                  </View>
          }
          {this.state.status=="DETAILS" &&
          <View>
            <Text style={{ paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "500", fontSize: "2rem", textAlign: "left", marginLeft: window.innerWidth * 0.02 }}>
                    Datos de facturación
                  </Text>
                  <Text style={{paddingBottom: window.innerHeight * 0.01, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.3rem", textAlign: "left", marginLeft: window.innerWidth * 0.02 }}>
                  Revisa y edita tus datos de facturación
                  </Text>
                  <Text style={{paddingBottom: window.innerHeight * 0.01, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.02 }}>
                  Nombre y apellidos del autónomo o nombre fiscal de la empresa
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"Restaurante Gourmet S.L"} style={{marginLeft:window.innerWidth*0.02, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "30%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <Text style={{paddingBottom: window.innerHeight * 0.01, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.02 }}>
                  CIF o NIF
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"B – XXXXXXXX"} style={{marginLeft:window.innerWidth*0.02, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "30%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <Text style={{paddingBottom: window.innerHeight * 0.01, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.02 }}>
                  Dirección fiscal
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"C/ Bruc 26"} style={{marginLeft:window.innerWidth*0.02, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "30%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <Text style={{paddingBottom: window.innerHeight * 0.01, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.02 }}>
                  Ciudad
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"Manresa"} style={{marginLeft:window.innerWidth*0.02, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "30%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                 
                  <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.03 }}>
                                               Confirmo que todos los datos introducidos en este fromulario són correctos y correponden a mis datos fiscales. Si alguna información es incorrecta elcomensal no se hace responsable. 
                         </Text>

                  <TouchableOpacity style={{width:window.innerWidth*0.3,alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"flex-start",marginLeft:window.innerWidth*0.02,marginTop:window.innerHeight*0.02}}>
       <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.03 }}>
                                               Guardar datos de facturación
                         </Text>
                         
       
       
                       </TouchableOpacity>
                  </View>
          }
            </View>
        )
    }
}