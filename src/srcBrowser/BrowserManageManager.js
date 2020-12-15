import * as React from 'react';
import Title from 'reactjs-title'
import { Animated, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback, TextInput, FlatList } from 'react-native';
import { IoIosClose, IoMdRadioButtonOff, IoMdRadioButtonOn, IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import Dropdown from 'react-dropdown';
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader,SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Collapsible from 'react-collapsible';
import { Background } from 'react-parallax';
import Carta from './BrowserManageCarta'
import Dishes from './BrowserManageDishes'
import Help from './BrowserManageHelp'
import Home from './BrowserManageHome'
import Menus from './BrowserManageMenus'
import Payments from './BrowserManagePayments'
import Profile from './BrowserManageProfile'
const options = [
    '00:00h', '00:15h', '00:30h', "00:45h",
    '01:00h', '01:15h', '01:30h', "01:45h",
    '02:00h', '02:15h', '02:30h', "02:45h",
    '03:00h', '03:15h', '03:30h', "03:45h",
    '04:00h', '04:15h', '04:30h', "04:45h",
];


const optionsProduct = ["Especialidad", "Vegetariano", "Vegano", "Sin gluten", "Sin lactosa", "Para compartir", "Por unidad", "Alcohol", "Sin alcohol", "Halal"]
const allergensOptions= ["Pescado","Frutos secos","Lácteos","Moluscos","Cereales con gluten","Crustáceos","Huevos","Cacahuetes","Soja","Apio","Mostaza","Sésamo","Altramuz","Sulfitos"]
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.updateManagerStatus=this.updateManagerStatus.bind(this);
        this.state = {
            manageStatus:"HOME",
            lateralMenu : new Animated.Value(window.innerWidth*0.05)
        }
    }
    
    updateManagerStatus(newStatus){
        this.setState({manageStatus:newStatus})
    }



    render() {

        return (
            <View style={{flexDirection:"row" ,zIndex: 99, position: "absolute", top: 0, width: "100%", height: window.innerHeight, backgroundColor: "#fff",  alignItems: "center",overflow:"hidden" }}>
            <Animated.View 
            style={{height:window.innerHeight,backgroundColor:"#000",   width: this.state.animation}}>
            </Animated.View>

           
            {
                this.state.manageStatus=="HOME" &&
                <Home  updateManagerStatus={this.updateManagerStatus}/>
     //Home
 }
 {
    this.state.manageStatus=="PROFILE" &&
    <Profile updateManagerStatus={this.updateManagerStatus}/>
     //Profile
 }
 { this.state.manageStatus=="CARTA" &&
 <Carta updateManagerStatus={this.updateManagerStatus}/>
     //Carta
 }
 { this.state.manageStatus=="MENUS" &&
 <Menus updateManagerStatus={this.updateManagerStatus}/>
     //Menús
 }
 { this.state.manageStatus=="DISHES" &&
 <Dishes updateManagerStatus={this.updateManagerStatus}/>
     //Platos
 }
 { this.state.manageStatus=="PAYMENTS" &&
 <Payments updateManagerStatus={this.updateManagerStatus}/>
     //Payments
 }
 { this.state.manageStatus=="HELP" &&
 <Help updateManagerStatus={this.updateManagerStatus}/>
     //Help
 }


            </View>
        )
    }
}