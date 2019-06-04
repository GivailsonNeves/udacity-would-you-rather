export const LOADING_COMPLETE = "LOADING_COMPLETE";

const loading = (state = false, action) => {
    switch (action.type) {
        case LOADING_COMPLETE:
            return action.loaded
        default:
            return state;
    }
}

export default loading;