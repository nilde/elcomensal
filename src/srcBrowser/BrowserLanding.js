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
                        
                        <View style={{width:"40%",marginLeft:window.innerWidth*0.03, alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}}>
                        <Text style={{marginTop:window.innerHeight*0.025, color: "#000", fontWeight: "500", fontSize: "1.5rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
                        Moderniza tu negocio
                        </Text>
                        <Text style={{marginBottom:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        Crea tu carta online y conecta con tus clientes cómo nunca
                        </Text>
      
                    <TextInput numberOfLines={1} placeholder={"Nombre del restaurante"} style={{marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
           
               
                    <TextInput numberOfLines={1} placeholder={"Dirección Ej. C/ Bruc 23, Barcelona"} style={{marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
                 
                    <TextInput numberOfLines={1} placeholder={"Correo electrónico"} style={{marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015,marginBottom:window.innerHeight*0.015}} />
             
                
                    <TextInput numberOfLines={1} placeholder={"Nombre completo"} style={{marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
           
                 
                    <TextInput numberOfLines={1} placeholder={"Número de teléfono: +34 000 000 000"} style={{marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
  {({getRootProps, getInputProps}) => (
    <View style={{width:"90%",marginBottom:window.innerHeight*0.02, justifyContent:"center",alignItems:"center", alignSelf:"center",height:window.innerHeight*0.2,backgroundColor:"#f5f5f5"}}>

    <div style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}} {...getRootProps()}>
        <input style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}} {...getInputProps()} />
        <Text style={{position:"absolute",top:"45%",alignSelf:"center",justifySelf:"center",textDecorationLine: "none", color: "gray", fontWeight: "400", fontSize: "1rem", textAlign: "center", width:"100%",paddingHorizontal:window.innerWidth*0.02 }}>
        Arrastra una imagen o pulsa para subir una desde tu ordenador (opcional)
                  </Text>
       
      </div>
    </View>
  )}
</Dropzone>
                  
                    
                    <TouchableOpacity onPress={()=>this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')}  style={{alignSelf:"center",marginBottom:window.innerHeight*0.03, alignItems: "center", backgroundColor: "#FFC627", width: "90%",marginTop:window.innerHeight*0.01 }}>
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
        
        <View style={{alignSelf:"center", width:"100%",justifyContent:"space-evenly",marginTop:window.innerHeight*0.05,height:window.innerHeight*0.8,flexDirection:"row"}}>
    
<View style={{borderWidth:10,borderColor:"#FFC627",width:"30%",height:window.innerHeight*0.8,backgroundColor:"#FFC627",overflow:"hidden"}}>
<Image source={covid} style={{ alignSelf:"flex-end", width: "100%", height: window.innerHeight*0.55, zIndex: 0 }} resizeMode="cover" />
<Text style={{paddingTop:window.innerHeight*0.02, color: "#000", fontWeight: "500", fontSize: "1.5rem", paddingHorizontal: window.innerWidth*0.005, paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
Te apoyamos frente al COVID-19
                        </Text>
                        <Text style={{marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1.3rem", paddingHorizontal: window.innerWidth*0.005, textAlign: "left", width: "100%" }}>
                        Queremos que disfrutes de 2 meses gratis al registrarte como muestra de nuestro apoyo.
                        </Text>


</View>
<View style={{borderWidth:10,borderColor:"#FFC627",width:"30%",height:window.innerHeight*0.8,backgroundColor:"#FFC627",overflow:"hidden"}}>
<Image source={no} style={{ alignSelf:"flex-end", width: "100%", height: window.innerHeight*0.55, zIndex: 0 }} resizeMode="cover" />
<Text style={{paddingTop:window.innerHeight*0.02, color: "#000", fontWeight: "500", fontSize: "1.5rem", paddingHorizontal: window.innerWidth*0.005, paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
Sin necesidad de formación
                        </Text>
                        <Text style={{marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1.3rem", paddingHorizontal: window.innerWidth*0.005, textAlign: "left", width: "100%" }}>
                        Empieza a gestionar tu carta desde cualquier dispositivo con conexión a Internet en cuestión de minutos.
                        </Text>

</View>
<View style={{borderWidth:10,borderColor:"#FFC627",width:"30%",height:window.innerHeight*0.8,backgroundColor:"#FFC627",overflow:"hidden"}}>
<Image source={all} style={{ alignSelf:"flex-end", width: "100%", height: window.innerHeight*0.55, zIndex: 0 }} resizeMode="cover" />

<Text style={{paddingTop:window.innerHeight*0.02, color: "#000", fontWeight: "500", fontSize: "1.5rem", paddingHorizontal: window.innerWidth*0.005, paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
Nos encargamos de todo
                        </Text>
                        <Text style={{marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1.3rem", paddingHorizontal: window.innerWidth*0.005, textAlign: "left", width: "100%" }}>
                        Nos encargamos de crear la primera versión de tu carta y disponemos de atención al clientes las 24h
                        </Text>

</View>

        </View>
        {/**BLOQUE 3 */}
        <View style={{width:"95%",backgroundColor:"#fff",marginTop:window.innerHeight*0.05,alignSelf:"center"}}>


<View style={{flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
    <View style={{borderWidth:10,borderColor:"#FFC627",width:"48%",alignItems:"center",height:window.innerHeight*0.85,backgroundColor:"#FFC627"}}>
    <Image source={clients} style={{width: "100%", height: window.innerHeight*0.5, zIndex: 0 }} resizeMode="cover" />

<Text style={{ color: "#000", fontWeight: "500",padding:0,margin:0, fontSize: "1.5rem", paddingHorizontal: "5%", textAlign: "left",marginTop:window.innerHeight*0.05,width:"100%"  }}>
Una experiencia increible para tus clientes

                        </Text>
                       
                        <Text style={{marginTop:window.innerHeight*0.02,marginBottom:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left",  }}>
                        Mejora la experiencia que tienen tus clientes a la hora de pedir con nuestras cartas online de última tecnología
                        </Text>
                        <TouchableOpacity style={{alignSelf:"flex-start",marginLeft:window.innerWidth*0.02, justifyContent:"center",alignItems:"center",backgroundColor:"#fff",paddingHorizontal:window.innerWidth*0.02,paddingVertical:window.innerHeight*0.02,marginBottom:window.innerHeight*0.03}}>
            <Text style={{ width:"100%", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "center" }}>
                 Ver una carta de ejemplo
</Text>
         </TouchableOpacity> 
</View>
<View style={{borderWidth:10,borderColor:"#FFC627",width:"48%",alignItems:"center",height:window.innerHeight*0.85,backgroundColor:"#FFC627"}}>
    <Image source={adapt} style={{width: "100%", height: window.innerHeight*0.5, zIndex: 0 }} resizeMode="cover" />

<Text style={{ color: "#000", fontWeight: "500",padding:0,margin:0, fontSize: "1.5rem", paddingHorizontal: "5%", textAlign: "left",marginTop:window.innerHeight*0.05,width:"100%"   }}>
Diseñado para adaptarse a tu negocio

                        </Text>
                       
                        <Text style={{marginTop:window.innerHeight*0.02,marginBottom:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left",  }}>
                        Hemos creado una plataforma de última tecnología que te va a permitir gestionar tu restaurante con extrema facilidad. 
                        </Text>
                        <TouchableOpacity style={{alignSelf:"flex-start",marginLeft:window.innerWidth*0.02, justifyContent:"center",alignItems:"center",backgroundColor:"#fff",paddingHorizontal:window.innerWidth*0.02,paddingVertical:window.innerHeight*0.02,marginBottom:window.innerHeight*0.03}}>
            <Text style={{ width:"100%", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "center" }}>
                 Echa un ojo al panel de administración
</Text>
         </TouchableOpacity> 
</View>


                        </View>
        </View>
        {/**BLOQUE 4 */}

{/**BLOQUE 5 */}
<View style={{width:"95%",alignSelf:"center",backgroundColor:"#fff",marginTop:window.innerHeight*0.05,alignSelf:"center",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"}}>
    <View style={{width:"40%",flexDirection:"column"}}>
<View style={{borderWidth:10,borderColor:"#FFC627",width:"100%",backgroundColor:"#FFC627",paddingTop:window.innerHeight*0.02}}>
<Text style={{ color: "#000", fontWeight: "500",padding:0, fontSize: "1.5rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
¿Cómo funciona elcomensal?
                        </Text>
                       
                        <Text style={{marginTop:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        1. Regístrate y crea tu carta</Text>
                        <Text style={{marginTop:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        2. Coloca los QR generados en las mesas o en algún lugar visible</Text>
                        <Text style={{marginTop:window.innerHeight*0.02,marginBottom:window.innerHeight*0.05,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        3. El cliente escanea el código QR y accede a la carta</Text>
<Image source={works} style={{alignSelf:"center", width: "100%", height: window.innerHeight*0.7, zIndex: 0 }} resizeMode="cover" />

</View>
<View style={{borderWidth:10,borderColor:"#FFC627",width:"100%",backgroundColor:"#FFC627",marginTop:window.innerHeight*0.05,alignSelf:"center"}}>

<View style={{paddingVertical:window.innerHeight*0.05, width:"100%"}}>

<Text style={{ color: "#000", fontWeight: "500",fontSize: "1.5rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%",marginBottom:window.innerHeight*0.02 }}>
Descubre cómo quedará

                        </Text>
                       
                        

                
            
                        <Image source={qr_example} style={{alignSelf:"center", width: window.innerWidth*0.50, height: window.innerHeight*0.5, zIndex: 0 }} resizeMode="contain" />
                        <Text style={{marginVertical:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
                        Escanea el código QR o accede a http://www.elcomensalapp.com/197 en tu navegador para hacerte una idea sobre como quedará tu carta
                        </Text>

</View>


        </View>
</View>
<View style={{width:"60%",height:"100%",justifyContent:"flex-end",alignItems:"flex-end"}}>
<View style={{borderWidth:10,borderColor:"#FFC627",flexDirection:"row-reverse",height:window.innerHeight*0.7,width:"100%",backgroundColor:"#FFC627"}}>
<View style={{ width:"60%",alignItems:"center",height:"100%"}}>
<Text style={{ color: "#000", fontWeight: "500",padding:0,marginTop:window.innerHeight*0.02, fontSize: "1.5rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "right", width: "100%" }}>
Nos encargamos de todo
                </Text>
               
                <Text style={{marginTop:window.innerHeight*0.02,marginBottom:window.innerHeight*0.05,color: "#000", fontWeight: "400", fontSize: "1.2rem",  paddingHorizontal: window.innerWidth*0.02, textAlign: "right", width: "100%" }}>
               Digitalizamos tu carta completamente gratis para que no suponga ningún esfuerzo empezar a usar nuestra plataforma
                </Text>
</View>
<View style={{width:"50%",justifyContent:"flex-start"}}>
                <Image source={scan} style={{alignSelf:"center", width: window.innerWidth*0.9, height: window.innerHeight*0.7, zIndex: 0 }} resizeMode="contain" />

</View>

</View>
<View style={{borderWidth:10,borderColor:"#FFC627",marginTop:window.innerHeight*0.05, width:"95%",backgroundColor:"#FFC627"}}>
<Text style={{ color: "#000", fontWeight: "500",padding:0,marginTop:window.innerHeight*0.02, fontSize: "1.5rem", paddingHorizontal:window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
¿Por qué nosotros?
                        </Text>
                       
                        <Text style={{marginTop:window.innerHeight*0.03,color: "#000", fontWeight: "500", fontSize: "1.3rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
                        Tiempo real
                       
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.01,marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
                       Publica los cambios al instante
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.01,color: "#000", fontWeight: "500", fontSize: "1.3rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
                        Flexibilidad
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.01,marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
                        Crea un menú diferente para cada día de la semana o escoge platos que solo estén disponibles durante un tiempo limitado (Ej. Fines de semana) 
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.01,color: "#000", fontWeight: "500", fontSize: "1.3rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
                        9.99€ / mes
                        
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.01,marginBottom:window.innerHeight*0.05,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: window.innerWidth*0.02, textAlign: "left", width: "100%" }}>
                        0 sorpresas. Sin costes ocultos, gastos adicionales ni comisiones.
                        </Text>
                        <Image source={why} style={{alignSelf:"center", width:"100%", height: window.innerHeight*0.62, zIndex: 0 }} resizeMode="cover" />

</View>
</View>


</View>
      <View style={{borderWidth:10,borderColor:"#FFC627",flexDirection:"row", marginTop:window.innerHeight*0.05, width:"95%",alignSelf:"center", backgroundColor:"#FFC627"}}>
<View style={{width:"50%",paddingVertical:window.innerHeight*0.02,height:"100%"}}>
<Text style={{ color: "#000", fontWeight: "500",padding:0, fontSize: "1.5rem", paddingHorizontal: window.innerWidth*0.01, textAlign: "left", width: "100%" }}>
¿Tienes dudas?
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.02,marginBottom:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1.2rem",  paddingHorizontal: window.innerWidth*0.01, textAlign: "left", width: "70%" }}>
               Estaremos encantados de resolver todas las dudas que te surjan
                </Text>
                <TextInput numberOfLines={1} placeholder={"Nombre completo"} style={{marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"70%",alignSelf:"flex-start",marginLeft:window.innerWidth*0.01,backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
                <TextInput numberOfLines={1} placeholder={"Correo electrónico"} style={{marginBottom:window.innerHeight*0.02,fontSize:"1rem", width:"70%",alignSelf:"flex-start",marginLeft:window.innerWidth*0.01,backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
                <TextInput multiline numberOfLines={5} placeholder={"Detalles de la consulta"} style={{fontSize:"1rem", width:"70%",alignSelf:"flex-start",marginLeft:window.innerWidth*0.01,backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.015}} />
           
</View>
<View style={{width:"50%",height:"100%"}}>
<Image source={contact} style={{alignSelf:"center", width:"100%", height: window.innerHeight*0.47, zIndex: 0 }} resizeMode="cover" />

</View>
      </View>


    {/**BOTTOM */}
    <View style={{justifyContent:"center",alignItems:"center", width:"100%",height:100,backgroundColor:"#FFC627",marginTop:window.innerHeight*0.05}}>
    <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left" }}>
                                        ELCOMENSAL © 2020. Made with 🧑🏻‍🍳👩🏻‍🍳
                  </Text>
    </View>
         </ScrollView>
    <View style={{  boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",position:"absolute",top:0,width:window.innerWidth,height:window.innerHeight*0.08,backgroundColor:"#fff",flexDirection:"row",overflow:"hidden"}}>
   
   <View style={{width:"15%",height:"100%",backgroundColor:"#fff",justifyContent:"center",alignItems:"center"}}>
   <Image source={elcomensal_dark} style={{alignSelf:"center", width:"70%", height: "100%", zIndex: 0 }} resizeMode="contain" />

   </View>
   <View style={{width:"65%",height:"100%",}}>

   </View>
    <TouchableOpacity style={{height:"100%", width:"10%",alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left" }}>
                                        Iniciar sesión
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{height:"100%", width:"10%",alignItems:"center",justifyContent:"center",backgroundColor:"#FFC627"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left" }}>
                                        Únete
                  </Text>
                  


                </TouchableOpacity>
    </View>
          </View>
      )
    }
}