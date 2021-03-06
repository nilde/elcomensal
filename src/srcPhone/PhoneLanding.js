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
                        
                        <View style={{width:"90%",marginLeft:window.innerWidth*0.05, alignItems:"center",justifyContent:"center",backgroundColor:"#fff",borderRadius:10}}>
                        <Text style={{marginTop:window.innerHeight*0.025, color: "#000", fontWeight: "500", fontSize: "1.5rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
                        Crea tu carta online
                        </Text>
                        <Text style={{marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        Empieza tu prueba gratis de 30 días
                        </Text>
      
                    <TextInput numberOfLines={1} placeholder={"Nombre del restaurante"} style={{borderRadius:6,marginBottom:window.innerHeight*0.02,fontSize:"0.9rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.03,paddingVertical:window.innerHeight*0.015}} />
           
               
                    <TextInput numberOfLines={1} placeholder={"Dirección Ej. C/ Bruc 23, Barcelona"} style={{borderRadius:6,marginBottom:window.innerHeight*0.02,fontSize:"0.9rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.03,paddingVertical:window.innerHeight*0.015}} />
                 
                    <TextInput numberOfLines={1} placeholder={"Correo electrónico"} style={{borderRadius:6,marginBottom:window.innerHeight*0.02,fontSize:"0.9rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.03,paddingVertical:window.innerHeight*0.015,marginBottom:window.innerHeight*0.015}} />
             
                
                    <TextInput numberOfLines={1} placeholder={"Contraseña"} style={{borderRadius:6,marginBottom:window.innerHeight*0.02,fontSize:"0.9rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.03,paddingVertical:window.innerHeight*0.015}} />
                    <TextInput numberOfLines={1} placeholder={"Repetir contraseña"} style={{borderRadius:6,marginBottom:window.innerHeight*0.02,fontSize:"0.9rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.03,paddingVertical:window.innerHeight*0.015}} />
           
                 
                    <TextInput numberOfLines={1} placeholder={"Número de teléfono: +34 000 000 000"} style={{borderRadius:6,marginBottom:window.innerHeight*0.02,fontSize:"0.9rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.03,paddingVertical:window.innerHeight*0.015}} />
                  
                  
                    
                    <TouchableOpacity onPress={()=>this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')}  style={{borderRadius:6,alignSelf:"center",marginBottom:window.innerHeight*0.03, alignItems: "center", backgroundColor: "#FFC524", width: "90%",marginTop:window.innerHeight*0.01 }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.025, textAlign: "center", width: "100%" }}>
                    Unirse
                    </Text>
                </View>
                
                </TouchableOpacity>
                <Text style={{ color: "#000", fontWeight: "400", fontSize: "0.8rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.02, textAlign: "left", width: "100%" }}>
                    Al inscribirse aceptas los términos y condiciones.
                    </Text>
                </View>
               
                         </View>
         


       


          
              
        </View>
        {/**BLOQUE 2 */}
        <View style={{width:"100%",height:window.innerHeight*0.75}}>
<ScrollView horizontal style={{width:window.innerWidth,height:"100%"}}>
<View style={{marginLeft:window.innerWidth*0.02,marginTop:window.innerHeight*0.02, borderWidth:10,borderRadius:20,borderColor:"#FFC524",width:window.innerWidth*0.8,height:window.innerHeight*0.7,backgroundColor:"#FFC524",overflow:"hidden"}}>
<Image source={covid} style={{borderRadius:14, alignSelf:"flex-end", width: "100%", height: window.innerHeight*0.45, zIndex: 0 }} resizeMode="cover" />
<Text style={{paddingTop:window.innerHeight*0.02, color: "#000", fontWeight: "500", fontSize: "1.1rem", paddingHorizontal: window.innerWidth*0.005, paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
Te apoyamos frente al COVID-19
                        </Text>
                        <Text style={{marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "0.9rem", paddingHorizontal: window.innerWidth*0.005, textAlign: "left", width: "100%" }}>
                        Queremos que disfrutes de 2 meses gratis al registrarte como muestra de nuestro apoyo.
                        </Text>


</View>

<View style={{marginLeft:window.innerWidth*0.02,marginTop:window.innerHeight*0.02, borderWidth:10,borderRadius:20,borderColor:"#FFC524",width:window.innerWidth*0.8,height:window.innerHeight*0.7,backgroundColor:"#FFC524",overflow:"hidden"}}>
<Image source={no} style={{borderRadius:14, alignSelf:"flex-end", width: "100%", height: window.innerHeight*0.45, zIndex: 0 }} resizeMode="cover" />
<Text style={{paddingTop:window.innerHeight*0.02, color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: window.innerWidth*0.005, paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
Sin necesidad de formación
                        </Text>
                        <Text style={{marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: window.innerWidth*0.005, textAlign: "left", width: "100%" }}>
                        Empieza a gestionar tu carta desde cualquier dispositivo con conexión a Internet en cuestión de minutos.
                        </Text>


</View>
<View style={{marginLeft:window.innerWidth*0.02,marginTop:window.innerHeight*0.02, borderWidth:10,borderRadius:20,borderColor:"#FFC524",width:window.innerWidth*0.8,height:window.innerHeight*0.7,backgroundColor:"#FFC524",overflow:"hidden"}}>
<Image source={all} style={{borderRadius:14, alignSelf:"flex-end", width: "100%", height: window.innerHeight*0.45, zIndex: 0 }} resizeMode="cover" />
<Text style={{paddingTop:window.innerHeight*0.02, color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: window.innerWidth*0.005, paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
Diseñado para el siglo XXI
                        </Text>
                        <Text style={{marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: window.innerWidth*0.005, textAlign: "left", width: "100%" }}>
                        Una nueva forma de crear una carta online con muchas opciones de personalización
                        </Text>


</View>
<View style={{width:window.innerWidth*0.02,height:"100%"}}/>

</ScrollView>
        </View>



        {/**BLOQUE 3 */}
        <View style={{width:"95%",backgroundColor:"#fff",alignSelf:"center"}}>



    <View style={{borderWidth:10,borderRadius:20, borderColor:"#FFC524",width:"100%",alignItems:"center",height:window.innerHeight*0.95,backgroundColor:"#FFC524",overflow:"hidden"}}>
    <Image source={clients} style={{borderRadius:14,width: "100%", height: window.innerHeight*0.6, zIndex: 0 }} resizeMode="cover" />

<Text style={{ color: "#000", fontWeight: "500",padding:0,margin:0, fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left",marginTop:window.innerHeight*0.01,width:"100%"  }}>
Una experiencia increible para tus clientes

                        </Text>
                       
                        <Text style={{marginTop:window.innerHeight*0.02,marginBottom:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left",  }}>
                        Mejora la experiencia que tienen tus clientes a la hora de pedir con nuestras cartas online de última tecnología
                        </Text>
                        <Link to="/menu_example" style={{alignSelf:"flex-start",textDecoration:"none",color:"#000"}} >
   
                        <TouchableOpacity style={{borderRadius:6,alignSelf:"flex-start",marginLeft:window.innerWidth*0.02, justifyContent:"center",alignItems:"center",backgroundColor:"#000",paddingHorizontal:window.innerWidth*0.02,paddingVertical:window.innerHeight*0.02,marginBottom:window.innerHeight*0.03}}>
                       
            <Text style={{ width:"100%", color: "#fff", fontWeight: "400", fontSize: "1rem", textAlign: "center" }}>
                 Ver una carta de ejemplo
</Text>

         </TouchableOpacity> </Link>

</View>
</View>
<View style={{width:"95%",backgroundColor:"#fff",alignSelf:"center",marginTop:window.innerHeight*0.05}}>

<View style={{borderWidth:10,borderRadius:20,borderColor:"#FFC524",width:"100%",alignItems:"center",height:window.innerHeight*0.85,backgroundColor:"#FFC524"}}>
    <Image source={adapt} style={{borderRadius:14,width: "100%", height: window.innerHeight*0.5, zIndex: 0 }} resizeMode="cover" />

<Text style={{ color: "#000", fontWeight: "500",padding:0,margin:0, fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left",marginTop:window.innerHeight*0.05,width:"100%"   }}>
Diseñado para adaptarse a tu negocio

                        </Text>
                       
                        <Text style={{marginTop:window.innerHeight*0.02,marginBottom:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left",  }}>
                        Hemos creado una plataforma de última tecnología que te va a permitir gestionar tu restaurante con extrema facilidad. 
                        </Text>
                        <Link to="/admin_example" style={{alignSelf:"flex-start", textDecoration:"none",color:"#000"}} >
   
                        <TouchableOpacity style={{borderRadius:6, alignSelf:"flex-start",marginLeft:window.innerWidth*0.02, justifyContent:"center",alignItems:"center",backgroundColor:"#000",paddingHorizontal:window.innerWidth*0.02,paddingVertical:window.innerHeight*0.02,marginBottom:window.innerHeight*0.03}}>
            <Text style={{ width:"100%", color: "#fff", fontWeight: "400", fontSize: "1rem", textAlign: "center" }}>
                 Echa un ojo al panel de administración
</Text>
         </TouchableOpacity> 
         </Link>
</View>
</View>
        {/**BLOQUE 4 */}

    <View style={{width:"95%",alignSelf:"center",flexDirection:"column",marginTop:window.innerHeight*0.05}}>
<View style={{borderWidth:10,borderRadius:20,borderColor:"#FFC524",width:"100%",backgroundColor:"#FFC524",paddingTop:window.innerHeight*0.02}}>
<Text style={{ color: "#000", fontWeight: "500",padding:0, fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
¿Cómo funciona elcomensal?
                        </Text>
                       
                        <Text style={{marginTop:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        1. Regístrate y crea tu carta</Text>
                        <Text style={{marginTop:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        2. Coloca los QR generados en las mesas o en algún lugar visible</Text>
                        <Text style={{marginTop:window.innerHeight*0.02,marginBottom:window.innerHeight*0.05,color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        3. El cliente escanea el código QR y accede a la carta</Text>
<Image source={works} style={{borderRadius:14, alignSelf:"center", width: "100%", height: window.innerHeight*0.6, zIndex: 0 }} resizeMode="cover" />

</View>


</View>
<View style={{borderWidth:10,borderRadius:20,borderColor:"#FFC524",width:"95%",alignSelf:"center",backgroundColor:"#FFC524",marginTop:window.innerHeight*0.05,alignSelf:"center"}}>

<View style={{paddingVertical:window.innerHeight*0.05, width:"100%"}}>

<Text style={{ color: "#000", fontWeight: "500",fontSize: "1.5rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%",marginBottom:window.innerHeight*0.02 }}>
Cómo quedará en tu mesa

                        </Text>
                       
                        

                
            
                        <Image source={qr_example} style={{alignSelf:"center", width: window.innerWidth*0.50, height: window.innerHeight*0.5, zIndex: 0 }} resizeMode="contain" />
                        <Text style={{marginVertical:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
                        Este es el aspecto que tendrá el QR una vez colocado.
                        </Text>

</View>


        </View>
        {/**BLOQUE 5 */}
       
        <View style={{width:"95%",height:"100%",justifyContent:"flex-end",alignItems:"flex-end",alignSelf:"center",marginTop:window.innerHeight*0.05}}>

<View style={{borderWidth:10,borderRadius:20,borderColor:"#FFC524", width:"100%",backgroundColor:"#FFC524"}}>
<Text style={{ color: "#000", fontWeight: "500",padding:0,marginTop:window.innerHeight*0.02, fontSize: "1.2rem", paddingHorizontal:window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
¿Por qué nosotros?
                        </Text>
                       
                        <Text style={{marginTop:window.innerHeight*0.03,color: "#000", fontWeight: "500", fontSize: "1rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
                        Tiempo real
                       
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.01,marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
                       Publica los cambios al instante
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.01,color: "#000", fontWeight: "500", fontSize: "1rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
                        Flexibilidad
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.01,marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
                        Crea un menú diferente para cada día de la semana o escoge platos que solo estén disponibles durante un tiempo limitado (Ej. Fines de semana) 
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.01,color: "#000", fontWeight: "500", fontSize: "1rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
                        9.99€ / mes
                        
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.01,marginBottom:window.innerHeight*0.05,color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
                        0 sorpresas. Sin costes ocultos, gastos adicionales ni comisiones.
                        </Text>
                        <Image source={why} style={{borderRadius:14,alignSelf:"center", width:"100%", height: window.innerHeight*0.62, zIndex: 0 }} resizeMode="cover" />

</View>

<View style={{borderWidth:10,borderRadius:20,borderColor:"#FFC524", marginTop:window.innerHeight*0.05, width:"98%",alignSelf:"center", backgroundColor:"#FFC524",overflow:"hidden"}}>

<View style={{width:"100%"}}>
<Text style={{marginTop:window.innerHeight*0.02, color: "#000", fontWeight: "500",padding:0, fontSize: "1.2rem", paddingHorizontal: window.innerWidth*0.01, textAlign: "left", width: "100%" }}>
¿Tienes dudas?
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.02,marginBottom:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1rem",  paddingHorizontal: window.innerWidth*0.01, textAlign: "left", width: "90%" }}>
               Estaremos encantados de resolver todas las dudas que te surjan
                </Text>
                <TextInput numberOfLines={1} placeholder={"Nombre completo"} style={{borderRadius:6,marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"98%",alignSelf:"flex-start",marginLeft:window.innerWidth*0.01,backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
                <TextInput numberOfLines={1} placeholder={"Correo electrónico"} style={{borderRadius:6,marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"98%",alignSelf:"flex-start",marginLeft:window.innerWidth*0.01,backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
                <TextInput multiline numberOfLines={5} placeholder={"Detalles de la consulta"} style={{borderRadius:6,marginBottom:window.innerHeight*0.02, fontSize:"1rem", width:"98%",alignSelf:"flex-start",marginLeft:window.innerWidth*0.01,backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
                <TouchableOpacity onPress={()=>this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')}  style={{borderRadius:6,alignSelf:"flex-start",marginBottom:window.innerHeight*0.03, alignItems: "center", backgroundColor: "#000",marginTop:window.innerHeight*0.02,marginLeft:window.innerWidth*0.01 }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#fff", fontWeight: "400", fontSize: "1rem", paddingHorizontal: window.innerWidth*0.05, paddingVertical: window.innerHeight * 0.02, textAlign: "center", width: "100%" }}>
                    Enviar consulta
                    </Text>
                </View>
                
                </TouchableOpacity>
</View>

</View>
</View>
           
           {/**BLOQUE 7 */}
      
    {/**BOTTOM */}
    <View style={{justifyContent:"center",alignItems:"center", width:"100%",height:window.innerHeight*0.1,backgroundColor:"#FFC524",marginTop:window.innerHeight*0.05}}>
    <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.9rem", textAlign: "left" }}>
                                        ELCOMENSAL © 2020. Made with 🧑🏻‍🍳👩🏻‍🍳
                  </Text>
    </View>
         </ScrollView>
         <View style={{  boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",position:"absolute",top:0,width:window.innerWidth,height:window.innerHeight*0.08,backgroundColor:"#fff",flexDirection:"row",overflow:"hidden"}}>
   
   <View style={{width:"30%",height:"100%",backgroundColor:"#fff",justifyContent:"center",alignItems:"center"}}>
   <Image source={elcomensal_dark} style={{alignSelf:"center", width:"90%", height: "100%", zIndex: 0 }} resizeMode="contain" />

   </View>
   <View style={{width:"5%",height:"100%",}}>

   </View>
    <Link to="/login" style={{height:"100%", width:"30%",textDecoration:"none",color:"#000"}} >
    <TouchableOpacity style={{height:"100%",alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}}>
 
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left" }}>
                                        Iniciar sesión
                  </Text>
                  


                </TouchableOpacity>
                </Link>  
                <View style={{width:"5%",height:"100%",}}>

</View>
                <Link to="/register" style={{height:"70%",alignSelf:"center", width:"30%",textDecoration:"none",color:"#000",marginRight:"2%"}} > 
                <TouchableOpacity style={{height:"100%",alignSelf:"center", alignItems:"center",justifyContent:"center",backgroundColor:"#FFC524",borderRadius:6}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "center" }}>
                                        Únete
                  </Text>
                  


                </TouchableOpacity>
                </Link>
    </View>
          </View>
      )
    }
}