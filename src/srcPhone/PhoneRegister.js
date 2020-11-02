
          import * as React from 'react';
import Title from 'reactjs-title'
import restaurantRegister from '../restaurantRegister.jpg';
import elcomensal from '../elcomensal.png';
import landing1 from '../landing1.jpg';
import landing2 from '../landing2.jpg';
import landing3 from '../landing3.jpg';
import frame from '../frame.png';
import {Animated, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback,TextInput,FlatList } from 'react-native';
import { Link } from 'react-router-dom';
export default class App extends React.Component {
    render() {
  
      return (
          <View style={{width:"100%",height:window.innerHeight,backgroundColor:"#f5f5f5"}}>
            
          <ScrollView style={{ width: "100%", height: "100%",}}>
          <View style={{width:"100%"}}>
          <Image source={landing1} style={{position:"absolute",top:0,right:0,alignSelf:"center", width: window.innerWidth*1, height: "100%", zIndex: 0 }} resizeMode="cover" />

                
                        <View style={{width:"100%",justifyContent:"space-between",flexDirection:"row",marginBottom:window.innerHeight*0.05,marginTop:window.innerHeight*0.12}}>
                        
                        <View style={{width:"90%",alignItems:"center",justifyContent:"center",backgroundColor:"#fff",marginLeft:window.innerWidth*0.05}}>
                        <Text style={{marginTop:window.innerHeight*0.025, color: "#000", fontWeight: "600", fontSize: "1.8rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
                        Moderniza tu negocio
                        </Text>
                        <Text style={{marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1.1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        Crea tu carta online y conecta con tus clientes cómo nunca
                        </Text>
      
                    <TextInput numberOfLines={1} placeholder={"Nombre del restaurante"} style={{marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
           
               
                    <TextInput numberOfLines={1} placeholder={"Dirección Ej. C/ Bruc 23, Barcelona"} style={{marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
                 
                    <TextInput numberOfLines={1} placeholder={"Correo electrónico"} style={{marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015,marginBottom:window.innerHeight*0.015}} />
             
                
                    <TextInput numberOfLines={1} placeholder={"Nombre completo"} style={{marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
           
                 
                    <TextInput numberOfLines={1} placeholder={"Número de teléfono: +34 000 000 000"} style={{marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
                  
                  
                    
                    <TouchableOpacity onPress={()=>this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')}  style={{alignSelf:"center",marginBottom:window.innerHeight*0.03, alignItems: "center", backgroundColor: "#000", width: "90%",marginTop:window.innerHeight*0.01 }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#fff", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.02, textAlign: "center", width: "100%" }}>
                    Empezar
                    </Text>
                </View>
                
                </TouchableOpacity>
                <Text style={{ color: "#000", fontWeight: "400", fontSize: "0.8rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.02, textAlign: "left", width: "100%" }}>
                    Al inscribirse aceptas los términos y condiciones.
                    </Text>
                </View>
               
                         </View>
         


       


          
              
        </View>
        <View style={{width:"100%",backgroundColor:"#fff"}}>
                  
                
                  <View style={{width:"100%",justifyContent:"center"}}>
        
                  <Text style={{paddingVertical:window.innerHeight*0.05,  color: "#000", fontWeight: "600", fontSize: "1.8rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.02, textAlign: "left", width: "100%"}}>
                  Crea tu propia carta online con tecnología QR
                  </Text>
                  <Text style={{marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left", width: "100%"}}>
                  Diseña tu nueva carta online en 5 minutos y disfruta de las siguientes ventajas:
                  </Text>

                  <Text style={{color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingLeft: "5%",marginTop: window.innerHeight * 0.03,  paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
                  Flexibilidad:
                  
                  </Text>
                  <Text style={{textDecorationLine:"none",color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: window.innerWidth*0.05, paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
                  Actualiza la carta siempre que quieras sin ningún coste adicional
                  </Text>
                  <Text style={{color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingLeft: "5%",marginTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
                  Planifica menús:
                 
                  </Text>
                  <Text style={{textDecorationLine:"none",color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: window.innerWidth*0.05, paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
                  Actualiza la carta siempre que quieras sin ningún coste adicional
                  </Text>
                  <Text style={{color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingLeft: "5%",marginTop: window.innerHeight * 0.03, paddingTop: window.innerHeight * 0.01, paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
                  Tiempo real:
                 
                  </Text>
                  <Text style={{textDecorationLine:"none",color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: window.innerWidth*0.05, paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
                  Actualiza la carta siempre que quieras sin ningún coste adicional
                  </Text>
                  <Text style={{color: "#000", fontWeight: "500", fontSize: "1.2rem",marginTop: window.innerHeight * 0.03,   paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "90%",alignSelf:"center" }}>
                  Alérgenos, platos para vegetarianos y más:
                
                  </Text>
                  <Text style={{textDecorationLine:"none",color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: window.innerWidth*0.05, paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
                  Actualiza la carta siempre que quieras sin ningún coste adicional
                  </Text>
                  <Text style={{color: "#000", fontWeight: "500", fontSize: "1.2rem",marginTop: window.innerHeight * 0.03,  paddingLeft: "5%", paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
                  Precio ajustado:
                  
                  </Text>
                  <Text style={{textDecorationLine:"none",color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: window.innerWidth*0.05, paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
                  Disfruta de nuestra herramienta por sólo 9.99€/ mes
                  </Text>
       
       
          </View>
     
        
  </View>
  <Image source={landing2} style={{ width: window.innerWidth*1,height:window.innerHeight*0.45, zIndex: 0 }} resizeMode="contain" />

  <Text style={{backgroundColor:"#fff",  color: "#000", fontWeight: "600", fontSize: "1.8rem", paddingHorizontal: "5%", paddingTop: window.innerHeight * 0.05, paddingBottom: window.innerHeight * 0.02, textAlign: "left", width: "100%" }}>
                  ¿Quieres saber cómo quedará tu carta?
                  </Text>
                  <Text style={{backgroundColor:"#fff", paddingBottom:window.innerHeight*0.06,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                  Escanea el siguiente QR y hazte una idea sobre como quedará tu carta
                  </Text>
                  <View style={{width:"100%",backgroundColor:"#fff"}}>
                  <Image source={frame} style={{alignSelf:"center", width: window.innerWidth*0.8,height:window.innerHeight*0.5,  zIndex: 0,backgroundColor:"#fff" }} resizeMode="contain" />
                  </View>
                  <View style={{width:"100%",height:"100%",backgroundColor:"#fff"}} onLongPress={()=>{}} onPress={()=>{}}>
                      <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:"7.5%", backgroundColor:"#000",width:"15%"}}>
                 <Link to="/example" style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                  <Text style={{ color: "#fff", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left",paddingVertical:window.innerHeight*0.02}}>
                  o pulsa aquí
                  </Text>
                  </Link>
                  </TouchableOpacity>
                  </View>
  <View style={{width:"100%",backgroundColor:"#fff"}}>
                  
                
                  <View style={{width:"90%",alignSelf:"center",justifyContent:"space-between"}}>

                  <Text style={{ color: "#000", fontWeight: "600", fontSize: "1.8rem", paddingRight: "5%", paddingTop: window.innerHeight * 0.1, paddingBottom: window.innerHeight * 0.02, textAlign: "left", width: "100%" }}>
                  ¿Cómo empiezo a usarlo?
                  </Text>
                  <Text style={{marginBottom:window.innerHeight*0.06,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingRight: "5%", textAlign: "left", width: "100%" }}>
                  Descubre como tus clientes pueden usar la carta
                  </Text>
                  <Text style={{color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingRight: "5%", paddingBottom: window.innerHeight * 0.02, textAlign: "left", width: "100%" }}>
                  1. Registrate en nuestra web
                
                  </Text>
                  <Text style={{textDecorationLine:"none",color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: window.innerWidth*0.01, paddingBottom: window.innerHeight * 0.02, textAlign: "left", width: "100%" }}>
                  Rellena el cuestionario que está en la primera sección de la página web
                  </Text>
                  <Text style={{color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingRight: "5%", paddingBottom: window.innerHeight * 0.02, textAlign: "left", width: "100%" }}>
                  2. Crea tus carta online
                 
                  </Text>
                  <Text style={{textDecorationLine:"none",color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: window.innerWidth*0.01, paddingBottom: window.innerHeight * 0.02, textAlign: "left", width: "100%" }}>
                  Diseña la carta de tu negocio mediante nuestra página web
                  </Text>
                  <Text style={{color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingRight: "5%", paddingBottom: window.innerHeight * 0.02, textAlign: "left", width: "100%" }}>
                  3. Genera un código QR
                 
                  </Text>
                  <Text style={{textDecorationLine:"none",color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: window.innerWidth*0.01, paddingBottom: window.innerHeight * 0.02, textAlign: "left", width: "100%" }}>
                  Pulsa en el botón de "Generar QR". Se descargará un archivo pdf con unos códigos QR y imprímelos.
                  </Text>
                  <Text style={{color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingRight: "5%", paddingBottom: window.innerHeight * 0.02, textAlign: "left", width: "100%" }}>
                  4.Pónlos en un sitio visible:
                 
                  </Text>
                  <Text style={{textDecorationLine:"none",color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: window.innerWidth*0.01, paddingBottom: window.innerHeight * 0.02, textAlign: "left", width: "100%" }}>
                  Pégalos en la mesa de tu restaurante o en un sitio visible.
                  </Text>
                  <Text style={{color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingRight: "5%", paddingBottom: window.innerHeight * 0.02, textAlign: "left", width: "100%" }}>
                  5.Tus clientes escanean el código:
                 
                  </Text>
                  <Text style={{textDecorationLine:"none",color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: window.innerWidth*0.01, paddingBottom: window.innerHeight * 0.1, textAlign: "left", width: "100%" }}>
                  Tus clientes usan su teléfono para escánear el código y consultan tu carta online
                  </Text>
                 
       
       
          </View>
          <Image source={landing3} style={{alignSelf:"center", width: window.innerWidth,height:window.innerHeight*0.45,  zIndex: 0 }} resizeMode="contain" />

      
   
  </View>

  <Text style={{backgroundColor:"#000",  color: "#fff", fontWeight: "600", fontSize: "1.8rem", paddingHorizontal: "5%", paddingTop: window.innerHeight * 0.05, paddingBottom: window.innerHeight * 0.02, textAlign: "left", width: "100%" }}>
                  ¿Tienes alguna otra duda?
                  </Text>
                  <Text style={{backgroundColor:"#000", paddingBottom:window.innerHeight*0.06,color: "#fff", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                  Contacta con nosotros
                  </Text>
  <View style={{width:"100%",height:window.innerHeight*0.1,backgroundColor:"#000",justifyContent:"center",alignItems:"center"}}>
  <Text style={{textDecorationLine:"none",color: "#fff", fontWeight: "400", fontSize: "1rem",width: "100%",textAlign:"center",alignSelf:"center" }}>
                  ElComensal 2020 ©
                  </Text>
  </View>
        <View style={{width:"100%",height:window.innerHeight*0.08,position:"absolute",top:0,backgroundColor:"#fff",flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
        <TouchableOpacity style={{justifyContent:"center",alignItems:"center",width:"15%",backgroundColor:"#fff",position:"absolute",left:0}}>
        
<Image source={elcomensal} style={{  width: window.innerWidth*0.20, height: window.innerHeight*0.02, zIndex: 0 }} resizeMode="contain" />
         </TouchableOpacity> 
         <TouchableOpacity onPress={()=>this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')}  style={{alignSelf:"center", alignItems: "center", width: window.innerWidth*0.3,marginRight:window.innerWidth*0.01 }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "2.5%", paddingVertical: window.innerHeight * 0.015, textAlign: "center", width: "100%" }}>
                    Registrarse
                    </Text>
                </View>
                

              </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')}  style={{alignSelf:"center", alignItems: "center", backgroundColor: "#000", width: window.innerWidth*0.3,marginRight:window.innerWidth*0.01 }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#fff", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "2.5%", paddingVertical: window.innerHeight * 0.015, textAlign: "center", width: "100%" }}>
                    Iniciar sesión
                    </Text>
                </View>
                

              </TouchableOpacity>
              </View>
         </ScrollView>
    
          </View>
      )
    }
}
     