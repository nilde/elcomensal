import * as React from 'react';
import Title from 'reactjs-title'
import { Animated, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback, TextInput, FlatList } from 'react-native';
import { IoIosClose, IoMdRadioButtonOff, IoMdRadioButtonOn, IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import Dropdown from 'react-dropdown';
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader,SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Collapsible from 'react-collapsible';
import { Background } from 'react-parallax';
const optionsProduct = ["Especialidad", "Vegetariano", "Vegano", "Sin gluten", "Sin lactosa", "Para compartir", "Por unidad", "Alcohol", "Sin alcohol", "Halal"]
const allergensOptions=["Pescado","Frutos secos","Lácteos","Moluscos","Cereales con gluten","Crustáceos","Huevos","Cacahuetes","Soja","Apio","Mostaza","Sésamo","Altramuz","Sulfitos"]

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status:"DISHES",
            showNewMenu:false,
            showNewCategory:false,
            showNewDish:false,
            editNewMenu:false,
            editNewCategory:false,
            editNewDish:false
        }
    }
    




    render() {

        return (
            <View style={{zIndex: 0,width: window.innerWidth, height: window.innerHeight, backgroundColor: "#fff"}}>
          <View style={{width:"100%",height:window.innerHeight*0.07,backgroundColor:"#fff",flexDirection:"row",backgroundColor:"#f5f5f5"}}>

<TouchableOpacity onLongPress={()=>this.setState({status:"DISHES"})} onPress={()=>this.setState({status:"DISHES"})} style={{width:"10%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color:this.state.status=="DISHES"?"#000":"gray", fontWeight: this.state.status=="DISHES"?"500":"400", fontSize: "1rem", textAlign: "center"}}>
                                        Platos
                  </Text>
                  <View style={{position:"absolute",bottom:0, width:"60%",alignSelf:"center",height:this.state.status=="DISHES"?4:0,backgroundColor:"#FFC627"}}/>

</TouchableOpacity>
<TouchableOpacity onLongPress={()=>this.setState({status:"MENUS"})} onPress={()=>this.setState({status:"MENUS"})} style={{width:"10%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: this.state.status=="MENUS"?"#000":"gray", fontWeight: this.state.status=="MENUS"?"500":"400", fontSize: "1rem", textAlign: "center"}}>
                                        Menús
                  </Text>
                  <View style={{width:"100",height:4,position:"absolute",top:0,backgroundColor:"#000"}}></View>
                  <View style={{position:"absolute",bottom:0, width:"60%",alignSelf:"center",height:this.state.status=="MENUS"?4:0,backgroundColor:"#FFC627"}}/>
</TouchableOpacity>
<TouchableOpacity onLongPress={()=>this.setState({status:"CARTA"})} onPress={()=>this.setState({status:"CARTA"})} style={{width:"10%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color:this.state.status=="CARTA"?"#000":"gray", fontWeight: this.state.status=="CARTA"?"500":"400", fontSize: "1rem", textAlign: "center"}}>
                                        Categorías
                  </Text>
                  <View style={{width:"100",height:4,position:"absolute",bottom:0,backgroundColor:"#000"}}></View>
                  <View style={{position:"absolute",bottom:0, width:"60%",alignSelf:"center",height:this.state.status=="CARTA"?4:0,backgroundColor:"#FFC627"}}/>


                </TouchableOpacity>
                
                <TouchableOpacity style={{marginLeft:this.props.menuOpen? window.innerWidth*0.3:window.innerWidth*0.55, width:"10%",alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left" }}>
                                        Ver mi carta
                  </Text>
                  


                </TouchableOpacity>
          </View>
          {
              this.state.status=="DISHES" &&
        
           <ScrollView>
               <View style={{flexDirection:"row",width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,justifyContent:"space-between",paddingTop: window.innerHeight * 0.03,}}>
            <Text style={{textDecorationLine: "none", color: "#000", fontWeight: "500", fontSize: "2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Mis platos y bebidas
                  </Text>
                  <TouchableOpacity
                  onLongPress={()=>this.setState({showNewMenu:false,showNewCategory:false,showNewDish:true})}
                  onPress={()=>this.setState({showNewMenu:false,showNewCategory:false,showNewDish:true})}
                   style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",marginRight:window.innerWidth*0.01}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingHorizontal:window.innerWidth*0.02,paddingVertical:window.innerHeight*0.02 }}>
                                        + Añadir plato o bebida
                  </Text>
                  


                </TouchableOpacity>
                  </View>
                  <Text style={{paddingBottom: window.innerHeight * 0.03, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.3rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                  Configura los platos y bebidas que sirves en tu restaurante
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"Buscar un plato o bebida"} style={{marginLeft:window.innerWidth*0.01, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "30%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                <View style={{width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:window.innerHeight*0.08,backgroundColor:"#fff",flexDirection:"row"}}>
<View style={{width:"20%",alignItems:"flex-start",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Nombre del plato
                  </Text>
                  
</View>
<View style={{width:"20%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Menús
                  </Text>
                  
</View>
<View style={{width:"20%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Categorías
                  </Text>
                  
</View>
<View style={{width:"20%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Precio
                  </Text>
                  
</View>
<View style={{width:"20%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Disponibilidad
                  </Text>
                  
</View>
                </View>
                  </ScrollView>    
                }
                {
              this.state.status=="MENUS" &&
        
           <ScrollView>
               
           <View style={{flexDirection:"row",width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,justifyContent:"space-between",paddingTop: window.innerHeight * 0.03,}}>
            <Text style={{textDecorationLine: "none", color: "#000", fontWeight: "500", fontSize: "2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Mis menús
                  </Text>
                  <TouchableOpacity
                  onLongPress={()=>this.setState({showNewMenu:true,showNewCategory:false,showNewDish:false})}
                  onPress={()=>this.setState({showNewMenu:true,showNewCategory:false,showNewDish:false})}
                   style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",marginRight:window.innerWidth*0.01}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingHorizontal:window.innerWidth*0.02,paddingVertical:window.innerHeight*0.02 }}>
                                        + Añadir menú
                  </Text>
                  


                </TouchableOpacity>
                  </View>
                  <Text style={{paddingBottom: window.innerHeight * 0.03, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.3rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                  Configura los menús de tu restaurante
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"Buscar un menú"} style={{marginLeft:window.innerWidth*0.01, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "30%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <View style={{width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:window.innerHeight*0.08,backgroundColor:"#fff",flexDirection:"row"}}>
<View style={{width:"30%",alignItems:"flex-start",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Nombre del menú
                  </Text>
                  
</View>
<View style={{width:"50%",alignItems:"flex-start",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Disponibilidad
                  </Text>
                  
</View>

<View style={{width:"20%",alignItems:"flex-start",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
Núm. de artículos
                  </Text>
                  
</View>

                </View>
                <View style={{width:"100%",backgroundColor:"#fff",flexDirection:"row",marginTop:window.innerHeight*0.0025}}>
                <TouchableOpacity style={{width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:window.innerHeight*0.08,backgroundColor:"#fff",flexDirection:"row"}}>
<View style={{width:"30%",alignItems:"flex-start",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Menú 1
                  </Text>
                  
</View>
<View style={{width:"50%",alignItems:"flex-start",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Todos los jueves de 08:00h a 13:00h
                  </Text>
                  
</View>

<View style={{width:"20%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left" }}>
12
                  </Text>
                  
</View>

                </TouchableOpacity>
                </View>
                  </ScrollView>    
                }
                {
              this.state.status=="CARTA" &&
        
           <ScrollView>
               
           <View style={{flexDirection:"row",width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,justifyContent:"space-between",paddingTop: window.innerHeight * 0.03,}}>
            <Text style={{textDecorationLine: "none", color: "#000", fontWeight: "500", fontSize: "2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Categorías
                  </Text>
                  <TouchableOpacity
                  onLongPress={()=>this.setState({showNewMenu:false,showNewCategory:true,showNewDish:false})}
                  onPress={()=>this.setState({showNewMenu:false,showNewCategory:true,showNewDish:false})}
                   style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",marginRight:window.innerWidth*0.01}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingHorizontal:window.innerWidth*0.02,paddingVertical:window.innerHeight*0.02 }}>
                                        + Añadir categoría
                  </Text>
                  


                </TouchableOpacity>
                  </View>
                  <Text style={{paddingBottom: window.innerHeight * 0.03, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.3rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                  Configura las categorias de tu carta
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"Buscar una categoría"} style={{marginLeft:window.innerWidth*0.01, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "30%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                <View style={{width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:window.innerHeight*0.08,backgroundColor:"#fff",flexDirection:"row"}}>
<View style={{width:"30%",alignItems:"flex-start",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Nombre de la categoría
                  </Text>
                  
</View>
<View style={{width:"50%",alignItems:"flex-start",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Artículos
                  </Text>
                  
</View>
<View style={{width:"20%",alignItems:"flex-start",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
Núm. de artículos
                  </Text>
                  
</View>

                </View>
                <View style={{width:"100%",height:100,backgroundColor:"red",flexDirection:"row",marginTop:window.innerHeight*0.0025}}>
                <TouchableOpacity style={{width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:window.innerHeight*0.08,backgroundColor:"#fff",flexDirection:"row"}}>
<View style={{width:"30%",alignItems:"flex-start",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                       Hamburguesas
                  </Text>
                  
</View>
<View style={{width:"50%",alignItems:"flex-start",justifyContent:"center"}}>
<Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Doble cheesbuguer, Gran con queso
                  </Text>
                  
</View>

<View style={{width:"20%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left" }}>
12
                  </Text>
                  
</View>

                </TouchableOpacity>
                </View>
                  </ScrollView>    
                }
                {false &&
                <View style={{position:"absolute",top:0,width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.4)",justifyContent:"center",alignItems:"center"}}>
                <View style={{width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,backgroundColor:"#fff",paddingVertical:window.innerHeight*0.02,flexDirection:"row"}}>
<View style={{width:"50%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.01}}>
<Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1.5rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Nuevo menú
                                       

                  </Text>
   
                  <TextInput numberOfLines={1} placeholder={"Nombre del menú"} style={{marginVertical: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <TextInput numberOfLines={3} placeholder={"Información adicional (opcional) "} style={{marginVertical: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Precio
                  </Text>
                  <TextInput numberOfLines={3} placeholder={"14.50€"} style={{marginVertical: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                 
                  <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01,marginBottom:window.innerHeight*0.02 }}>
                                        Secciones
                  </Text>
                  <TouchableOpacity style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Primeros
                  </Text>
                  <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        0 artículos
                  </Text>
                  
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Segundos
                  </Text>
                  <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        0 artículos
                  </Text>
                  
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Postres
                  </Text>
                  <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        0 artículos
                  </Text>
                  
                </TouchableOpacity>
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",width:"95%",position:"absolute",bottom:window.innerHeight*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Crear menú
                  </Text>
                  


                </TouchableOpacity>
</View>
<View style={{width:"50%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.02,height:"100%"}}>
<Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01,marginBottom:window.innerHeight*0.02 }}>
                                        Artículos
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"Buscar un artículo"} style={{marginVertical: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  
                  <ScrollView style={{backgroundColor:"#f5f5f5",alignSelf:"center",width:"95%",height:window.innerHeight*0.7}}>
{
    ["Hamburguesas","Hamburguesas","Hamburguesas","Hamburguesas"].map((item,index)=>(
        <View style={{width:"99%",alignSelf:"center",backgroundColor:"#fff",justifyContent:"center",alignItems:"center",marginTop:window.innerHeight*0.0025}}>
            <View style={{width:"100%",flexDirection:"row"}}>
            <View style={{width:"90%",justifyContent:"center",alignItems:"flex-start"}}>
        <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01}}>
 
            {item}
            </Text>
            </View>
            <View style={{width:"10%",justifyContent:"center",alignItems:"center",height:window.innerHeight*0.05}}>
                <View style={{width:18,height:18,backgroundColor:"red"}}>

                </View>
                </View>
            </View>
        </View>
    ))
}


                </ScrollView>
</View>
<TouchableOpacity onLongPress={() => this.setState({ showDetails: false })} onPress={() => this.setState({ showDetails: false })} style={{ alignSelf: "flex-end", position: "absolute", top: 0,right:0 }}>
                      <IoIosClose size="2.5em" />
                    </TouchableOpacity>
</View>
                </View>
                }
               
                {this.state.showNewMenu &&
                <ScrollView style={{position:"absolute",top:0,width:this.state.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:"100%",backgroundColor:"#fff"}}>
                <View style={{width:"100%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.02,flexDirection:"row"}}>
<View style={{width:"50%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.01}}>
<Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.5rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Nuevo menú
                                       

                  </Text>
   
                  <TextInput numberOfLines={1} placeholder={"Nombre del menú Ej. Menú fin de semana 1"} style={{marginTop: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <TextInput numberOfLines={3} placeholder={"Información adicional Ej. Botella de vino de la casa o refresco incluido"} style={{marginVertical: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                 
                  <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01,marginBottom:window.innerHeight*0.02 }}>
                                        Disponibilidad
                  </Text>
                  <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Lunes
                  </Text>
                  <View style={{flexDirection:"row",alignSelf:"flex-end"}}>
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  


                </TouchableOpacity>
                </View>
                  
                </View>
                <View style={{width:"100%",flexDirection:"row"}}>
                <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Franjas
                                        </Text>
                                        <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        1
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        2
                  </Text>
                  


                </TouchableOpacity>
                <View>
                <View style={{flexDirection:"row"}}>
                <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        de
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"00:00h"} style={{ fontSize: "1rem", width: "25%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        a
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"00:00h"} style={{ fontSize: "1rem", width: "25%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  </View>
                  <View style={{flexDirection:"row"}}>
                <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        de
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"00:00h"} style={{ fontSize: "1rem", width: "25%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        a
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"00:00h"} style={{ fontSize: "1rem", width: "25%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  </View>
</View>
                    </View>
                    
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Martes
                  </Text>
                  <View style={{flexDirection:"row",alignSelf:"flex-end"}}>
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  


                </TouchableOpacity>
                </View>
                  
                </View>
           
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Miércoles
                  </Text>
                  <View style={{flexDirection:"row",alignSelf:"flex-end"}}>
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  


                </TouchableOpacity>
                </View>
                </View>
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Jueves
                  </Text>
                  <View style={{flexDirection:"row",alignSelf:"flex-end"}}>
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  


                </TouchableOpacity>
                </View>
                  
                </View>
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Viernes
                  </Text>
                    <View style={{flexDirection:"row",alignSelf:"flex-end"}}>
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  


                </TouchableOpacity>
                </View>
                  
                </View>
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Sábado
                  </Text>
                    <View style={{flexDirection:"row",alignSelf:"flex-end"}}>
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  


                </TouchableOpacity>
                </View>
                  
                </View>
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Domingo
                  </Text>
                    <View style={{flexDirection:"row",alignSelf:"flex-end"}}>
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  


                </TouchableOpacity>
                </View>
                  
                </View>

                
</View>
<View style={{width:"50%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.01,height:"100%"}}>
    <View style={{width:"100%",backgroundColor:"#fff"}}>
    <View style={{flexDirection:"row",alignSelf:"flex-start",marginLeft:window.innerWidth*0.01}}>
                  <TouchableOpacity style={{ alignItems:"center",justifyContent:"center",backgroundColor:"#fff",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Primeros
                  </Text>
                  <View style={{width:"90%",alignSelf:"center",height:4,backgroundColor:"#FFCB00"}}/>


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#fff",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Segundos
                  </Text>
                  <View style={{width:"90%",alignSelf:"center",height:4,backgroundColor:"#FFCB00"}}/>


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#fff",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Postres
                  </Text>
                  <View style={{width:"90%",alignSelf:"center",height:4,backgroundColor:"#FFCB00"}}/>


                </TouchableOpacity>
                </View>
    </View>

                  <TextInput numberOfLines={1} placeholder={"Buscar un artículo"} style={{marginVertical: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  
                  <ScrollView style={{backgroundColor:"#f5f5f5",alignSelf:"center",width:"95%",height:window.innerHeight*0.7,paddingTop:window.innerHeight*0.0075}}>
{
    ["Hamburguesas","Hamburguesas","Hamburguesas","Hamburguesas"].map((item,index)=>(
        <View style={{width:"98%",alignSelf:"center",backgroundColor:"#fff",justifyContent:"center",alignItems:"center",marginTop:window.innerHeight*0.0025}}>
            <View style={{width:"100%",flexDirection:"row"}}>
            <View style={{width:"90%",justifyContent:"center",alignItems:"flex-start"}}>
        <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01}}>
 
            {item}
            </Text>
            </View>
            <View style={{width:"10%",justifyContent:"center",alignItems:"center",height:window.innerHeight*0.05}}>
                <View style={{width:18,height:18,backgroundColor:"#FFCB00"}}>

                </View>
                </View>
            </View>
        </View>
    ))
}


                </ScrollView>
</View>
<TouchableOpacity onLongPress={() => this.setState({ showNewMenu: false })} onPress={() => this.setState({ showNewMenu: false })} style={{ alignSelf: "flex-end", position: "absolute", top: 0,right:0 }}>
                      <IoIosClose size="2.5em" />
                    </TouchableOpacity>
</View>
<View style={{width:"100%",alignSelf:"center",justifyContent:"center",alignItems:"center",marginTop:window.innerHeight*0.02}}>
           
                  <TouchableOpacity 
                  onLongPress={()=>this.setState({showNewMenu:true,showNewCategory:false,showNewDish:false})}
                  onPress={()=>this.setState({showNewMenu:true,showNewCategory:false,showNewDish:false})} style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",width:"100%",}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left",paddingVertical:window.innerHeight*0.03 }}>
                                        Crear menú
                  </Text>
                  


                </TouchableOpacity>
                </View>
                </ScrollView>
                }
                {this.state.showNewCategory &&
                <ScrollView style={{position:"absolute",top:0,width:this.state.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:"100%",backgroundColor:"#fff"}}>
                <View style={{width:"100%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.02,flexDirection:"row"}}>
<View style={{width:"50%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.01}}>
<Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.5rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Nueva categoría
                                       

                  </Text>
   
                  <TextInput numberOfLines={1} placeholder={"Título de la categoria Ej. Hamburguesas"} style={{marginTop: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <TextInput numberOfLines={3} placeholder={"Información adicional Ej. Todas las hamburguesas van acompañadas de patatas y ensalada"} style={{marginVertical: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                 
                  <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01,marginBottom:window.innerHeight*0.02 }}>
                                        Disponibilidad
                  </Text>
                  <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Lunes
                  </Text>
                  <View style={{flexDirection:"row",alignSelf:"flex-end"}}>
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  


                </TouchableOpacity>
                </View>
                  
                </View>
                <View style={{width:"100%",flexDirection:"row"}}>
                <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Franjas
                                        </Text>
                                        <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        1
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        2
                  </Text>
                  


                </TouchableOpacity>
                <View>
                <View style={{flexDirection:"row"}}>
                <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        de
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"00:00h"} style={{ fontSize: "1rem", width: "25%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        a
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"00:00h"} style={{ fontSize: "1rem", width: "25%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  </View>
                  <View style={{flexDirection:"row"}}>
                <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        de
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"00:00h"} style={{ fontSize: "1rem", width: "25%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        a
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"00:00h"} style={{ fontSize: "1rem", width: "25%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  </View>
</View>
                    </View>
                    
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Martes
                  </Text>
                  <View style={{flexDirection:"row",alignSelf:"flex-end"}}>
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  


                </TouchableOpacity>
                </View>
                  
                </View>
           
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Miércoles
                  </Text>
                  <View style={{flexDirection:"row",alignSelf:"flex-end"}}>
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  


                </TouchableOpacity>
                </View>
                </View>
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Jueves
                  </Text>
                  <View style={{flexDirection:"row",alignSelf:"flex-end"}}>
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  


                </TouchableOpacity>
                </View>
                  
                </View>
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Viernes
                  </Text>
                    <View style={{flexDirection:"row",alignSelf:"flex-end"}}>
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  


                </TouchableOpacity>
                </View>
                  
                </View>
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Sábado
                  </Text>
                    <View style={{flexDirection:"row",alignSelf:"flex-end"}}>
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  


                </TouchableOpacity>
                </View>
                  
                </View>
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Domingo
                  </Text>
                    <View style={{flexDirection:"row",alignSelf:"flex-end"}}>
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  


                </TouchableOpacity>
                </View>
                  
                </View>

                
</View>
<View style={{width:"50%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.01,height:"100%"}}>
    <View style={{width:"100%",backgroundColor:"#fff"}}>
    <View style={{flexDirection:"row",alignSelf:"flex-start",marginLeft:window.innerWidth*0.01,justifyContent:"space-between",width:"90%"}}>
  <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                       Número de Artículos: 12
                  </Text>
                  
    </View>
    </View>

                  <TextInput numberOfLines={1} placeholder={"Buscar un artículo"} style={{marginVertical: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  
                  <ScrollView style={{backgroundColor:"#f5f5f5",alignSelf:"center",width:"95%",height:window.innerHeight*0.7,paddingTop:window.innerHeight*0.0075}}>
{
    ["Hamburguesas","Hamburguesas","Hamburguesas","Hamburguesas"].map((item,index)=>(
        <View style={{width:"98%",alignSelf:"center",backgroundColor:"#fff",justifyContent:"center",alignItems:"center",marginTop:window.innerHeight*0.0025}}>
            <View style={{width:"100%",flexDirection:"row"}}>
            <View style={{width:"90%",justifyContent:"center",alignItems:"flex-start"}}>
        <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01}}>
 
            {item}
            </Text>
            </View>
            <View style={{width:"10%",justifyContent:"center",alignItems:"center",height:window.innerHeight*0.05}}>
                <View style={{width:18,height:18,backgroundColor:"#FFCB00"}}>

                </View>
                </View>
            </View>
        </View>
    ))
}


                </ScrollView>
</View>
<TouchableOpacity onLongPress={() => this.setState({ showNewCategory: false })} onPress={() => this.setState({ showNewCategory: false })} style={{ alignSelf: "flex-end", position: "absolute", top: 0,right:0 }}>
                      <IoIosClose size="2.5em" />
                    </TouchableOpacity>
</View>
<View style={{width:"100%",alignSelf:"center",justifyContent:"center",alignItems:"center",marginTop:window.innerHeight*0.02}}>
           
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",width:"100%",}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left",paddingVertical:window.innerHeight*0.03 }}>
                                        Crear categoría
                  </Text>
                  


                </TouchableOpacity>
                </View>
                </ScrollView>
                }






                {this.state.showNewDish &&
                <ScrollView style={{position:"absolute",top:0,width:this.state.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:"100%",backgroundColor:"#fff"}}>
                <View style={{width:"100%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.02,flexDirection:"row"}}>
<View style={{width:"50%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.01}}>
<Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.5rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Nuevo plato o bebida
                                       

                  </Text>
                <View style={{width:"95%",alignSelf:"center",height:200,backgroundColor:"#f5f5f5",marginTop:window.innerHeight*0.02}}>

                </View>
                  <TextInput numberOfLines={1} placeholder={"Nombre del plato Ej. Hamburguesa con queso"} style={{marginTop: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <TextInput numberOfLines={3} placeholder={"Descripción (opcional) Ej. Hamburguesa de 200g de ternera con mozarella"} style={{marginVertical: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <View style={{width:"100%",flexDirection:"row",justifyContent:"space-between",marginTop:window.innerHeight*0.05}}>
                  <Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "2.5%",  paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
          Precio
            </Text>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:window.innerWidth*0.01}}>
            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "300", fontSize: "1rem", paddingLeft: window.innerWidth*0.02,paddingRight: window.innerWidth*0.01,  backgroundColor: "#fff" }}>
          Oferta
            </Text>
            <TouchableOpacity style={{width:20,height:20,backgroundColor:"#FFCB00"}}>

            </TouchableOpacity>
            </View>
                      </View>

                
                 <View style={{width:"95%",flexDirection:"row",justifyContent:"space-between",alignSelf:"center"}}>
                  <TextInput numberOfLines={1} placeholder={"6.45€"} style={{marginTop: window.innerHeight * 0.02, fontSize: "1rem", width: "40%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <TextInput numberOfLines={1} placeholder={"6.20€"} style={{marginTop: window.innerHeight * 0.02, fontSize: "1rem", width: "40%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                 
               
               
               
                </View>
                <Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "2.5%", marginTop:window.innerHeight*0.05, backgroundColor: "#fff" }}>
          Disponibilidad
            </Text>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "300", fontSize: "1.1rem", paddingHorizontal: "2.5%",   backgroundColor: "#fff" }}>
          ¿Este artículo está disponible?
            </Text>
            <TouchableOpacity style={{justifyContent:"center",alignItems:"center", width:window.innerWidth*0.04,height:window.innerHeight*0.06,backgroundColor:"#FFCB00"}}>
            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1.1rem" }}>
          Sí
            </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:"center",alignItems:"center",width:window.innerWidth*0.04,height:window.innerHeight*0.06,backgroundColor:"#f5f5f5"}}>
            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1.1rem" }}>
          No
            </Text>
            </TouchableOpacity>
            </View>
            
                  
               
              

                
</View>
<View style={{width:"50%",backgroundColor:"#fff",height:"100%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left",paddingBottom:window.innerHeight*0.02,marginLeft:window.innerWidth*0.01 }}>
                                        Etiquetas
                  </Text>
                  {
                      new Array(5).fill(1).map((item,index)=>(
<View style={{width:"100%",flexDirection:"row",paddingVertical:window.innerHeight*0.02}}>
  <View style={{width:"50%",flexDirection:"row"}}>
  <TouchableOpacity style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
    <View style={{marginLeft:10,width:20,height:20,borderWidth:2,borderColor:"#e8e8e8"}}>

    </View>
  </TouchableOpacity>
  <View style={{width:"80%"}}>
  <Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" ,}}>
                    {optionsProduct[index*2]}
                    </Text>
    </View>
    </View>
    <View style={{width:"50%",flexDirection:"row"}}>
    <TouchableOpacity style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
    <View style={{marginLeft:10,width:20,height:20,borderWidth:2,borderColor:"#e8e8e8"}}>

    </View>
  </TouchableOpacity>
  <View style={{width:"80%"}}>
  <Text numberOfLines={1}  style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                    {optionsProduct[index*2+1]}
                    </Text>
    </View>
    </View>
  </View>
                      ))
                    }
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left",paddingVertical:window.innerHeight*0.02,marginLeft:window.innerWidth*0.01 }}>
                                        Alérgenos
                  </Text>
                  {
                      new Array(7).fill(1).map((item,index)=>(
<View style={{width:"100%",flexDirection:"row",paddingVertical:window.innerHeight*0.015}}>
  <View style={{width:"50%",flexDirection:"row"}}>
  <TouchableOpacity style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
    <View style={{marginLeft:10,width:20,height:20,borderWidth:2,borderColor:"#e8e8e8"}}>

    </View>
  </TouchableOpacity>
  <View style={{width:"80%"}}>
  <Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" ,}}>
                    {allergensOptions[index*2]}
                    </Text>
    </View>
    </View>
    <View style={{width:"50%",flexDirection:"row"}}>
    <TouchableOpacity style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
    <View style={{marginLeft:10,width:20,height:20,borderWidth:2,borderColor:"#e8e8e8"}}>

    </View>
  </TouchableOpacity>
  <View style={{width:"80%"}}>
  <Text numberOfLines={1}  style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                    {allergensOptions[index*2+1]}
                    </Text>
    </View>
    </View>
  </View>
                      ))
                    }

                  
</View>
<TouchableOpacity onLongPress={() => this.setState({ showNewDish: false })} onPress={() => this.setState({ showNewDish: false })} style={{ alignSelf: "flex-end", position: "absolute", top: 0,right:0 }}>
                      <IoIosClose size="2.5em" />
                    </TouchableOpacity>
</View>
<View style={{width:"100%",alignSelf:"center",justifyContent:"center",alignItems:"center",marginTop:window.innerHeight*0.02}}>
           
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"center",width:"100%",}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left",paddingVertical:window.innerHeight*0.03 }}>
                                        Crear plato o bebida
                  </Text>
                  


                </TouchableOpacity>
                </View>
                </ScrollView>
                }




















            </View>
        )
    }
}