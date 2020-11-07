import * as React from 'react';
import Title from 'reactjs-title'
import { Animated, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback, TextInput, FlatList } from 'react-native';
import { IoIosClose, IoMdRadioButtonOff, IoMdRadioButtonOn, IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import Dropdown from 'react-dropdown';
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader,SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Collapsible from 'react-collapsible';
import { Background } from 'react-parallax';
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
        this.state = {
            newDish: {
                allergensArray: []
            }
        }
    }



    render() {

        return (
            <View style={{flexDirection:"row" ,zIndex: 99, position: "absolute", top: 0, width: "100%", height: window.innerHeight, backgroundColor: "#fff",  alignItems: "center",overflow:"hidden" }}>
            <ProSidebar style={{"sidebar-bg-color":"red"}}  collapsed={true}>
            <SidebarHeader>
        <div
          style={{
            padding: '24px',
     
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            background:"#FFCB00"
          }}
        >
         elcomensal
          
        
        </div>
        </SidebarHeader>
       
        <SidebarContent>
        <div
          style={{
            width:"100%",
            height:"100%",
            background:"#FFCB00"
          }}
        >
        <Menu>
          <MenuItem
            icon={<IoIosClose />}
          >
            La carta
          </MenuItem>
          <MenuItem icon={<IoIosClose />} style={{color:"#000"}}>Menús</MenuItem>
          <MenuItem icon={<IoIosClose />} style={{color:"#000"}}>Perfil</MenuItem>
          <MenuItem icon={<IoIosClose />} style={{color:"#000"}}>Ayuda</MenuItem>
        </Menu>
        </div>
        </SidebarContent>
        <div
          style={{
            width:"100%",
            height:"100%",
            background:"#FFCB00"
          }}
        />
        <SidebarFooter>
        <div
          style={{
            width:"100%",
            height:"100%",
            background:"#FFCB00"
          }}
        >
        <Menu >
          <MenuItem
            icon={<IoIosClose />}style={{color:"#000"}}
          >
          <Text>
            Cerrar sesión
            </Text>
          </MenuItem>
          </Menu>
          </div>
        </SidebarFooter>
  
     
</ProSidebar>
<View style={{ width:window.innerWidth,height:window.innerHeight}}>   
    <Text style={{ paddingTop: window.innerHeight * 0.03, textDecorationLine: "none", color: "#000", fontWeight: "500", fontSize: "2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Carta
                  </Text>
                  <Text style={{paddingBottom: window.innerHeight * 0.03, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.3rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                  Edita los platos y bebidas que sirves en tu restaurante
                  </Text>


                <View style={{borderTopWidth:1,borderColor:"#f5f5f5", zIndex:99, width: "100%", height: "100%", flexDirection: "row",borderRadius: 0, }}>
                    
                    <View style={{width: "30%", height: "100%", borderRightWidth: 1, borderColor: "#f5f5f5", backgroundColor: "#f5f5f5" }}>

                        <ScrollView style={{ alignSelf: "center", width: "100%", height: "100%", backgroundColor: "#f5f5f5", borderRadius: 0 }}>
                            <View style={{ width: "100%" }}>
                                <Text style={{ color: "#000", paddingLeft: window.innerWidth * 0.01, fontWeight: "400", fontSize: "1rem", textAlign: "left", width: "100%", paddingVertical: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
                                    Entrantes
                  </Text>
                            </View>
                            <View style={{marginTop:window.innerHeight*0.0025, width: "100%" }}>
                                <Text style={{ color: "gray", paddingLeft: window.innerWidth * 0.01, fontWeight: "300", fontSize: "1rem", textAlign: "left", width: "100%", paddingVertical: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
                                    Pizzas
                  </Text>
                            </View>
                            <View style={{marginTop:window.innerHeight*0.0025, width: "100%" }}>
                                <Text style={{ color: "gray", paddingLeft: window.innerWidth * 0.01, fontWeight: "300", fontSize: "1rem", textAlign: "left", width: "100%", paddingVertical: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
                                    Pasta
                  </Text>
                            </View>
                            {false &&
                                <View style={{ width: "100%" }}>
                                    <Text style={{ color: "gray", fontWeight: "400", fontSize: "1rem", textAlign: "left", width: "100%", paddingVertical: window.innerHeight * 0.3 }}>
                                        Sin secciones
                  </Text>
                                </View>
                            }
                            <TouchableOpacity style={{marginTop:window.innerHeight*0.0025, width: "100%", height: window.innerHeight * 0.08, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{marginLeft:window.innerWidth*0.05,padding:0, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01, width: "100%" }}>
                                       + Añadir sección
                  </Text>
                            </TouchableOpacity>
                        </ScrollView>
                       

                    </View>

                    <View style={{ width: "65%", height: "100%" }}>

                        <ScrollView style={{ width: "100%", height: "100%", backgroundColor: "#f5f5f5", borderRadius: 0 }}>
                            <TouchableOpacity style={{ width: "100%", alignSelf: "center", backgroundColor: "#fff", flexDirection: "row" }}>
                                <View style={{ width: "80%" }}>
                                    <Text style={{ paddingVertical: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01, width: "100%" }}>
                                        Pizza margarita
                  </Text>
                                    <Text style={{ textDecorationLine: "none", color: "gray", fontWeight: "300", fontSize: "0.9rem", textAlign: "left", marginLeft: window.innerWidth * 0.01, width: "100%" }}>
                                        Base de tomate con mozzarella italiana espolvoreada por encima. Hecha al horno de leña.
                  </Text>
                  <Text style={{marginLeft:window.innerWidth*0.01,marginVertical:window.innerHeight*0.02, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.9rem", textAlign: "left", width: "100%" }}>
                                            19.99 €
                  </Text>
                                </View>
                                
                                <View style={{position:"absolute",right:0, width: "20%", alignItems: "center", justifyContent: "center",backgroundColor:"#fff", height:"100%", paddingVertical: window.innerHeight * 0.02 }}>
                                    <Text style={{ textDecorationLine: "none", color: "#5E9D53", fontWeight: "400", fontSize: "1rem", textAlign: "center", width: "100%" }}>

                                        Disponible
                  </Text>
                                </View>
                            </TouchableOpacity>

                            <View style={{marginTop:window.innerHeight*0.0025, width: "100%", alignSelf: "center", backgroundColor: "#fff", height: "100%" }}>
                                <View style={{ width: "100%", flexDirection: "row" }}>
                                    <View style={{ width: "80%", height: "100%" }}>
                                        <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingLeft: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.02, width: "100%" }}>
                                            Pizza hawaiana
                  </Text>
                                        <Text style={{ textDecorationLine: "none", color: "gray", fontWeight: "300", fontSize: "0.9rem", textAlign: "left",paddingLeft: window.innerWidth * 0.01, width: "100%" }}>
                                            Base de tomate con mozzarella italiana espolvoreada por encima. Hecha al horno de leña.
                  </Text>
                  <Text style={{marginLeft:window.innerWidth*0.01,marginVertical:window.innerHeight*0.02, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.9rem", textAlign: "left", width: "100%" }}>
                                            19.99 €
                  </Text>
                                    </View>
                                    
                                    <View style={{position:"absolute",right:0, width: "20%", alignItems: "center", justifyContent: "center", height:"100%", borderRadius: 0,backgroundColor:"#fff" }}>
                                        <Text style={{ textDecorationLine: "none", color: "gray", fontWeight: "400", fontSize: "1rem", textAlign: "center", width: "100%" }}>
                                            No disponible
                  </Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity style={{marginTop:window.innerHeight*0.0025, width: "100%", height: window.innerHeight * 0.08, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.02, paddingVertical: window.innerHeight * 0.02, width: "100%" }}>
                                    + Añadir plato o bebida
                                </Text>
                            </TouchableOpacity>
                        </ScrollView>
                     
                    </View>

                </View>

                {false &&
                    <View style={{ width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.4)", position: "absolute", top: 0, justifyContent: "center", alignItems: "center" }}>
                        <View style={{ backgroundColor: "#fff", width: "60%" }}>
                            <TouchableOpacity onLongPress={() => this.setState({ showDetails: false })} onPress={() => this.setState({ showDetails: false })} style={{ alignSelf: "flex-end", position: "absolute", top: 0 }}>
                                <IoIosClose size="2em" />
                            </TouchableOpacity>
                            <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.3rem", textAlign: "left", marginLeft: "5%", paddingTop: window.innerHeight * 0.02, width: "100%" }}>
                                Añadir carta
                  </Text>
                            <Text style={{ color: "gray", fontWeight: "300", fontSize: "0.9rem", textAlign: "left", marginLeft: "5%", paddingVertical: window.innerHeight * 0.03, width: "90%" }}>
                                Ejemplo: Crea una carta de bebidas que esté siempre disponible o una carta de desayunos que esté disponible todos los días de 07:00h a 13:00h
                  </Text>
                            <TextInput numberOfLines={1} placeholder={"Título de la carta"} style={{ marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "90%", alignSelf: "center", backgroundColor: "#e8e8e8", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                            <Text style={{ color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left", marginLeft: "5%", paddingVertical: window.innerHeight * 0.01, width: "90%" }}>
                                Disponible
                                   </Text>
                            <View style={{ flexDirection: "row", width: "90%", alignSelf: "center" }}>
                                <TouchableOpacity style={{ width: "10%", justifyContent: "center", alignItems: "center" }}>
                                    <IoMdRadioButtonOff size="1em" />

                                </TouchableOpacity>
                                <View style={{ width: "90%", justifyContent: "flex-start", alignSelf: "center" }}>
                                    <Text style={{ color: "#000", fontWeight: "300", fontSize: "0.9rem", textAlign: "left", paddingVertical: window.innerHeight * 0.02, width: "90%" }}>
                                        Siempre  </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", width: "90%", alignSelf: "center" }}>
                                <TouchableOpacity style={{ width: "10%", justifyContent: "center", alignItems: "center" }}>
                                    <IoMdRadioButtonOff size="1em" />

                                </TouchableOpacity>
                                <View style={{ width: "90%" }}>
                                    <Text style={{ color: "#000", fontWeight: "300", fontSize: "0.9rem", textAlign: "left", paddingVertical: window.innerHeight * 0.02, width: "90%" }}>
                                        Programar  </Text>
                                </View>

                            </View><Text style={{ color: "gray", fontWeight: "300", fontSize: "0.9rem", textAlign: "left", marginLeft: window.innerWidth * 0.05, paddingBottom: window.innerHeight * 0.02, paddingTop: window.innerHeight * 0.02, width: "90%" }}>
                                La carta será visible:  </Text>
                            <View style={{ width: "80%", alignSelf: "center", flexDirection: "row", justifyContent: "space-between" }}>

                                {
                                    ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map((item) =>
                                        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", borderRadius: 1 }}>
                                            <Text style={{ color: "#000", fontWeight: "300", fontSize: "0.9rem", textAlign: "left", paddingVertical: window.innerHeight * 0.01, width: "100%" }}>
                                                {item}  </Text>

                                        </TouchableOpacity>)
                                }
                            </View>
                            <View style={{ width: "90%", alignSelf: "center", flexDirection: "row", marginTop: window.innerHeight * 0.02 }}>
                                <Text style={{ color: "#000", fontWeight: "300", fontSize: "0.9rem", textAlign: "left", paddingVertical: window.innerHeight * 0.01, paddingVertical: window.innerHeight * 0.015, paddingHorizontal: window.innerHeight * 0.02 }}>
                                    desde las  </Text>
                                <TextInput numberOfLines={1} placeholder={"07:00h"} style={{ marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "30%", alignSelf: "center", backgroundColor: "#e8e8e8", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />

                                <Text style={{ color: "#000", fontWeight: "300", fontSize: "0.9rem", textAlign: "left", paddingVertical: window.innerHeight * 0.01, paddingVertical: window.innerHeight * 0.015, paddingHorizontal: window.innerHeight * 0.02 }}>
                                    hasta las  </Text>
                                <TextInput numberOfLines={1} placeholder={"16:00h"} style={{ marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "30%", alignSelf: "center", backgroundColor: "#e8e8e8", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />

                            </View>
                            <TouchableOpacity style={{ width: "100%", height: window.innerHeight * 0.08, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.02, paddingVertical: window.innerHeight * 0.02, width: "100%" }}>
                                    +  <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01, width: "100%" }}>
                                        Añadir otra programación
                  </Text>
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')} style={{ alignSelf: "center", marginBottom: window.innerHeight * 0.03, alignItems: "center", backgroundColor: "#000", width: "30%", marginTop: window.innerHeight * 0.01 }}>
                                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>

                                    <Text style={{ color: "#fff", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.02, textAlign: "center", width: "100%" }}>
                                        Añadir
                    </Text>
                                </View>

                            </TouchableOpacity>


                        </View>
                    </View>
                }
                {false &&
                    <View style={{ width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.4)", position: "absolute", top: 0, justifyContent: "center", alignItems: "center" }}>
                        <View style={{ backgroundColor: "#fff", width: "30%" }}>
                            <TouchableOpacity onLongPress={() => this.setState({ showDetails: false })} onPress={() => this.setState({ showDetails: false })} style={{ alignSelf: "flex-end", position: "absolute", top: 0 }}>
                                <IoIosClose size="2em" />
                            </TouchableOpacity>
                            <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.3rem", textAlign: "left", marginLeft: "5%", paddingTop: window.innerHeight * 0.02, width: "100%" }}>
                                Añadir sección
                  </Text>
                            <Text style={{ color: "gray", fontWeight: "300", fontSize: "0.9rem", textAlign: "left", marginLeft: "5%", paddingVertical: window.innerHeight * 0.03, width: "90%" }}>
                                Agrupa el contenido de tu carta en secciones. Ejemplo: Hamburguesas, entrantes, Gintonics, ...
                  </Text>
                            <TextInput numberOfLines={1} placeholder={"Título de la sección"} style={{ marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "90%", alignSelf: "center", backgroundColor: "#e8e8e8", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />


                            <TouchableOpacity onPress={() => this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')} style={{ alignSelf: "center", marginBottom: window.innerHeight * 0.03, alignItems: "center", backgroundColor: "#000", width: "70%", marginTop: window.innerHeight * 0.02 }}>
                                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>

                                    <Text style={{ color: "#fff", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.02, textAlign: "center", width: "100%" }}>
                                        Añadir
                    </Text>
                                </View>

                            </TouchableOpacity>


                        </View>
                    </View>
                }
                {false &&
                <View style={{ backgroundColor: "transparent", position: "absolute", bottom: window.innerHeight * 0.05, right: 10, width: window.innerWidth * 0.2 }}>
                    <View style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", borderRadius: 20, overflow: "hidden", width: "100%", height: "100%" }}>
                        <Text style={{ color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.02, textAlign: "left", width: "100%", backgroundColor: "transparent" }}>

                            Publicar cambios
</Text>
                        <Text style={{ color: "gray", fontWeight: "300", fontSize: "0.9rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>

                            Cúando publiques los cambios, se actualizarán en tiempo real para todos los clientes. Los QR que tengas generados seguirán siendo válidos.
</Text>
                        <TouchableOpacity onPress={() => this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')} style={{ alignSelf: "center", marginBottom: window.innerHeight * 0.03, alignItems: "center", backgroundColor: "#000", width: "70%", marginTop: window.innerHeight * 0.02, borderRadius: 100 }}>
                            <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>

                                <Text style={{ color: "#fff", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.02, textAlign: "center", width: "100%" }}>
                                    Publicar
                    </Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>
                }
{false &&
                <View style={{ justifyContent: "center", alignItems: "center", width: "100%", position: "absolute", top: 0, width: window.innerWidth, height: window.innerHeight, backgroundColor: "rgba(0,0,0,0.4)" }}>
                    <ScrollView>
                        <View style={{ backgroundColor: "#fff", width: "90%", alignSelf: "center", marginTop: window.innerHeight * 0.05 }}>
                            <TouchableOpacity onLongPress={() => this.setState({ showDetails: false })} onPress={() => this.setState({ showDetails: false })} style={{ alignSelf: "flex-end", position: "absolute", top: 0 }}>
                                <IoIosClose size="2em" />
                            </TouchableOpacity>
                            <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.3rem", textAlign: "left", marginLeft: "5%", paddingTop: window.innerHeight * 0.02, width: "100%" }}>
                                Añadir plato o bebida
                  </Text>
                            <Text style={{ color: "gray", fontWeight: "300", fontSize: "0.9rem", textAlign: "left", marginLeft: "5%", paddingVertical: window.innerHeight * 0.03, width: "90%" }}>
                                Crea una entrada para cada uno de los platos o bebidas que vendas en tu restaurante
                  </Text>
                            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.01, backgroundColor: "#fff" }}>
                                Información
            </Text>
                            <TextInput numberOfLines={1} placeholder={"Nombre del plato o la bebida"} style={{ marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "50%", alignSelf: "flex-start", marginLeft: window.innerWidth * 0.05, backgroundColor: "#e8e8e8", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                            <TextInput numberOfLines={5} multiline placeholder={"Descripción del plato o bebida"} style={{ marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "50%", alignSelf: "flex-start", marginLeft: window.innerWidth * 0.05, backgroundColor: "#e8e8e8", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.01, backgroundColor: "#fff" }}>
                                Etiquetas
            </Text>
            <Text style={{ color: "gray", fontWeight: "300", fontSize: "0.9rem", textAlign: "left", marginLeft: "5%", width: "90%" }}>
                                Destaca los puntos importantes de tu producto o bebida
                  </Text>

                            {
                                new Array(Math.floor(optionsProduct.length / 3)).fill(1).map((item, index_1) => (
                                    <View style={{ width: "100%",flexDirection:"row" }}>
                                        {
                                            new Array(3).fill(1).map((item_2,index_2) => (
                                                <TouchableOpacity style={{width:"33.33%",paddingVertical:window.innerHeight*0.02,borderWidth:1}}>
                                                    <Text style={{fontSize:"0.9rem"}}>
                                                        {optionsProduct[index_1*3+index_2]}
                                                    </Text>
                                                </TouchableOpacity>
                                            ))
                                        }

                                    </View>
                                ))
                            }

                            
                          
                            {!this.state.newDish.offer &&
                                <View>
                                    <Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
                                        Precio
            </Text>
                                    <TextInput numberOfLines={1} placeholder={"16.40"} style={{ fontSize: "1rem", width: "50%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.05, paddingVertical: window.innerHeight * 0.02 }} />
                                </View>
                            }
                            {this.state.newDish.offer &&
                                <View style={{ width: "90%", flexDirection: "row", backgroundColor: "#fff", justifyContent: "space-between" }}>
                                    <View style={{ width: "50%" }}>
                                        <Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: window.innerWidth * 0.025, marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
                                            Precio original
            </Text>
                                        <TextInput numberOfLines={1} placeholder={"16.40"} style={{ alignSelf: "center", fontSize: "1rem", width: "90%", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.05, paddingVertical: window.innerHeight * 0.02 }} />
                                    </View>
                                    <View style={{ width: "50%" }}>
                                        <Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: window.innerWidth * 0.025, marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
                                            Precio con oferta
            </Text>
                                        <TextInput numberOfLines={1} placeholder={"15.60"} style={{ alignSelf: "center", fontSize: "1rem", width: "90%", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.05, paddingVertical: window.innerHeight * 0.02 }} />

                                    </View>
                                </View>
                            }
                            <View>
                                <Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
                                    Alérgenos
            </Text>
            {
                                new Array(Math.floor(allergensOptions.length / 3)).fill(1).map((item, index_1) => (
                                    <View style={{ width: "100%",flexDirection:"row" }}>
                                        {
                                            new Array(5).fill(1).map((item_2,index_2) => (
                                                <TouchableOpacity style={{width:"20%",paddingVertical:window.innerHeight*0.02,borderWidth:1}}>
                                                    <Text style={{fontSize:"0.9rem"}}>
                                                        {allergensOptions[index_1*3+index_2]}
                                                    </Text>
                                                </TouchableOpacity>
                                            ))
                                        }

                                    </View>
                                ))
                            }



                                <Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
                                    Configuración
            </Text>

                                <Text numberOfLines={1} style={{ marginTop: window.innerHeight * 0.0025, paddingVertical: window.innerHeight * 0.02, color: "#000", fontWeight: "500", fontSize: "1rem", backgroundColor: "#fff", width: window.innerWidth, paddingHorizontal: window.innerWidth * 0.05 }}>
                                    Tamaño de la pizza
            </Text>
                                <Text numberOfLines={1} style={{ marginTop: window.innerHeight * 0.0025, paddingVertical: window.innerHeight * 0.02, color: "#000", fontWeight: "400", fontSize: "1rem", backgroundColor: "#fff", width: window.innerWidth, paddingLeft: window.innerWidth * 0.1, paddingRight: window.innerWidth * 0.05 }}>
                                    Mediana
            </Text>
                                <Text numberOfLines={1} style={{ marginTop: window.innerHeight * 0.0025, paddingVertical: window.innerHeight * 0.02, color: "#000", fontWeight: "400", fontSize: "1rem", backgroundColor: "#fff", width: window.innerWidth, paddingLeft: window.innerWidth * 0.1, paddingRight: window.innerWidth * 0.05 }}>
                                    Grande
            </Text>
                                <Text numberOfLines={1} style={{ marginTop: window.innerHeight * 0.0025, paddingVertical: window.innerHeight * 0.02, color: "#000", fontWeight: "400", fontSize: "1rem", backgroundColor: "#fff", width: window.innerWidth, paddingLeft: window.innerWidth * 0.1, paddingRight: window.innerWidth * 0.05 }}>
                                    Familiar
            </Text>
                                <Text numberOfLines={1} style={{ marginTop: window.innerHeight * 0.0025, paddingVertical: window.innerHeight * 0.02, color: "gray", fontWeight: "400", fontSize: "1rem", backgroundColor: "#f5f5f5", width: window.innerWidth, paddingLeft: window.innerWidth * 0.1, paddingRight: window.innerWidth * 0.05 }}>
                                    + Añadir opción (Tamaño familiar)
            </Text>
                                <Text numberOfLines={1} style={{ marginTop: window.innerHeight * 0.0025, paddingVertical: window.innerHeight * 0.02, color: "gray", fontWeight: "500", fontSize: "1rem", backgroundColor: "#f5f5f5", width: window.innerWidth, paddingLeft: window.innerWidth * 0.05, paddingRight: window.innerWidth * 0.05 }}>
                                    + Añadir configuración (Selecciona tamaño, ...)
            </Text>
                                <Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
                                    Información adicional
            </Text>
                                <TextInput multiline numberOfLines={3} placeholder={"Ej. cremós de formatge, fruits del bosc, Mòdena i galetes speculoos"} style={{ fontSize: "1rem", width: "90%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.05, paddingVertical: window.innerHeight * 0.02 }} />


                            </View>

                            <TouchableOpacity onPress={() => this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')} style={{ alignSelf: "center", marginBottom: window.innerHeight * 0.03, alignItems: "center", backgroundColor: "#000", width: "70%", marginTop: window.innerHeight * 0.02 }}>
                                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>

                                    <Text style={{ color: "#fff", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.02, textAlign: "center", width: "100%" }}>
                                        Añadir
                    </Text>
                                </View>

                            </TouchableOpacity>


                        </View>
                    </ScrollView>
                </View>
}
</View>
{false &&
<View style={{position:"absolute",top:0,right:0,width:"90%",height:"100%",backgroundColor:"#fff"}}>
<View style={{flexDirection:"row",justifyContent:"space-between"}}>
<Text style={{ paddingTop: window.innerHeight * 0.03, textDecorationLine: "none", color: "#000", fontWeight: "500", fontSize: "2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Pagos
                  </Text>
                  <View style={{flexDirection:"row",alignSelf:"flex-end"}}>
                  <TouchableOpacity onPress={() => this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')} style={{ alignSelf: "center",  alignItems: "center"  }}>
                                
                                    <Text style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.02, textAlign: "center", width: "100%",paddingHorizontal:window.innerWidth*0.05 }}>
                                        Tus facturas
                    </Text>
                          

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')} style={{ alignSelf: "center",  alignItems: "center",  }}>
                                                     <Text style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.02, textAlign: "center", width: "100%",paddingHorizontal:window.innerWidth*0.05  }}>
                                        Datos de facturación
                    </Text>
                    
                          


                            </TouchableOpacity>
                            </View>
                  </View>
                  <Text style={{paddingBottom: window.innerHeight * 0.03, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.3rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                  Revisa tu información de pago
                  </Text>
                  <ScrollView style={{width:"100%",height:"100%",backgroundColor:"#f5f5f5"}}>
                    <View style={{marginTop:window.innerHeight*0.0025,width:"100%",backgroundColor:"#fff",flexDirection:"row"}}>
<View style={{width:"60%",height:"100%"}}>
<Text style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.02, textAlign: "left", width: "100%",paddingHorizontal:window.innerWidth*0.05  }}>
                                        Factura 1
                    </Text>
</View>
<View style={{width:"20%",height:"100%"}}>
<Text style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.02, textAlign: "center", width: "100%",paddingHorizontal:window.innerWidth*0.05  }}>
                                        9.99 €
                    </Text>
</View>
<View style={{width:"20%",height:"100%"}}>
<Text style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.02, textAlign: "right", width: "100%",paddingHorizontal:window.innerWidth*0.05  }}>
                                        PDF
                    </Text>
</View>
                    </View>
                  </ScrollView>

</View>
}
<View style={{position:"absolute",top:0,right:0,width:"90%",height:"100%",backgroundColor:"#fff"}}>
<Text style={{ paddingTop: window.innerHeight * 0.03, textDecorationLine: "none", color: "#000", fontWeight: "500", fontSize: "2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Ayuda
                  </Text>
<Text style={{paddingBottom: window.innerHeight * 0.03, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.3rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                  Descubre las respuestas a las preguntas más frecuentes
                  </Text>


                  <Collapsible triggerStyle={{background:"#fff",width:window.innerWidth,color:"#000",}} trigger="Start here">
       <View style={{width:"100%",height:"100%",backgroundColor:"#f5f5f5"}}>
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        <p>It can even be another Collapsible component. Check out the next section!</p>
        </View>
      </Collapsible>
    </View>

            </View>
        )
    }
}