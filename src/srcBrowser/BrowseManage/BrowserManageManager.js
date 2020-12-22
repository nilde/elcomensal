import * as React from 'react';
import Title from 'reactjs-title'
import { Animated, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback, TextInput, FlatList } from 'react-native';
import { IoIosClose, IoMdRadioButtonOff, IoMdRadioButtonOn, IoIosRadioButtonOff, IoIosRadioButtonOn, IoIosMenu, IoMdMenu, IoIosCard, IoIosHelpCircle } from "react-icons/io";
import { RiArrowLeftLine } from "react-icons/ri";
import { ImExit, ImSpoonKnife } from "react-icons/im";
import {GiChefToque} from "react-icons/gi"
import {BiPowerOff} from "react-icons/bi"
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
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";

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
            manageStatus:"DISHES",
            lateralMenu : new Animated.Value(window.innerWidth*0.05),
            menuOpen:false
        }
    }
    
    updateManagerStatus(newStatus){
        this.setState({manageStatus:newStatus})
    }

    componentDidMount(){
        
    }
    showMenu(){
        Animated.timing(this.state.lateralMenu, {
            toValue: window.innerWidth*0.3,
            duration: 300
          }).start(()=>
        this.setState({
            menuOpen:true
        }))
    }
    closeMenu(){
        this.setState({
            menuOpen:false
        },()=> Animated.timing(this.state.lateralMenu, {
            toValue: window.innerWidth*0.05,
            duration: 300,
          }).start())
    }


    render() {

        return (
            <View style={{flexDirection:"row" ,zIndex: 99, position: "absolute", top: 0, width: window.innerWidth, height: window.innerHeight, backgroundColor: "#fff",  alignItems: "center",overflow:"hidden",flexDirection:"row" }}>
            <Animated.View 
            style={{boxShadow: "0px 30px 10px rgba(0,0,0,0.1)",height:window.innerHeight,backgroundColor:"#FFCB00",zIndex:1,   width: this.state.lateralMenu,overflow:"hidden"}}>
          {this.state.menuOpen &&
           <View>
            <Text style={{ color: "#000", fontWeight: "500", fontSize: "2.5rem", paddingHorizontal: "5%", paddingTop: window.innerHeight * 0.02, textAlign: "left", width: "100%", backgroundColor: "transparent" }}>

elcomensal
</Text>
<Text style={{ color: "#000", fontWeight: "400", fontSize: "1.5rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.02, textAlign: "left", width: "100%", backgroundColor: "transparent" }}>

restaurantes
</Text>
<TouchableOpacity style={{paddingVertical: window.innerHeight * 0.02,flexDirection:"row",justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.02}} onLongPress={()=>{this.updateManagerStatus("DISHES");this.closeMenu()}} onPress={()=>{this.updateManagerStatus("DISHES");this.closeMenu()}}>
<ImSpoonKnife size="1.5em" />                  
<Text style={{ color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingLeft:window.innerWidth*0.01,  textAlign: "left", width: "100%", backgroundColor: "transparent" }}>

Mi restaurante
</Text>
</TouchableOpacity>


<TouchableOpacity style={{paddingVertical: window.innerHeight * 0.02,flexDirection:"row",justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.02}} onLongPress={()=>{this.updateManagerStatus("PAYMENTS");this.closeMenu()}} onPress={()=>{this.updateManagerStatus("PAYMENTS");this.closeMenu()}}>
<IoIosCard size="1.5em" />     
<Text style={{ color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingLeft:window.innerWidth*0.01, paddingVertical: window.innerHeight * 0.02, textAlign: "left", width: "100%", backgroundColor: "transparent" }}>

Pagos
</Text>
</TouchableOpacity>
<TouchableOpacity style={{paddingVertical: window.innerHeight * 0.02,flexDirection:"row",justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.02}} onLongPress={()=>{this.updateManagerStatus("HELP");this.closeMenu()}} onPress={()=>{this.updateManagerStatus("HELP");this.closeMenu()}}>
<IoIosHelpCircle size="1.5em" />     
<Text style={{ color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingLeft:window.innerWidth*0.01, paddingVertical: window.innerHeight * 0.02, textAlign: "left", width: "100%", backgroundColor: "transparent" }}>

Ayuda
</Text>
</TouchableOpacity>
<TouchableOpacity style={{paddingVertical: window.innerHeight * 0.02,flexDirection:"row",justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.02}} onLongPress={()=>{this.updateManagerStatus("PROFILE");this.closeMenu() }} onPress={()=>{this.updateManagerStatus("PROFILE");this.closeMenu()}}>
<GiChefToque size="1.5em" />     
<Text style={{ color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingLeft:window.innerWidth*0.01, paddingVertical: window.innerHeight * 0.02, textAlign: "left", width: "100%", backgroundColor: "transparent" }}>

Perfil
</Text>
</TouchableOpacity>
<Link to="/" style={{textDecoration:"none",color:"#000",marginTop:window.innerHeight*0.35}} >
<View  style={{paddingVertical: window.innerHeight * 0.02,flexDirection:"row",justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.02}} onLongPress={()=>this.updateManagerStatus("DISHES")} onPress={()=>this.updateManagerStatus("DISHES")}>
<BiPowerOff size="1.5em" />  
<Text style={{ color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingLeft:window.innerWidth*0.01, paddingVertical: window.innerHeight * 0.02, textAlign: "left", width: "100%", backgroundColor: "transparent" }}>

Cerrar sesión
</Text>
</View>
</Link>
<TouchableOpacity onLongPress={() => this.closeMenu()} onPress={() => this.closeMenu()} style={{ alignSelf: "center", position: "absolute", top: window.innerHeight*0.01,right:window.innerWidth*0.02 }}>
                      <RiArrowLeftLine size="2em" />
                    </TouchableOpacity> 
</View>
}
{!this.state.menuOpen &&
           <View style={{height:"100%"}}>
           <TouchableOpacity onLongPress={() => this.showMenu()} onPress={() => this.showMenu()} style={{marginTop:window.innerHeight*0.02,  alignSelf: "center"}}>
                      <IoMdMenu size="2em" />
                    </TouchableOpacity>    
                    <TouchableOpacity onPress={() => this.updateManagerStatus("DISHES")} style={{marginTop:window.innerHeight*0.1, alignSelf: "center"}}>
                    <ImSpoonKnife size="1.5em" />   
                    </TouchableOpacity>     
                    <TouchableOpacity onPress={() => this.updateManagerStatus("PAYMENTS")} style={{marginTop:window.innerHeight*0.1,  alignSelf: "center"}}>
                    <IoIosCard size="1.5em" /> 
                    </TouchableOpacity>     
                    <TouchableOpacity onPress={() => this.updateManagerStatus("HELP")} style={{marginTop:window.innerHeight*0.1,  alignSelf: "center"}}>
                    <IoIosHelpCircle size="1.5em" />  
                    </TouchableOpacity>     
                    <TouchableOpacity onPress={() => this.updateManagerStatus("PROFILE")} style={{marginTop:window.innerHeight*0.1,  alignSelf: "center"}}>
                    <GiChefToque size="1.5em" />  
                    </TouchableOpacity>     
                    <TouchableOpacity style={{marginTop:window.innerHeight*0.1,position:"absolute",bottom:window.innerHeight*0.02,  alignSelf: "center"}}>
                    <Link to="/" style={{textDecoration:"none",color:"#000",marginTop:window.innerHeight*0.35}} >
                    <BiPowerOff size="1.5em" />  
                    </Link>
                    </TouchableOpacity>    
               </View>
}
            </Animated.View>

           <View style={{width:window.innerWidth}}>
            {
                this.state.manageStatus=="HOME" &&
                <Home lateralMenuOffset={this.state.lateralMenu} updateManagerStatus={this.updateManagerStatus}/>
     //Home
 }
 {
    this.state.manageStatus=="PROFILE" &&
    <Profile menuOpen={this.state.menuOpen} updateManagerStatus={this.updateManagerStatus}/>
     //Profile
 }
 { this.state.manageStatus=="CARTA" &&
 <Carta menuOpen={this.state.menuOpen} updateManagerStatus={this.updateManagerStatus}/>
     //Carta
 }
 { this.state.manageStatus=="MENUS" &&
 <Menus menuOpen={this.state.menuOpen} updateManagerStatus={this.updateManagerStatus}/>
     //Menús
 }
 { this.state.manageStatus=="DISHES" &&
 <Dishes menuOpen={this.state.menuOpen} updateManagerStatus={this.updateManagerStatus}/>
     //Platos
 }
 { this.state.manageStatus=="PAYMENTS" &&
 <Payments menuOpen={this.state.menuOpen} updateManagerStatus={this.updateManagerStatus}/>
     //Payments
 }
 { this.state.manageStatus=="HELP" &&
 <Help menuOpen={this.state.menuOpen} updateManagerStatus={this.updateManagerStatus}/>
     //Help
 }
 </View>

            </View>
        )
    }
}