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
            manageStatus:""
        }
    }



    render() {

        return (
            <View style={{zIndex: 0,width: window.innerWidth, height: window.innerHeight, backgroundColor: "#fff"}}>
            <View style={{width:"100%",height:window.innerHeight*0.07,backgroundColor:"#fff",flexDirection:"row",backgroundColor:"#f5f5f5"}}>

<TouchableOpacity onLongPress={()=>this.setState({status:"DISHES"})} onPress={()=>this.setState({status:"DISHES"})} style={{width:"10%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color:this.state.status=="DISHES"?"#000":"gray", fontWeight: this.state.status=="DISHES"?"500":"400", fontSize: "1rem", textAlign: "center"}}>
                                        Mis facturas
                  </Text>
                  <View style={{position:"absolute",bottom:0, width:"60%",alignSelf:"center",height:this.state.status=="DISHES"?4:0,backgroundColor:"#FFC627"}}/>

</TouchableOpacity>
<TouchableOpacity onLongPress={()=>this.setState({status:"MENUS"})} onPress={()=>this.setState({status:"MENUS"})} style={{width:"20%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: this.state.status=="MENUS"?"#000":"gray", fontWeight: this.state.status=="MENUS"?"500":"400", fontSize: "1rem", textAlign: "center"}}>
                                        Datos de facturación
                  </Text>
                  <View style={{width:"100",height:4,position:"absolute",top:0,backgroundColor:"#000"}}></View>
                  <View style={{position:"absolute",bottom:0, width:"60%",alignSelf:"center",height:this.state.status=="MENUS"?4:0,backgroundColor:"#FFC627"}}/>
</TouchableOpacity>


          </View>
            <Text style={{ paddingTop: window.innerHeight * 0.03, textDecorationLine: "none", color: "#000", fontWeight: "500", fontSize: "2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Pagos
                  </Text>
                  <Text style={{paddingBottom: window.innerHeight * 0.03, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.3rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                  Revisa tus facturas y tus datos de facturación
                  </Text>

            </View>
        )
    }
}