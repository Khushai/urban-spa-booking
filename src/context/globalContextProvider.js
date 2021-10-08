import React from "react";

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
    slot:null,
    workers:[],
    isSlotDisable:-1,
    listOfAddedItemsInCart: {},
    totalWorkers:[],
    isCartOpen:false,
}

function reducer(state, action){
    switch (action.type){
        case 'ADD_TIME_SLOT':
            return{
                ...state,
                slot: action.payload
            }
        case 'ADD_WORKERS':{
                return{
                    ...state,
                    workers: action.payload
                }
            }
        case 'DISABLE_SLOT':{
            return {
                ...state,
                isSlotDisable: action.payload
            }
        }
        case 'ADD_TO_CART':{
            return {
                ...state,
                listOfAddedItemsInCart:action.payload
            }
        }
        case 'IS_CART_OPEN':{
            return {
                ...state,
                isCartOpen:action.payload
            }
        }
        case 'IS_EDIT_ENABLE':{
            return {
                ...state,
                isEditEnable:action.payload
            }
        }
        case 'TOTAL_WORKERS':{
            return {
                ...state,
                totalWorkers:action.payload
            }
        }
        default: return
    }
}

const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
        )
}

export default GlobalContextProvider