import * as React from 'react';
import Title from 'reactjs-title'
import restaurantRegister from '../restaurantRegister.jpg';
import elcomensal from '../elcomensal.png';
import landing1 from '../landing1.jpg';
import landing2 from '../landing2.jpg';
import landing3 from '../landing3.jpg';
import covid from '../covid.jpg';
import adapt from '../adapt.jpg';
import update from '../update.jpg';
import works from '../works.jpg';
import why from '../why.jpg';
import clients from '../clients.jpg';
import qr_example from '../qr_example.png';
import frame from '../frame.png';
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
                        
                        <View style={{width:"30%",marginLeft:window.innerWidth*0.05, alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}}>
                        <Text style={{marginTop:window.innerHeight*0.025, color: "#000", fontWeight: "500", fontSize: "1.5rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
                        Moderniza tu negocio
                        </Text>
                        <Text style={{marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        Crea tu carta online y conecta con tus clientes cómo nunca
                        </Text>
      
                    <TextInput numberOfLines={1} placeholder={"Nombre del restaurante"} style={{marginBottom:window.innerHeight*0.02,fontSize:"0.9rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.03,paddingVertical:window.innerHeight*0.015}} />
           
               
                    <TextInput numberOfLines={1} placeholder={"Dirección Ej. C/ Bruc 23, Barcelona"} style={{marginBottom:window.innerHeight*0.02,fontSize:"0.9rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.03,paddingVertical:window.innerHeight*0.015}} />
                 
                    <TextInput numberOfLines={1} placeholder={"Correo electrónico"} style={{marginBottom:window.innerHeight*0.02,fontSize:"0.9rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.03,paddingVertical:window.innerHeight*0.015,marginBottom:window.innerHeight*0.015}} />
             
                
                    <TextInput numberOfLines={1} placeholder={"Nombre completo"} style={{marginBottom:window.innerHeight*0.02,fontSize:"0.9rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.03,paddingVertical:window.innerHeight*0.015}} />
           
                 
                    <TextInput numberOfLines={1} placeholder={"Número de teléfono: +34 000 000 000"} style={{marginBottom:window.innerHeight*0.02,fontSize:"0.9rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.03,paddingVertical:window.innerHeight*0.015}} />
                  
                  
                    
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
        
        <View style={{alignSelf:"center", width:"60%",backgroundColor:"#FFC627",flexDirection:"row",justifyContent:"space-between",marginTop:window.innerHeight*0.1}}>
    
<View style={{width:"50%",paddingVertical:window.innerHeight*0.06}}>
<Text style={{ color: "#000", fontWeight: "500", fontSize: "2.5rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.02, textAlign: "left", width: "100%" }}>
Te apoyamos frente a la COVID-19
                        </Text>
                        <Text style={{marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1.3rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        Queremos que disfrutes de 2 meses gratis al registrarte ahora como muestra de nuestro apoyo.
                        </Text>
</View>

<View style={{width:"30%",justifyContent:"flex-end"}}>
<Image source={covid} style={{position:"absolute",right:0, alignSelf:"flex-end", width: "100%", height: "100%", zIndex: 0 }} resizeMode="cover" />

</View>
        </View>
        {/**BLOQUE 3 */}
        <View style={{width:"100%",backgroundColor:"#fff",marginTop:window.innerHeight*0.2}}>


<View style={{flexDirection:"row",width:"100%"}}>
    <View style={{width:"50%",alignItems:"center",height:"100%"}}>
    <Image source={clients} style={{width: window.innerWidth*0.5, height: window.innerHeight*0.7, zIndex: 0 }} resizeMode="cover" />

<Text style={{ color: "#000", fontWeight: "500",padding:0,margin:0, fontSize: "2.2rem", paddingHorizontal: "5%", textAlign: "left",marginTop:window.innerHeight*0.05  }}>
Una experiencia increible para tus clientes
<View style={{width:"100%",height:8,backgroundColor:"#FFC627"}}/>
                        </Text>
                       
                        <Text style={{marginTop:window.innerHeight*0.02,marginBottom:window.innerHeight*0.05,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left",  }}>
                        Mejora la experiencia que tienen tus clientes a la hora de pedir con nuestras cartas online de última tecnología
                        </Text>
</View>
<View style={{width:"50%",alignItems:"center",height:"100%"}}>
    <Image source={adapt} style={{width: window.innerWidth*0.5, height: window.innerHeight*0.7, zIndex: 0 }} resizeMode="cover" />

<Text style={{ color: "#000", fontWeight: "500",padding:0,margin:0, fontSize: "2.2rem", paddingHorizontal: "5%", textAlign: "left",marginTop:window.innerHeight*0.05   }}>
Diseñado para adaptarse a tu negocio
<View style={{width:"100%",height:8,backgroundColor:"#FFC627"}}/>
                        </Text>
                       
                        <Text style={{marginTop:window.innerHeight*0.02,marginBottom:window.innerHeight*0.05,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left",  }}>
                        elcomensal ha creado una plataforma única que permite integrarla con tu negocio de una forma realmente sencilla. De hecho, puedes empezar a trabajar con ella en pocos minutos. 
                        </Text>
</View>
                        </View>
        </View>
        {/**BLOQUE 4 */}


      

        {/**BLOQUE 4 */}
        <View style={{width:"70%",backgroundColor:"#fff",marginTop:window.innerHeight*0.2,alignSelf:"center"}}>

        <View style={{flexDirection:"row-reverse",height:window.innerHeight*0.7,width:"100%"}}>
    <View style={{marginLeft:window.innerWidth*0.1, width:"40%",alignItems:"center",height:"100%"}}>
<Text style={{ color: "#000", fontWeight: "500",padding:0,marginTop:window.innerHeight*0.03, fontSize: "2.2rem", paddingHorizontal: "5%", textAlign: "right", width: "100%" }}>
Actualiza tu carta en tiempo real
<View style={{width:"100%",height:8,backgroundColor:"#FFC627"}}/>
                        </Text>
                       
                        <Text style={{marginTop:window.innerHeight*0.02,marginBottom:window.innerHeight*0.05,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "right", width: "100%" }}>
                        Descubre como nuestra teconología de última generación permite actualizar el estado de tu carta al instante. Publica ofertas,  actualiza el estado de tus platos y bebidas, y más
                        </Text>
</View>
<View style={{width:"40%",justifyContent:"flex-start"}}>
                        <Image source={update} style={{alignSelf:"center", width: window.innerWidth*0.9, height: window.innerHeight*0.7, zIndex: 0 }} resizeMode="contain" />

</View>
</View>
        </View>
        {/**BLOQUE 5 */}
        <View style={{width:"80%",backgroundColor:"#fff",marginTop:window.innerHeight*0.2,alignSelf:"center"}}>

        <View style={{flexDirection:"row",height:window.innerHeight*0.7,width:"100%"}}>


<View style={{ width:"60%",alignItems:"center",height:"100%"}}>
<Text style={{ color: "#000", fontWeight: "500",padding:0, fontSize: "2.2rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
¿Cómo funciona elcomensal?
<View style={{width:"100%",height:8,backgroundColor:"#FFC627"}}/>
                        </Text>
                       
                        <Text style={{marginTop:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        1. Regístrate y crea tu carta</Text>
                        <Text style={{marginTop:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        2. Coloca los QR generados en las mesas o en algún lugar visible</Text>
                        <Text style={{marginTop:window.innerHeight*0.02,marginBottom:window.innerHeight*0.05,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        3. El cliente escanea el código QR y accede a la carta</Text>
                        </View>
                        <View style={{width:"40%",justifyContent:"flex-start"}}> 
                        <Image source={works} style={{alignSelf:"center", width: window.innerWidth*0.3, height: window.innerHeight*0.7, zIndex: 0 }} resizeMode="cover" />

</View>
</View>
        </View>
           {/**BLOQUE 6 */}
           <View style={{width:"70%",backgroundColor:"#FFC627",marginTop:window.innerHeight*0.2,alignSelf:"center"}}>

<View style={{flexDirection:"row-reverse",height:window.innerHeight*0.5,width:"100%"}}>
<View style={{marginLeft:window.innerWidth*0.1, width:"50%",alignItems:"center",height:"100%"}}>
<Text style={{ color: "#000", fontWeight: "500",padding:0,marginTop:window.innerHeight*0.05, fontSize: "2.2rem", paddingHorizontal: window.innerWidth*0.05, textAlign: "right", width: "100%" }}>
Descubre cómo quedará
<View style={{width:"100%",height:8,backgroundColor:"#FFC627"}}/>
                        </Text>
                       
                        <Text style={{marginVertical:window.innerHeight*0.02,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: window.innerWidth*0.05, textAlign: "right", width: "100%" }}>
                        Escanea el código QR o accede a http://www.elcomensalapp.com/197 en tu navegador para hacerte una idea sobre como quedará tu carta
                        </Text>

                        </View>
                        <View style={{width:"40%",justifyContent:"flex-start"}}> 
                        <Image source={qr_example} style={{alignSelf:"center", width: window.innerWidth*0.50, height: window.innerHeight*0.5, zIndex: 0 }} resizeMode="contain" />

</View>
</View>


        </View>
           {/**BLOQUE 7 */}
           <View style={{width:"100%",backgroundColor:"#fff",marginTop:window.innerHeight*0.2,alignSelf:"center"}}>

<View style={{flexDirection:"row",height:window.innerHeight*0.7,width:"100%"}}>
<View style={{ width:"50%",alignItems:"center",height:"100%"}}>
<Text style={{ color: "#000", fontWeight: "500",padding:0,marginTop:window.innerHeight*0.05, fontSize: "2.2rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
¿Por qué nosotros?
<View style={{width:"100%",height:8,backgroundColor:"#FFC627"}}/>
                        </Text>
                       
                        <Text style={{marginTop:window.innerHeight*0.01,color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        Mayor velocidad
                       
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.01,marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                       Edita la carta tantas veces como quieras y publica cambios en tiempo real
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.01,color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        Más versátil
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.01,marginBottom:window.innerHeight*0.03,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        Crea un menú diferente para cada día de la semana o escoge platos que solo estén disponibles durante un tiempo limitado (Ej. Fines de semana) 
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.01,color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        9.99€ / mes
                        
                        </Text>
                        <Text style={{marginTop:window.innerHeight*0.01,marginBottom:window.innerHeight*0.05,color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                        No te vas a llevar ninguna sorpresa. Elcomensal no tiene gastos adicionales ni costes ocultos.
                        </Text>
                        </View>
                        <View style={{width:"50%",justifyContent:"flex-start"}}> 
                        <Image source={why} style={{alignSelf:"center", width: window.innerWidth*0.5, height: window.innerHeight*0.7, zIndex: 0 }} resizeMode="cover" />

                        </View>
</View>


</View>
    {/**BOTTOM */}
    <View style={{width:"100%",height:100,backgroundColor:"#FFC627"}}>

    </View>
         </ScrollView>
    
          </View>
      )
    }
}