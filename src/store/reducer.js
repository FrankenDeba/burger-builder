import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../action/actionType";

const initialState = {

    cost:0
    ,
    
        chicken:[],
        bacon:[],
        cheese:[],
        salad:[],
    
    
}

const reducer = (state = initialState,action)=>{
    
    switch(action.type){
        case ADD_INGREDIENT:
            let count = state[action.payload.name].slice()
            count.push(1)

    
            console.log(action.payload.name,count);
            if(count.length > 4){
                return state
            }
            
            return ({
                ...state,
                
                [action.payload.name]:count,
                cost:parseInt(state.cost) + parseInt(action.payload.value)
            })
        case REMOVE_INGREDIENT:
            let cnt = state[action.payload.name].slice()
            let flag = true
            if(state[[action.payload.name]].length===0){
                flag = false
            }
            if(cnt.length!==0){
            cnt.pop()
            console.log(cnt);
        
            
            }
            
            if(state.cost===0){
                return(
                    {
                        ...state,
                        cost:0
                    }
                )
                
            }
    
            
            return({
                ...state,
                
                [action.payload.name]:cnt,

                
                cost:flag?parseInt(state.cost) - parseInt(action.payload.value):state.cost
            })
        default:
            return state
    }
}
export default reducer;