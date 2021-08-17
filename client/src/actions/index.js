export const getTypes = () => {
    return async (dispatch) => {
        const response = await fetch('localhost:3001/types');
        const data = await response.json();
        dispatch({
            type: 'GET_TYPE',
            payload: data
        });
    }
}