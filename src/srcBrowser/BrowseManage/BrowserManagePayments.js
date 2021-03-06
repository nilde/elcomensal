import * as React from 'react';
import Title from 'reactjs-title'
import { Animated, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback, TextInput, FlatList } from 'react-native';
import { IoIosClose, IoMdRadioButtonOff, IoMdRadioButtonOn, IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import Dropdown from 'react-dropdown';
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader,SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Collapsible from 'react-collapsible';
import { Background } from 'react-parallax';
import GeneralContext from '../../Provider.js';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          status:"PAYMENTS_LIST",
          paymentsData:{
           name:"",
           direction:"",
           cif:"",
           city:"",
          }
        }
    }

    componentDidMount(){
      this.setState({paymentsData:this.context.paymentsData})
    }

    updateValue(key,value){
      var paymentsData=this.state.paymentsData
      paymentsData[key]=value
      this.setState({paymentsData:paymentsData})
    }


    savePaymentInfo(){
      this.context.savePaymentInfo();
    }


    static contextType = GeneralContext;
    render() {

        return (
            <View style={{zIndex: 0,width: window.innerWidth, height: window.innerHeight, backgroundColor: "#fff"}}>
            <View style={{width:"100%",height:window.innerHeight*0.07,backgroundColor:"#fff",flexDirection:"row",backgroundColor:"#fff",borderBottomWidth:2,borderColor:"#f5f5f5"}}>

<TouchableOpacity onLongPress={()=>this.setState({status:"PAYMENTS_LIST"})} onPress={()=>this.setState({status:"PAYMENTS_LIST"})} style={{width:"10%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color:this.state.status=="PAYMENTS_LIST"?"#000":"gray", fontWeight: "400", fontSize: "1.1rem", textAlign: "center"}}>
                                        Mis facturas
                  </Text>
                  
</TouchableOpacity>
<TouchableOpacity onLongPress={()=>this.setState({status:"DETAILS"})} onPress={()=>this.setState({status:"DETAILS"})} style={{width:"20%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: this.state.status=="DETAILS"?"#000":"gray", fontWeight: "400", fontSize: "1.1rem", textAlign: "center"}}>
                                        Datos de facturación
                  </Text>
                </TouchableOpacity>


          </View>
          {this.state.status=="PAYMENTS_LIST" &&
          <View>
                  <TextInput
                  onChangeText={(text)=>this.filterDishes(text)}
                   numberOfLines={1} placeholder={"Buscar una factura"} style={{marginLeft:window.innerWidth*0.01, marginVertical: window.innerHeight * 0.02,borderRadius:10, fontSize: "1rem", width: "30%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015,marginTop:window.innerHeight*0.05 }} />
                
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
                                        Fecha de emisión
                  </Text>
                  
</View>

                </View>
                  </View>
          }
          {this.state.status=="DETAILS" &&
          <ScrollView>
        
                 <View style={{width:"100%",flexDirection:"row",paddingTop: window.innerHeight * 0.05,}}>
                   <View style={{width:"50%",justifyContent:"flex-start"}}>
                  <Text style={{paddingBottom: window.innerHeight * 0.01,  textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.02,width:"100%" }}>
                  Nombre y apellidos del autónomo o nombre fiscal de la empresa
                  </Text>
                  <TextInput
                  onChangeText={(text)=>this.updateValue("name",text)}
                   numberOfLines={1} placeholder={"Restaurante Gourmet S.L"} style={{marginTop:window.innerHeight*0.01,borderRadius:10, marginLeft:window.innerWidth*0.02, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "50%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <Text style={{paddingBottom: window.innerHeight * 0.01, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.02 }}>
                  CIF o NIF
                  </Text>
                  <TextInput
                  onChangeText={(text)=>this.updateValue("cif",text)}
                   numberOfLines={1} placeholder={"B – XXXXXXXX"} style={{marginTop:window.innerHeight*0.01,borderRadius:10,marginLeft:window.innerWidth*0.02, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "50%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  </View>
                  <View style={{width:"50%",justifyContent:"flex-start"}}>
                  <Text style={{paddingBottom: window.innerHeight * 0.01,  textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.02 }}>
                  Dirección fiscal
                  </Text>
                  <TextInput
                  onChangeText={(text)=>this.updateValue("direction",text)}
                  numberOfLines={1} placeholder={"C/ Bruc 26"} style={{marginTop:window.innerHeight*0.01,borderRadius:10,marginLeft:window.innerWidth*0.02, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "50%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <Text style={{paddingBottom: window.innerHeight * 0.01, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.02 }}>
                  Ciudad
                  </Text>
                  <TextInput
                  onChangeText={(text)=>this.updateValue("city",text)}
                   numberOfLines={1} placeholder={"Manresa"} style={{marginTop:window.innerHeight*0.01, borderRadius:10,marginLeft:window.innerWidth*0.02, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "50%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  </View>
                  </View>
                 

                  <TouchableOpacity
                  onPress={()=>this.savePaymentInfo()}
                   style={{marginLeft:window.innerWidth*0.02, width:window.innerWidth*0.3,borderRadius:10, alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"flex-start",marginLeft:window.innerWidth*0.02,marginTop:window.innerHeight*0.02}}>
       <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                               Guardar cambios
                         </Text>
                         
       
       
                       </TouchableOpacity>
                       <Text style={{marginLeft:window.innerWidth*0.02, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.03,width:"80%" }}>
                                               Confirmo que todos los datos introducidos en este fromulario són correctos y correponden a mis datos fiscales. Si alguna información es incorrecta elcomensal no se hace responsable de los daños causados. 
                         </Text>
                       <View style={{width:"100%",height:window.innerHeight*0.02}}/>
                  </ScrollView>
          }
            </View>
        )
    }
}