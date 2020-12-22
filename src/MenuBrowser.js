import logo from './logo.svg';
import './App.css';
import {Animated, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback,TextInput,FlatList } from 'react-native';
import * as React from 'react';
import pattern from './patternpad.svg';
import pattern1 from './patternpad-1.svg';
import elcomensal from './elcomensal.png';
import restaurantLogin from './restaurantLogin.jpg';
import restaurantRegister from './restaurantRegister.jpg';
import initial from './initial.svg';
import menu from './menu.png';
import account from './bottom_account.png';
import { motion } from "framer-motion"
import { IoIosClose, IoMdTrendingDown,IoMdSearch } from "react-icons/io";
import ReactStars from 'react-stars'
import firebase from "firebase";
import BarLoader from "react-spinners/BarLoader";
import smoothscroll from 'smoothscroll-polyfill';
import { HiArrowRight,HiSearch } from "react-icons/hi";
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import Waiter from './Modals/Waiter'
import Order from './Modals/Order'
import ShowCheckOrder from './Modals/ShowCheckOrder'
import ShowProductDetails  from './Modals/ShowProductDetails';
import Account from './Modals/Account'
import Blur from 'react-css-blur'
import {
  CollapsibleComponent,
  CollapsibleHead,
  CollapsibleContent
} from "react-collapsible-component";
import SnackbarProvider,{withSnackbar} from 'react-simple-snackbar'
var config = {
  apiKey: "AIzaSyBIJkr8t0IJTfXdXNqxGkrLFK-pUbgFEk8",
  authDomain: "elcomensal-876cd.firebaseapp.com",
  databaseURL: "https://elcomensal-876cd.firebaseio.com",
  projectId: "elcomensal-876cd",
  storageBucket: "elcomensal-876cd.appspot.com",
  messagingSenderId: "951487642948",
  appId: "1:951487642948:web:56601d53c1db5d4d482b11",
 
};
const DEVELOPMENT=true

