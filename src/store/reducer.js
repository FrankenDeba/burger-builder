import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../action/actionType";

const initialState = {
    cost:0,
        chicken:[],
        bacon:[],
        cheese:[],
        salad:[]
    
    
}

const reducer = (state = initialState,action)=>{
    
    switch(action.type){
        case ADD_INGREDIENT:
            const count = state[action.payload.name].slice()
            count.push(1)
            console.log(action.payload.name,count);
            
            return ({
                ...state,
                
                [action.payload.name]:count,
                cost:parseInt(state.cost) + parseInt(action.payload.value)
            })
        case REMOVE_INGREDIENT:
            if(state.cost===0){
                return(
                    {
                    
                        cost:0
                    }
                )
                
            }
    
            
            return({
                ...state,
                cost:parseInt(state.cost) - parseInt(action.payload)
            })
        default:
            return state
    }
}
export default reducer;