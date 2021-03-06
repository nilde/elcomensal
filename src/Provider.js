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
    this.filterDishes=this.filterDishes.bind(this);
    this.filterCategories=this.filterCategories.bind(this);
    this.filterMenus=this.filterMenus.bind(this);

    this.state = {
      userData: {
        id: "",
        image: "",
        name: "",
        direction: "",
        mail: "",
        phone: "",
        password: "",
      },
      dishesData: {
        activeDish: {},
        editDishIndex: -1,
        filteredDishes: [],
        dishes: [
          {
            id: 1,
            image: "http://www.google.com",
            name: "Hamburguesa",
            description: "Hamburguesa de la parra",
            price: 10.99,
            price_offer: 8.99,
            offer: true,
            avaliable: true,
            labels: ["speciality", "for_share"],
            allergens: ["peanuts"],
          }]
      },
      menusData: {
        activeMenu: {},
        editMenuIndex: -1,
        filteredMenus: [],
        menus: [
          {
            id: 1,
            price: 12,
            title: "Fin de semana",
            articles: [1],
            avaliable: [
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
      categoriesData: {
        activeCategory: {},
        editCategoryIndex: -1,
        filteredCategories: [],
        categories: [
          {
            id: 1,
            title: "Hamburguesas",
            articles: [1],
            avaliable: [
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
      paymentsData: {
        name: "",
        city: "",
        direction: "",
        nif: ""

      }

    }


  }

  componentDidMount() {
    this.filterDishes("");
    this.filterCategories("");
    this.filterMenus("")
  }

  //USERS FUNCTIONS

  filterDishes(newText) {
    var dishesData = this.state.dishesData
    var filteredDishes = []
    for (var i = 0; i < dishesData.dishes.length; i++) {
      if (dishesData.dishes[i].name.includes(newText)) {
        filteredDishes.push(dishesData.dishes[i])
      }
    }
    dishesData.filteredDishes = filteredDishes
    this.setState({ dishesData })
  }





  //DISHES FUNCTIONS
  filterCategories(newText) {
    var categoriesData = this.state.categoriesData
    var filteredCategories = []
    for (var i = 0; i < categoriesData.categories.length; i++) {
      if (categoriesData.categories[i].title.includes(newText)) {
        filteredCategories.push(categoriesData.categories[i])
      }
    }
    categoriesData.filteredCategories = filteredCategories
    this.setState({ categoriesData })
  }
  //MENUS FUNCTIONS
  filterMenus(newText) {
    var menusData = this.state.menusData
    var filteredMenus = []
    for (var i = 0; i < menusData.menus.length; i++) {
      if (menusData.menus[i].title.includes(newText)) {
        filteredMenus.push(menusData.menus[i])
      }
    }
    menusData.filteredMenus = filteredMenus
    this.setState({ menusData })
  }

  //CATEGORIES FUNCTIONS

  //PAYMENTS FUNCTIONS
  savePaymentInfo() {
    //call to firebase
  }





  render() {
    const { children } = this.props
    const { userData, dishesData, menusData, categoriesData, paymentsData } = this.state;
    const {
      //PROFILE

      //DISHES
      filterDishes,

      //CATEGORIES
      filterCategories,

      //MENUS
      filterMenus

      //PAYMENTS
    } = this

    return (

      <GeneralContext.Provider
        value={{
          //STATE DATA
          userData,
          dishesData,
          menusData,
          categoriesData,
          paymentsData,

          //PROFILE

          //DISHES
          filterDishes,

          //CATEGORIES
          filterCategories,

          //MENUS
          filterMenus

          //PAYMENTS


        }}
      >
        {children}
      </GeneralContext.Provider>
    )
  }
}


export default GeneralContext

export { GeneralProvider }
