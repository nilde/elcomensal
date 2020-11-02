
import {Animated, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback,TextInput,FlatList } from 'react-native';
import * as React from 'react';



export default class App extends React.Component {

  render() {
    return (
      <View style={{ width:"100%" ,backgroundColor: "#f5f5f5" }}>
        
        <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.3rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "left", width: window.innerWidth,backgroundColor:"#fff" }}>
                    Pedir al camarero
                    </Text>
                    <TextInput numberOfLines={5} placeholder={"Pide un poco de pan, salsa, ..."} multiline style={{fontSize:"1rem", height:window.innerHeight*0.4, width:window.innerWidth,backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.05,paddingVertical:window.innerHeight*0.02}} />
                    <Text style={{ color: "gray", fontWeight: "400", fontSize: "0.9rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "center", width: "100%",backgroundColor:"#fff" }}>
                    Por favor recuerda que te atienden personas, sé siempre respetuoso.
                    </Text>
                    <View style={{  justifyContent: "space-between", width: window.innerWidth }}>
              <TouchableOpacity style={{ alignItems: "center", backgroundColor: "#000", width: "100%", }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#fff", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "center", width: "100%" }}>
                    Enviar petición
                    </Text>
                </View>

              </TouchableOpacity>

            </View>

        
      </View>
    );
  }
}
