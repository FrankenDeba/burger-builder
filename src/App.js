import React from 'react';
import './App.css';
import Footer from "./Components/Footer/Footer";
import Burger from "./Components/Burger/Burger";
import Header from "./Components/Header/Header"

class App extends React.Component{
 
  
    
    styles = {
      chicken:{
        width:"100%",
        height:"10px",
        backgroundColor: "brown",
        margin:"5px 0 5px 0"
    },
    cheese:{
      width:"100%",
        height:"10px",
        backgroundColor: "yellow",
        margin:"5px 0 5px 0"

    },
    bacon:{
      width:"100%",
        height:"10px",
        backgroundColor: "red",
        margin:"5px 0 5px 0"
    },
    salad:{
      width:"100%",
        height:"10px",
        backgroundColor: "green",
        margin:"5px 0 5px 0"
    }
    }
    render(){
    return (
      <div className="App">
        <Header/>
        <Burger style = {this.styles}/>
        <Footer/>
      </div>
    );
  }
  
}

export default App;
