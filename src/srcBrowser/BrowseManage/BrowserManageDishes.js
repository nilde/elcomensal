import * as React from 'react';
import Title from 'reactjs-title'
import { Animated, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback, TextInput, FlatList } from 'react-native';
import { IoIosClose, IoMdRadioButtonOff, IoMdRadioButtonOn, IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import Dropdown from 'react-dropdown';
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader,SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Collapsible from 'react-collapsible';
import { Background } from 'react-parallax';
import Dropzone from 'react-dropzone'
import { Link } from 'react-router-dom';
import firebase from "firebase";

const optionsProduct = ["Especialidad", "Vegetariano", "Vegano", "Sin gluten", "Sin lactosa", "Para compartir", "Por unidad", "Alcohol", "Sin alcohol", "Halal"]
const allergensOptions=["Pescado","Frutos secos","Lácteos","Moluscos","Cereales con gluten","Crustáceos","Huevos","Cacahuetes","Soja","Apio","Mostaza","Sésamo","Altramuz","Sulfitos"]

var newDishTemplate={
              //update id,
                image:"",
              name:"",
              description:"",
              price:0,
              price_offer:0,
              offer:false,
              avaliable:true,
              labels:[],
              allergens:[],
}
var newMenuTemplate={
  //update id
  price:0,
  title:"",
  info:"",
  articles:[],
  avaliable:[
    {all_day:true,
      avaliable:true,
      hourlies:[]
    },
    {all_day:true,
      avaliable:true,
      hourlies:[]
    },
    {all_day:true,
      avaliable:true,
      hourlies:[]
    },
    {all_day:true,
      avaliable:true,
      hourlies:[]
    },
    {all_day:true,
      avaliable:true,
      hourlies:[]
    },
    {all_day:true,
      avaliable:true,
      hourlies:[]
    },
    {all_day:true,
      avaliable:true,
      hourlies:[]
    }
  ]
}

var newCategoryTemplate={
  title:"",
  info:"",
  articles:[
    {
    title:"Primeros",
    items:[],
  },
  {
    title:"Segundos",
    items:[],
  },
  {
    title:"Terceros",
    items:[],
  }
],
  avaliable:[
    {all_day:true,
      avaliable:true,
      hourlies:[]
    },
    {all_day:true,
      avaliable:true,
      hourlies:[]
    },
    {all_day:true,
      avaliable:true,
      hourlies:[]
    },
    {all_day:true,
      avaliable:true,
      hourlies:[]
    },
    {all_day:true,
      avaliable:true,
      hourlies:[]
    },
    {all_day:true,
      avaliable:true,
      hourlies:[]
    },
    {all_day:true,
      avaliable:true,
      hourlies:[]
    }
  ]
}


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            changed:false,
            status:"DISHES",
            showNewMenu:false,
            showNewCategory:false,
            showNewDish:false,
            editActualMenu:false,
            editActualCategory:false,
            editActualDish:false,
            activeDishIndex:-1,
            activeCategoryIndex:-1,
            activeMenuIndex:-1,
          dishesCorrespondence:{},
          filteredDishes:[],
          filteredCategories:{},
          filteredMenus:{},
          newDish:newDishTemplate,
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
             }],
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
              }],
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

        }
    }
/**
 * Stores data in db with updated menu
 */
    async saveChanges(){
      //updates internal info
      await firebase.firestore().collection('internalInfo').add(this.state.internalInfo).then(async ()=>
      await firebase.firestore().collection('menu').add(this.state.menu).then(()=>
      this.setState({changed:false})
          )
      )
    }
generateIDsCorrepondence(){
  var correspondence={}
  for(var i=0;i<this.state.dishes.length;i++){
correspondence[this.state.dishes[i].id]=i
  }
  console.error(correspondence)
  this.setState({dishesCorrespondence:correspondence})
}

