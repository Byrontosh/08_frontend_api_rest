import { types } from "./types";


// Es una especie de interfaz para retornar la acción que debe ejecutar
// https://reactjs.org/docs/hooks-reference.html#usereducer

export const authReducer = (state = {}, action) => {
    
    switch (action.type) 
    {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload,
            };

        case types.logout:
            return {
                ...state,
                logged: false,
                user: null,
            };

        default:
            return state;
    }
}