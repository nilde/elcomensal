import * as React from 'react';
import Title from 'reactjs-title'
import restaurantRegister from '../restaurantRegister.jpg';
import elcomensal from '../elcomensal.png';
import landing1 from '../landing1.jpg';
import landing2 from '../landing2.jpg';
import landing3 from '../landing3.jpg';
import covid from '../covid.jpg';
import all from '../all.jpg';
import no from '../no.jpg';
import adapt from '../adapt.jpg';
import update from '../update.jpg';
import scan from '../scan.jpg';
import contact from '../contact.jpg';
import works from '../works.jpg';
import why from '../why.jpg';
import clients from '../clients.jpg';
import elcomensal_dark from '../elcomensal_dark.svg';
import qr_example from '../qr_example.png';
import frame from '../frame.png';
import Dropzone from 'react-dropzone'
import {Animated, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback,TextInput,FlatList } from 'react-native';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
export default class App extends React.Component {
    render() {
  
      return (
          <View style={{width:"100%",height:window.innerHeight,backgroundColor:"#fff"}}>
            
          <ScrollView style={{ width: "100%", height: "100%",}}>
          <View style={{width:"100%"}}>
          <Image source={landing1} style={{position:"absolute",top:0,right:0,alignSelf:"center", width: window.innerWidth*1, height: "100%", zIndex: 0 }} resizeMode="cover" />

                
                        <View style={{width:"100%",justifyContent:"space-between",flexDirection:"row",marginBottom:window.innerHeight*0.1,marginTop:window.innerHeight*0.12}}>
                        
                        <View style={{boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",width:"30%",marginLeft:window.innerWidth*0.03, alignItems:"center",justifyContent:"center",backgroundColor:"#fff",borderRadius:10}}>
                        <Text style={{marginTop:window.innerHeight*0.05, color: "#000", fontWeight: "500", fontSize: "1.5rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
                        Digitaliza tu negocio
                        </Text>
                        <Text style={{marginBottom:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                       Estamos buscando conectar de una forma única y novedosa los establecimientos con sus clientes habituales.
                        </Text>
                        <Text style={{marginBottom:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                       Acabamos de emepezar y estamos buscando negocios innovadores que quieran probar nuestra tecnología de manera completamente gratuita.
                        </Text>
      
                   
                  
                    
                    <TouchableOpacity onPress={()=>this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')}  style={{alignSelf:"center",marginBottom:window.innerHeight*0.03,borderRadius:10, alignItems: "center", backgroundColor: "#FFC524", width: "90%",marginTop:window.innerHeight*0.01 }}>
                    
                    <View to="/success" style={{width:"100%", alignSelf:"flex-start",textDecoration:"none",color:"#000"}} >
   
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.025, textAlign: "center", width: "100%" }}>
                    Contacta con nosotros
                    </Text>
                </View>
                </View>
                </TouchableOpacity>
         
                </View>
               
                         </View>
         


       


          
              
        </View>
        {/**BLOQUE 2 */}
        
        <View style={{alignSelf:"center", width:"100%",justifyContent:"space-evenly",marginTop:window.innerHeight*0.05,height:window.innerHeight*0.8,flexDirection:"row"}}>
    
<View style={{paddingBottom:30,borderWidth:0,borderRadius:10,overflow:"hidden",backgroundColor:"#FFC524",width:"30%",height:window.innerHeight*0.8,backgroundColor:"#FFC524",overflow:"hidden"}}>
<Image source={covid} style={{borderRadius:0, alignSelf:"flex-end", width: "100%", height: window.innerHeight*0.55, zIndex: 0 }} resizeMode="cover" />
<Text style={{paddingTop:20, color: "#000", fontWeight: "500", fontSize: "1.5rem", paddingHorizontal:20, paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
Creemos en la importancia del negocio local
                        </Text>
                        <Text style={{marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1.1rem", paddingHorizontal:20, textAlign: "left", width: "100%" }}>
                        Queremos ayudar a digitalizar a los pequeños comercios y que disfruten de todas las ventajas y posibilidades que ofrece la tecnología.
                        </Text>


</View>
<View style={{paddingBottom:30, borderWidth:0,borderRadius:10,overflow:"hidden",backgroundColor:"#FFC524",width:"30%",height:window.innerHeight*0.8,backgroundColor:"#FFC524",overflow:"hidden"}}>
<Image source={no} style={{borderRadius:0,alignSelf:"flex-end", width: "100%", height: window.innerHeight*0.55, zIndex: 0 }} resizeMode="cover" />
<Text style={{paddingTop:20, color: "#000", fontWeight: "500", fontSize: "1.5rem", paddingHorizontal:20, paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
Sin necesidad de formación
                        </Text>
                        <Text style={{marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1.1rem", paddingHorizontal:20, textAlign: "left", width: "100%" }}>
                        Empieza a gestionar tu tienda online desde cualquier dispositivo con conexión a Internet en cuestión de minutos. Además tenemos unos vídeos explicativos por si te surjen dudas durante el proceso.
                        </Text>

</View>
<View style={{paddingBottom:30,borderWidth:0,borderRadius:10,overflow:"hidden",backgroundColor:"#FFC524",width:"30%",height:window.innerHeight*0.8,backgroundColor:"#FFC524",overflow:"hidden"}}>
<Image source={all} style={{ borderRadius:0,alignSelf:"flex-end", width: "100%", height: window.innerHeight*0.55, zIndex: 0 }} resizeMode="cover" />

<Text style={{paddingTop:20, color: "#000", fontWeight: "500", fontSize: "1.5rem", paddingHorizontal:20, paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
Diseñado para el siglo XXI
                        </Text>
                        <Text style={{marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1.1rem", paddingHorizontal:20, textAlign: "left", width: "100%" }}>
                        Una nueva forma de gestionar tu tienda online a una velocidad y con una sencillez nunca vista.
                        </Text>

</View>

        </View>
        {/**BLOQUE 3 */}
        <View style={{width:"95%",backgroundColor:"#fff",marginTop:window.innerHeight*0.05,alignSelf:"center"}}>


<View style={{flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
    <View style={{borderWidth:10,borderRadius:20, borderColor:"#FFC524",width:"48%",alignItems:"center",backgroundColor:"#FFC524"}}>
    <Image source={clients} style={{borderRadius:14,width: "100%", height: window.innerHeight*0.5, zIndex: 0 }} resizeMode="cover" />

<Text style={{ color: "#000", fontWeight: "500",padding:0,margin:0, fontSize: "1.5rem", paddingHorizontal: "5%", textAlign: "left",marginTop:window.innerHeight*0.05,width:"100%"  }}>
Una experiencia increible para tus clientes

                        </Text>
                       
                        <Text style={{marginTop:window.innerHeight*0.02,marginBottom:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left",  }}>
                        Mejora la experiencia que tienen tus clientes a la hora de descubrir que productos pueden encontrar en tu establecimiento. Actualiza en tiempo real la disponibilidad de tus productos en un par de clicks.
                        </Text>
                        <View to="/menu_example" style={{alignSelf:"flex-start",textDecoration:"none",color:"#000"}} >
   
                        <TouchableOpacity style={{borderRadius:6,alignSelf:"flex-start",marginLeft:window.innerWidth*0.02, justifyContent:"center",alignItems:"center",backgroundColor:"#000",paddingHorizontal:window.innerWidth*0.02,paddingVertical:window.innerHeight*0.02,marginBottom:window.innerHeight*0.03}}>
                       
            <Text style={{ width:"100%", color: "#fff", fontWeight: "400", fontSize: "1rem", textAlign: "center" }}>
                 Ver una tienda de ejemplo
</Text>

         </TouchableOpacity> 
       
         </View>
</View>
<View style={{borderWidth:10,borderRadius:20,borderColor:"#FFC524",width:"48%",alignItems:"center",height:window.innerHeight*0.85,backgroundColor:"#FFC524"}}>
    <Image source={adapt} style={{borderRadius:14,width: "100%", height: window.innerHeight*0.5, zIndex: 0 }} resizeMode="cover" />

<Text style={{ color: "#000", fontWeight: "500",padding:0,margin:0, fontSize: "1.5rem", paddingHorizontal: "5%", textAlign: "left",marginTop:window.innerHeight*0.05,width:"100%"   }}>
Diseñado para adaptarse a tu negocio

                        </Text>
                       
                        <Text style={{marginTop:window.innerHeight*0.02,marginBottom:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left",  }}>
                        Hemos creado una plataforma de última tecnología que te va a permitir gestionar tu tienda online con extrema facilidad. Descubre todas las posibilidades que ofrece CLOSE2YOU uniendote a la beta.
                        </Text>
                        {false &&
                        <Link to="/admin_example" style={{alignSelf:"flex-start", textDecoration:"none",color:"#000"}} >
   
                        <TouchableOpacity style={{borderRadius:6, alignSelf:"flex-start",marginLeft:window.innerWidth*0.02, justifyContent:"center",alignItems:"center",backgroundColor:"#000",paddingHorizontal:window.innerWidth*0.02,paddingVertical:window.innerHeight*0.02,marginBottom:window.innerHeight*0.03}}>
            <Text style={{ width:"100%", color: "#fff", fontWeight: "400", fontSize: "1rem", textAlign: "center" }}>
                 Echa un ojo al panel de administración
</Text>
         </TouchableOpacity> 
         </Link>
                        }
         <View style={{height:10}}/>
</View>


                        </View>
        </View>
        {/**BLOQUE 4 */}

{/**BLOQUE 5 */}
<View style={{width:"95%",alignSelf:"center",backgroundColor:"#fff",marginTop:window.innerHeight*0.05,alignSelf:"center",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"}}>
    <View style={{width:"40%",flexDirection:"column"}}>
<View style={{borderWidth:10,borderRadius:20,borderColor:"#FFC524",width:"100%",backgroundColor:"#FFC524",paddingTop:window.innerHeight*0.02}}>
<Text style={{ color: "#000", fontWeight: "500",padding:0, fontSize: "1.5rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
¿Cómo funciona CLOSE2YOU?
                        </Text>
                       
                        <Text style={{marginTop:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        1. Regístrate y añade tus productos a la tienda.</Text>
                        <Text style={{marginTop:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        2. Automáticamente tu tienda aparecerá cada vez que alguien cercano a tu establecimiento abra la aplicación.¡Así de fácil! </Text>
                        <Text style={{marginTop:window.innerHeight*0.02,marginBottom:window.innerHeight*0.05,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        3. (Opcional) Podrás descargar unos QR que te llevarán a tu tienda online cada vez que algún cliente los escanee. Ideal para restaurantes y bares ya que pueden alojar nuestra carta en nuestra plataforma sin ningún tipo de complicación.</Text>
<Image source={works} style={{borderRadius:14, alignSelf:"center", width: "100%", height: window.innerHeight*0.6, zIndex: 0 }} resizeMode="cover" />

</View>
<View style={{borderWidth:10,borderRadius:20,borderColor:"#FFC524",width:"100%",backgroundColor:"#FFC524",marginTop:window.innerHeight*0.05,alignSelf:"center"}}>

<View style={{paddingVertical:window.innerHeight*0.05, width:"100%"}}>

<Text style={{ color: "#000", fontWeight: "500",fontSize: "1.5rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%",marginBottom:window.innerHeight*0.02 }}>
Descubre cómo quedará

                        </Text>
                       
                        

                
            
                        <Image source={qr_example} style={{alignSelf:"center", width: window.innerWidth*0.50, height: window.innerHeight*0.5, zIndex: 0 }} resizeMode="contain" />
                        <Text style={{marginVertical:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
                        Escanea este QR para ver un ejemplo de como tus clientes verán tu tienda online. También puedes pulsar en el botón para acceder directamente.
                        </Text>

</View>
<View to="/admin_example" style={{alignSelf:"flex-start", textDecoration:"none",color:"#000"}} >
   
                        <TouchableOpacity style={{borderRadius:6, alignSelf:"flex-start",marginLeft:window.innerWidth*0.02, justifyContent:"center",alignItems:"center",backgroundColor:"#000",paddingHorizontal:window.innerWidth*0.02,paddingVertical:window.innerHeight*0.02,marginBottom:window.innerHeight*0.03}}>
            <Text style={{ width:"100%", color: "#fff", fontWeight: "400", fontSize: "1rem", textAlign: "center" }}>
                 Descubre como quedará tu tienda
</Text>
         </TouchableOpacity> 
         </View>

        </View>
</View>
<View style={{width:"60%",height:"100%",justifyContent:"flex-end",alignItems:"flex-end"}}>

<View style={{borderWidth:10,borderRadius:20,borderColor:"#FFC524", width:"95%",backgroundColor:"#FFC524"}}>
<Text style={{ color: "#000", fontWeight: "500",padding:0,marginTop:window.innerHeight*0.02, fontSize: "1.5rem", paddingHorizontal:window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
¿Por qué nosotros?
                        </Text>
                       
                        <Text style={{marginTop:window.innerHeight*0.03,color: "#000", fontWeight: "500", fontSize: "1.3rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
                        Tiempo real
                       
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.01,marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
                       Publica los cambios al instante. ¿Acabas de recibir un nuevo producto? Añádelo en 1 minuto. ¿Quieres modificar el precio de un producto? Edítalo en 30 segundos. ¿Quieres marcar un producto como no disponible? Házlo a la velocidad de la luz.
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.01,color: "#000", fontWeight: "500", fontSize: "1.3rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
                        Flexibilidad
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.01,marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
                        Queremos que cada tienda exprese su identidad dentro de la plataforma como quiera. Organiza tus productos a tu gusto, sin restricciones.
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.01,color: "#000", fontWeight: "500", fontSize: "1.3rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
                        Empieza gratis
                        
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.01,marginBottom:window.innerHeight*0.05,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
                        Estamos empezando y queremos que formes parte de nuestra família. Empieza sin sorpresas, costes ocultos, gastos adicionales ni comisiones. 
                        </Text>
                        <Image source={why} style={{borderRadius:14,alignSelf:"center", width:"100%", height: window.innerHeight*0.62, zIndex: 0 }} resizeMode="cover" />

</View>

<View style={{borderWidth:10,borderRadius:20,borderColor:"#FFC524",flexDirection:"row", marginTop:window.innerHeight*0.05, width:"95%",alignSelf:"center", backgroundColor:"#FFC524",overflow:"hidden"}}>
<View style={{width:"50%",height:window.innerHeight*0.66}}>
<Text style={{marginTop:window.innerHeight*0.02, color: "#000", fontWeight: "500",padding:0, fontSize: "1.5rem", paddingHorizontal: window.innerWidth*0.01, textAlign: "left", width: "100%" }}>
¿Tienes dudas?
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.02,marginBottom:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1.2rem",  paddingHorizontal: window.innerWidth*0.01, textAlign: "left", width: "70%" }}>
               Estamos aquí para resolver todas las dudas que te puedan surgin sobre nuestra plataforma.
                </Text>
                <TextInput numberOfLines={1} placeholder={"Nombre completo"} style={{borderRadius:6,marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"90%",alignSelf:"flex-start",marginLeft:window.innerWidth*0.01,backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
                <TextInput numberOfLines={1} placeholder={"Correo electrónico o nº de teléfono"} style={{borderRadius:6,marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"90%",alignSelf:"flex-start",marginLeft:window.innerWidth*0.01,backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
                <TextInput multiline numberOfLines={5} placeholder={"Detalles de la consulta"} style={{borderRadius:6,marginBottom:window.innerHeight*0.02, fontSize:"1rem", width:"90%",alignSelf:"flex-start",marginLeft:window.innerWidth*0.01,backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
                <TouchableOpacity onPress={()=>this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')}  style={{borderRadius:6,alignSelf:"flex-start",marginBottom:window.innerHeight*0.03, alignItems: "center", backgroundColor: "#000",marginTop:window.innerHeight*0.02,marginLeft:window.innerWidth*0.01 }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#fff", fontWeight: "400", fontSize: "1rem", paddingHorizontal: window.innerWidth*0.05, paddingVertical: window.innerHeight * 0.02, textAlign: "center", width: "100%" }}>
                    Enviar consulta
                    </Text>
                </View>
                
                </TouchableOpacity>
</View>
<View style={{width:"50%",height:"100%"}}>
<Image source={contact} style={{borderRadius:14,alignSelf:"center", width:"100%", height:window.innerHeight*0.66, zIndex: 0 }} resizeMode="cover" />

</View>
      </View>
</View>


</View>
     


    {/**BOTTOM */}
    <View style={{justifyContent:"center",alignItems:"center", width:"100%",height:100,backgroundColor:"#FFC524",marginTop:window.innerHeight*0.05}}>
    <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left" }}>
                                        CLOSE2YOU © 2021. Made for 🧑🏻‍🍳👨‍🌾
                  </Text>
    </View>
         </ScrollView>
    <View style={{  boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",position:"absolute",top:0,width:window.innerWidth,height:window.innerHeight*0.08,backgroundColor:"#fff",flexDirection:"row",overflow:"hidden"}}>
   
   <View style={{width:"15%",height:"100%",backgroundColor:"#fff",justifyContent:"center",alignItems:"center"}}>
   <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "600", fontSize: "1.3rem", textAlign: "left" }}>
                                        CLOSE2YOU
                  </Text>
   </View>
   <View style={{width:"65%",height:"100%",}}>

   </View>
   {false &&
    <Link to="/login" style={{height:"100%",textDecoration:"none",color:"#000"}} >
    <TouchableOpacity style={{height:"100%",alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}}>
 
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left" }}>
                                        Próximamente
                  </Text>
                  


                </TouchableOpacity>
                </Link>  
   }
   {true &&
                <View to="/register" style={{height:"70%",alignSelf:"center",textDecoration:"none",color:"#000",marginRight:"2%"}} > 
                <TouchableOpacity style={{height:"100%",alignSelf:"center", alignItems:"center",justifyContent:"center",backgroundColor:"#FFC524",borderRadius:6}}>
<Text style={{paddingHorizontal:20, textDecorationLine: "none", color: "#000", fontWeight: "500", fontSize: "1rem", textAlign: "center" }}>
                                        Próximamente
                  </Text>
                  


                </TouchableOpacity>
                </View>
   }
    </View>
          </View>
      )
    }
}