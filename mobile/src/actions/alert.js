import { SET_ALERT, REMOVE_ALERT } from './types'
import { v4 as uuid4 } from 'uuid'

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    const id = uuid4()
    dispatch({
        type: SET_ALERT,
        payload: {
            msg,
            alertType,
            timeout
        }
    })

    // remove alert after 5s
    setTimeout(() => dispatch({
        type: REMOVE_ALERT,
        payload: id
    }), timeout)
}