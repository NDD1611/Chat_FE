const initState = {
    userDetails: null
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "DYMMY":
            return {
                ...state
            }
        default:
            return state;
    }
}

export default reducer;