const basicMenu = [
  {
    title: "La carta",
    content: [{
      title: "Glaç bowl",
      description: "Salmó marinat, alvocat, edamame, llavors, mezclum, bulgur, tomàquets xerris i salsa de mango i llima",
      price: 11.50,
      recommended: true,
      offer: false,
      offerPercentage: 10,
      avaliable:true,
      vegetarian:true,
      vegan:true,
      no_gluten:true

    },
    {
      title: "Teriyaki bowl",
      description: "Pollastre teriyaki, mezclum, edamame, ceba crispy, llavors, cacauets, shitakes i salsa teriyaki",
      price: 8.50,
      recommended: true,
      offer: false,
      offerPercentage: 10,
      avaliable:true

    },
    {
      title: "Amanida de quinoa",
      description: "Mezclum, algues, tomàquets xerris, mango, ceba crispy, formatge de cabra i xia",
      price: 8.50,
      recommended: false,
      offer: true,
      offerPercentage: 10,
      avaliable:true

    },
    {
      title: "Healthy toast",
      description: "Pa d’espelta, salmó, alvocat, ou poche i tomàquets xerris",
      price: 11,
      recommended: false,
      offer: true,
      offerPercentage: 10,
      avaliable:true

    },
    {
      title: "Carpaccio de vedella",
      description: "amb salsa de soja, sèsam i tocs de wasabi i gingebre, maionesa de Kimchi i torrades de focaccia casolana",
      price: 12,
      recommended: false,
      offer: true,
      offerPercentage: 10,
      avaliable:true

    },
    {
      title: "Patates amb tòfona",
      description: "i parmesà",
      price: 5.20,
      recommended: false,
      offer: true,
      offerPercentage: 10,
      avaliable:true

    },
    {
      title: "Trumfus menorquins",
      description: "Patates amb sofregit de sobrassada , formatge gouda i un toc de mel i mostassa",
      price: 4.70,
      recommended: false,
      offer: true,
      offerPercentage: 10,
      avaliable:true

    },
    {
      title: "Croquetes casolanes",
      description: "de pernil ibèric (1 unitat)",
      price: 1.50,
      recommended: false,
      offer: false,
      offerPercentage: 10,
      avaliable:true

    },
    {
      title: "Foie mi cuit",
      description: "amb timbal de poma, ceba negra i romaní",
      price: 12.50,
      recommended: false,
      offer: false,
      offerPercentage: 10,
      avaliable:true

    },
    {
      title: "Taula de pernil de gla 'Guijuelo'",
      description: "amb pa torrat amb tomàquet",
      price: 9.00,
      recommended: false,
      offer: false,
      offerPercentage: 10,
      avaliable:true

    },
    {
      title: "Selecció de formatges",
      description: "amb melmelades casolanes",
      price: 13.70,
      recommended: false,
      offer: false,
      offerPercentage: 10,
      avaliable:true

    },
    {
      title: "Calamarsets a l’andalusa",
      description: "amb escuma de maionesa i llima",
      price: 9.50,
      recommended: false,
      offer: false,
      offerPercentage: 10,
      avaliable:true

    },
    {
      title: "Gyozas de verdures",
      description: "i pollastre",
      price: 9.40,
      recommended: false,
      offer: false,
      offerPercentage: 10,
      avaliable:true

    },
    {
      title: "Finguers de pollastre tandoori",
      description: "amb salsa de curry",
      price: 8.20,
      recommended: false,
      offer: false,
      offerPercentage: 10,
      avaliable:true

    }
    ]
  },
  {
    title: "Burgers",
    content: [{
      title: "Glaç",
      description: "Hamburguesa de pollastre, tomàquet, ceba, formatge de cabra i maionesa de mel i mostassa",
      price: 10.80,
      recommended: true,
      offer: false,
      offerPercentage: 10,
      avaliable:true

    },
    {
      title: "Veggie",
      description: "Hamburguesa de saïta, enciam, tomàquet, albergínia fumada, salsa de iogurt i mostassa i ceba crispi",
      price: 11.80,
      recommended: true,
      offer: false,
      offerPercentage: 10,
      avaliable:true

    },
    {
      title: "Ibèrica",
      description: "Hamburguesa de porc ibèrica, ruca, pernil ibèric,ceba i piquillos confitats",
      price: 11.80,
      recommended: false,
      offer: false,
      offerPercentage: 10,
      avaliable:true

    },
    {
      title: "Eco",
      description: "Hamburguesa de vedella ecològica, tomàquet, enciam, formatge gouda, maionesa perrins i ceba crispy",
      price: 11.50,
      recommended: false,
      offer: false,
      offerPercentage: 10,
      avaliable:true

    },
    {
      title: "Serrateix",
      description: "Hamburguesa de peus de porc, formatge de cabra, enciam, tomàquet, mostassa antiga i ceba negra",
      price: 12.50,
      recommended: false,
      offer: false,
      offerPercentage: 10,
      avaliable:true

    }
    ]
  },
  {
    title: "Sugerencias",
    content: [{
      title: "Yakisoba",
      description: "amb sípia i verduretes",
      price: 9.80,
      recommended: true,
      offer: false,
      offerPercentage: 10,
      avaliable:true,
      people:3,

    },
    {
      title: "Tomahawk",
      description: "de 750 gr. a la brasa",
      price: 16.50,
      recommended: true,
      offer: false,
      offerPercentage: 10,
      avaliable:true

    },
    {
      title: "Pop a la gallega",
      description: "enreixat de patata, pop marinat amb kimchi, la seva maionesa i cotna de pimentó de la Vera",
      price: 16.80,
      recommended: false,
      offer: false,
      offerPercentage: 10,
      avaliable:true

    },
    {
      title: "Ploma ibèrica a la brasa",
      description: "amb chips de remolatxa i crema de iogurt i mostassa",
      price: 14.90,
      recommended: false,
      offer: false,
      offerPercentage: 10,
      avaliable:true

    }
    ]
  },
  {
    title: "Postres",
    content: [{
      title: "Cheesecake",
      description: "cremós de formatge, fruits del bosc, Mòdena i galetes speculoos",
      price: 5.00,
      recommended: true,
      offer: false,
      offerPercentage: 10,
      avaliable:false

    },
    {
      title: "Coulant",
      description: "amb gelat de vainilla",
      price: 5.50,
      recommended: true,
      offer: false,
      offerPercentage: 10,
      avaliable:true

    },
    {
      title: "Gelats Sandro Desi",
      description: "Consulta els gustos disponibles",
      price: 6.20,
      options:[
      {title:"Gustos dels gelats",
      content:
      [{
        title:"Festucs",
        avaliable:false
      },
      {
        title:"Trufa amb avellanes garapinyades",
        avaliable:true
      },
      {
        title:"Cítrics i verdures",
        avaliable:true
      },
      ,
      {
        title:"Te verd matxa",
        avaliable:true
      },
      ,
      {
        title:"Aove amb cacauets torrats",
        avaliable:true
      }]}],
      recommended: false,
      offer: false,
      offerPercentage: 10,
      avaliable:false

    },
    {
      title: "Pecat de xocolata",
      description: "textures de xocolates amb pa, oli i sal",
      price: 5.00,
      recommended: true,
      offer: false,
      offerPercentage: 10,
      avaliable:true

    },
    {
      title: "Pastís casolà de pastanaga",
      description: "amb caramel de gingebre i cremós de taronja",
      price: 5.00,
      recommended: true,
      offer: false,
      offerPercentage: 10,
      avaliable:true

    },
    ]
  },
  
  {
    title: "Cava",
    content: [{
      title: "Miquel Pons Brut Nature (D.O. CAVA)",
      description: "Macabeu, Xarel·lo i Parellada",
      price: 14.60,
      recommended: false,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Núria Brut (D.O. CAVA)",
      description: "Xarel·lo i Macabeu",
      price: 15.90,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Juve y Camps Reserva de la familia (D.O. CAVA)",
      description: "Macabeu, Xarel·lo, Parellada i Chardonnay",
      price: 21.40,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Montargull xarel·lo barrica brut nature (D.O. CAVA)",
      description: "Xarel·lo, Macabeu, Xarel·lo en barrica i Parellada",
      price: 17.90,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    
    ]
  },
  {
    title: "Cocktails clásicos",
    content: [{
      title: "Dry Martini",
      description: "Gin i vermut sec",
      price: 8,
      recommended: false,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Daiquiri",
      description: "Rom, suc de llimona i sucre",
      price: 7.5,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Margarita",
      description: "Tequila, triple sec i suc de llimona",
      price: 11,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Manhattan",
      description: "Bourbon, vermut negre i angostura",
      price: 9,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },{
      title: "Cosmopolitan",
      description: "Vodka, triple sec i suc de nabius",
      price: 8,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },{
      title: "Sidecar",
      description: "Brandy, triple sec i suc de llimona",
      price: 11,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },{
      title: "Gin fizz",
      description: " Gin, sucre, suc de llimona i soda",
      price: 7.5,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },{
      title: "Mojito",
      description: "Rom, menta, suc de llimona i sucre",
      price: 8,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },{
      title: "Caipirinha",
      description: "Cachaça, llima i sucre",
      price: 8,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },{
      title: "Caipiroska",
      description: "Vodka, lima i sucre",
      price: 8,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },{
      title: "Piña colada",
      description: "Rom, llet de coco, llet i suc de pinya",
      price: 8,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },{
      title: "Bloody Mary",
      description: "Vodka, suc de tomàquet, Tabasco i salsa perrins",
      price: 8,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },{
      title: "Tequila sunrise",
      description: "Tequila, suc de tronja i grosella",
      price: 7,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },{
      title: "Sex on the beach",
      description: "Vodka, licor de préssec, suc de navius i taronja",
      price: 8,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },{
      title: "San francisco",
      description: "Vodka, suc de taronja, pinya i préssec",
      price: 7.5,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },{
      title: "Gimlet",
      description: "Gin i llima rose’s",
      price: 8,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },{
      title: "Whisky sour",
      description: "Bourbon, suc de llimona i sucre",
      price: 7.5,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },{
      title: "Pisco sour",
      description: "Pisco, suc de llimona, sucre i clara d’ou",
      price: 7.5,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },{
      title: "Alexander",
      description: "Brandy, licor cacau i crema de llet",
      price: 7,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },{
      title: "Grasshopper",
      description: "Licor de menta, licor cacau i crema de llet",
      price: 7,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },{
      title: "Mary Pickford",
      description: "Rom blanc, suc de pinya, Maraschino i granadina",
      price: 7.5,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },{
      title: "Old fashioned",
      description: "Bourbon, sucre i angostura",
      price: 8,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },{
      title: "Sazerac",
      description: "Conyac / Rye, sucre i Peychaud",
      price: 8,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },{
      title: "Negroni",
      description: "Gin, Campari i vermut negr",
      price: 8,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    ]
  },
  {
    title: "Mocktails",
    content: [{
      title: "San francisco",
      description: "Suc de taronja, pinya i préssec",
      price: 6,
      recommended: false,
      offer: false,
      offerPercentage: 10,
       avaliable:true,
      alcoholFree:true

    },
    {
      title: "Virgin Colada",
      description: "Llet, llet de coco i suc de pinya",
      price: 6,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Caipirinha sense alcohol",
      description: "Llima, sucre i Ginger Ale",
      price: 6,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Ginger Mango",
      description: "Suc de mango, xarop de canyella i Ginger beer",
      price: 6.5,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Benzi virgin",
      description: "Blue tropic, xarop de vainilla i suc de llimona",
      price: 6.5,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Little candy virgin",
      description: "Granadina, xarop de vainilla i suc de llimona",
      price: 6.5,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    
    ]
  },
  
  {
    title: "Vodka",
    content: [{
      title: "Absolut",
      description: "",
      price: 7,
      recommended: false,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Axelvar",
      description: "",
      price: 8,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Beluga",
      description: "",
      price: 9,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    
    ]
  },
  {
    title: "Rom",
    content: [{
      title: "Bacardi",
      description: "",
      price: 7.5,
      recommended: false,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Capitan Morgan",
      description: "",
      price: 7,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Don Papa",
      description: "",
      price: 10,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Havana Club 3",
      description: "",
      price: 6.5,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Habana Club 7",
      description: "",
      price: 7.5,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Rum Bar Silver",
      description: "",
      price: 10,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Santísima Trinidad 7",
      description: "",
      price: 8,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Santísima Trinidad 15",
      description: "",
      price: 12,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Zacapa 23",
      description: "",
      price: 9,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    
    ]
  },
  {
    title: "Whisky",
    content: [{
      title: "Auchentoshan",
      description: "",
      price: 9.99,
      recommended: false,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Blended Ballantine’s",
      description: "",
      price: 13.00,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Blended Gold Label Reserve",
      description: "",
      price: 11,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Blended Red Label",
      description: "",
      price: 11,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },

    {
      title: "Bourbon Bulleit",
      description: "",
      price: 11,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },

    {
      title: "Bourbon Four Roses",
      description: "",
      price: 11,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },

    {
      title: "Buffalo trace",
      description: "",
      price: 11,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Bourbon Maker’s Mark",
      description: "",
      price: 11,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Crown Royal",
      description: "",
      price: 11,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Glenfiddich 12",
      description: "",
      price: 11,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "JB",
      description: "",
      price: 11,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "S.M. Ardbeg 10",
      description: "",
      price: 11,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "S.M. Cardhu 12",
      description: "",
      price: 11,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "S.M. Macallan Amber",
      description: "",
      price: 11,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "S.M. Scapa 2001",
      description: "",
      price: 11,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Tenesse Jack Daniel’s",
      description: "",
      price: 11,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Roe Coe",
      description: "",
      price: 11,
      recommended: true,
      offer: false,
      offerPercentage: 10,
       avaliable:true

    },
    {
      title: "Rye Bulleit",
      description: "",
      price: 11,
      recommended: true,
      offer: false,
      offerPercentage: 10

    },
    
    ]
  }
]



// kick off the polyfill!
smoothscroll.polyfill();

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.closeDetails=this.closeDetails.bind(this);
    this.allScreenRef = React.createRef();
    this.menuVerticalRef=React.createRef();
    this.menuHorizontalRef=React.createRef();
    this.addOfsetsVertical=this.addOfsetsVertical.bind(this);
    this.addOfsetsHorizontal=this.addOfsetsHorizontal.bind(this);
    this.updateNewDishTag=this.updateNewDishTag.bind(this);
    this.toggleAllergensArray=this.toggleAllergensArray.bind(this);
    this.state = {
      menu: basicMenu,
      activeMenu:basicMenu,
      recommended: [],
      showDetails: false,
      scrollPosition: 0,
      initialState:DEVELOPMENT?false: true,
      isLoading:DEVELOPMENT?false:true,
      restaurantName:"",
      dinerNumber:1,
      sections:[],
      activeSections:[],
      sectionsOffsetsHorizontal:[],
      sectionsOffsetsVertical:[],
      activeSection:0,
      showOrder:false,
      showCheckOrder:false,
      showWaiter:false,
      showClaimOrder:false,
      showOrderStatus:false,
      showHelp:false,
      showBottom:true,
      showAccount:false,
      showProductDetails:false,
      order:[],
      orderAmount:0,
      activeElement:{},
      modalOpen:false,
      recommendedActive:false,
      vegetarianActive:false,
      veganActive:false,
      noGlutenActive:false,
      forShareActive:false,
      showSearch:false,
      newMenu:[],
      newDish:{
        title:"",
        description:"",
        price:0.0,
        offerPercentage:0,
        avaliable:true,
        recommended:false,
        vegetarian:false,
        vegan:false,
        no_gluten:false,
        offer:false,
        alcohol:false,
        alcohol_free:false,
        for_share:false,
        for_unity:false,
        allergens:false,
        allergensArray: new Array(14).fill(false)
        
      }
    }
  }

  componentDidMount() {

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }
    firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
    firebase.auth().onAuthStateChanged((user)=> {
      
      if (user && !DEVELOPMENT) {
        console.warn(window.location.href.split("/")[3])
        // User is signed in.
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        let menuRef = firebase.firestore().collection('menus');
        let query = menuRef.where('abbreviate', '==',window.location.href.split("/")[3] ).get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }
        var info = snapshot.docs.map((doc) => doc.data());
        this.setState({isLoading:false,restaurantName:info[0].name})
  
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
      } else {
        // User is signed out.
        // ...
      }
      // ...
    });
    


    ////////////////////
    var recommendedList = []
    var sections=[]
    for (var i = 0; i < this.state.menu.length; i++) {
      sections.push(this.state.menu[i].title)
      for (var j = 0; j < this.state.menu[i].content.length; j++) {
        if (this.state.menu[i].content[j].recommended)
          recommendedList.push(this.state.menu[i].content[j])
      }
    }
    this.setState({ recommended: recommendedList,activeSections:sections, sections:sections  })
  }

toggleAllergensArray(index){
  var newDish=this.state.newDish
  newDish.allergensArray[index]=!newDish.allergensArray[index]
  this.setState({newDish:newDish})
}

  updateNewDishTag(key){
    var newDish=this.state.newDish
    newDish[key]=!newDish[key]
    this.setState({newDish:newDish})

  }


  addNewItem(){
    var actualOrder=this.state.order
    actualOrder.push(this.state.newOrderElement)
    var actualOrderAmount=this.state.orderAmount;
    actualOrderAmount+=this.state.newOrderElement.total

    this.setState({order:actualOrder,orderAmount:actualOrderAmount})
  }

  addOfsetsHorizontal(value){
    var newSectionsOffsets=this.state.sectionsOffsetsHorizontal;
    newSectionsOffsets.push(value)
    this.setState({sectionsOffsetsHorizontal:newSectionsOffsets})
  }
  addOfsetsVertical(value){
    var newSectionsOffsets=this.state.sectionsOffsetsVertical;
    newSectionsOffsets.push(value)
    this.setState({sectionsOffsetsVertical:newSectionsOffsets})
  }

  moveToNearest(position){
  
    var newActiveSection=-1;
    var minimumDistance=9999999
    for(var i=0;i<this.state.sectionsOffsetsVertical.length;i++){
      console.warn(Math.abs(position-this.state.sectionsOffsetsVertical[i]))
      if(Math.abs(position-this.state.sectionsOffsetsVertical[i])<minimumDistance){
        minimumDistance=Math.abs(position-this.state.sectionsOffsetsVertical[i])
        newActiveSection=i
      }
    }
   
if(this.state.activeSection!=newActiveSection)
    this.setState({activeSection:newActiveSection,showBottom:false},()=>this.menuHorizontalRef.scrollTo({x:this.state.sectionsOffsetsHorizontal[newActiveSection]-window.innerWidth*0.03}))
  }

  closeDetails(){
    this.setState({modalOpen:false,showProductDetails:false})
  }


  manageFilter(newSearch){
    var newActiveMenu=[]
    var newActiveSection=[]
    var newActiveSectionTitles=[]

    var searchText=newSearch.toLowerCase();
    for(var i=0;i<this.state.menu.length;i++){
      newActiveSection=[]
      
      for (var j=0;j<this.state.menu[i].content.length;j++){
        if(this.state.menu[i].content[j].title.toLowerCase().includes(searchText)){
          newActiveSection.push(this.state.menu[i].content[j])
        }
      
      }
      if(newActiveSection.length>0){
        newActiveSectionTitles.push(this.state.menu[i].title)
        newActiveMenu.push({title:this.state.menu[i].title,content:newActiveSection})
      }
     
    }
    this.setState({searchValue:newSearch, activeMenu:newActiveMenu,activeSections:newActiveSectionTitles})
  } 


  render() {
    const { openSnackbar, closeSnackbar } = this.props
    return (

      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "#f5f5f5" }}>
       {false &&
        <View bounces={false} ref={r => this.allScreenRef = r} onScroll={(e) => { console.error(e.nativeEvent); this.setState({ scrollPosition: e.nativeEvent.contentOffset.x / window.innerWidth }) }} horizontal pagingEnabled style={{ height: window.innerHeight }}>
       

          <View style={{ overflow: "hidden", width: window.innerWidth, height: "100%" }}>
          <View style={{zIndex:99, boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", width:window.innerWidth,backgroundColor:"#fff"}}>
          <View style={{ width: "100%", height: window.innerHeight * 0.02 }} />
         <View style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
       
                    <Text style={{textAlign:"left",marginLeft:window.innerWidth*0.05, width:"80%", zIndex: 9, color: "#000", fontWeight: "500", fontSize: "1.3rem",}}>
                    {this.state.restaurantName.length>0?this.state.restaurantName:"Restaurante prueba"}
 </Text>
 <TouchableOpacity style={{marginRight:window.innerWidth*0.05,}} onLongPress={() => this.setState({searchValue:"",showSearch:true})} onPress={() => this.setState({searchValue:"",showSearch:true})}>
                      <IoMdSearch size="1.5em" />
                    </TouchableOpacity>
         </View>
          <View style={{height:window.innerHeight*0.017,width:"100%"}}/>
           <ScrollView scrollEnabled={!this.state.modalOpen}  ref={r=>this.menuHorizontalRef=r} horizontal showsHorizontalScrollIndicator={false}>

{
  this.state.activeSections.map((item,index)=>(
    <TouchableOpacity key={"menu_"+index} onLongPress={()=>{this.setState({activeSection:index},()=>this.menuHorizontalRef.scrollTo({x:this.state.sectionsOffsetsHorizontal[index]-window.innerWidth*0.03})); setTimeout(()=>this.menuVerticalRef.scrollTo({y:window.innerHeight*0.15+ this.state.sectionsOffsetsVertical[index]}),0)}}   onPress={()=>{this.setState({activeSection:index},()=>this.menuHorizontalRef.scrollTo({x:this.state.sectionsOffsetsHorizontal[index]-window.innerWidth*0.03})); setTimeout(()=>this.menuVerticalRef.scrollTo({y:window.innerHeight*0.15+ this.state.sectionsOffsetsVertical[index]}),0)}} onLayout={(e)=>this.addOfsetsHorizontal(e.nativeEvent.layout.x)} style={{backgroundColor:this.state.activeSection==index?"#000":"#fff",borderRadius:10, paddingHorizontal:window.innerWidth*0.04,justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.03}}>
      <Text style={{fontWeight:this.state.activeSection==index?"500":"400",color:this.state.activeSection==index?"#fff":"gray",paddingVertical:window.innerHeight*0.015}}>
        {item}
      </Text>
    </TouchableOpacity>
  ))
}
<View style={{height:"100%",width:window.innerWidth*0.02}}/>
           </ScrollView>
           <View style={{height:window.innerHeight*0.017,width:"100%"}}/>
{
  this.state.showSearch &&

           <View style={{width:"100%",height:"100%",backgroundColor:"#fff",position:"absolute",top:0}}>
             <View style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingTop:window.innerHeight*0.01}}>
             <TextInput autoFocus clearButtonMode="always"  placeholder="Buscar un plato"  value={this.state.searchValue} editable={true} onChangeText={(newValue)=>this.manageFilter(newValue)} style={{borderRadius:10, fontSize:"1rem", height:"100", width:"70%",backgroundColor:"#f5f5f5",marginLeft:window.innerWidth*0.03,paddingHorizontal:window.innerWidth*0.03,paddingVertical:window.innerHeight*0.015,textAlign:"left"}} />
             <TouchableOpacity onLongPress={() => this.setState({activeMenu:this.state.menu,activeSections:this.state.sections, showSearch:false})} onPress={() => this.setState({activeMenu:this.state.menu,activeSections:this.state.sections,showSearch:false})} style={{ width: "30%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem", textAlign: "center" }}>
                      Cancelar
</Text>
                  </TouchableOpacity>

             </View>
             <View style={{height:window.innerHeight*0.013,width:"100%"}}/>
             <ScrollView scrollEnabled={!this.state.modalOpen}  horizontal showsHorizontalScrollIndicator={false}>

{
  [{title:"Recomendado",filter:"recommendedActive",color:"red" },{title:"Vegetariano",filter:"vegetarianActive",color:"red"},{title:"Vegano",filter:"veganActive",color:"red"},{title:"Sin gluten",filter:"noGlutenActive",color:"red"},{title:"Para compartir",filter:"forShareActive",color:"red"}].map((item,index)=>(
    <TouchableOpacity  onLongPress={()=>{}}   onPress={()=>{}} style={{backgroundColor:this.state[item.filter]?item.color:"#f5f5f5",borderRadius:10, paddingHorizontal:20,justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.03}}>
      <Text style={{fontWeight:this.state[item.filter]?"500":"400",color:this.state[item.filter]?"#fff":"gray",paddingVertical:window.innerHeight*0.015}}>
        {item.title}
      </Text>
    </TouchableOpacity>
  ))
}
<View style={{height:"100%",width:window.innerWidth*0.02}}/>
           </ScrollView>
           <View style={{height:window.innerHeight*0.013,width:"100%"}}/>
           </View>
}
           </View>

            <ScrollView scrollEnabled={!this.state.modalOpen} onMomentumScrollBegin={()=>this.setState({showBottom:false})} onScroll={(e)=>{this.moveToNearest(e.nativeEvent.contentOffset.y)}} ref={r=>this.menuVerticalRef=r} showsVerticalScrollIndicator={false} style={{left: 0, right: 0, bottom: 0, backgroundColor: "#f5f5f5",}}>
       
           {false &&
              <ScrollView showsHorizontalScrollIndicator={false} horizontal pagingEnabled style={{ width: window.innerWidth }} style={{ width: window.innerWidth }}>
                <View style={{ width: window.innerWidth, paddingBottom: window.innerHeight * 0.03,backgroundColor:"#AFF396" }}>
                 <Text style={{ shadowOpacity: 1, shadowRadius: 5, shadowOffset: { height: 0 }, zIndex: 9, color: "#000", fontWeight: "500", fontSize: "1.3rem", paddingLeft: "3%", paddingTop: window.innerHeight * 0.02, paddingBottom: window.innerHeight * 0.01,}}>
                    Nuestras especialidades
 </Text>
                  <Text style={{ shadowOpacity: 1, shadowRadius: 5, shadowOffset: { height: 0 }, zIndex: 9, color: "#000", fontWeight: "500", fontSize: "0.8rem", paddingLeft: "3%", paddingBottom: window.innerHeight * 0.01, }}>
                    ¡No puedes perderte nuestros mejores platos!
 </Text>
                  <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ width: "100%", paddingTop: window.innerHeight * 0.03 }}>
                    {
                      this.state.recommended.map((item, i) => (
                        <View style={{ boxShadow: "0px 0px 8px rgba(0,0,0,0.15)", paddingVertical: window.innerHeight * 0.02, paddingHorizontal: window.innerWidth * 0.02, marginLeft: window.innerWidth * 0.03, maxWidth: window.innerWidth * 0.6, maxHeight: window.innerHeight * 0.4, backgroundColor: "#fff" }}>
                          <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem" }}>
                            {item.title}
                          </Text>
                          <Text style={{ color: "gray", fontWeight: "400", fontSize: "0.9rem", paddingTop: window.innerHeight * 0.001 }}>
                            {item.description}
                          </Text>
                          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        
                            <Text style={{ color: "gray", fontWeight: "600", fontSize: "0.7rem", textDecorationLine: "line-through" }}>
                              {item.price.toFixed(2)} €
 </Text>
                            <Text style={{ color: item.offer ? "#D91717" : "#000", fontWeight: "500", fontSize: "1rem" }}>
                              {item.offer &&
                                (parseFloat(item.price) - (parseFloat(item.price) * item.offerPercentage / 100)).toFixed(2) + "€"}
                              {!item.offer &&
                                item.price.toFixed(2) + "€"}
                            </Text>
                          </View>
                        </View>
                      ))
                    }
                    <View style={{ width: window.innerWidth * 0.03, height: "100%" }}>

                    </View>
                  </ScrollView>
                </View>
                <View style={{ width: window.innerWidth, paddingBottom: window.innerHeight * 0.03,backgroundColor:"#F9B3B3" }}>
                  <Text style={{ shadowOpacity: 1, shadowRadius: 5, shadowOffset: { height: 0 }, zIndex: 9, color: "#000", fontWeight: "500", fontSize: "1.3rem", paddingLeft: "3%", paddingTop: window.innerHeight * 0.02, paddingBottom: window.innerHeight * 0.01 }}>
                    Nuestras ofertas
 </Text>
                  <Text style={{ shadowOpacity: 1, shadowRadius: 5, shadowOffset: { height: 0 }, zIndex: 9, color: "#000", fontWeight: "500", fontSize: "0.8rem", paddingLeft: "3%", paddingBottom: window.innerHeight * 0.01, }}>
                    ¡No puedes perderte nuestros mejores platos!
 </Text>
                  <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ width: "100%", paddingTop: window.innerHeight * 0.03 }}>
                    {
                      this.state.recommended.map((item, i) => (
                        <View style={{ boxShadow: "0px 0px 8px rgba(0,0,0,0.15)", paddingVertical: window.innerHeight * 0.02, paddingHorizontal: window.innerWidth * 0.02, marginLeft: window.innerWidth * 0.03, maxWidth: window.innerWidth * 0.6, maxHeight: window.innerHeight * 0.4, backgroundColor: "#fff" }}>
                          <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem" }}>
                            {item.title}
                          </Text>
                          <Text style={{ color: "gray", fontWeight: "400", fontSize: "0.9rem", paddingTop: window.innerHeight * 0.001 }}>
                            {item.description}
                          </Text>
                          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                          
                            <Text style={{ color: "gray", fontWeight: "600", fontSize: "0.7rem", textDecorationLine: "line-through", marginRight: window.innerWidth * 0.01, paddingTop: window.innerHeight * 0.005 }}>
                              {item.price.toFixed(2)} €
 </Text>
                            <Text style={{ color: item.offer ? "#D91717" : "#000", fontWeight: "500", fontSize: "1rem" }}>
                              {item.offer &&
                                (parseFloat(item.price) - (parseFloat(item.price) * item.offerPercentage / 100)).toFixed(2) + "€"}
                              {!item.offer &&
                                item.price.toFixed(2) + "€"}
                            </Text>
                          </View>
                        </View>
                      ))
                    }
                    <View style={{ width: window.innerWidth * 0.03, height: "100%" }}>

                    </View>
                  </ScrollView>
                </View>

              </ScrollView>
           }
              {
                this.state.activeMenu.map((item, index) => (

                  <View onLayout={(e)=>this.addOfsetsVertical(e.nativeEvent.layout.y - window.innerHeight*0.15)} style={{ width: "100%", }}>

                    <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.3rem", paddingLeft: "3%", marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
                      {item.title}
                    </Text>
                    {
                      item.content.map((internal_item, i) => (
                        <View style={{ backgroundColor:!internal_item.avaliable?"#f5f5f5":  "#fff", paddingVertical: window.innerHeight * 0.02, marginTop: window.innerHeight * 0.002, width: "100%" }}>
                     
                          <TouchableOpacity onLongPress={() => this.setState({modalOpen:true, showProductDetails : true,activeElement:internal_item })} onPress={() => this.setState({modalOpen:true, showProductDetails : true,activeElement:internal_item  })} style={{ backgroundColor:!internal_item.avaliable?"#f5f5f5":  "#fff" }}>
                            <View style={{ justifyContent: "center", alignItems: "center", width: "100%", flexDirection: "row" }}>
                              <View style={{ width: "75%",justifyContent:"flex-start" }}>

                                <Text style={{ color:!internal_item.avaliable? "gray":"#000", fontWeight: "500", fontSize: "1rem", marginLeft: "5%",textAlign:"left" }}>

                                  {internal_item.title}
                                  
                                </Text>


                                <Text numberOfLines={3} style={{ color:"gray", fontWeight: "400", fontSize: "0.9rem", marginLeft: "5%",marginTop:window.innerHeight*0.01 }}>

                                  {internal_item.description}
                                </Text>
                                <View horizontal style={{flexDirection:"row",flexWrap:"wrap",width:window.innerWidth*1}}>
                            {
                                  internal_item.recommended &&
                                  <Text style={{marginTop:window.innerHeight*0.01,  color:!internal_item.avaliable?"gray":"#000",backgroundColor:!internal_item.avaliable?"#e8e8e8": "#FFF4A3", fontWeight: "500", fontSize: "0.7rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:10,borderRadius:10,paddingVertical:window.innerHeight*0.004}}>

                                  Especialidad
</Text>
                                }
                                {
                                  internal_item.vegetarian &&
                                  <Text style={{marginTop:window.innerHeight*0.01, color: !internal_item.avaliable?"gray":"#000",backgroundColor:!internal_item.avaliable?"#e8e8e8": "#AFF396", fontWeight: "500", fontSize: "0.7rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:10,borderRadius:10,paddingVertical:window.innerHeight*0.004}}>

                                  Vegetariano
</Text>
                                }
                                {
                                  internal_item.vegan &&
                                  <Text style={{marginTop:window.innerHeight*0.01, color: !internal_item.avaliable?"gray":"#000",backgroundColor:!internal_item.avaliable?"#e8e8e8": "#BDDDFF", fontWeight: "500", fontSize: "0.7rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:10,borderRadius:10,paddingVertical:window.innerHeight*0.004}}>

                                  Vegano
</Text>
                                }
                                
                                {
                                  internal_item.no_gluten &&
                                  <Text style={{marginTop:window.innerHeight*0.01, color: !internal_item.avaliable?"gray":"#000",backgroundColor:!internal_item.avaliable?"#e8e8e8": "#E1BDFF", fontWeight: "500", fontSize: "0.7rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:10,borderRadius:10,paddingVertical:window.innerHeight*0.004}}>

                                Sin gluten
</Text>
                                }
                                {
                                  internal_item.offer &&
                                  <Text style={{marginTop:window.innerHeight*0.01, color: !internal_item.avaliable?"gray":"#000",backgroundColor:!internal_item.avaliable?"#e8e8e8": "#FFAAAA", fontWeight: "500", fontSize: "0.7rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:10,borderRadius:10,paddingVertical:window.innerHeight*0.004}}>

                                Oferta
</Text>
                                }

                                {
                                  internal_item.for_share &&
                                  <Text style={{marginTop:window.innerHeight*0.01, color: !internal_item.avaliable?"gray":"#000",backgroundColor:!internal_item.avaliable?"#e8e8e8": "#FFC4A8", fontWeight: "500", fontSize: "0.7rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:10,borderRadius:10,paddingVertical:window.innerHeight*0.004}}>

                                Para compartir
</Text>
                                }
                                {
                                  internal_item.alcohol &&
                                  <Text style={{marginTop:window.innerHeight*0.01, color: !internal_item.avaliable?"gray":"#000",backgroundColor:!internal_item.avaliable?"#e8e8e8": "#FFD2EE", fontWeight: "500", fontSize: "0.7rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:10,borderRadius:10,paddingVertical:window.innerHeight*0.004}}>

                                Alcohol
</Text>
                                }
                                {
                                  internal_item.alcohol_free &&
                                  <Text style={{marginTop:window.innerHeight*0.01, color: !internal_item.avaliable?"gray":"#000",backgroundColor:!internal_item.avaliable?"#e8e8e8": "#BFC2FF", fontWeight: "500", fontSize: "0.7rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:10,borderRadius:10,paddingVertical:window.innerHeight*0.004}}>

                                Sin alcohol
</Text>
                                }
                                {
                                  internal_item.unity &&
                                  <Text style={{marginTop:window.innerHeight*0.01, color: !internal_item.avaliable?"gray":"#000",backgroundColor:!internal_item.avaliable?"#e8e8e8": "#ADFFDB", fontWeight: "500", fontSize: "0.7rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:10,borderRadius:10,paddingVertical:window.innerHeight*0.004}}>

                                Por unidad
</Text>
                                }
                                {
                                  internal_item.allergens &&
                                  <Text style={{marginTop:window.innerHeight*0.01, color: !internal_item.avaliable?"gray":"#000",backgroundColor:!internal_item.avaliable?"#e8e8e8": "#FFDDAD", fontWeight: "500", fontSize: "0.7rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:10,borderRadius:10,paddingVertical:window.innerHeight*0.004}}>

                                Alérgenos
</Text>
                                }
 
                                </View>
                                


                              </View>
                              {internal_item.avaliable &&
                              <View style={{ width: "25%", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: internal_item.offer ? "#D91717" : "#000", fontWeight: "500", fontSize: "0.9rem" }}>
                                {internal_item.offer &&
                                    (parseFloat(internal_item.price) - (parseFloat(internal_item.price) * internal_item.offerPercentage / 100)).toFixed(2) + " €"}
                                  {!internal_item.offer &&
                                    internal_item.price.toFixed(2) + " €"}

                                </Text>
                                
                                {
                                  internal_item.offer &&
                                  <Text style={{ color: "gray", fontWeight: "600", fontSize: "0.7rem", textDecorationLine: "line-through" }}>

                                  {internal_item.price.toFixed(2)} €
</Text>
                                }

                              </View>
                    }
                    {!internal_item.avaliable &&
                              <View style={{ width: "25%", justifyContent: "center", alignItems: "center",height:"100%" }}>
                              <Text style={{ color: "gray", fontWeight: "500", fontSize: "0.8rem" }}>
                                Agotado
                                </Text>
                               </View>
                    }
                            </View>
                         
                          </TouchableOpacity>
                        
                         
                        </View>
                      ))
                    }

                  </View>
                ))
              }
{
  this.state.activeMenu.length==0 &&
  <View><Text style={{marginTop:window.innerHeight*0.03, width:"100%", color: "#000", fontWeight: "500", fontSize: "1rem", textAlign: "left",paddingLeft:window.innerWidth*0.05 }}>
                 ¡Ups!
</Text>
  <Text style={{marginTop:window.innerHeight*0.01,marginBottom:window.innerHeight*0.03, width:"100%", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingLeft:window.innerWidth*0.05 }}>
                 No se han encontrado resultados. Prueba a cambiar el contenido de tu búsqueda.
</Text>
  </View>
}
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",width:"100%",backgroundColor:"#e8e8e8",paddingVertical:window.innerHeight*0.01}}>
            <Text style={{marginBottom:window.innerHeight*0.01, width:"100%", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "center" }}>
                 Con la tecnología de
</Text>
<Image source={elcomensal} style={{  width: window.innerWidth*0.2, height: window.innerHeight*0.03, zIndex: 0 }} resizeMode="contain" />
         </TouchableOpacity> 
            </ScrollView>
            
          </View>
         
          <View style={{  width: window.innerWidth, height: "100%", backgroundColor: "#f5f5f5" }}>
          {false &&
           <View style={{zIndex:99, boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", width:window.innerWidth,backgroundColor:"#fff"}}>
           <Text style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.02,textAlign:"center" }}>
                  Tu pedido se está preparando
                    </Text>
                    {false &&
                    <BarLoader
         width={window.innerWidth}
         height={window.innerHeight*0.01}
   
          color={"#000"}
          loading={true}
        />
                    }
           </View>
          }
          {false &&
            <ScrollView showsVerticalScrollIndicator={false} style={{zIndex:0}}>
              <View style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", width: window.innerWidth * 0.96, alignSelf: "center", backgroundColor: "#fff", marginTop: window.innerHeight * 0.03, paddingVertical: window.innerHeight * 0.03 }}>
                <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.02 }}>
                  ¿Necesitas alguna cosa?
                    </Text>
                <Text style={{ color: "gray", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", }}>
                  Puedes pedir que te atienda un camarero cúando lo necesites.
                    </Text>

                <View style={{ marginTop: window.innerHeight * 0.03, height: window.innerHeight * 0.08, width: "90%", alignSelf: "center", backgroundColor: "#000", justifyContent: "space-evenly", alignItems: "center", flexDirection: "row" }}>
                  <TouchableOpacity onLongPress={()=>this.setState({modalOpen:true,showWaiter:true})} onPress={()=>this.setState({modalOpen:true,showWaiter:true})} style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#fff", fontWeight: "500", fontSize: "1rem", textAlign: "center" }}>
                      Pedir al camarero
</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", width: window.innerWidth * 0.96, alignSelf: "center", backgroundColor: "#fff", marginTop: window.innerHeight * 0.03, paddingVertical: window.innerHeight * 0.03 }}>
                <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.02 }}>
                  La cuenta
                    </Text>
                <Text style={{ color: "gray", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", }}>
                  Puedes pedir que te atienda un camarero cúando lo necesites.
                    </Text>

                <View style={{ marginTop: window.innerHeight * 0.03, height: window.innerHeight * 0.08, width: "90%", alignSelf: "center", backgroundColor: "#000", justifyContent: "space-evenly", alignItems: "center", flexDirection: "row" }}>
                  <TouchableOpacity onLongPress={()=>this.setState({modalOpen:true,showOrder:true})} onPress={()=>this.setState({modalOpen:true,showOrder:true})} style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#fff", fontWeight: "500", fontSize: "1rem", textAlign: "center" }}>
                      Pedir la cuenta
</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ marginTop: window.innerHeight * 0.02, height: window.innerHeight * 0.08, width: "90%", alignSelf: "center", backgroundColor: "#E8E8E8", justifyContent: "space-evenly", alignItems: "center", flexDirection: "row" }}>
                  <TouchableOpacity onLongPress={()=>this.setState({modalOpen:true,showAccount:true})} onPress={()=>this.setState({modalOpen:true,showAccount:true})} style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem", textAlign: "center" }}>
                      Consultar la cuenta
</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", width: window.innerWidth * 0.96, alignSelf: "center", backgroundColor: "#fff", marginTop: window.innerHeight * 0.03, paddingVertical: window.innerHeight * 0.03 }}>
              <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.01 }}>
                  Abierto
                    </Text>
                    <Text style={{color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",marginLeft:window.innerWidth*0.05,marginBottom:window.innerHeight*0.02 }}>
                    de 10:30h a 22:00h
</Text>
                <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.01 }}>
                  Wifi
                    </Text>
             

                    <View style={{width:"100%",justifyContent:"flex-start",flexDirection:"row", paddingBottom: window.innerHeight * 0.01}}>
                    <Text style={{marginLeft:window.innerWidth*0.05, color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "center" }}>
                      Nombre de la red:
</Text>
                    <Text style={{marginLeft:window.innerWidth*0.01, color: "gray", fontWeight: "400", fontSize: "1rem", textAlign: "center" }}>
                      goykoswifi
</Text>
</View>
                   <View style={{width:"100%",justifyContent:"flex-start",flexDirection:"row"}}>
                    <Text style={{marginLeft:window.innerWidth*0.05, color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "center" }}>
                      Contraseña:
</Text>
                    <Text style={{marginLeft:window.innerWidth*0.01, color: "gray", fontWeight: "400", fontSize: "1rem", textAlign: "center" }}>
                      ff888as88
</Text>


                </View>
              </View>
              <View style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", width: window.innerWidth * 0.96, alignSelf: "center", backgroundColor: "#fff", marginTop: window.innerHeight * 0.03, paddingVertical: window.innerHeight * 0.03 }}>
                <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.02 }}>
                  Ayuda
                    </Text>
                <Text style={{ color: "gray", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", }}>
                  Si tienes dudas sobre como funciona, aquí encontrarás las respuestas a las preguntas más comunes
                    </Text>
                <View style={{ marginTop: window.innerHeight * 0.02, height: window.innerHeight * 0.08, width: "90%", alignSelf: "center", backgroundColor: "#E8E8E8", justifyContent: "space-evenly", alignItems: "center", flexDirection: "row" }}>
                  <TouchableOpacity style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem", textAlign: "center" }}>
                      Centro de ayuda
</Text>
                  </TouchableOpacity>
                </View>


              </View>
              <View style={{ width: "100%", height: window.innerHeight * 0.05 }} />
            </ScrollView>
          }
          </View>

        </View>
       }
       
        {this.state.showDetails &&
          <View style={{ position: "absolute", bottom: 0 }}>
            <View style={{ width: "100%", height: "100%", position: "absolute", bottom: 0 }}>
              <motion.div

                initial={{ opacity: 0, }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}>
                <TouchableOpacity onLongPress={() => this.setState({ showDetails: false })} onPress={() => this.setState({ showDetails: false })} style={{ alignSelf: "center", width: "100%", height: window.innerHeight, backgroundColor: "rgba(0,0,0,0.4)", justifyContent: "flex-end", alignItems: "flex-end" }}>
                </TouchableOpacity>
              </motion.div>
            </View>


            <motion.div

              initial={{ scale: 1, y: window.innerHeight }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20
              }}>
              <div>
                
              </div>
            </motion.div>
          </View>}
        {this.state.initialState &&
          <View style={{ position: "absolute", top: 0, backgroundColor: "#f5f5f5", width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
          <Image source={initial} style={{ position: "absolute", top: 0, width: window.innerWidth, height: "100%", zIndex: 0 }} resizeMode="cover" />
                  
            <Text style={{zIndex:99, color: "#000", fontWeight: "500", fontSize: "1.5rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.02, textAlign: "center", marginTop: -window.innerHeight * 0.1 }}>
              Bienvenido a {this.state.restaurantName}
                    </Text>
            <Text style={{zIndex:99, color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.05, textAlign: "center" }}>
              Realiza tu pedido desde tu teléfono con el máximo confort.
                    </Text>
                    <Text style={{zIndex:99, color: "#000", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.01 , textAlign: "center" }}>
              Número de comensales
                    </Text>
                    <View style={{width:"50%",alignSelf:"center",backgroundColor:"#fff",flexDirection:"row",justifyContent:"space-between",marginVertical:window.innerHeight*0.02}}>
                   <TouchableOpacity onLongPress={()=>{if(this.state.dinerNumber>1)this.setState({dinerNumber:this.state.dinerNumber-1})}} onPress={()=>{if(this.state.dinerNumber>1)this.setState({dinerNumber:this.state.dinerNumber-1})}} style={{width:"30%",backgroundColor:"#000",height:"100%",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.015}}>
                    <Text style={{ color: "#fff", fontWeight: "500", fontSize: "1.3rem", textAlign: "center" }}>
                  -
</Text>
</TouchableOpacity>
<TextInput  value={this.state.dinerNumber} editable={true} onChangeText={(newValue)=>this.setState({ dinerNumber:parseInt(newValue.replace(/[^0-9]/g, "")<100)?newValue.replace(/[^0-9]/g, ""):this.state.dinerNumber})} style={{fontSize:"1rem", height:"100", width:"40%",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.02,textAlign:"center"}} />
                   
<TouchableOpacity onLongPress={()=>{if(this.state.dinerNumber<99)this.setState({dinerNumber:this.state.dinerNumber+1})}} onPress={()=>{if(this.state.dinerNumber<99)this.setState({dinerNumber:this.state.dinerNumber+1})}}  style={{width:"30%",backgroundColor:"#000",height:"100%",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.015}}>
                    <Text style={{ color: "#fff", fontWeight: "500", fontSize: "1.3rem", textAlign: "center" }}>
                  +
</Text>
</TouchableOpacity>
                      </View>
            <View style={{ marginTop: window.innerHeight * 0.05, height: window.innerHeight * 0.08, width: "90%", alignSelf: "center", backgroundColor: "#000", justifyContent: "space-evenly", alignItems: "center", flexDirection: "row" }}>
              <TouchableOpacity onLongPress={() => this.setState({ initialState: false })} onPress={() => this.setState({ initialState: false })} style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "#fff", fontWeight: "500", fontSize: "1rem", textAlign: "center" }}>
                  Empezar a pedir
</Text>
              </TouchableOpacity>

            </View>
            <View style={{ marginTop: window.innerHeight * 0.02, height: window.innerHeight * 0.08, width: "90%", alignSelf: "center",justifyContent: "space-evenly", alignItems: "center", flexDirection: "row" }}>
              <TouchableOpacity onLongPress={() => this.setState({ initialState: false })} onPress={() => this.setState({ initialState: false })} style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem", textAlign: "center" }}>
                 ¿Cómo funciona?
</Text>
              </TouchableOpacity>

            </View>
            <View style={{position:"absolute",bottom:"12.5%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{marginBottom:window.innerHeight*0.01, width:"100%", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "center" }}>
                 Con la tecnología de
</Text>
<Image source={elcomensal} style={{  width: window.innerWidth*0.2, height: window.innerHeight*0.03, zIndex: 0 }} resizeMode="contain" />
         </View>         
            <View style={{ position: "absolute", bottom: 0, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(255,255,255,0.6)", width: "100%" }}>
              <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "center", width: "100%" }}>
                Mesa 4
                    </Text>
            </View>
          </View>
        }
       
       
        
        {false &&
        <View style={{width:window.innerWidth,backgroundColor:"#fff",position:"absolute",bottom:0}}>
        <TouchableOpacity onLongPress={() => this.setState({ showDetails: false })} onPress={() => this.setState({ showDetails: false })} style={{ alignSelf: "flex-end", position: "absolute", top: 0 }}>
                      <IoIosClose size="2.5em" />
                    </TouchableOpacity>
        <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.3rem", paddingHorizontal: "5%", paddingTop: window.innerHeight * 0.03, textAlign: "left", width: window.innerWidth }}>
                    Enseguida te traerán la cuenta
                    </Text>
                    <Text style={{ color: "gray", fontWeight: "400", fontSize: "0.9rem", paddingHorizontal: "5%", textAlign: "left", width: "100%",paddingVertical: window.innerHeight * 0.01, }}>
                    Mientras esperas si quieres, puedes darnos tu opinión sobre como ha ido el servicio.
                    </Text>
                    <View style={{flexDirection:"row",width:"100%"}}>
                 <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem",paddingTop: window.innerHeight * 0.03, textAlign: "center", width: window.innerWidth*0.5 }}>
                    El lugar
                    </Text>
                    <View style={{marginTop:-window.innerHeight*0.01}}>
                    <ReactStars
  count={5}
  size={window.innerWidth*0.1}
  color2={'#000'}
  char={"⭑"}
  color1={"#e8e8e8"} />
  </View>
  </View>
  <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem", paddingTop: window.innerHeight * 0.03, textAlign: "center", width: window.innerWidth*0.5 }}>
                    La comida
                    </Text>
                    <View style={{marginTop:-window.innerHeight*0.01}}>
                    <ReactStars
  count={5}
  size={window.innerWidth*0.1}
  color2={'#000'}
  char={"⭑"}
  color1={"#e8e8e8"} />
  </View>
  </View>
  </View>
  <View style={{flexDirection:"row",width:"100%"}}>
                 <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem",paddingTop: window.innerHeight * 0.03, textAlign: "center", width: window.innerWidth*0.5 }}>
                    El servicio
                    </Text>
                    <View style={{marginTop:-window.innerHeight*0.01}}>
                    <ReactStars
  count={5}
  size={window.innerWidth*0.1}
  color2={'#000'}
  char={"⭑"}
  color1={"#e8e8e8"} />
  </View>
  </View>
  <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem", paddingTop: window.innerHeight * 0.03, textAlign: "center", width: window.innerWidth*0.5 }}>
                    Experiencia al pedir
                    </Text>
                    <View style={{marginTop:-window.innerHeight*0.01}}>
                    <ReactStars
  count={5}
  size={window.innerWidth*0.1}
  color2={'#000'}
  char={"⭑"}
  color1={"#e8e8e8"} />
  </View>
  </View>
  </View>
  <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem", paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.03, paddingLeft: window.innerWidth * 0.05, textAlign: "left", width: window.innerWidth }}>
                    Añadir una nota
                    </Text>
  <TextInput numberOfLines={5} placeholder={"Escribe aquí lo que quieras comunicar"} multiline style={{fontSize:"1rem", height:window.innerHeight*0.2, width:window.innerWidth,backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.05,paddingVertical:window.innerHeight*0.02}} />
                                   
            <Text style={{marginTop:window.innerHeight*0.03,marginBottom:window.innerHeight*0.03, color: "gray", fontWeight: "400", fontSize: "0.9rem", paddingHorizontal: "5%", textAlign: "center"}}>
                    Gracias por tus opiniones
                    
                    </Text>
                    <View style={{  justifyContent: "space-between", width: window.innerWidth }}>
              <TouchableOpacity style={{ alignItems: "center", backgroundColor: "#000", width: "100%", }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#fff", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "center", width: "100%" }}>
                    Enviar valoraciones
                    </Text>
                </View>

              </TouchableOpacity>

            </View>
        </View>
        }
        {
          this.state.isLoading &&
          <View style={{width:"100%",height:"100%",backgroundColor:"#f5f5f5",justifyContent:"center",alignItems:"center"}}>
          <Image source={initial} style={{ position: "absolute", top: 0, width: window.innerWidth, height: "100%", zIndex: 0 }} resizeMode="cover" />
         
          <View style={{position:"absolute",top:0,width:"100%"}}>
          <BarLoader
         width={window.innerWidth}
         height={window.innerHeight*0.03}
   
          color={"#000"}
          loading={true}
        />
        </View>
        <Text style={{zIndex:99, color: "#000", fontWeight: "500", fontSize: "1.5rem", paddingHorizontal: "5%", marginTop: -window.innerHeight * 0.1, paddingBottom: window.innerHeight * 0.02, textAlign: "center", }}>
              Preparando tu mesa
                    </Text>
                    <Text style={{zIndex:99, color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.02, textAlign: "center", }}>
              Se está conectando con el servidor. Si tarda mucho recuerda que puedes pedir directamente al camarero.
                    </Text>
                    <View style={{position:"absolute",bottom:"12.5%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{marginBottom:window.innerHeight*0.01, width:"100%", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "center" }}>
                 Con la tecnología de
</Text>
<Image source={elcomensal} style={{  width: window.innerWidth*0.2, height: window.innerHeight*0.03, zIndex: 0 }} resizeMode="contain" />
         </View>  
         <View style={{ position: "absolute", bottom: 0, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(255,255,255,0.6)", width: "100%" }}>
              <Text style={{ color: "#000", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "center", width: "100%" }}>
                Mesa 4
                    </Text>
            </View>
        </View>
        }
        {
          false &&
          <View style={{position:"absolute",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.6)"}}>
          <View style={{backgroundColor:"#fff", position:"absolute",bottom:0,width:"100%",alignSelf:"center"}}>
          <TouchableOpacity onLongPress={() => this.setState({ showDetails: false })} onPress={() => this.setState({ showDetails: false })} style={{ alignSelf: "flex-end", position: "absolute", top: 0 }}>
                      <IoIosClose size="2.5em" />
                    </TouchableOpacity>
          <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.3rem", paddingHorizontal: "5%", paddingTop: window.innerHeight * 0.05, textAlign: "left", width: "100%" }}>
                Pedido realizado correctamente
                    </Text>
                    <Text style={{ color: "gray", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
                Tu pedido se ha enviado correctamente a cocina. Puedes seguir pidiendo cualquier otra cosa que quieras desde aquí.
                    </Text> 
                    <View style={{marginTop:window.innerHeight*0.01,  marginBottom:window.innerHeight*0.03,  justifyContent: "space-between", width: window.innerWidth*0.9,alignSelf:"center" }}>
              <TouchableOpacity style={{ alignItems: "center", backgroundColor: "#000", width: "100%", }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#fff", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "center", width: "100%" }}>
                    Entendido
                    </Text>
                </View>

              </TouchableOpacity>

            </View>
            </View>
            </View>
        }
        {
          false &&
          <View style={{position:"absolute",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.6)"}}>
          <View style={{backgroundColor:"#fff", position:"absolute",bottom:0,width:"100%",alignSelf:"center"}}>
   
          <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.3rem", paddingHorizontal: "5%", paddingTop: window.innerHeight * 0.03, textAlign: "left", width: "100%" }}>
                Se está procesando tu pedido
                    </Text>
                    <Text style={{ color: "gray", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%",paddingBottom: window.innerHeight * 0.03, paddingTop: window.innerHeight * 0.01, textAlign: "left", width: "100%" }}>
                Se está creando el pedido, espera porfavor
                    </Text> 
                    <BarLoader
         width={window.innerWidth}
         height={window.innerHeight*0.03}
   
          color={"#000"}
          loading={true}
        />
            </View>
            </View>
        }
        <SwipeableBottomSheet onChange={(newState)=>{
          if(this.state.modalOpen!=newState){
            if(!newState)
            this.setState({showProductDetails:false, modalOpen:false, showWaiter:false,showOrder:false,showCheckOrder:false,showOrderStatus:false,showHelp:false})
            else
          this.setState({modalOpen:true})
          }
          
          }} open={this.state.modalOpen}  overflowHeight={0}>
         
          {
            this.state.showProductDetails &&
            <ShowProductDetails closeDetails={this.closeDetails} activeElement={this.state.activeElement} />
          }
         
        </SwipeableBottomSheet>
<View style={{position:"absolute",top:0,width:"100%",height:"100%",backgroundColor:"#f5f5f5"}}>
  {
[{title:"Burguers",content:[{title:"Hamburguesa xxl",description:"Pedazo de hamburguesa"}]}].map((item,index)=>(
  <View onLayout={(e)=>this.addOfsetsVertical(e.nativeEvent.layout.y - window.innerHeight*0.15)} style={{ width: "100%", }}>

<Text style={{ color: "#000", fontWeight: "500", fontSize: "1.3rem", paddingLeft: "3%", marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
  {item.title}
</Text>
{
  item.content.map((internal_item, i) => (
    <View style={{ backgroundColor:!internal_item.avaliable?"#f5f5f5":  "#fff", paddingVertical: window.innerHeight * 0.02, marginTop: window.innerHeight * 0.002, width: "100%" }}>
 
      <TouchableOpacity onLongPress={() => this.setState({modalOpen:true, showProductDetails : true,activeElement:internal_item })} onPress={() => this.setState({modalOpen:true, showProductDetails : true,activeElement:internal_item  })} style={{ backgroundColor:!internal_item.avaliable?"#f5f5f5":  "#fff" }}>
        <View style={{ justifyContent: "center", alignItems: "center", width: "100%", flexDirection: "row" }}>
          <View style={{ width: "75%",justifyContent:"flex-start" }}>

            <Text style={{ color:!internal_item.avaliable? "gray":"#000", fontWeight: "500", fontSize: "1rem", marginLeft: "5%",textAlign:"left" }}>

              {internal_item.title}
              
            </Text>


            <Text numberOfLines={3} style={{ color:"gray", fontWeight: "400", fontSize: "0.9rem", marginLeft: "5%",marginTop:window.innerHeight*0.01 }}>

              {internal_item.description}
            </Text>
            <View horizontal style={{flexDirection:"row",flexWrap:"wrap",width:window.innerWidth*1}}>
        {
              internal_item.recommended &&
              <Text style={{marginTop:window.innerHeight*0.01,  color:!internal_item.avaliable?"gray":"#000",backgroundColor:!internal_item.avaliable?"#e8e8e8": "#FFF4A3", fontWeight: "500", fontSize: "0.7rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:10,borderRadius:10,paddingVertical:window.innerHeight*0.004}}>

              Especialidad
</Text>
            }
            {
              internal_item.vegetarian &&
              <Text style={{marginTop:window.innerHeight*0.01, color: !internal_item.avaliable?"gray":"#000",backgroundColor:!internal_item.avaliable?"#e8e8e8": "#AFF396", fontWeight: "500", fontSize: "0.7rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:10,borderRadius:10,paddingVertical:window.innerHeight*0.004}}>

              Vegetariano
</Text>
            }
            {
              internal_item.vegan &&
              <Text style={{marginTop:window.innerHeight*0.01, color: !internal_item.avaliable?"gray":"#000",backgroundColor:!internal_item.avaliable?"#e8e8e8": "#BDDDFF", fontWeight: "500", fontSize: "0.7rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:10,borderRadius:10,paddingVertical:window.innerHeight*0.004}}>

              Vegano
</Text>
            }
            
            {
              internal_item.no_gluten &&
              <Text style={{marginTop:window.innerHeight*0.01, color: !internal_item.avaliable?"gray":"#000",backgroundColor:!internal_item.avaliable?"#e8e8e8": "#E1BDFF", fontWeight: "500", fontSize: "0.7rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:10,borderRadius:10,paddingVertical:window.innerHeight*0.004}}>

            Sin gluten
</Text>
            }
            {
              internal_item.offer &&
              <Text style={{marginTop:window.innerHeight*0.01, color: !internal_item.avaliable?"gray":"#000",backgroundColor:!internal_item.avaliable?"#e8e8e8": "#FFAAAA", fontWeight: "500", fontSize: "0.7rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:10,borderRadius:10,paddingVertical:window.innerHeight*0.004}}>

            Oferta
</Text>
            }

            {
              internal_item.for_share &&
              <Text style={{marginTop:window.innerHeight*0.01, color: !internal_item.avaliable?"gray":"#000",backgroundColor:!internal_item.avaliable?"#e8e8e8": "#FFC4A8", fontWeight: "500", fontSize: "0.7rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:10,borderRadius:10,paddingVertical:window.innerHeight*0.004}}>

            Para compartir
</Text>
            }
            {
              internal_item.alcohol &&
              <Text style={{marginTop:window.innerHeight*0.01, color: !internal_item.avaliable?"gray":"#000",backgroundColor:!internal_item.avaliable?"#e8e8e8": "#FFD2EE", fontWeight: "500", fontSize: "0.7rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:10,borderRadius:10,paddingVertical:window.innerHeight*0.004}}>

            Alcohol
</Text>
            }
            {
              internal_item.alcohol_free &&
              <Text style={{marginTop:window.innerHeight*0.01, color: !internal_item.avaliable?"gray":"#000",backgroundColor:!internal_item.avaliable?"#e8e8e8": "#BFC2FF", fontWeight: "500", fontSize: "0.7rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:10,borderRadius:10,paddingVertical:window.innerHeight*0.004}}>

            Sin alcohol
</Text>
            }
            {
              internal_item.unity &&
              <Text style={{marginTop:window.innerHeight*0.01, color: !internal_item.avaliable?"gray":"#000",backgroundColor:!internal_item.avaliable?"#e8e8e8": "#ADFFDB", fontWeight: "500", fontSize: "0.7rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:10,borderRadius:10,paddingVertical:window.innerHeight*0.004}}>

            Por unidad
</Text>
            }
            {
              internal_item.allergens &&
              <Text style={{marginTop:window.innerHeight*0.01, color: !internal_item.avaliable?"gray":"#000",backgroundColor:!internal_item.avaliable?"#e8e8e8": "#FFDDAD", fontWeight: "500", fontSize: "0.7rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:10,borderRadius:10,paddingVertical:window.innerHeight*0.004}}>

            Alérgenos
</Text>
            }

            </View>
            


          </View>
          {internal_item.avaliable &&
          <View style={{ width: "25%", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: internal_item.offer ? "#D91717" : "#000", fontWeight: "500", fontSize: "0.9rem" }}>
            {internal_item.offer &&
                (parseFloat(internal_item.price) - (parseFloat(internal_item.price) * internal_item.offerPercentage / 100)).toFixed(2) + " €"}
              {!internal_item.offer &&
                internal_item.price.toFixed(2) + " €"}

            </Text>
            
            {
              internal_item.offer &&
              <Text style={{ color: "gray", fontWeight: "600", fontSize: "0.7rem", textDecorationLine: "line-through" }}>

              {internal_item.price.toFixed(2)} €
</Text>
            }

          </View>
}
{!internal_item.avaliable &&
          <View style={{ width: "25%", justifyContent: "center", alignItems: "center",height:"100%" }}>
         
           </View>
}
        </View>
     
      </TouchableOpacity>
    
     
    </View>
  ))
}
<View style={{width:"100%",backgroundColor:"#fff"}}>
  <TouchableOpacity style={{width:"100%"}}>
  <Text style={{ color:"#000", fontWeight: "400", fontSize: "1rem", marginLeft: "5%",textAlign:"left",paddingVertical:window.innerWidth*0.05 }}>

         + Añadir plato
            </Text>
  </TouchableOpacity>

  </View>
</View>
))
  }
  <TouchableOpacity style={{width:"100%"}}>
  <Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.3rem", paddingHorizontal: "5%", marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
          + Añadir categoría
            </Text>
  </TouchableOpacity>
  <TouchableOpacity style={{justifyContent:"center",alignItems:"center",width:"100%",backgroundColor:"#e8e8e8",paddingVertical:window.innerHeight*0.01}}>
            <Text style={{marginBottom:window.innerHeight*0.01, width:"100%", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "center" }}>
                 Con la tecnología de
</Text>
<Image source={elcomensal} style={{  width: window.innerWidth*0.2, height: window.innerHeight*0.03, zIndex: 0 }} resizeMode="contain" />
         </TouchableOpacity> 
</View>

<View style={{position:"absolute",top:0, backgroundColor:"rgba(0,0,0,0.4)",width:"100%",height:"100%"}}/>
{true &&
<View style={{position:"absolute",width:"40%",alignSelf:"center",justifyContent:"center",justifySelf:"center",marginVertical:window.innerHeight*0.3,backgroundColor:"#fff"}}>
<TouchableOpacity style={{position:"absolute",right:10,top:10}} onLongPress={() => this.setState({searchValue:"",showSearch:true})} onPress={() => this.setState({searchValue:"",showSearch:true})}>
                      <IoIosClose size="2.5em" />
                    </TouchableOpacity>
<Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.3rem", paddingHorizontal: "5%", marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.03, backgroundColor: "#fff" }}>
          Nueva categoría
            </Text>
            <TextInput multiline numberOfLines={2} placeholder={"Título de la nueva sección (Entrantes, postres, hamburguesas ...) "} style={{marginBottom: window.innerHeight * 0.05,fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.02}} />
            <TouchableOpacity   style={{ alignItems: "center", backgroundColor: "#000", width: "100%", }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#fff", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "center", width: "100%" }}>
                    Añadir categoría
                    </Text>
                </View>

              </TouchableOpacity>
</View>
}

{false &&
<View style={{width:"90%",height:"80%",alignSelf:"center",marginTop:"5%",flexDirection:"row",backgroundColor:"#fff"}}>

  <View style={{width:"50%",height:"100%"}}>
            <Text numberOfLines={1} style={{textDecorationLine:"underline", color: "#000", fontWeight: "500", fontSize: "1.4rem", paddingHorizontal: "5%", marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
          Nuevo plato
            </Text>
            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
          Nombre del plato
            </Text>
            <TextInput multiline numberOfLines={1} placeholder={"Cheesecake,Coulant,Dry Martini, ..."} style={{fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.02}} />
            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
          Descripción
            </Text>
            <TextInput multiline numberOfLines={2} placeholder={"Ej. cremós de formatge, fruits del bosc, Mòdena i galetes speculoos"} style={{fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.02}} />
          
            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
          Etiquetas
            </Text>
            <View horizontal style={{flexDirection:"row",flexWrap:"wrap",width:"100%",backgroundColor:"#fff"}}>
                 <TouchableOpacity onLongPress={()=>this.updateNewDishTag("recommended")} onPress={()=>this.updateNewDishTag("recommended")}>     
              <Text style={{marginTop:window.innerHeight*0.01,  color:!this.state.newDish.recommended?"gray":"#000",backgroundColor:!this.state.newDish.recommended?"#f5f5f5": "#FFF4A3", fontWeight: "500", fontSize: "0.8rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:15,borderRadius:10,paddingVertical:window.innerHeight*0.008}}>

              Especialidad
              </Text>
              </TouchableOpacity>     
<TouchableOpacity onLongPress={()=>this.updateNewDishTag("vegetarian")} onPress={()=>this.updateNewDishTag("vegetarian")}>  
              <Text style={{marginTop:window.innerHeight*0.01, color: !this.state.newDish.vegetarian?"gray":"#000",backgroundColor:!this.state.newDish.vegetarian?"#f5f5f5": "#AFF396", fontWeight: "500", fontSize: "0.8rem", marginLeft: window.innerWidth*0.02,textAlign:"left",paddingHorizontal:15,borderRadius:10,paddingVertical:window.innerHeight*0.008}}>

              Vegetariano
</Text>
</TouchableOpacity>
<TouchableOpacity onLongPress={()=>this.updateNewDishTag("vegan")} onPress={()=>this.updateNewDishTag("vegan")}>  
              <Text style={{marginTop:window.innerHeight*0.01, color: !this.state.newDish.vegan?"gray":"#000",backgroundColor:!this.state.newDish.vegan?"#f5f5f5": "#BDDDFF", fontWeight: "500", fontSize: "0.8rem", marginLeft: window.innerWidth*0.01,textAlign:"left",paddingHorizontal:15,borderRadius:10,paddingVertical:window.innerHeight*0.008}}>

              Vegano
</Text>
</TouchableOpacity>
            
            
<TouchableOpacity onLongPress={()=>this.updateNewDishTag("gluten_free")} onPress={()=>this.updateNewDishTag("gluten_free")}>  
              <Text style={{marginTop:window.innerHeight*0.01, color: !this.state.newDish.no_gluten?"gray":"#000",backgroundColor:!this.state.newDish.no_gluten?"#f5f5f5": "#E1BDFF", fontWeight: "500", fontSize: "0.8rem", marginLeft: window.innerWidth*0.01,textAlign:"left",paddingHorizontal:15,borderRadius:10,paddingVertical:window.innerHeight*0.008}}>

            Sin gluten
</Text>
</TouchableOpacity>
            
<TouchableOpacity  onLongPress={()=>this.updateNewDishTag("offer")} onPress={()=>this.updateNewDishTag("offer")}>  
              <Text style={{marginTop:window.innerHeight*0.01, color: !this.state.newDish.offer?"gray":"#000",backgroundColor:!this.state.newDish.offer?"#f5f5f5": "#FFAAAA", fontWeight: "500", fontSize: "0.8rem", marginLeft: window.innerWidth*0.01,textAlign:"left",paddingHorizontal:15,borderRadius:10,paddingVertical:window.innerHeight*0.008}}>

            Oferta
</Text>
      </TouchableOpacity>
      <TouchableOpacity  onLongPress={()=>this.updateNewDishTag("for_share")} onPress={()=>this.updateNewDishTag("for_share")}>  
              <Text style={{marginTop:window.innerHeight*0.01, color: !this.state.newDish.for_share?"gray":"#000",backgroundColor:!this.state.newDish.for_share?"#f5f5f5": "#FFC4A8", fontWeight: "500", fontSize: "0.8rem", marginLeft: window.innerWidth*0.01,textAlign:"left",paddingHorizontal:15,borderRadius:10,paddingVertical:window.innerHeight*0.008}}>

            Para compartir
</Text>
         </TouchableOpacity>
         <TouchableOpacity  onLongPress={()=>this.updateNewDishTag("alcohol")} onPress={()=>this.updateNewDishTag("alcohol")}>  
              <Text style={{marginTop:window.innerHeight*0.01, color: !this.state.newDish.alcohol?"gray":"#000",backgroundColor:!this.state.newDish.alcohol?"#f5f5f5": "#FFD2EE", fontWeight: "500", fontSize: "0.8rem", marginLeft: window.innerWidth*0.01,textAlign:"left",paddingHorizontal:15,borderRadius:10,paddingVertical:window.innerHeight*0.008}}>

            Alcohol
</Text>
</TouchableOpacity>
<TouchableOpacity onLongPress={()=>this.updateNewDishTag("alcohol_free")} onPress={()=>this.updateNewDishTag("alcohol_free")}>  
 
              <Text style={{marginTop:window.innerHeight*0.01, color: !this.state.newDish.alcohol_free?"gray":"#000",backgroundColor:!this.state.newDish.alcohol_free?"#f5f5f5": "#BFC2FF", fontWeight: "500", fontSize: "0.8rem", marginLeft: window.innerWidth*0.01,textAlign:"left",paddingHorizontal:15,borderRadius:10,paddingVertical:window.innerHeight*0.008}}>

            Sin alcohol
</Text>
         </TouchableOpacity>   
         <TouchableOpacity>  
              <Text style={{marginTop:window.innerHeight*0.01, color: !this.state.newDish.unity?"gray":"#000",backgroundColor:!this.state.newDish.unity?"#f5f5f5": "#ADFFDB", fontWeight: "500", fontSize: "0.8rem", marginLeft: window.innerWidth*0.01,textAlign:"left",paddingHorizontal:15,borderRadius:10,paddingVertical:window.innerHeight*0.008}}>

            Por unidad
</Text>
</TouchableOpacity>
            
<TouchableOpacity  onLongPress={()=>this.updateNewDishTag("allergens")} onPress={()=>this.updateNewDishTag("allergens")}>  
              <Text style={{marginTop:window.innerHeight*0.01, color: !this.state.newDish.allergens?"gray":"#000",backgroundColor:!this.state.newDish.allergens?"#f5f5f5": "#FFDDAD", fontWeight: "500", fontSize: "0.8rem", marginLeft: window.innerWidth*0.01,textAlign:"left",paddingHorizontal:15,borderRadius:10,paddingVertical:window.innerHeight*0.008}}>

            Alérgenos
</Text>
</TouchableOpacity>
                </View>
                {!this.state.newDish.offer &&
                <View>
                <Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
          Precio
            </Text>
            <TextInput numberOfLines={1} placeholder={"16.40"} style={{fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.05,paddingVertical:window.innerHeight*0.02}} />
            </View>
                }
                {this.state.newDish.offer &&
                <View style={{width:"100%",flexDirection:"row",backgroundColor:"#fff",justifyContent:"space-between"}}>
                  <View style={{width:"50%"}}>
                <Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: window.innerWidth*0.05, marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
          Precio
            </Text>
            <TextInput numberOfLines={1} placeholder={"16.40"} style={{alignSelf:"flex-start", fontSize:"1rem", width:"95%",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.05,paddingVertical:window.innerHeight*0.02}} />
            </View>
            <View style={{width:"50%"}}>
            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: window.innerWidth*0.05, marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
          Precio con oferta
            </Text>
            <TextInput numberOfLines={1} placeholder={"15.60"} style={{alignSelf:"flex-end", fontSize:"1rem", width:"95%",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.05,paddingVertical:window.innerHeight*0.02}} />
           
              </View>
            </View>
                }
                </View>
                <View style={{width:"50%",height:"100%"}}>
                {this.state.newDish.for_share &&
                <View>
            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
          Para compartir entre
            </Text>
            <TextInput numberOfLines={1} placeholder={"2"} style={{fontSize:"1rem", width:window.innerWidth,backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.05,paddingVertical:window.innerHeight*0.02}} />
            
            </View>
                }
                {this.state.newDish.allergens &&
                <View>
            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
          Alérgenos
            </Text>
            {
              ["Pescado","Frutos secos","Lácteos","Moluscos","Cereales con gluten","Crustáceos","Huevos","Cacahuetes","Soja","Apio","Mostaza","Sésamo","Altramuz","Sulfitos"].map((item,index)=>(
                <TouchableOpacity onLongPress={()=>this.toggleAllergensArray(index)} onPress={()=>this.toggleAllergensArray(index)} style={{width:"100%"}}>
                <Text style={{marginTop:window.innerHeight*0.0025, color: !this.state.newDish.allergensArray[index]?"gray":"#000",backgroundColor:!this.state.newDish.allergensArray[index]?"#f5f5f5": "#fff", fontWeight: "400", fontSize: "1rem", paddingLeft: window.innerWidth*0.05,textAlign:"left",paddingHorizontal:15,borderRadius:0,paddingVertical:window.innerHeight*0.02}}>

{item}
</Text>
                </TouchableOpacity>
              ))
            }
            </View>
            }
            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
          Configuración
            </Text>

                    <Text numberOfLines={1} style={{marginTop:window.innerHeight*0.0025,paddingVertical:window.innerHeight*0.02, color: "#000", fontWeight: "500", fontSize: "1rem", backgroundColor: "#fff",width:window.innerWidth,paddingHorizontal:window.innerWidth*0.05 }}>
          Tamaño de la pizza
            </Text>
            <Text numberOfLines={1} style={{marginTop:window.innerHeight*0.0025,paddingVertical:window.innerHeight*0.02, color: "#000", fontWeight: "400", fontSize: "1rem", backgroundColor: "#fff",width:window.innerWidth,paddingLeft:window.innerWidth*0.1,paddingRight:window.innerWidth*0.05 }}>
          Mediana
            </Text>
            <Text numberOfLines={1} style={{marginTop:window.innerHeight*0.0025,paddingVertical:window.innerHeight*0.02, color: "#000", fontWeight: "400", fontSize: "1rem", backgroundColor: "#fff",width:window.innerWidth,paddingLeft:window.innerWidth*0.1,paddingRight:window.innerWidth*0.05 }}>
          Grande
            </Text>
            <Text numberOfLines={1} style={{marginTop:window.innerHeight*0.0025,paddingVertical:window.innerHeight*0.02, color: "#000", fontWeight: "400", fontSize: "1rem", backgroundColor: "#fff",width:window.innerWidth,paddingLeft:window.innerWidth*0.1,paddingRight:window.innerWidth*0.05 }}>
          Familiar
            </Text>
            <Text numberOfLines={1} style={{marginTop:window.innerHeight*0.0025,paddingVertical:window.innerHeight*0.02, color: "gray", fontWeight: "400", fontSize: "1rem", backgroundColor: "#f5f5f5",width:window.innerWidth,paddingLeft:window.innerWidth*0.1,paddingRight:window.innerWidth*0.05 }}>
          + Añadir opción (Tamaño familiar)
            </Text>
            <Text numberOfLines={1} style={{marginTop:window.innerHeight*0.0025,paddingVertical:window.innerHeight*0.02, color: "gray", fontWeight: "500", fontSize: "1rem", backgroundColor: "#f5f5f5",width:window.innerWidth,paddingLeft:window.innerWidth*0.05,paddingRight:window.innerWidth*0.05 }}>
         + Añadir configuración (Selecciona tamaño, ...)
            </Text>
            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", marginTop: window.innerHeight * 0.0025, paddingTop: window.innerHeight * 0.03, paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
          Información adicional
            </Text>
            <TextInput multiline numberOfLines={3} placeholder={"Ej. cremós de formatge, fruits del bosc, Mòdena i galetes speculoos"} style={{fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.02,paddingVertical:window.innerHeight*0.02}} />
            </View>
            <TouchableOpacity onPress={()=>this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')}  style={{ alignItems: "center", backgroundColor: "#000", width: "100%",position:"absolute",bottom:0 }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#fff", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "center", width: "100%" }}>
                    Añadir plato al menú
                    </Text>
                </View>

              </TouchableOpacity>
              <TouchableOpacity style={{position:"absolute",right:10,top:10}} onLongPress={() => this.setState({searchValue:"",showSearch:true})} onPress={() => this.setState({searchValue:"",showSearch:true})}>
                      <IoIosClose size="2.5em" />
                    </TouchableOpacity>

</View>
}
{false &&
<View style={{ boxShadow: "0px 0px 20px rgba(0,0,0,0.3)", position: "absolute", top: 0, backgroundColor: "#000", width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
          <Image source={restaurantLogin} style={{ position: "absolute", top: 0, width: window.innerWidth, height: "100%", zIndex: 0 }} blurRadius={0} resizeMode="cover" />
       <View style={{width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.3)",position:"absolute",top:0}}/>

        <View style={{width:"28%",alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}}>
        <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "left", width: "100%" }}>
                    Usuario
                    </Text>
                    <TextInput numberOfLines={1} placeholder={"Nombre de usuario"} style={{fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.02}} />
           
                    <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "left", width: "100%" }}>
                    Contraseña
                    </Text>
                    <TextInput numberOfLines={1} placeholder={"Contraseña"} style={{fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.02}} />
                    <Text style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "left", width: "100%" }}>
                    He olvidado mi contraseña
                    </Text>
                    <TouchableOpacity onPress={()=>this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')}  style={{ alignItems: "center", backgroundColor: "#000", width: "100%",marginTop:window.innerHeight*0.03 }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#fff", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "center", width: "100%" }}>
                    Iniciar sesión
                    </Text>
                </View>

              </TouchableOpacity>
             
              
        </View>
        <View style={{width:"100%",height:window.innerHeight*0.08,position:"absolute",top:0,backgroundColor:"#fff",flexDirection:"row",justifyContent:"space-between"}}>
        <TouchableOpacity style={{justifyContent:"center",alignItems:"center",width:"15%",backgroundColor:"#fff"}}>
        
<Image source={elcomensal} style={{  width: window.innerWidth*0.15, height: window.innerHeight*0.03, zIndex: 0 }} resizeMode="contain" />
         </TouchableOpacity> 
       
        <TouchableOpacity onPress={()=>this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')}  style={{alignSelf:"flex-end", alignItems: "center", backgroundColor: "#000", width: window.innerWidth*0.15 }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#fff", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "center", width: "100%" }}>
                    Registrarse
                    </Text>
                </View>
                

              </TouchableOpacity>
              </View>
         </View>
}

<View style={{ boxShadow: "0px 0px 20px rgba(0,0,0,0.3)", position: "absolute", top: 0, backgroundColor: "#000", width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
          <Image source={restaurantRegister} style={{ position: "absolute", top: 0, width: window.innerWidth, height: "100%", zIndex: 0 }} blurRadius={5} resizeMode="cover" />
       <View style={{width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.3)",position:"absolute",top:0}}/>

        <View style={{width:"60%",alignItems:"center",justifyContent:"center",backgroundColor:"#fff",flexDirection:"row"}}>
       <View style={{width:"50%",height:"100%"}}>
        <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "left", width: "100%" }}>
                    Nombre del restaurante
                    </Text>
                    <TextInput numberOfLines={1} placeholder={"Tapas a tope"} style={{fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.02}} />
           
                    <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "left", width: "100%" }}>
                    Dirección del restaurante
                    </Text>
                    <TextInput numberOfLines={1} placeholder={"C/ Bruc 23, Barcelona"} style={{fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.02}} />
                    <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "left", width: "100%" }}>
                    Correo electrónico
                    </Text>
                    <TextInput numberOfLines={1} placeholder={"tapasatope@mirestaurante.com"} style={{fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.02,marginBottom:window.innerHeight*0.02}} />
                    </View>
                    <View style={{width:"50%",height:"100%",alignSelf:"flex-start"}}>
                    <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%",paddingBottom: window.innerHeight * 0.01, paddingTop: window.innerHeight * 0.03, textAlign: "left", width: "100%" }}>
                    Nombre completo
                    </Text>
                    <TextInput numberOfLines={1} placeholder={"José Manuel Rodríguez Pérez"} style={{fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.02}} />
           
                    <Text style={{ color: "#000", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", paddingBottom: window.innerHeight * 0.01, paddingTop: window.innerHeight * 0.03, textAlign: "left", width: "100%" }}>
                    Número de teléfono
                    </Text>
                    <TextInput numberOfLines={1} placeholder={"+34 000 000 000"} style={{fontSize:"1rem", width:"90%",alignSelf:"center",backgroundColor:"#f5f5f5",paddingHorizontal:window.innerWidth*0.01,paddingVertical:window.innerHeight*0.02}} />
                    <Text style={{ color: "gray", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.02, textAlign: "left", width: "100%" }}>
                    Al inscribirse aceptas los términos y condiciones de ELCOMENSAL
                    </Text>
                  
                    
                    <TouchableOpacity onPress={()=>this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')}  style={{ alignItems: "center", backgroundColor: "#000", width: "100%",marginTop:window.innerHeight*0.02 }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#fff", fontWeight: "500", fontSize: "1.2rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "center", width: "100%" }}>
                    Empezar
                    </Text>
                </View>
                </TouchableOpacity>
                </View>


          
              
        </View>
        <View style={{width:"100%",height:window.innerHeight*0.08,position:"absolute",top:0,backgroundColor:"#fff",flexDirection:"row",justifyContent:"space-between"}}>
        <TouchableOpacity style={{justifyContent:"center",alignItems:"center",width:"15%",backgroundColor:"#fff"}}>
        
<Image source={elcomensal} style={{  width: window.innerWidth*0.15, height: window.innerHeight*0.03, zIndex: 0 }} resizeMode="contain" />
         </TouchableOpacity> 
       
        <TouchableOpacity onPress={()=>this.props.openSnackbar('Tu plato se ha creado con éxito. Puedes editar cúando quieras el plato y los cambios se reflejarán a tiempo real en la carta.')}  style={{alignSelf:"flex-end", alignItems: "center", backgroundColor: "#000", width: window.innerWidth*0.15 }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                  
                  <Text style={{ color: "#fff", fontWeight: "500", fontSize: "1rem", paddingHorizontal: "5%", paddingVertical: window.innerHeight * 0.03, textAlign: "center", width: "100%" }}>
                    Iniciar sesión
                    </Text>
                </View>
                

              </TouchableOpacity>
              </View>
         </View>
      </View>

    );
  }
}
export default withSnackbar(App,
  {
    
    style: {
      backgroundColor: '#fff',
   
      color: '#000',

      fontSize: '0.9rem',
     
    },
    closeStyle: {
      color: '#000',
      fontSize: '0.8rem',
   
    },
  })
