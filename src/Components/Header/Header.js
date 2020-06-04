import React from 'react'
import styles from "./Header.module.css";
import { connect } from "react-redux";
function Header(props) {
    return (
        <div className = {styles.container}>
        <span className = {styles.title}>Burger app built by Debashis Debnath </span>
        <div className = {styles.total}>Your total is: {props.cost} &#x20b9; </div>    
        </div>
    )
}
const mapStateToProps = (state) =>{
    return (
        {
            cost:state.cost
        }
    )
}
export default connect(mapStateToProps)(Header)
