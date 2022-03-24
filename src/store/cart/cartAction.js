import * as actions from './cartActionType'

/**
 * @param {id, quantity}
 * @returns
 */

export function cartAdd(cart={}){
    return {
        type: actions.CART_ADD,
        payload: {
            id: cart.id,
            quantity: cart.quantity
        }
    }
}

/**
 * @param {id}
 * @returns
 */
export function cartRemove(cart={}){
    return {
        type: actions.CART_REMOVE,
        payload: {
            id: cart.id
        }
    }
}