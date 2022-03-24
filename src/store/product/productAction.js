//import { id } from 'webpack'
import * as actions from './productActiontypes'

/**
*  @param {name, price, hasDiscount} product
*  @returns
*/

export function productAdd(product={}){
    return {
        type: actions.PRODUCT_ADD,
        payload: {
            name: product.name ? product.name : null,
            price: product.price ? product.price : null,
            hasDiscount: product.hasDiscount ? true : false
        }
    }
}

/**
 * 
 * @param {id} product 
 * @returns 
 */
export function productDelete(product ={}){
    return {
        type: actions.PRODUCT_REMOVE,
        payload: {
            id: product.id
        }
    }
}


/**
 * @param {ids, isDiscounted} product
 * @returns
 */

export function productChangeDiscount(product={}){
    return {
        type: actions.PRODUCT_DISCOUNT,
        payload: {
            id: product.id,
            hasDiscount: product.hasDiscount? true : false
        }
    }
}