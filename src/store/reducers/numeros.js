import { NUM_MAX_ALTERADO, NUM_MIN_ALTERADO } from "../actions/actionTypes"

const initialState = {
    min: 1,
    max: 10
}

const numeros = (state = initialState, action) => {
    console.log('Reducer números...')
    console.log(state, ' ', action)

    switch (action.type) {
        case NUM_MIN_ALTERADO:
            return {
                ...state,
                min: action.payload
            }

        case NUM_MAX_ALTERADO:
            return {
                ...state,
                max: action.payload
            }

        default:
            return state
    }  
}

export default numeros