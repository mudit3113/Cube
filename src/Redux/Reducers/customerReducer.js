//defining the initialState

const initialState = {
    customers: [],
    selectedCustomer: 1,
    images: [],
    loading: false,
    error: null,
}

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CUSTOMER':
            return {
                ...state,
                selectedCustomer: action.payload,
            }
        case 'GENERATE_CUSTOMERS':
            return {
                ...state,
                customers: action.payload
            }
       
        case 'FETCH_CUSTOMERS_SUCCESS':
            return {
                ...state,
                loading: false,
                images: action.payload,
            };
        case 'FETCH_CUSTOMERS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

export default customerReducer;