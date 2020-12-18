import * as React from 'react';
import Title from 'reactjs-title'
import { Animated, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback, TextInput, FlatList } from 'react-native';
import { IoIosClose, IoMdRadioButtonOff, IoMdRadioButtonOn, IoIosRadioButtonOff, IoIosRadioButtonOn, IoIosArrowDropdown, IoIosArrowDown } from "react-icons/io";
import Dropdown from 'react-dropdown';
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader,SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Collapsible from 'react-collapsible';
import { Background } from 'react-parallax';
import Expand from 'react-expand-animated';


const helpInfo=[
    {
        title:"¿Qué es la carta?",
        content:"La carta es el sitio donde se muestran todos tus platos y bebidas. Todo lo que sirvas en tu restaurante debería estar en la carta para que los clientes sepan que puedes pedirlo."
    },
    {
        title:"¿Qué són las secciones?",
        content:"Las secciones agrupan platos o bebidas que tengan cosas en común. Por ejemplo puedes crear secciones para tus hamburguesas, entrantes, gintonics o cualquier cosa que se te ocurra."
    },
    {
        title:"¿Cómo añado un plato?",
        content:"Para añadir un plato, accede al apartado de “Carta” pulsa en la sección dónde quieras añadirlo (o crea una nueva), pulsa en el botón de “Añadir plato o bebida” y rellena el formulario."
    },
    {
        title:"¿Cómo edito un plato?",
        content:"Pulsa en el símbolo del lápiz que aparece en el apartado del plato. Se te desplegará un menú donde podrás editarlo cómo desees"
    },
    {
        title:"¿Cómo edito una sección?",
        content:"Pulsa en el símbolo del lápiz que aparece en el apartado de la sección. Se te desplegará un menú donde podrás editarla cómo desees."
    },
    {
        title:"¿Puedo editar mi carta y mis menús tanto cómo quiera?",
        content:"Sí, puedes crear y editar tantos platos, secciones y menús como quieras."
    },
    {
        title:"¿Qué son las etiquetas?",
        content:"Cúando creas un plato puedes añadir etiquetas para destacar algunos puntos del plato. Por ejemplo si un plato es apto para vegetarianos, añade la etiqueta vegetariano y si algún cllente lo es podrá identificarlo fácilmente."
    },
    {
        title:"¿Qué són los menús?",
        content:"De igual manera que en tu restaurante, elcomensal te permite crear menús para tu restaurante. Cúando crees un menú el cliente lo verá en su teléfono justo antes de la carta."
    },
    {
        title:"¿Cómo programo menús?",
        content:"Puedes programar menús para que se muestren únicamente cúando quieras. Por ejemplo puedes crear un menú que este solo disponible los jueves. Cúando crees o edites un menú se te muestra una opción llamada “Programa disponibilidad” pulsa en ella y escoges los días y horas que quieras que tu menú este disponible."
    },
  
   
]


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleFilter=this.toggleFilter.bind(this);
        this.state = {
            manageStatus:"",
            helpStatus:new Array(helpInfo.length).fill(false)
        }
    }

    toggleFilter(index){
        console.warn("entro")
        var actualHelpStatus=this.state.helpStatus
        actualHelpStatus[index]=!actualHelpStatus[index]
        this.setState({helpStatus:actualHelpStatus})
    }
    


    render() {

        return (
            <ScrollView style={{zIndex: 0,width: window.innerWidth, height: window.innerHeight, backgroundColor: "#fff"}}>
            <Text style={{ paddingTop: window.innerHeight * 0.03, textDecorationLine: "none", color: "#000", fontWeight: "500", fontSize: "2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Ayuda
                  </Text>
                  <Text style={{paddingBottom: window.innerHeight * 0.03, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.3rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                  Descubre als respuestas a las preguntas más frecuentes
                  </Text>
                  {helpInfo.map((item,index)=>(
<View style={{width:"100%",backgroundColor:"#f5f5f5"}}>
                  <TouchableOpacity style={{flexDirection:"row",width:window.innerWidth*0.95,alignSelf:"center"}} onLongPress={()=>this.toggleFilter(index)} onPress={()=>this.toggleFilter(index)}>
                      
                      <View style={{width:"90%",justifyContent:"center",paddingVertical:window.innerHeight*0.02}}>
                      <Text style={{fontWeight:"400",fontSize:"1.1rem"}}>
           
                        {item.title}
                        </Text>
                      </View>
                      <TouchableOpacity onLongPress={() => this.setState({ showNewMenu: false })} onPress={() => this.setState({ showNewMenu: false })} style={{ height:"100%",justifyContent:"center",alignItems:"center", width:"5%" }}>
                      <View style={{width:"100%",height:window.innerHeight*0.02}}/>
                      <IoIosArrowDown size="1.5em" />
                    </TouchableOpacity>
                  </TouchableOpacity>
        <Expand open={this.state.helpStatus[index]}>
          <View style={{backgroundColor:"#e8e8e8",width:"100%" }}>
           <Text style={{fontWeight:"400",fontSize:"1rem",paddingLeft:window.innerWidth*0.025,paddingRight:window.innerWidth*0.1,paddingVertical:window.innerHeight*0.02}}>
            {item.content}
            </Text>
              </View>
        </Expand>
        </View>
        ))}
        
        <Text style={{ paddingBottom: window.innerHeight * 0.01, paddingTop: window.innerHeight * 0.1, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.3rem", textAlign: "left", marginLeft: window.innerWidth * 0.02 }}>
                        Contactar con soporte
                            
                  </Text>
                  <Text style={{width:window.innerWidth*0.5, paddingBottom: window.innerHeight * 0.03, paddingTop: window.innerHeight * 0.01, textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.02 }}>
                  Si tienes cualquier otra duda sobre la aplicación no dudes en ponerte en contacto con soporte y te responderemos lo antes posible.
                  </Text>
                  <TextInput multiline numberOfLines={5} placeholder={"Contenido de la consulta"} style={{ marginLeft: window.innerWidth * 0.02, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "50%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />

                  <TouchableOpacity style={{width:window.innerWidth*0.3,alignItems:"center",justifyContent:"center",backgroundColor:"#FFCB00",alignSelf:"flex-start",marginLeft:window.innerWidth*0.02,marginTop:window.innerHeight*0.02}}>
       <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.03 }}>
                                               Enviar consulta
                         </Text>
                         
       
       
                       </TouchableOpacity>
                       <View style={{width:"100%",height:window.innerHeight*0.1}}/>
            </ScrollView>
        )
    }
}