generateCategories(){
var cleanCategories=[]
for(var i=0;i<this.state.categories.length;i++){
  var cleanArticles=[]
  for (var j=0;j<this.state.categories[i].articles.length;j++){
    var dishesIndex=this.state.dishesCorrespondence[this.state.categories[i].articles[j]]
    console.error(this.state.dishesCorrespondence)
    cleanArticles[j]={
      id:this.state.dishes[dishesIndex].id,
      name:this.state.dishes[dishesIndex].name,
  }
}
  cleanCategories[i]={
    id:this.state.categories[i].id,
                title:this.state.categories[i].title,
                info:this.state.categories[i].info,
                articles:cleanArticles,
                avaliable:this.state.categories[i].avaliable
  }

}
      this.setState({cleanCategories:cleanCategories})
    }


    generateMenus(){
      var cleanMenus=[]
      for(var i=0;i<this.state.menus.length;i++){
        var cleanArticles=[]
        for (var j=0;j<this.state.menus[i].articles.length;j++){
          var dishesIndex=this.state.dishesCorrespondence[this.state.menus[i].articles[j]]
          cleanArticles[j]={
            id:this.state.dishes[dishesIndex].id,
            name:this.state.dishes[dishesIndex].name,
        }
      }
        cleanMenus[i]={
          id:this.state.menus[i].id,
          price:this.state.menus[i].price,
                      title:this.state.menus[i].title,
                      info:this.state.menus[i].info,
                      articles:cleanArticles,
                      avaliable:this.state.menus[i].avaliable
        }
      
      }
            this.setState({cleanMenus:cleanMenus})
    }

   async  updateAllInfo(){
     await this.generateIDsCorrepondence()
     await this.generateCategories()
     await  this.generateMenus()
    }

    componentDidMount(){
      this.updateAllInfo();
      this.filterDishes("")
      this.filterCategories("")
      this.filterMenus("")
    }

    toggleAvaliability(i){
      var dishes=this.state.dishes
      dishes[i].avaliable=!dishes[i].avaliable
      this.setState({dishes:dishes})
    }
    assignActualMenu(index){
      var activeMenu= JSON.parse(JSON.stringify(this.state.menus[index]))
      this.setState({activeMenu:activeMenu,activeMenuIndex:index})
    }


    assignActualDish(index){
      var activeDish= JSON.parse(JSON.stringify(this.state.dishes[index]))
      this.setState({activeDish:activeDish})
    }

    editDishField(key,value){
      var activeDish=this.state.activeDish;
      if(key=="labels"){
        //need to switch off
       if(activeDish.labels.includes(value)){
        var index=activeDish.labels.indexOf(value)
        activeDish.labels.splice(index,1)
        }
        //switch on
        else{
           activeDish.labels.push(value)
        }
      }
      
      else if(key=="allergens"){
        if(activeDish.allergens.includes(value)){
          var index=activeDish.allergens.indexOf(value)
          activeDish.allergens.splice(index,1)
      }
      else
      activeDish.allergens.push(value)

      }
      else
      activeDish[key]=value


      this.setState({activeDish:activeDish})
    }

    newDishField(key,value){
      var newDish=this.state.newDish;
      if(key=="labels"){
        //need to switch off
       if(newDish.labels.includes(value)){
        var index=newDish.labels.indexOf(value)
        newDish.labels.splice(index,1)
        }
        //switch on
        else{
           newDish.labels.push(value)
        }
      }
      
      else if(key=="allergens"){
        if(newDish.allergens.includes(value)){
          var index=newDish.allergens.indexOf(value)
          newDish.allergens.splice(index,1)
      }
      else
      newDish.allergens.push(value)

      }
      else
      newDish[key]=value


      this.setState({newDish:newDish})
    }


    editDish(index){
      this.assignActualDish(index)
      this.setState({editActualDish:true,activeDishIndex:index})
    }
    editDishSave(){
      var activeDish=this.state.activeDish;
      var dishes=this.state.dishes;
      dishes[this.state.activeDishIndex]=activeDish;
      this.setState({dishes:dishes,editActualDish:false,activeDishIndex:-1,activeDish:{}},(()=>this.filterDishes("")))
    }

    editCategorySave(){
      var activeCategory=this.state.activeCategory;
      var categories=this.state.categories;
      categories[this.state.activeCategoryIndex]=activeCategory;
      this.setState({categories:categories,editActualCategory:false,activeCategoryIndex:-1,activeCategory:{}},(()=>this.filterCategories("")))
    }

    editMenuSave(){
      var activeMenu=this.state.activeMenu;
      var menus=this.state.menus;
      menus[this.state.activeMenuIndex]=activeMenu;
      this.setState({menus:menus,editActualMenu:false,activeMenuIndex:-1,activeMenu:{}},(()=>this.filterCategories("")))
    }

    filterDishes(newText){
      var filteredDishes=[]
      for(var i=0;i<this.state.dishes.length;i++){
        if(this.state.dishes[i].name.includes(newText)){
          filteredDishes.push(this.state.dishes[i])
        }
      }
      this.setState({filteredDishes:filteredDishes})
    }

    filterCategories(newText){
      var filteredCategories=[]
      for(var i=0;i<this.state.categories.length;i++){
        if(this.state.categories[i].title.includes(newText)){
          filteredCategories.push(this.state.categories[i])
        }
      }
      this.setState({filteredCategories:filteredCategories})
    }

    filterMenus(newText){
      var filteredMenus=[]
      for(var i=0;i<this.state.menus.length;i++){
        if(this.state.menus[i].title.includes(newText)){
          filteredMenus.push(this.state.menus[i])
        }
      }
      this.setState({filteredMenus:filteredMenus})
    }



    createNewDish(){
      var newDish=this.state.newDish
      var dishes=this.state.dishes
      newDish.id=this.state.dishes[this.state.dishes.length-1].id+1
      dishes.push(JSON.parse(JSON.stringify(newDish)))
      this.setState({dishes:dishes,showNewDish:false,newDish:newDishTemplate},()=>this.filterDishes(""))

    }
    deleteDish(){
      var dishes=this.state.dishes;
      dishes.splice(this.state.activeDishIndex,1)
      this.setState({dishes:dishes,editActualDish :false},()=>this.filterDishes(""))
    }

    deleteCategory(){
      var categories=this.state.categories;
      categories.splice(this.state.activeCategoryIndex,1)
      this.setState({categories:categories,editActualCategory :false},()=>this.filterCategories(""))
    }
    deleteMenu(){
      var categories=this.state.categories;
      categories.splice(this.state.activeMenuIndex,1)
      this.setState({categories:categories,editActualMenu :false},()=>this.filterCategories(""))
    }

    checkCategoryAvaliable(index){

      return this.state.categories[index].avaliable[new Date().getDay()].indexOf(new Date().getHours())>=0
    }

    render() {

        return (
            <View style={{zIndex: 0,width: window.innerWidth, height: window.innerHeight, backgroundColor: "#f5f5f5"}}>
          <View style={{width:"100%",height:window.innerHeight*0.07,backgroundColor:"#fff",flexDirection:"row",boxShadow: "-10px -10px 10px rgba(0,0,0,0.1)",borderBottomWidth:2,borderColor:"#f5f5f5"}}>

<TouchableOpacity onLongPress={()=>{
  this.filterDishes("")
  this.setState({status:"DISHES"})}}
  onPress={()=>{
  this.filterDishes("")
  this.setState({status:"DISHES"})}}
  
   style={{width:"10%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color:this.state.status=="DISHES"?"#000":"#BDBDBD", fontWeight: "400", fontSize: "1.1rem", textAlign: "center"}}>
                                        Platos
                  </Text>
                  
</TouchableOpacity>
<TouchableOpacity 
onLongPress={()=>{
  this.filterCategories("")
  this.setState({status:"CARTA"})}}
  
onPress={()=>{
  this.filterCategories("")
  this.setState({status:"CARTA"})}}

style={{width:"10%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color:this.state.status=="CARTA"?"#000":"#BDBDBD", fontWeight: "400", fontSize: "1.1rem", textAlign: "center"}}>
                                        Categorías
                  </Text>
                 
                </TouchableOpacity>
<TouchableOpacity onLongPress={()=>this.setState({status:"MENUS"})} onPress={()=>this.setState({status:"MENUS"})} style={{width:"10%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: this.state.status=="MENUS"?"#000":"#BDBDBD", fontWeight: "400", fontSize: "1.1rem", textAlign: "center"}}>
                                        Menús
                  </Text>
                 </TouchableOpacity>

                <TouchableOpacity style={{marginLeft:this.props.menuOpen? window.innerWidth*0.175:window.innerWidth*0.525, width:"10%",alignItems:"center",justifyContent:"center"}}>
                <Link to="/success" style={{width:"100%", alignSelf:"flex-start",textDecoration:"none",color:"#000"}} >
   
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left" }}>
                                        Ver mi carta
                  </Text>
                  </Link>
                  


                </TouchableOpacity>
        
              
          </View>
          {
              this.state.status=="DISHES" &&
        
           <ScrollView style={{zIndex:0}}>
               <View style={{flexDirection:"row",width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,justifyContent:"space-between",paddingTop: window.innerHeight * 0.03,backgroundColor:"#fff",}}>
            <Text style={{textDecorationLine: "none", color: "#000", fontWeight: "500", fontSize: "2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Mis platos y bebidas
                  </Text>
                  <TouchableOpacity
                  onLongPress={()=>this.setState({showNewMenu:false,showNewCategory:false,showNewDish:true})}
                  onPress={()=>this.setState({showNewMenu:false,showNewCategory:false,showNewDish:true})}
                   style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFC524",marginRight:window.innerWidth*0.02,borderRadius:10}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingHorizontal:window.innerWidth*0.02,paddingVertical:window.innerHeight*0.02 }}>
                                        + Añadir plato o bebida
                  </Text>
                  


                </TouchableOpacity>
                  </View>
             
                  <View style={{width:"100%",backgroundColor:"#fff"}}>
                  <TextInput
                  onChangeText={(text)=>this.filterDishes(text)}
                   numberOfLines={1} placeholder={"Buscar un plato o bebida"} style={{marginLeft:window.innerWidth*0.01, marginBottom: window.innerHeight * 0.02,borderRadius:10, fontSize: "1rem", width: "30%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  </View>
                <View style={{width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:window.innerHeight*0.08,backgroundColor:"#fff",flexDirection:"row"}}>
<View style={{width:"60%",alignItems:"flex-start",justifyContent:"center"}}>
<Text style={{ paddingHorizontal:window.innerWidth*0.01,textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left"}}>
                                        Nombre del plato
                  </Text>
                  
</View>



<View style={{width:"20%",alignItems:"flex-start",justifyContent:"center"}}>
<Text style={{paddingHorizontal:window.innerWidth*0.01, textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left"}}>
                                        Precio
                  </Text>
                  
</View>
<View style={{width:"20%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "center"}}>
                                        Disponibilidad
                  </Text>
                  
</View>
                </View>
                {
                  this.state.filteredDishes.length==0 && this.state.dishes.length>0  &&
                  <View style={{justifyContent:"center",alignItems:"center", marginTop:window.innerHeight*0.0025, width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:window.innerHeight*0.08,flexDirection:"row"}}>
                  <Text style={{paddingHorizontal:window.innerWidth*0.01, textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "center",width:"100%" }}>
                                      Sin resultados para esta búsqueda
                  </Text>
              </View>
                }
                {
                  this.state.dishes.length==0  &&
                  <View style={{justifyContent:"center",alignItems:"center", marginTop:window.innerHeight*0.0025, width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:window.innerHeight*0.08,flexDirection:"row"}}>
                  <Text style={{paddingHorizontal:window.innerWidth*0.01, textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "center",width:"100%" }}>
                                     Sin platos o bebidas
                  </Text>
              </View>
                }
                {
                  this.state.filteredDishes.map((item,index)=>(
                    <TouchableOpacity
                    onPress={()=>this.editDish(index)}

                    
                     style={{marginTop:window.innerHeight*0.005, width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:window.innerHeight*0.08,backgroundColor:"#fff",flexDirection:"row"}}>
              <View style={{width:"60%",alignItems:"flex-start",justifyContent:"center"}}>
<Text style={{paddingHorizontal:window.innerWidth*0.01, textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left",width:"100%" }}>
                                       {item.name}
                  </Text>
                  
</View>

<View style={{width:"20%",alignItems:"flex-start",justifyContent:"center"}}>
<Text style={{paddingHorizontal:window.innerWidth*0.01, textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left",width:"100%" }}>
                                        {item.price} €
                  </Text>
                  
</View>
<TouchableOpacity 

onPress={()=>this.toggleAvaliability(index)}
onLongPress={()=>this.toggleAvaliability(index)}
style={{width:"15%",alignSelf:"center",marginLeft:"2.5%",alignItems:"center",justifyContent:"center",height:"80%",backgroundColor:item.avaliable?"#FFC524":"#e8e8e8",borderRadius:10}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "center",width:"100%" }}>
                                       {item.avaliable?"Disponible":"No disponible"}
                  </Text>
                  
</TouchableOpacity>
              </TouchableOpacity>
                  ))
                }
             
                  </ScrollView>    
                }
                {
              this.state.status=="MENUS" &&
        
           <ScrollView>
               
           <View style={{backgroundColor:"#fff",flexDirection:"row",width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,justifyContent:"space-between",paddingTop: window.innerHeight * 0.03,}}>
            <Text style={{textDecorationLine: "none", color: "#000", fontWeight: "500", fontSize: "2rem", textAlign: "left", paddingLeft: window.innerWidth * 0.01 }}>
                                        Mis menús
                  </Text>
                  <TouchableOpacity
                  onLongPress={()=>this.setState({showNewMenu:true,showNewCategory:false,showNewDish:false})}
                  onPress={()=>this.setState({showNewMenu:true,showNewCategory:false,showNewDish:false})}
                   style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFC524",marginRight:window.innerWidth*0.02,borderRadius:10}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingHorizontal:window.innerWidth*0.02,paddingVertical:window.innerHeight*0.02 }}>
                                        + Añadir menú
                  </Text>
                  


                </TouchableOpacity>
                  </View>
                  
                  <View style={{width:"100%",backgroundColor:"#fff",}}>
                  <TextInput
                  onChangeText={(text)=>this.filterMenus(text)}
                   numberOfLines={1} placeholder={"Buscar un menú"} style={{marginLeft:window.innerWidth*0.01,borderRadius:10,  marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "30%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  </View>
                  <View style={{width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:window.innerHeight*0.08,backgroundColor:"#fff",flexDirection:"row"}}>
<View style={{width:"50%",alignItems:"flex-start",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Nombre del menú
                  </Text>
                  
</View>


<View style={{width:"20%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
Precio
                  </Text>
                  
</View>
<View style={{width:"30%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
Visibilidad
                  </Text>
                  
</View>

                </View>
                {this.state.filteredMenus.map((item,index)=>(

            
                <View style={{width:"100%",backgroundColor:"#fff",flexDirection:"row",marginTop:window.innerHeight*0.005}}>
                <TouchableOpacity
                onPress={()=>this.assignActualMenu(index)}
                 style={{width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:window.innerHeight*0.08,backgroundColor:"#fff",flexDirection:"row"}}>
<View style={{width:"50%",alignItems:"flex-start",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                       {item.title}
                  </Text>
                  
</View>
<View style={{width:"20%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        {item.price} €
                  </Text>
                  
</View>

<View style={{width:"20%",marginLeft:"5%",alignItems:"center",justifyContent:"center",backgroundColor:"#e8e8e8",borderRadius:10,height:"80%",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left" }}>
No visible actualmente
                  </Text>
                  
</View>

                </TouchableOpacity>
                </View>
                ))}
                {
                  this.state.filteredMenus.length==0 && this.state.menus.length>0  &&
                  <View style={{justifyContent:"center",alignItems:"center", marginTop:window.innerHeight*0.0025, width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:window.innerHeight*0.08,flexDirection:"row"}}>
                  <Text style={{paddingHorizontal:window.innerWidth*0.01, textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "center",width:"100%" }}>
                                      Sin resultados para esta búsqueda
                  </Text>
              </View>
                }
                {
                  this.state.menus.length==0  &&
                  <View style={{justifyContent:"center",alignItems:"center", marginTop:window.innerHeight*0.0025, width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:window.innerHeight*0.08,flexDirection:"row"}}>
                  <Text style={{paddingHorizontal:window.innerWidth*0.01, textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "center",width:"100%" }}>
                                     Sin categorías
                  </Text>
              </View>
                }

                  </ScrollView>    
                }
                {
              this.state.status=="CARTA" &&
        
           <ScrollView>
               
           <View style={{backgroundColor:"#fff", flexDirection:"row",width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,justifyContent:"space-between",paddingTop: window.innerHeight * 0.03,}}>
            <Text style={{textDecorationLine: "none", color: "#000", fontWeight: "500", fontSize: "2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Categorías
                  </Text>
                  <TouchableOpacity
                  onLongPress={()=>this.setState({showNewMenu:false,showNewCategory:true,showNewDish:false})}
                  onPress={()=>this.setState({showNewMenu:false,showNewCategory:true,showNewDish:false})}
                   style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFC524",marginRight:window.innerWidth*0.02,borderRadius:10}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingHorizontal:window.innerWidth*0.02,paddingVertical:window.innerHeight*0.02 }}>
                                        + Añadir categoría
                  </Text>
                  


                </TouchableOpacity>
                  </View>
            
                  <View style={{width:"100%",backgroundColor:"#fff",}}>
                  <TextInput
                  onChangeText={(text)=>this.filterCategories(text)}
                   numberOfLines={1} placeholder={"Buscar una categoría"} style={{marginLeft:window.innerWidth*0.01,borderRadius:10, marginBottom: window.innerHeight * 0.02, fontSize: "1rem", width: "30%", alignSelf: "flex-start", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  </View>
                <View style={{width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95, height:window.innerHeight*0.08,backgroundColor:"#fff",flexDirection:"row"}}>
<View style={{width:"50%",alignItems:"flex-start",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Nombre de la categoría
                  </Text>
                  
</View>

<View style={{width:"20%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
Núm. de artículos
                  </Text>
                  
</View>
<View style={{width:"30%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.1rem", textAlign: "left", marginLeft: window.innerWidth * 0.025 }}>
Visibilidad
                  </Text>
                  
</View>

                </View>

                {this.state.filteredCategories.map((item,index)=>(
                <View style={{width:"100%",flexDirection:"row",marginTop:window.innerHeight*0.005,}}>
            
                <TouchableOpacity
                onPress={()=>this.setState({editActualCategory:true,activeCategory:JSON.parse(JSON.stringify(this.state.categories[index])), activeCategoryIndex:index})}
                 style={{width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:window.innerHeight*0.08,backgroundColor:"#fff",flexDirection:"row"}}>
<View style={{width:"50%",alignItems:"flex-start",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                       {item.title}
                  </Text>
                  
</View>


<View style={{width:"20%",alignItems:"center",justifyContent:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left" }}>
{item.articles.length}
                  </Text>
                  
</View>

<View style={{width:"20%",marginLeft:"5%",alignItems:"center",justifyContent:"center",backgroundColor:this.checkCategoryAvaliable(index)?"#FFC524":"#e8e8e8",height:"80%",alignSelf:"center",borderRadius:10}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left" }}>
{this.checkCategoryAvaliable(index)?"Visible actualmente":"No visible actualmente"}
                  </Text>
                  
</View>

                </TouchableOpacity>
                </View>
                ))
                }
                {
                  this.state.filteredCategories.length==0 && this.state.categories.length>0  &&
                  <View style={{justifyContent:"center",alignItems:"center", marginTop:window.innerHeight*0.0025, width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:window.innerHeight*0.08,flexDirection:"row"}}>
                  <Text style={{paddingHorizontal:window.innerWidth*0.01, textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "center",width:"100%" }}>
                                      Sin resultados para esta búsqueda
                  </Text>
              </View>
                }
                {
                  this.state.categories.length==0  &&
                  <View style={{justifyContent:"center",alignItems:"center", marginTop:window.innerHeight*0.0025, width:this.props.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:window.innerHeight*0.08,flexDirection:"row"}}>
                  <Text style={{paddingHorizontal:window.innerWidth*0.01, textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "center",width:"100%" }}>
                                     Sin categorías
                  </Text>
              </View>
                }
                  </ScrollView>    
                }
                
               
                {this.state.showNewMenu &&
                <ScrollView style={{position:"absolute",top:0,width:this.state.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:"100%",backgroundColor:"rgba(0,0,0,0.4)"}}>
               <View style={{backgroundColor:"#fff",paddingBottom:window.innerHeight*0.03,width:"95%",marginVertical:window.innerHeight*0.05,alignSelf:"center",borderRadius:10}}>
                <View style={{width:"95%",alignSelf:"center",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.02,flexDirection:"row"}}>
<View style={{width:"50%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.01}}>

                  <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01,marginTop:window.innerHeight*0.02  }}>
                                        Nombre del menú
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"Menú fin de semana 1"} style={{marginTop: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015,borderRadius:10 }} />
                  <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01,marginTop:window.innerHeight*0.02  }}>
                                        Descripción 
                  </Text>
                  <TextInput numberOfLines={3} placeholder={"Botella de vino de la casa o refresco incluido"} style={{marginVertical: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015,borderRadius:10  }} />
                 
                  <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01,marginBottom:window.innerHeight*0.02 }}>
                                        Disponibilidad
                  </Text>
                  <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Lunes
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                 
                 <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                       Todo el día
                 </Text>
                 


               </TouchableOpacity>
               <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                       Limitada
                 </Text>
                 


               </TouchableOpacity>
               <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                       No disponible
                 </Text>
                 


               </TouchableOpacity>
               </View>
                    </View> 
                    
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Martes
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                 
                 <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                       Todo el día
                 </Text>
                 


               </TouchableOpacity>
               <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                       Limitada
                 </Text>
                 


               </TouchableOpacity>
               <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                       No disponible
                 </Text>
                 


               </TouchableOpacity>
               </View>
                  
                </View>
           
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Miércoles
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                 
                 <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                       Todo el día
                 </Text>
                 


               </TouchableOpacity>
               <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                       Limitada
                 </Text>
                 


               </TouchableOpacity>
               <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                       No disponible
                 </Text>
                 


               </TouchableOpacity>
               </View>
                </View>
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Jueves
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                 
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  


                </TouchableOpacity>
                </View>
                </View>
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Viernes
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                 
                 <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                       Todo el día
                 </Text>
                 


               </TouchableOpacity>
               <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                       Limitada
                 </Text>
                 


               </TouchableOpacity>
               <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                       No disponible
                 </Text>
                 


               </TouchableOpacity>
               </View>
                </View>
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Sábado
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                 
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  


                </TouchableOpacity>
                </View>
                </View>
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Domingo
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                 
                 <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                       Todo el día
                 </Text>
                 


               </TouchableOpacity>
               <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                       Limitada
                 </Text>
                 


               </TouchableOpacity>
               <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                       No disponible
                 </Text>
                 


               </TouchableOpacity>
               </View>
                  
                </View>

                
</View>
<View style={{width:"50%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.01,height:"100%"}}>
    <View style={{width:"100%",backgroundColor:"#fff"}}>
    <View style={{flexDirection:"row",alignSelf:"flex-start",marginLeft:window.innerWidth*0.01}}>
                  <TouchableOpacity style={{ alignItems:"center",justifyContent:"center",backgroundColor:"#fff",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Primeros
                  </Text>
                  
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#fff",alignSelf:"center",marginRight:window.innerWidth*0.02}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Segundos
                  </Text>
                  
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#fff",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Postres
                  </Text>
                  
                </TouchableOpacity>
                </View>
    </View>

                  <TextInput numberOfLines={1} placeholder={"Buscar un artículo"} style={{marginVertical: window.innerHeight * 0.02,borderRadius:10 , fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  
                  <ScrollView style={{backgroundColor:"#f5f5f5",alignSelf:"center",width:"95%",height:window.innerHeight*0.7,paddingTop:window.innerHeight*0.0075,borderRadius:10}}>
                  {
    this.state.dishes.map((item,index)=>(
        <View style={{width:"98%",alignSelf:"center",backgroundColor:"#fff",justifyContent:"center",alignItems:"center",marginTop:window.innerHeight*0.0025,borderRadius:6}}>
            <TouchableOpacity style={{width:"100%",flexDirection:"row"}}>
            <View style={{width:"90%",justifyContent:"center",alignItems:"flex-start"}}>
        <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01}}>
 
            {item.name}
            </Text>
            </View>
            <View style={{width:"10%",justifyContent:"center",alignItems:"center",height:window.innerHeight*0.05}}>
                <View style={{width:18,height:18,backgroundColor:"#FFC524",borderRadius:10}}>

                </View>
                </View>
            </TouchableOpacity>
        </View>
    ))
}


                </ScrollView>
</View>
</View>
<TouchableOpacity onLongPress={() => this.setState({ showNewMenu: false })} onPress={() => this.setState({ showNewMenu: false })} style={{ alignSelf: "flex-end", position: "absolute", top: 0,right:0 }}>
                      <IoIosClose size="2.5em" />
                    </TouchableOpacity>
                    <TouchableOpacity 
                  onLongPress={()=>this.setState({showNewMenu:true,showNewCategory:false,showNewDish:false})}
                  onPress={()=>this.setState({showNewMenu:true,showNewCategory:false,showNewDish:false})} 
                  style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFC524",alignSelf:"center",width:"30%",borderRadius:10}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.03 }}>
                                 Crear menú
                  </Text>
                  


                </TouchableOpacity>
</View>
<View style={{width:"100%",alignSelf:"center",justifyContent:"center",alignItems:"center"}}>
           
                  
                </View>
                </ScrollView>
                }
                {this.state.showNewCategory &&
                <ScrollView style={{position:"absolute",top:0,width:this.state.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:"100%",backgroundColor:"rgba(0,0,0,0.4)"}}>
                <View style={{backgroundColor:"#fff",paddingBottom:window.innerHeight*0.03,width:"95%",marginTop:window.innerHeight*0.05,alignSelf:"center"}}>
                <View style={{width:"100%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.02,flexDirection:"row"}}>
<View style={{width:"50%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.01}}>
<Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.5rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Nueva categoría
                                       

                  </Text>
                  <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01,marginTop:window.innerHeight*0.02  }}>
                                        Título
                  </Text>
                  <TextInput numberOfLines={1} placeholder={"Hamburguesas"} style={{marginTop: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01,marginTop:window.innerHeight*0.02 }}>                       Información adicional
                  </Text> 
                  <TextInput numberOfLines={3} placeholder={"Todas las hamburguesas van acompañadas de patatas y ensalada"} style={{marginVertical: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                 
                  <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01,marginBottom:window.innerHeight*0.02 }}>
                                        Disponibilidad
                  </Text>
                  <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Lunes
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                    <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  


                </TouchableOpacity>
                    </View>
                  
                </View>
                {true &&
                <View>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["00:00h","01:00h","02:00h","03:00h","04:00h","05:00h","06:00h","07:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["16:00h","17:00h","18:00h","19:00h","20:00h","21:00h","22:00h","23:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            </View>
                }
                
                    
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Martes
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                 
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  


                </TouchableOpacity>
                </View>
                </View>
                {true &&
                <View>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["00:00h","01:00h","02:00h","03:00h","04:00h","05:00h","06:00h","07:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["16:00h","17:00h","18:00h","19:00h","20:00h","21:00h","22:00h","23:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            </View>
                }
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Miércoles
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                 
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  


                </TouchableOpacity>
                </View>
                </View>
                {true &&
                <View>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["00:00h","01:00h","02:00h","03:00h","04:00h","05:00h","06:00h","07:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["16:00h","17:00h","18:00h","19:00h","20:00h","21:00h","22:00h","23:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            </View>
                }
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Jueves
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                 
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  


                </TouchableOpacity>
                </View>
                </View>
                {true &&
                <View>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["00:00h","01:00h","02:00h","03:00h","04:00h","05:00h","06:00h","07:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["16:00h","17:00h","18:00h","19:00h","20:00h","21:00h","22:00h","23:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            </View>
                }
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Viernes
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                 
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  


                </TouchableOpacity>
                </View>
                </View>
                {true &&
                <View>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["00:00h","01:00h","02:00h","03:00h","04:00h","05:00h","06:00h","07:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["16:00h","17:00h","18:00h","19:00h","20:00h","21:00h","22:00h","23:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            </View>
                }
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Sábado
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                 
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                </TouchableOpacity> 
                  </View>
                </View>
                {true &&
                <View>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["00:00h","01:00h","02:00h","03:00h","04:00h","05:00h","06:00h","07:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["16:00h","17:00h","18:00h","19:00h","20:00h","21:00h","22:00h","23:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            </View>
                }
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Domingo
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                 
                  <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:true?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        No disponible
                  </Text>
                  
                </TouchableOpacity>
                  </View>
                </View>
                {true &&
                <View>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["00:00h","01:00h","02:00h","03:00h","04:00h","05:00h","06:00h","07:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["16:00h","17:00h","18:00h","19:00h","20:00h","21:00h","22:00h","23:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            </View>
                }

                
</View>
<View style={{width:"50%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.01,height:"100%"}}>
    <View style={{width:"100%",backgroundColor:"#fff"}}>
    <View style={{flexDirection:"row",alignSelf:"flex-start",marginLeft:window.innerWidth*0.01,justifyContent:"space-between",width:"90%"}}>
  <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                       Número de Artículos: 12
                  </Text>
                  
    </View>
    </View>

                  <TextInput numberOfLines={1} placeholder={"Buscar un artículo"} style={{marginVertical: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  
                  <ScrollView style={{backgroundColor:"#f5f5f5",alignSelf:"center",width:"95%",minHeight:window.innerHeight*0.7 ,height:"100%",paddingTop:window.innerHeight*0.0075}}>
{
    this.state.dishes.map((item,index)=>(
        <View style={{width:"98%",alignSelf:"center",backgroundColor:"#fff",justifyContent:"center",alignItems:"center",marginTop:window.innerHeight*0.0025}}>
            <TouchableOpacity style={{width:"100%",flexDirection:"row"}}>
            <View style={{width:"90%",justifyContent:"center",alignItems:"flex-start"}}>
        <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01}}>
 
            {item.name}
            </Text>
            </View>
            <View style={{width:"10%",justifyContent:"center",alignItems:"center",height:window.innerHeight*0.05}}>
                <View style={{width:18,height:18,backgroundColor:"#FFC524"}}>

                </View>
                </View>
            </TouchableOpacity>
        </View>
    ))
}


                </ScrollView>
</View>
</View>
<TouchableOpacity onLongPress={() => this.setState({ showNewCategory: false })} onPress={() => this.setState({ showNewCategory: false })} style={{ alignSelf: "flex-end", position: "absolute", top: 0,right:0 }}>
                      <IoIosClose size="2.5em" />
                    </TouchableOpacity>
</View>
<View style={{width:"95%",alignSelf:"center",justifyContent:"center",alignItems:"center",paddingBottom:window.innerHeight*0.03,backgroundColor:"#fff"}}>
           
                  <TouchableOpacity 
                  style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFC524",alignSelf:"center",width:"30%",borderRadius:10}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.03 }}>
                                              Crear categoría
                  </Text>
                  


                </TouchableOpacity>
                </View>
                </ScrollView>
                }
                {this.state.editActualCategory &&
                <ScrollView style={{position:"absolute",top:0,width:this.state.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:"100%",backgroundColor:"rgba(0,0,0,0.4)"}}>
                <View style={{backgroundColor:"#fff",paddingBottom:window.innerHeight*0.03,width:"95%",marginTop:window.innerHeight*0.05,alignSelf:"center"}}>
                <View style={{width:"100%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.02,flexDirection:"row"}}>
<View style={{width:"50%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.01}}>
<Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.5rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Editar categoría
                                       

                  </Text>
                  <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01,marginTop:window.innerHeight*0.02 }}>
                                        Título
                  </Text>
                  <TextInput
                  
                   numberOfLines={1} placeholder={"Ej. Hamburguesas"} style={{marginTop: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01,marginTop:window.innerHeight*0.02 }}>
                                        Información adicional
                  </Text>
                  <TextInput numberOfLines={3} placeholder={"Ej. Todas las hamburguesas van acompañadas de patatas y ensalada"} style={{marginVertical: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                 
                  <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01,marginBottom:window.innerHeight*0.02 }}>
                                        Disponibilidad
                  </Text>
                  <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Lunes
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                    <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeCategory.avaliable[0].length==24?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeCategory.avaliable[0].length!=24?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                    </View>
                  
                  
                </View>
                {this.state.activeCategory.avaliable[0].length!=24 &&
                <View>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["00:00h","01:00h","02:00h","03:00h","04:00h","05:00h","06:00h","07:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["16:00h","17:00h","18:00h","19:00h","20:00h","21:00h","22:00h","23:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            </View>
                }
                
                    
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Martes
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                    <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeCategory.avaliable[1].length==24?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeCategory.avaliable[1].length!=24?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                    </View>
                  
                  
                </View>
                {this.state.activeCategory.avaliable[1].length!=24 &&
                <View>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["00:00h","01:00h","02:00h","03:00h","04:00h","05:00h","06:00h","07:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["16:00h","17:00h","18:00h","19:00h","20:00h","21:00h","22:00h","23:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            </View>
                }
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Miércoles
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                    <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeCategory.avaliable[2].length==24?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeCategory.avaliable[2].length!=24?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                    </View>
                  
                </View>
                {this.state.activeCategory.avaliable[2].length!=24 &&
                <View>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["00:00h","01:00h","02:00h","03:00h","04:00h","05:00h","06:00h","07:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["16:00h","17:00h","18:00h","19:00h","20:00h","21:00h","22:00h","23:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            </View>
                }
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Jueves
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                    <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeCategory.avaliable[3].length==24?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeCategory.avaliable[3].length!=24?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                    </View>
                  
                </View>
                {this.state.activeCategory.avaliable[3].length!=24 &&
                <View>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["00:00h","01:00h","02:00h","03:00h","04:00h","05:00h","06:00h","07:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["16:00h","17:00h","18:00h","19:00h","20:00h","21:00h","22:00h","23:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            </View>
                }
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Viernes
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                    <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeCategory.avaliable[4].length==24?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeCategory.avaliable[4].length!=24?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                    </View>
                   
                </View>
                {this.state.activeCategory.avaliable[4].length!=24 &&
                <View>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["00:00h","01:00h","02:00h","03:00h","04:00h","05:00h","06:00h","07:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["16:00h","17:00h","18:00h","19:00h","20:00h","21:00h","22:00h","23:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            </View>
                }
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Sábado
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                    <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeCategory.avaliable[5].length==24?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeCategory.avaliable[5].length!=24?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                    </View>
                  
                  
                </View>
                {this.state.activeCategory.avaliable[5].length!=24 &&
                <View>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["00:00h","01:00h","02:00h","03:00h","04:00h","05:00h","06:00h","07:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["16:00h","17:00h","18:00h","19:00h","20:00h","21:00h","22:00h","23:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            </View>
                }
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Domingo
                  </Text>
                    
                    <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                    <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeCategory.avaliable[6].length==24?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeCategory.avaliable[6].length!=24?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                    </View>
                  
                </View>
                {this.state.activeCategory.avaliable[6].length!=24 &&
                <View>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["00:00h","01:00h","02:00h","03:00h","04:00h","05:00h","06:00h","07:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["16:00h","17:00h","18:00h","19:00h","20:00h","21:00h","22:00h","23:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            </View>
                }

                
</View>
<View style={{width:"50%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.01,height:"100%"}}>
    <View style={{width:"100%",backgroundColor:"#fff"}}>
    <View style={{flexDirection:"row",alignSelf:"flex-start",marginLeft:window.innerWidth*0.01,justifyContent:"space-between",width:"90%"}}>
  <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                       Número de Artículos: {this.state.activeCategory.articles.length}
                  </Text>
                  
    </View>
    </View>

                  <TextInput numberOfLines={1} placeholder={"Buscar un artículo"} style={{marginVertical: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  
                  <ScrollView style={{backgroundColor:"#f5f5f5",alignSelf:"center",width:"95%",minHeight:window.innerHeight*0.7 ,height:"100%",paddingTop:window.innerHeight*0.0075}}>
{
    this.state.dishes.map((item,index)=>(
        <View style={{width:"98%",alignSelf:"center",backgroundColor:"#fff",justifyContent:"center",alignItems:"center",marginTop:window.innerHeight*0.0025}}>
            <TouchableOpacity style={{width:"100%",flexDirection:"row"}}>
            <View style={{width:"90%",justifyContent:"center",alignItems:"flex-start"}}>
        <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01}}>
 
            {item.name}
            </Text>
            </View>
            <View style={{width:"10%",justifyContent:"center",alignItems:"center",height:window.innerHeight*0.05}}>
                <View style={{width:18,height:18,backgroundColor:"#FFC524"}}>

                </View>
                </View>
            </TouchableOpacity>
        </View>
    ))
}


                </ScrollView>
</View>
</View>
<TouchableOpacity  onPress={()=>this.setState({editActualCategory:false})} onLongPress={()=>this.setState({editActualCategory:false})} style={{ alignSelf: "flex-end", position: "absolute", top: 0,right:0 }}>
                      <IoIosClose size="2.5em" />
                    </TouchableOpacity>
</View>
<View style={{width:"95%",alignSelf:"center",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",paddingBottom:window.innerHeight*0.03,backgroundColor:"#fff"}}>
<TouchableOpacity
                  onPress={()=>this.deleteCategory()}
                   style={{alignItems:"center",justifyContent:"center",backgroundColor:"#fff",alignSelf:"center",width:"20%",}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.03 }}>
                                        Eliminar
                  </Text>
                  


                </TouchableOpacity>   
                <TouchableOpacity
                  onPress={()=>this.editCategorySave()}
                   style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFC524",alignSelf:"center",width:"30%",borderRadius:10}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.03 }}>
                                        Guardar cambios
                  </Text>
                  


                </TouchableOpacity>
                </View>
                
                </ScrollView>
                }
                {this.state.activeMenu &&
                <ScrollView style={{position:"absolute",top:0,width:this.state.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:"100%",backgroundColor:"rgba(0,0,0,0.4)"}}>
                <View style={{backgroundColor:"#fff",paddingBottom:window.innerHeight*0.03,width:"95%",marginTop:window.innerHeight*0.05,alignSelf:"center"}}>
                <View style={{width:"100%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.02,flexDirection:"row"}}>
<View style={{width:"50%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.01}}>
<Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.5rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Editar menú
                                       

                  </Text>
                  <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01,marginTop:window.innerHeight*0.02 }}>
                                        Título
                  </Text>
                  <TextInput
                  
                   numberOfLines={1} placeholder={"Ej. Hamburguesas"} style={{marginTop: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01,marginTop:window.innerHeight*0.02 }}>
                                        Información adicional
                  </Text>
                  <TextInput numberOfLines={3} placeholder={"Ej. Todas las hamburguesas van acompañadas de patatas y ensalada"} style={{marginVertical: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                 
                  <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left", marginLeft: window.innerWidth * 0.01,marginBottom:window.innerHeight*0.02 }}>
                                        Disponibilidad
                  </Text>
                  <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Lunes
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                    <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeMenu.avaliable[0].length==24?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeMenu.avaliable[0].length!=24?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                    </View>
                  
                  
                </View>
                {this.state.activeMenu.avaliable[0].length!=24 &&
                <View>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["00:00h","01:00h","02:00h","03:00h","04:00h","05:00h","06:00h","07:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["16:00h","17:00h","18:00h","19:00h","20:00h","21:00h","22:00h","23:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            </View>
                }
                
                    
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Martes
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                    <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeMenu.avaliable[1].length==24?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeMenu.avaliable[1].length!=24?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                    </View>
                  
                  
                </View>
                {this.state.activeMenu.avaliable[1].length!=24 &&
                <View>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["00:00h","01:00h","02:00h","03:00h","04:00h","05:00h","06:00h","07:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["16:00h","17:00h","18:00h","19:00h","20:00h","21:00h","22:00h","23:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            </View>
                }
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Miércoles
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                    <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeMenu.avaliable[2].length==24?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeMenu.avaliable[2].length!=24?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                    </View>
                  
                </View>
                {this.state.activeMenu.avaliable[2].length!=24 &&
                <View>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["00:00h","01:00h","02:00h","03:00h","04:00h","05:00h","06:00h","07:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["16:00h","17:00h","18:00h","19:00h","20:00h","21:00h","22:00h","23:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            </View>
                }
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Jueves
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                    <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeMenu.avaliable[3].length==24?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeMenu.avaliable[3].length!=24?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                    </View>
                  
                </View>
                {this.state.activeMenu.avaliable[3].length!=24 &&
                <View>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["00:00h","01:00h","02:00h","03:00h","04:00h","05:00h","06:00h","07:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["16:00h","17:00h","18:00h","19:00h","20:00h","21:00h","22:00h","23:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            </View>
                }
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Viernes
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                    <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeMenu.avaliable[4].length==24?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeMenu.avaliable[4].length!=24?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                    </View>
                   
                </View>
                {this.state.activeMenu.avaliable[4].length!=24 &&
                <View>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["00:00h","01:00h","02:00h","03:00h","04:00h","05:00h","06:00h","07:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["16:00h","17:00h","18:00h","19:00h","20:00h","21:00h","22:00h","23:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            </View>
                }
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Sábado
                  </Text>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                    <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeMenu.avaliable[5].length==24?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeMenu.avaliable[5].length!=24?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                    </View>
                  
                  
                </View>
                {this.state.activeMenu.avaliable[5].length!=24 &&
                <View>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["00:00h","01:00h","02:00h","03:00h","04:00h","05:00h","06:00h","07:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["16:00h","17:00h","18:00h","19:00h","20:00h","21:00h","22:00h","23:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            </View>
                }
                <View style={{flexDirection:"row", alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"#fff",alignSelf:"center",width:"95%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>
                                        Domingo
                  </Text>
                    
                    <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:window.innerHeight*0.02}}>
                    <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeMenu.avaliable[6].length==24?"#FFC524":"#f5f5f5",alignSelf:"center"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Todo el día
                  </Text>
                  


                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:this.state.activeMenu.avaliable[6].length!=24?"#FFC524":"#f5f5f5",alignSelf:"center",marginRight:window.innerWidth*0.03}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                        Limitada
                  </Text>
                  


                </TouchableOpacity>
                    </View>
                  
                </View>
                {this.state.activeMenu.avaliable[6].length!=24 &&
                <View>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["00:00h","01:00h","02:00h","03:00h","04:00h","05:00h","06:00h","07:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center", marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            <View style={{width:"100%",height:window.innerHeight*0.01}}/>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            {["16:00h","17:00h","18:00h","19:00h","20:00h","21:00h","22:00h","23:00h"].map((item,index)=>(
              <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginLeft:window.innerWidth*0.01, height:window.innerHeight*0.04,width:window.innerWidth*0.04,backgroundColor:"#f5f5f5"}}>
              <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "0.8rem", textAlign: "left",paddingVertical:window.innerHeight*0.02 }}>

              {item}
              </Text>
              </TouchableOpacity>
            ))}
           
           
            </View>
            </View>
                }

                
</View>
<View style={{width:"50%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.01,height:"100%"}}>
    <View style={{width:"100%",backgroundColor:"#fff"}}>
    <View style={{flexDirection:"row",alignSelf:"flex-start",marginLeft:window.innerWidth*0.01,justifyContent:"space-between",width:"90%"}}>
  <Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left",paddingVertical:window.innerHeight*0.01,paddingHorizontal:window.innerWidth*0.01 }}>
                                       Número de Artículos: {this.state.activeMenu.articles.length}
                  </Text>
                  
    </View>
    </View>

                  <TextInput numberOfLines={1} placeholder={"Buscar un artículo"} style={{marginVertical: window.innerHeight * 0.02, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  
                  <ScrollView style={{backgroundColor:"#f5f5f5",alignSelf:"center",width:"95%",minHeight:window.innerHeight*0.7 ,height:"100%",paddingTop:window.innerHeight*0.0075}}>
{
    this.state.dishes.map((item,index)=>(
        <View style={{width:"98%",alignSelf:"center",backgroundColor:"#fff",justifyContent:"center",alignItems:"center",marginTop:window.innerHeight*0.0025}}>
            <TouchableOpacity style={{width:"100%",flexDirection:"row"}}>
            <View style={{width:"90%",justifyContent:"center",alignItems:"flex-start"}}>
        <Text numberOfLines={1} style={{ textDecorationLine: "none", color: "#000", fontWeight: "300", fontSize: "1rem", textAlign: "left", marginLeft: window.innerWidth * 0.01}}>
 
            {item.name}
            </Text>
            </View>
            <View style={{width:"10%",justifyContent:"center",alignItems:"center",height:window.innerHeight*0.05}}>
                <View style={{width:18,height:18,backgroundColor:"#FFC524"}}>

                </View>
                </View>
            </TouchableOpacity>
        </View>
    ))
}


                </ScrollView>
</View>
</View>
<TouchableOpacity  onPress={()=>this.setState({activeMenu:null})} onLongPress={()=>this.setState({activeMenu:null})} style={{ alignSelf: "flex-end", position: "absolute", top: 0,right:0 }}>
                      <IoIosClose size="2.5em" />
                    </TouchableOpacity>
</View>
<View style={{width:"95%",alignSelf:"center",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",paddingBottom:window.innerHeight*0.03,backgroundColor:"#fff"}}>
<TouchableOpacity
                  onPress={()=>this.deleteMenu()}
                   style={{alignItems:"center",justifyContent:"center",backgroundColor:"#fff",alignSelf:"center",width:"20%",}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.03 }}>
                                        Eliminar
                  </Text>
                  


                </TouchableOpacity>   
                <TouchableOpacity
                  onPress={()=>this.editMenuSave()}
                   style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFC524",alignSelf:"center",width:"30%",borderRadius:10}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.03 }}>
                                        Guardar cambios
                  </Text>
                  


                </TouchableOpacity>
                </View>
                
                </ScrollView>
                }














                {this.state.showNewDish &&
                <ScrollView style={{position:"absolute",top:0,width:this.state.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:"100%",backgroundColor:"rgba(0,0,0,0.4)"}}>
                <View style={{backgroundColor:"#fff",width:"95%",marginTop:window.innerHeight*0.05,alignSelf:"center",borderRadius:10,overflow:"hidden"}}>
                <View style={{width:"100%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.02,flexDirection:"row"}}>
<View style={{width:"50%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.01}}>
<Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.5rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Nuevo plato o bebida
                                       

                  </Text>
                  <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
  {({getRootProps, getInputProps}) => (
    <View style={{width:"95%",justifyContent:"center",alignItems:"center", alignSelf:"center",height:200,backgroundColor:"#f5f5f5",marginTop:window.innerHeight*0.02}}>

    <div style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}} {...getRootProps()}>
        <input style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}} {...getInputProps()} />
        <Text style={{position:"absolute",top:"45%",alignSelf:"center",justifySelf:"center",textDecorationLine: "none", color: "gray", fontWeight: "400", fontSize: "1rem", textAlign: "center", width:"100%",paddingHorizontal:window.innerWidth*0.02 }}>
        Arrastra una imagen o pulsa para subir una desde tu ordenador (opcional)
                  </Text>
       
      </div>
    </View>
  )}
</Dropzone>
                
<Text numberOfLines={1} style={{marginTop:window.innerHeight*0.02, color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "2.5%",  paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
          Nombre
            </Text>
                  <TextInput
                  onChangeText={(text)=>this.newDishField("name",text)}
                   numberOfLines={1} placeholder={"Hamburguesa con queso"} style={{ fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <Text numberOfLines={1} style={{marginTop:window.innerHeight*0.02, color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "2.5%",  paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
          Descripción
            </Text>
                  <TextInput
                  onChangeText={(text)=>this.newDishField("description",text)}
                   numberOfLines={3} placeholder={"Hamburguesa de 200g de ternera con mozarella"} style={{ fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <View style={{width:"100%",flexDirection:"row",justifyContent:"space-between",marginTop:window.innerHeight*0.02}}>
                  <Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "2.5%",  paddingBottom: window.innerHeight * 0.02, backgroundColor: "#fff" }}>
          Precio
            </Text>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:window.innerWidth*0.01}}>
            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "300", fontSize: "1rem", paddingLeft: window.innerWidth*0.02,paddingRight: window.innerWidth*0.01,  backgroundColor: "#fff" }}>
          Oferta
            </Text>
            <TouchableOpacity onChangeText={(text)=>this.newDishField("price_offer",text)} style={{width:20,height:20,backgroundColor:"#FFC524"}}>

            </TouchableOpacity>
            </View>
                      </View>

                
                 <View style={{width:"95%",flexDirection:"row",justifyContent:"space-between",alignSelf:"center"}}>
                  <TextInput
                  onChangeText={(text)=>this.newDishField("price",text)}
                   numberOfLines={1} placeholder={"6.45€"} style={{marginTop: window.innerHeight * 0.01, fontSize: "1rem", width: "40%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <TextInput
                  onChangeText={(text)=>this.newDishField("price_offer",text)}
                   numberOfLines={1} placeholder={"6.20€"} style={{marginTop: window.innerHeight * 0.01, fontSize: "1rem", width: "40%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                 
               
               
               
                </View>
                <Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "2.5%", marginTop:window.innerHeight*0.05, backgroundColor: "#fff" }}>
          Disponibilidad
            </Text>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "300", fontSize: "1.1rem", paddingHorizontal: "2.5%",   backgroundColor: "#fff" }}>
          ¿Este artículo está disponible?
            </Text>
            <TouchableOpacity
            onPress={()=>this.newDishField("avaliable",true)}
             style={{justifyContent:"center",alignItems:"center", width:window.innerWidth*0.04,height:window.innerHeight*0.06,backgroundColor:this.state.newDish.avaliable?"#FFC524":"#f5f5f5"}}>
            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1.1rem" }}>
          Sí
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>this.newDishField("avaliable",false)}
             style={{justifyContent:"center",alignItems:"center",width:window.innerWidth*0.04,height:window.innerHeight*0.06,backgroundColor:!this.state.newDish.avaliable?"#FFC524":"#f5f5f5"}}>
            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1.1rem" }}>
          No
            </Text>
            </TouchableOpacity>
            </View>
            
               
               
              

                
</View>
<View style={{width:"50%",backgroundColor:"#fff",height:"100%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left",paddingBottom:window.innerHeight*0.02,marginLeft:window.innerWidth*0.01 }}>
                                        Etiquetas
                  </Text>
                  {
                      new Array(5).fill(1).map((item,index)=>(
<View style={{width:"100%",flexDirection:"row",paddingVertical:window.innerHeight*0.02}}>
  <View style={{width:"50%",flexDirection:"row"}}>
  <TouchableOpacity
  onPress={()=>this.newDishField("labels",optionsProduct[index*2])}
   style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
    <View style={{marginLeft:10,width:20,height:20,borderWidth:2,borderColor:"#e8e8e8",borderRadius:10}}>

    </View>
  </TouchableOpacity>
  <View style={{width:"80%"}}>
  <Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" ,}}>
                    {optionsProduct[index*2]}
                    </Text>
    </View>
    </View>
    <View style={{width:"50%",flexDirection:"row"}}>
    <TouchableOpacity
    onPress={()=>this.newDishField("labels",optionsProduct[index*2+1])}
     style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
    <View style={{marginLeft:10,width:20,height:20,borderWidth:2,borderColor:"#e8e8e8",borderRadius:10}}>

    </View>
  </TouchableOpacity>
  <View style={{width:"80%"}}>
  <Text numberOfLines={1}  style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                    {optionsProduct[index*2+1]}
                    </Text>
    </View>
    </View>
  </View>
                      ))
                    }
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left",paddingVertical:window.innerHeight*0.02,marginLeft:window.innerWidth*0.01 }}>
                                        Alérgenos
                  </Text>
                  {
                      new Array(7).fill(1).map((item,index)=>(
<View style={{width:"100%",flexDirection:"row",paddingVertical:window.innerHeight*0.015}}>
  <View style={{width:"50%",flexDirection:"row"}}>
  <TouchableOpacity
  onPress={()=>this.newDishField("allergens",allergensOptions[index*2])}
   style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
    <View style={{marginLeft:10,width:20,height:20,borderWidth:2,borderColor:"#e8e8e8",borderRadius:10}}>

    </View>
  </TouchableOpacity>
  <View style={{width:"80%"}}>
  <Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" ,}}>
                    {allergensOptions[index*2]}
                    </Text>
    </View>
    </View>
    <View style={{width:"50%",flexDirection:"row"}}>
    <TouchableOpacity
    onPress={()=>this.newDishField("allergens",allergensOptions[index*2+1])}
     style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
    <View style={{marginLeft:10,width:20,height:20,borderWidth:2,borderColor:"#e8e8e8",borderRadius:10}}>

    </View>
  </TouchableOpacity>
  <View style={{width:"80%"}}>
  <Text numberOfLines={1}  style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                    {allergensOptions[index*2+1]}
                    </Text>
    </View>
    </View>
  </View>
                      ))
                    }
         
</View>
</View>
<TouchableOpacity onLongPress={() => this.setState({ showNewDish: false })} onPress={() => this.setState({ showNewDish: false })} style={{ alignSelf: "flex-end", position: "absolute", top: 0,right:0 }}>
                      <IoIosClose size="2.5em" />
                    </TouchableOpacity>
                    <View style={{width:"95%",alignSelf:"center",justifyContent:"center",alignItems:"center",paddingBottom:window.innerHeight*0.03,backgroundColor:"#fff"}}>
           
                  <TouchableOpacity
                  onPress={()=>this.createNewDish()}
                   style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFC524",alignSelf:"center",width:"30%",borderRadius:10}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.03 }}>
                                        Crear plato o bebida
                  </Text>
                  


                </TouchableOpacity>
                </View>
</View>
<View style={{width:"100%",height:window.innerHeight*0.05}}/>

                </ScrollView>
                }

                {this.state.editActualDish &&
                <ScrollView style={{position:"absolute",top:0,width:this.state.menuOpen?window.innerWidth*0.7:window.innerWidth*0.95,height:"100%",backgroundColor:"rgba(0,0,0,0.4)"}}>
                <View style={{backgroundColor:"#fff",paddingBottom:window.innerHeight*0.03,width:"95%",marginTop:window.innerHeight*0.05,alignSelf:"center"}}>
                <View style={{width:"100%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.02,flexDirection:"row"}}>
<View style={{width:"50%",backgroundColor:"#fff",paddingVertical:window.innerHeight*0.01}}>
<Text numberOfLines={1} style={{ color: "#000", fontWeight: "500", fontSize: "1.5rem", textAlign: "left", marginLeft: window.innerWidth * 0.01 }}>
                                        Editar plato o bebida
                                       

                  </Text>
                  <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
  {({getRootProps, getInputProps}) => (
    <View style={{width:"95%",justifyContent:"center",alignItems:"center", alignSelf:"center",height:200,backgroundColor:"#f5f5f5",marginTop:window.innerHeight*0.02}}>

    <div style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}} {...getRootProps()}>
        <input style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}} {...getInputProps()} />
        <Text style={{position:"absolute",top:"45%",alignSelf:"center",justifySelf:"center",textDecorationLine: "none", color: "gray", fontWeight: "400", fontSize: "1rem", textAlign: "center", width:"100%",paddingHorizontal:window.innerWidth*0.02 }}>
        Arrastra una imagen o pulsa para subir una desde tu ordenador (opcional)
                  </Text>
       
      </div>
    </View>
  )}
</Dropzone>
                
<Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "2.5%",  paddingVertical: window.innerHeight * 0.01, backgroundColor: "#fff" }}>
          Nombre
            </Text>
                  <TextInput
                  onChangeText={(text)=>this.editDishField("name",text)}
                   value={this.state.activeDish.name} numberOfLines={1} placeholder={"Nombre del plato Ej. Hamburguesa con queso"} style={{marginTop: window.innerHeight * 0.01, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "2.5%",  paddingVertical: window.innerHeight * 0.01, backgroundColor: "#fff" }}>
          Descripción
            </Text>
                  <TextInput
                  onChangeText={(text)=>this.editDishField("description",text)}
                   value={this.state.activeDish.description} numberOfLines={3} placeholder={"Descripción (opcional) Ej. Hamburguesa de 200g de ternera con mozarella"} style={{marginVertical: window.innerHeight * 0.01, fontSize: "1rem", width: "95%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <View style={{width:"100%",flexDirection:"row",justifyContent:"space-between",marginTop:window.innerHeight*0.01}}>
                  <Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "2.5%",  paddingVertical: window.innerHeight * 0.01, backgroundColor: "#fff" }}>
          Precio
            </Text>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:window.innerWidth*0.01}}>
            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "300", fontSize: "1rem", paddingLeft: window.innerWidth*0.02,paddingRight: window.innerWidth*0.01,  backgroundColor: "#fff" }}>
          Oferta
            </Text>
            <TouchableOpacity onPress={()=>this.editDishField("offer",!this.state.activeDish.offer)} style={{width:20,height:20,backgroundColor:"#FFC524",borderRadius:10}}>

            </TouchableOpacity>
            </View>
                      </View>

                
                 <View style={{width:"95%",flexDirection:"row",justifyContent:"space-between",alignSelf:"center"}}>
                  <TextInput
                  onChangeText={(text)=>this.editDishField("price",text)}
                   value={this.state.activeDish.price} numberOfLines={1} placeholder={"6.45€"} style={{marginTop: window.innerHeight * 0.01, fontSize: "1rem", width: "40%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                  <TextInput
                  onChangeText={(text)=>this.editDishField("price_offer",text)}
                   value={this.state.activeDish.price_price_offer} numberOfLines={1} placeholder={"6.20€"} style={{marginTop: window.innerHeight * 0.01, fontSize: "1rem", width: "40%", alignSelf: "center", backgroundColor: "#f5f5f5", paddingHorizontal: window.innerWidth * 0.01, paddingVertical: window.innerHeight * 0.015 }} />
                 
               
               
               
                </View>
                <Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1.2rem", paddingHorizontal: "2.5%", marginTop:window.innerHeight*0.05, backgroundColor: "#fff" }}>
          Disponibilidad
            </Text>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "300", fontSize: "1.1rem", paddingHorizontal: "2.5%",   backgroundColor: "#fff" }}>
          ¿Este artículo está disponible?
            </Text>
            <TouchableOpacity
            onPress={()=>this.editDishField("avaliable",true)}
             style={{justifyContent:"center",alignItems:"center", width:window.innerWidth*0.04,height:window.innerHeight*0.06,backgroundColor:this.state.activeDish.avaliable?"#FFC524":"#f5f5f5"}}>
            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1.1rem" }}>
          Sí
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>this.editDishField("avaliable",false)}
             style={{justifyContent:"center",alignItems:"center",width:window.innerWidth*0.04,height:window.innerHeight*0.06,backgroundColor:!this.state.activeDish.avaliable?"#FFC524":"#f5f5f5"}}>
            <Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1.1rem" }}>
          No
            </Text>
            </TouchableOpacity>
            </View>
            
               
               
              

                
</View>
<View style={{width:"50%",backgroundColor:"#fff",height:"100%"}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left",paddingBottom:window.innerHeight*0.02,marginLeft:window.innerWidth*0.01 }}>
                                        Etiquetas
                  </Text>
                  {
                      new Array(5).fill(1).map((item,index)=>(
<View style={{width:"100%",flexDirection:"row",paddingVertical:window.innerHeight*0.02}}>
  <View style={{width:"50%",flexDirection:"row"}}>
  <TouchableOpacity  
  onPress={()=>this.editDishField("labels",optionsProduct[index*2])}
  style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
    <View style={{marginLeft:10,width:20,height:20,borderWidth:2,borderColor:this.state.activeDish.labels.includes(optionsProduct[index*2])?"#FFC524":"#e8e8e8"}}>

    </View>
  </TouchableOpacity>
  <View style={{width:"80%"}}>
  <Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" ,}}>
                    {optionsProduct[index*2]}
                    </Text>
    </View>
    </View>
    <View style={{width:"50%",flexDirection:"row"}}>
    <TouchableOpacity
    onPress={()=>this.editDishField("labels",optionsProduct[index*2+1])}
     style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
    <View style={{marginLeft:10,width:20,height:20,borderWidth:2,borderColor:this.state.activeDish.labels.includes(optionsProduct[index*2+1])?"#FFC524":"#e8e8e8"}}>

    </View>
  </TouchableOpacity>
  <View style={{width:"80%"}}>
  <Text numberOfLines={1}  style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                    {optionsProduct[index*2+1]}
                    </Text>
    </View>
    </View>
  </View>
                      ))
                    }
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1.2rem", textAlign: "left",paddingVertical:window.innerHeight*0.02,marginLeft:window.innerWidth*0.01 }}>
                                        Alérgenos
                  </Text>
                  {
                      new Array(7).fill(1).map((item,index)=>(
<View style={{width:"100%",flexDirection:"row",paddingVertical:window.innerHeight*0.015}}>
  <View style={{width:"50%",flexDirection:"row"}}>
  <TouchableOpacity
  onPress={()=>this.editDishField("allergens",allergensOptions[index*2])}
   style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
    <View style={{marginLeft:10,width:20,height:20,borderWidth:2,borderColor:this.state.activeDish.allergens.includes(allergensOptions[index*2])?"#FFC524":"#e8e8e8",borderRadius:10}}>

    </View>
  </TouchableOpacity>
  <View style={{width:"80%"}}>
  <Text numberOfLines={1} style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" ,}}>
                    {allergensOptions[index*2]}
                    </Text>
    </View>
    </View>
    <View style={{width:"50%",flexDirection:"row"}}>
    <TouchableOpacity
    onPress={()=>this.editDishField("allergens",allergensOptions[index*2+1])}
     style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
    <View style={{marginLeft:10,width:20,height:20,borderWidth:2,borderColor:this.state.activeDish.allergens.includes(allergensOptions[index*2+1])?"#FFC524":"#e8e8e8"}}>

    </View>
  </TouchableOpacity>
  <View style={{width:"80%"}}>
  <Text numberOfLines={1}  style={{ color: "#000", fontWeight: "400", fontSize: "1rem", paddingHorizontal: "5%", textAlign: "left", width: "100%" }}>
                    {allergensOptions[index*2+1]}
                    </Text>
    </View>
    </View>
  </View>
                      ))
                    }

           
</View>
</View>
<TouchableOpacity onLongPress={() => this.setState({editActualDish:false, activeDish:{} })} onPress={() => this.setState({editActualDish:false, activeDish: {} })} style={{ alignSelf: "flex-end", position: "absolute", top: 0,right:0 }}>
                      <IoIosClose size="2.5em" />
                    </TouchableOpacity>
                    <View style={{width:"95%",alignSelf:"center",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",paddingBottom:window.innerHeight*0.03,backgroundColor:"#fff"}}>
<TouchableOpacity
                  onPress={()=>this.deleteDish()}
                   style={{alignItems:"center",justifyContent:"center",backgroundColor:"#fff",alignSelf:"center",width:"20%",}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.03 }}>
                                        Eliminar
                  </Text>
                  


                </TouchableOpacity>
                  <TouchableOpacity
                  onPress={()=>this.editDishSave()}
                   style={{alignItems:"center",justifyContent:"center",backgroundColor:"#FFC524",alignSelf:"center",width:"30%",borderRadius:10}}>
<Text style={{ textDecorationLine: "none", color: "#000", fontWeight: "400", fontSize: "1rem", textAlign: "left",paddingVertical:window.innerHeight*0.03 }}>
                                        Guardar cambios
                  </Text>
                  


                </TouchableOpacity>
                </View>
</View>

                </ScrollView>
                }
            </View>
        )
    }
}