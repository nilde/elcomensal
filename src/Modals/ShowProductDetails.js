
import { Animated, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback, TextInput, FlatList } from 'react-native';
import * as React from 'react';
import { IoIosClose, IoMdTrendingDown } from "react-icons/io";
import account from '../bottom_account.png';
const config = [
  {
    title: "¿Como quieres la carne?",
    obligatory: true,
    options: [
      {
        title: "Poco hecha",
        price: 0.20

      },
      {
        title: "Muy hecha",
        price: -0.30

      },
      {
        title: "Al punto",
        price: 0

      }
    ]
  }
]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAmount: 0,
      quantity: 1,
      basePrice: 0,
      complements: [],
      comment: ""
    }
  }
  componentDidMount(){
    document.body.style.overflow = 'hidden';
  }
  componentWillUnmount() {
    document.body.style.overflow = 'unset';
}

  render() {
    return (
      <View style={{ width: "100%", backgroundColor: "#f5f5f5" }}>



        <TouchableOpacity onLongPress={() => this.props.closeDetails()} onPress={() => this.props.closeDetails()} style={{ alignSelf: "flex-end", position: "absolute", top: 0, backgroundColor: "#fff" }}>
          <IoIosClose size="2em" />
        </TouchableOpacity>
        <Text style={{ color: "#000", fontWeight: "600", fontSize: "1.2rem", paddingTop: window.innerHeight * 0.03, paddingHorizontal: "5%", backgroundColor: "#fff" }}>
          {this.props.activeElement.title}
        </Text>
        <Text style={{ color: "gray", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingTop: window.innerHeight * 0.01, backgroundColor: "#fff" }}>

          {this.props.activeElement.description}
        </Text>
        <Text style={{paddingTop:window.innerHeight*0.02,paddingBottom:window.innerHeight*0.02, color: "#000", fontWeight: "500", fontSize: "1rem", paddingLeft: "5%", paddingTop: window.innerHeight * 0.01, backgroundColor: "#fff" }}>


{this.props.activeElement.price.toFixed(2)} €

</Text>

        { this.props.activeElement.options &&
          this.props.activeElement.options.map((item, index) => (
            <View>
              <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem", paddingTop: window.innerHeight * 0.02,marginTop:window.innerHeight*0.0025, paddingBottom: window.innerHeight * 0.02, paddingLeft: "5%", backgroundColor: "#fff" }}>
                {item.title}
              </Text>

              {
                item.content.map((internal_item, index) => (
                  <View style={{ flexDirection: "row", backgroundColor: "#fff", marginTop: window.innerHeight * 0.0025, justifyContent: "space-between" }}>
                    <Text style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingVertical: window.innerHeight * 0.02, marginLeft: "5%",width:"70%" }}>
                      {internal_item.title}
                      </Text>
                    { internal_item.price && internal_item.price != 0 &&
                      <Text style={{ color: "#000", fontWeight: "400", fontSize: "0.9rem", paddingVertical: window.innerHeight * 0.02, marginRight: "5%" }}>
                      ({internal_item.price > 0 ? "+" : ""}{internal_item.price.toFixed(2) + " €"})
                    </Text>
                    }
                  </View>
                ))
              }
              <View style={{width:"100%",height:window.innerHeight*0.0025,backgroundColor:"#f5f5f5"}}/>
            </View>
          ))
        }
        <View horizontal style={{flexDirection: "row", flexWrap: "wrap", width: "100%", backgroundColor: "#fff", paddingBottom: window.innerHeight * 0.02 }}>
          {
            this.props.activeElement.recommended &&
            <Text style={{ marginTop: window.innerHeight * 0.02, color: "#000", backgroundColor: !this.props.activeElement.avaliable ? "#e8e8e8" : "#FFF4A3", fontWeight: "500", fontSize: "0.8rem", marginLeft: window.innerWidth * 0.03, textAlign: "left", paddingHorizontal: window.innerWidth * 0.03, borderRadius: 100, paddingVertical: window.innerHeight * 0.005 }}>

              Especialidad
</Text>
          }
          {
            this.props.activeElement.vegetarian &&
            <Text style={{ marginTop: window.innerHeight * 0.02, color: "#000", backgroundColor: !this.props.activeElement.avaliable ? "#e8e8e8" : "#AFF396", fontWeight: "500", fontSize: "0.8rem", marginLeft: window.innerWidth * 0.03, textAlign: "left", paddingHorizontal: window.innerWidth * 0.03, borderRadius: 100, paddingVertical: window.innerHeight * 0.005 }}>

              Vegetariano
</Text>
          }
          {
            this.props.activeElement.vegan &&
            <Text style={{ marginTop: window.innerHeight * 0.02, color: "#000", backgroundColor: !this.props.activeElement.avaliable ? "#e8e8e8" : "#BDDDFF", fontWeight: "500", fontSize: "0.8rem", marginLeft: window.innerWidth * 0.03, textAlign: "left", paddingHorizontal: window.innerWidth * 0.03, borderRadius: 100, paddingVertical: window.innerHeight * 0.005 }}>

              Vegano
</Text>
          }

          {
            this.props.activeElement.no_gluten &&
            <Text style={{ marginTop: window.innerHeight * 0.02, color: "#000", backgroundColor: !this.props.activeElement.avaliable ? "#e8e8e8" : "#E1BDFF", fontWeight: "500", fontSize: "0.8rem", marginLeft: window.innerWidth * 0.03, textAlign: "left", paddingHorizontal: window.innerWidth * 0.03, borderRadius: 100, paddingVertical: window.innerHeight * 0.005 }}>

              Sin gluten
</Text>
          }
          {
  this.props.activeElement.people>1 &&
                                  <Text style={{ marginTop: window.innerHeight * 0.02, color: "#000", backgroundColor: !this.props.activeElement.avaliable ? "#e8e8e8" : "#FFA8A8", fontWeight: "500", fontSize: "0.8rem", marginLeft: window.innerWidth * 0.03, textAlign: "left", paddingHorizontal: window.innerWidth * 0.03, borderRadius: 100, paddingVertical: window.innerHeight * 0.005 }}>

                                 
                                Para {this.props.activeElement.people} personas
</Text>
                                }

        </View>
   
        <View style={{ width: "100%", paddingVertical: window.innerHeight * 0.01,backgroundColor:"#f5f5f5" }}>
          <Text style={{ color: "#000", fontWeight: "500", fontSize: "0.9rem",textAlign: "left", paddingHorizontal: window.innerWidth * 0.05, borderRadius: 100, paddingVertical: window.innerHeight * 0.01 }}>
           Información sobre alérgenos
</Text>
<Text style={{ color: "#000", fontWeight: "400", fontSize: "0.9rem",textAlign: "left", paddingHorizontal: window.innerWidth * 0.05, borderRadius: 100, paddingBottom: window.innerHeight * 0.02 }}>
           Puede contener nueces
</Text>

        </View>
        {
  !this.props.activeElement.avaliable &&
  <View style={{justifyContent:"center",alignItems:"center", width:"100%",backgroundColor:"#e8e8e8"}}>
  <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem",textAlign: "left", paddingHorizontal: window.innerWidth * 0.05, borderRadius: 100, paddingVertical: window.innerHeight * 0.03 }}>
          Agotado
</Text>
    </View>
}






      </View>
    );
  }
}
