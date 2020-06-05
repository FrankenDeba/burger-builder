import React from 'react'
import styles from "./Selector.module.css"
import { connect } from "react-redux"
import { addingredient,removeingredient } from "../../action/actionCreator"
const Selector = (props) => {
    return (
        <div className = {styles.container}>
            <span className = {styles.price}>{props.price} &#x20b9; </span>
            <span className = {styles.item}>{props.text}</span>
            <button className = {styles.addremove} onClick = {(e) => props.add(e)} value ={props.price} name = {props.text}>+</button>
            <button className = {styles.addremove} onClick = {(e) => props.remove(e)} value = {props.price} name = {props.text}>-</button>
        </div>
    )
}

// const mapStateToProps = (state) =>{
//     return (
//         {
//             cost:state.cost
//         }
//     )
// }
const mapDispatchToProps = (dispatch) =>{
    return (
        {
            add:(e)=>dispatch(addingredient({value:e.target.value,
                name:e.target.name})),
            remove:(e) => dispatch(removeingredient({value:e.target.value,
                name:e.target.name}))
        }
    )
}
export default connect(null,mapDispatchToProps)(Selector)
