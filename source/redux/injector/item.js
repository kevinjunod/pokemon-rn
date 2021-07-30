export const GET_ITEM = 'getItem';
export const SET_ITEM = 'setItem';

export const GET_ITEM_BY_ID = 'getItemById';
export const SET_ITEM_BY_ID = 'setItemById';
export const CLEAR_ITEM_BY_ID = 'clearPokemonById';

export const getItem = () => ({
    type: GET_ITEM
});

export const setItem = (payload) => ({
    type: SET_ITEM,
    payload
});

export const getItemById = (param) => ({
    type: GET_ITEM_BY_ID,
    param
});

export const setItemById = (payload) => ({
    type: SET_ITEM_BY_ID,
    payload
});

export const clearItemById = () => ({
    type: CLEAR_ITEM_BY_ID,
});

const initialState = {
    itemList: [],
    itemDetail: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEM:
            const { item } = action;
            return { ...state, itemList: action.payload };
        case SET_ITEM_BY_ID:
            return { ...state, itemDetail: action.payload };
        case CLEAR_ITEM_BY_ID:
            return { ...state, itemDetail: null };
        default:
            return state;
    }
}