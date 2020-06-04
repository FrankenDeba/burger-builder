import React from 'react'
import styles from "./Footer.module.css"
import Selector from "../Selector/Selector"
const Footer = (props)=> {
    return (
        <div className = {styles.container}>
            <Selector price = "10.00" text = "salad"/>
            <Selector price = "20.00" text = "bacon"/>
            <Selector price = "30.00" text = "chicken"/>
            <Selector price = "05.00" text = "cheese"/>
        </div>
    )
}
export default Footer;