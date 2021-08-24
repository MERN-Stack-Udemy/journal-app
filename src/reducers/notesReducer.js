import { types } from "../types/types";

/*
    {
        notes: [],
        active: null,
        active: {
            id: aklsjjdiji9838j,
            title:'',
            body:'',
            imageUrl: '',
            date: 1128329837283
        }
    }
*/
const initialState = {
    notes: [],
    active: null
}

export const notesReducer = ( state = initialState, action ) => {
    switch (action.type) {
        
        case types.notesActive: 
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }  
    
        default: return state;
    }
}