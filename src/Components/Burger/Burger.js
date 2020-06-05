import React from 'react'
import styles from "./Burger.module.css"
import {connect} from "react-redux";
const Burger = (props) =>{
let message = ""
    return (
        <div className = {styles.container}>
            <div className = {styles.burger}>
            <div className = {styles.burgertop}></div>
            {
               props.cost===0?(message = "please add ingredients"):null
           }
        
           {props.chicken.map((item,index) =>{
               return <div key = {index} style = {props.style.chicken}></div>
           })}
           {props.cheese.map((item,index) =>{
               return <div key = {index} style = {props.style.cheese}></div>
           })}
           {props.bacon.map((item,index) =>{
               return <div key = {index} style = {props.style.bacon}></div>
           })}
           {props.salad.map((item,index) =>{
               return <div key = {index} style = {props.style.salad}></div>
           })}
           <div className = {styles.burgerbottom}></div>
            </div>
           
        </div>
    )
}

const mapStateToProps = (state) =>{
    return ({
        cost:state.cost,
        chicken:state.chicken,
        salad:state.salad,
        bacon:state.bacon,
        cheese:state.cheese
    })
}

export default connect(mapStateToProps)(Burger)
