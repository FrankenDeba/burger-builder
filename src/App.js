import React from 'react';
import './App.css';
import Footer from "./Components/Footer/Footer";
import Burger from "./Components/Burger/Burger";
import Header from "./Components/Header/Header"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ingredients:{
       chicken:[1,1,1],
       cheese:[1,1],
       salad:[1],
       bacon:[1,1]
      }


  }
  }
  
    // {
    //   this.state.ingredients.map(item =>{
    //     console.log(item.style);
        
    //   })
    // }
    styles = {
      chicken:{
        width:"40%",
        height:"10px",
        backgroundColor: "brown",
        margin:"5px"
    },
    cheese:{
      width:"40%",
        height:"10px",
        backgroundColor: "yellow",
        margin:"5px"

    },
    bacon:{
      width:"40%",
        height:"10px",
        backgroundColor: "red",
        margin:"5px"
    },
    salad:{
      width:"40%",
        height:"10px",
        backgroundColor: "lightgreen",
        margin:"5px"
    }
    }
    render(){
    return (
      <div className="App">
        <Header/>
        <Burger style = {this.styles} ingredients = {this.state.ingredients}/>
        <Footer/>
      </div>
    );
  }
  
}

export default App;
