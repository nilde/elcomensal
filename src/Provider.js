import React, { Component } from 'react';

import { Alert, AsyncStorage } from 'react-native'
//import firebase from "@react-native-firebase/app";
//import "@react-native-firebase/firestore";

//create context with an empty object
const GeneralContext = React.createContext();


class GeneralProvider extends Component {
  // Context state
  constructor(props) {
    super(props);
  

    this.state = {
      userData:{

      },
      dishesData:{
        dishes:[
          {id:1,
            image:"http://www.google.com",
          name:"Hamburguesa",
          description:"Hamburguesa de la parra",
          price:10.99,
          price_offer:8.99,
          offer:true,
          avaliable:true,
          labels:["speciality","for_share"],
          allergens:["peanuts"],
         }]
      },
      menusData:{
        menus:[
          {
            id:1,
            price:12,
            title:"Fin de semana",
            articles:[1],
            avaliable:[
            Array.from(Array(24).keys()),//monday
            Array.from(Array(24).keys()),//tuesday
            Array.from(Array(24).keys()),//wednesday
            Array.from(Array(24).keys()),//thursday
            Array.from(Array(24).keys()),//friday
            Array.from(Array(24).keys()),//saturday
            Array.from(Array(24).keys())//sunday
            ]
          }]
      },
      categoriesData:{
        categories:[
          {
            id:1,
            title:"Hamburguesas",
            articles:[1],
            avaliable:[
              Array.from(Array(24).keys()),//monday
             Array.from(Array(24).keys()),//tuesday
             Array.from(Array(24).keys()),//wednesday
             Array.from(Array(24).keys()),//thursday
             Array.from(Array(24).keys()),//friday
             Array.from(Array(24).keys()),//saturday
             Array.from(Array(24).keys())//sunday
             ]
          }]

      },
      paymentsData:{

      }

    }

    //MAPS REF

    //FINAL MAPS REF
  }





  render() {
    const { children } = this.props
    const {userData,dishesData,menusData,categoriesData,paymentsData } = this.state;


    return (

      <GeneralContext.Provider
        value={{
          //STATE DATA
          userData,
          dishesData,
          menusData,
          categoriesData,
          paymentsData,
          

        }}
      >
        {children}
      </GeneralContext.Provider>
    )
  }
}


export default GeneralContext

export { GeneralProvider }
