import * as actions from './productActiontypes'

const initialState = []
let lastId = 0

export const productAdd = createAction("productAdded")
export const productDiscounted = createAction("productHasDiscount")

export default createReducer(initialState, {
    // key
    //action
    productAdd: (name, price) =>{

    },

    productDiscounted:(product, isDiscounted)=>{

    }
})

export function reducer(state = initialState, action) {  
    switch (action.type) {
        case actions.PRODUCT_ADD:
            return [
                ...state,
                {
                    id: ++lastId,
                    name: action.payload.name,
                    price: action.payload.price,
                    hasDiscount: action.payload.hasDiscount
                }
            ]
        case actions.PRODUCT_REMOVE:
            return state.filter(product => product.id !== action.payload.id)

        case actions.PRODUCT_DISCOUNT:
            return state.map(product => {
                product.id !== action.payload.id ? product :
                    {
                        ...product,
                        hasDiscount: action.payload.hasDiscount
                    }
            })
            
        default: return state
    }
}