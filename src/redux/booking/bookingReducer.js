import { ADDBOOKING, DELETEBOOKING ,INPUTCHANGE} from "./actionTypes"

const maxId = (bookings) => {
  const latestId= bookings.reduce((maxId, booking) => Math.max(maxId, booking.id), -1) + 1
 return latestId
}
const initialState ={
    booking:{ 
     
    destinationFrom: "",
    destinationTo: "",
    date: "",
    guest: 0,
    ticketclassName: "",
    },
    bookings:[]
}
const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUTCHANGE:
            return{
                ...state,
                booking:{
                    ...state.booking,
                    id: maxId(state.bookings),
                    [action.payload.name]: action.payload.value
                }
            }
        case ADDBOOKING:
        return {
            ...state,
            bookings: [...state.bookings, action.payload],
      
        
        }
        case DELETEBOOKING:
        return state.filter(booking => booking.id !== action.payload)
        
        default:
        return state
    }
}

export default bookingReducer