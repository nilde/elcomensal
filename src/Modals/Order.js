
import { Animated, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback, TextInput, FlatList } from 'react-native';
import * as React from 'react';
import { IoIosClose, IoMdTrendingDown } from "react-icons/io";


export default class App extends React.Component {

  render() {
    return (
      <View style={{ width: "100%", backgroundColor: "#f5f5f5" }}>

        <View style={{ width: window.innerWidth, backgroundColor: "#fff", }}>
          <TouchableOpacity onLongPress={() => this.setState({ showDetails: false })} onPress={() => this.setState({ showDetails: false })} style={{ alignSelf: "flex-end", position: "absolute", top: 0 }}>
            <IoIosClose size="2.5em" />
          </TouchableOpacity>
          <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.3rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "left", width: window.innerWidth }}>
            Pedir la cuenta
                    </Text>



          <View style={{ justifyContent: "space-between", width: window.innerWidth }}>
            <TouchableOpacity style={{ alignItems: "center", backgroundColor: "#000", width: "90%", alignSelf: "center" }}>
              <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>

                <Text style={{ color: "#fff", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "center", width: "100%" }}>
                  Pagar con tarjeta
                    </Text>

              </View>

            </TouchableOpacity>

          </View>
          <View style={{ justifyContent: "space-between", width: window.innerWidth, marginTop: window.innerHeight * 0.015, marginBottom: window.innerHeight * 0.03 }}>
            <TouchableOpacity style={{ alignItems: "center", backgroundColor: "#E8E8E8", width: "90%", alignSelf: "center" }}>
              <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>

                <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "center", width: "100%" }}>
                  Pagar con efectivo
                    </Text>

              </View>

            </TouchableOpacity>

          </View>
          <Text style={{ marginBottom: window.innerHeight * 0.03, color: "gray", fontWeight: "400", fontSize: "0.9rem", paddingHorizontal: "5%", textAlign: "center" }}>
            El restaurante se encarga de gestionar el cobro. Muchas gracias por usar
                    <Text style={{ marginLeft: window.innerWidth * 0.01, color: "#000", fontWeight: "600", fontSize: "0.7rem", textAlign: "center", textDecorationLine: "underline" }}>
              ELCOMENSAL
                    </Text>
          </Text>
        </View>


      </View>
    );
  }
}
