
import { Animated, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback, TextInput, FlatList } from 'react-native';
import * as React from 'react';
import { IoIosClose, IoMdTrendingDown } from "react-icons/io";
import account from '../bottom_account.png';




export default class App extends React.Component {
  
  

  render() {
    return (
      <View style={{ width: "100%", backgroundColor: "#f5f5f5" }}>

      
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ paddingBottom: window.innerHeight * 0.02, flexDirection: "row", justifyContent: "space-between", paddingTop: window.innerHeight * 0.05, alignItems: "center", width: "100%", backgroundColor: "#fff" }}>
                <Text style={{ width: "50%", color: "#000", fontWeight: "500", fontSize: "1.5rem", paddingHorizontal: "5%", textAlign: "left" }}>
                  Tu pedido
                    </Text>
                <Text style={{ width: "50%", color: "gray", fontWeight: "400", fontSize: "0.8rem", paddingHorizontal: "5%", textAlign: "right" }}>
                  Nº de pedido: 17
                    </Text>
              </View>
              <View style={{ width: "100%", backgroundColor: "#fff", marginTop: window.innerHeight * 0.0025, paddingVertical: window.innerHeight * 0.02 }}>
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <Text style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.01, textAlign: "left", backgroundColor: "#fff" }}>
                    Hamburguesa con queso (1)
                    </Text>
                  <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.01, textAlign: "left", backgroundColor: "#fff" }}>
                    22.36€
                    </Text>
                </View>
                <Text style={{ color: "gray", fontWeight: "400", fontSize: "0.8rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.01, textAlign: "left", backgroundColor: "#fff" }}>
                  - Sin pepinillos
                    </Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#fff", alignItems: "center", marginTop: window.innerHeight * 0.0025,paddingBottom: window.innerHeight * 0.0025 }}>
                <Text style={{ color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.01, textAlign: "left", paddingTop: window.innerHeight * 0.03, backgroundColor: "#fff" }}>
                  Total
                    </Text>
                <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.3rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.01, textAlign: "left", paddingTop: window.innerHeight * 0.03, backgroundColor: "#fff" }}>
                  122.68 €
                    </Text>
              </View>
              <Text style={{ backgroundColor: "#fff", color: "gray", fontWeight: "400", fontSize: "0.8rem", paddingHorizontal: "5%", paddingTop: window.innerHeight * 0.01, paddingBottom: window.innerHeight * 0.02, textAlign: "left", width: "100%" }}>
                No se te aplicará ningún cargo todavía
                    </Text>
              <Image source={account} style={{ width: window.innerWidth, height: window.innerHeight * 0.04, marginTop: -5, zIndex: 99 }} resizeMode="center" />
              <View style={{ width: "100%", height: window.innerHeight * 0.3 }} />
            </ScrollView>
            <View style={{ position: "absolute", bottom: 0, justifyContent: "space-between", width: "100%" }}>
              <TouchableOpacity style={{ alignItems: "center", backgroundColor: "#000", width: "100%", }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  <Text style={{ color: "#fff", fontWeight: "400", fontSize: "0.7rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "center", width: "100%" }}>
                    Espera aprox: 15-20 min
                    </Text>
                  <Text style={{ color: "#fff", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "center", width: "100%" }}>
                    Confirmar pedido
                    </Text>
                </View>

              </TouchableOpacity>

            </View>
    
      </View>
    );
  }
}
