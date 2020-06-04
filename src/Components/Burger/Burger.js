import React from 'react'
import styles from "./Burger.module.css"
import {connect} from "react-redux";
const Burger = (props) =>{
    return (
        <div className = {styles.container}>
        
           <div className = {styles.burgertop}></div>
           {/* {props.ingredients.map(item =>{
               return <div className = {`styles.${item.style}`}>{item.style}</div>
           })} */}
           {props.chicken.map((item) =>{
               return <div style = {props.style.chicken}></div>
           })}
           {props.cheese.map((item) =>{
               return <div style = {props.style.cheese}></div>
           })}
           {props.bacon.map((item) =>{
               return <div style = {props.style.bacon}></div>
           })}
           {props.salad.map((item) =>{
               return <div style = {props.style.salad}></div>
           })}
           <div className = {styles.burgerbottom}></div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return ({
        chicken:state.chicken,
        salad:state.salad,
        bacon:state.bacon,
        cheese:state.cheese
    })
}

export default connect(mapStateToProps)(Burger)
