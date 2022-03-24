import * as actions from './userActionType'

/**
 * @param {name, balance}
 * @returns
 */

export function userAdd(user={}){
    return {
        type: actions.USER_ADD,
        payload:{
            name: user.name ? user.name : null,
            balance: user.balance ? user.balance : 0
        }
    }
}

/**
 * 
 * @param {id} product 
 * @returns 
 */
export function userDelete(user ={}){
    return {
        type: actions.USER_REMOVE,
        payload: {
            id: user.id
        }
    }
}