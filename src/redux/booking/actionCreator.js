import { INPUTCHANGE ,ADDBOOKING,DELETEBOOKING } from "./actionTypes"

export const inputchange = (payload) => {
    return {
        type: INPUTCHANGE,
        payload
    }
}

export const addbooking = (payload) => {
    return {
        type: ADDBOOKING,
        payload
    }
}

export const deletebooking = (bookingId) => {
    return {
        type: DELETEBOOKING,
        payload: bookingId
    }
}