export const GET_ITEM = 'getItem';
export const SET_ITEM = 'setItem';

export const GET_NEXT_URL = 'getNextUrl';
export const SET_NEXT_URL = 'setNextUrl';

export const GET_ITEM_BY_ID = 'getItemById';
export const SET_ITEM_BY_ID = 'setItemById';
export const CLEAR_ITEM_BY_ID = 'clearPokemonById';

export const GET_NEW_ITEM_LIST = 'getNewPokemonList';
export const SET_NEW_ITEM_LIST = 'setNewPokemonList';

export const getItem = () => ({
    type: GET_ITEM
});

export const setItem = (payload) => ({
    type: SET_ITEM,
    payload
});

export const getNextUrl = (param) => ({
    type: GET_NEXT_URL,
    param
});

export const setNextUrl = (payload) => ({
    type: SET_NEXT_URL,
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

export const getNewItemList = (param) => ({
    type: GET_NEW_ITEM_LIST,
    param
});

export const setNewItemList = (payload) => ({
    type: SET_NEW_ITEM_LIST,
    payload
});

const initialState = {
    itemList: [],
    itemDetail: null,
    nextUrl: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEM:
            const { item } = action;
            return { ...state, itemList: action.payload };
        case SET_NEXT_URL:
            return { ...state, nextUrl: action.payload };
        case SET_ITEM_BY_ID:
            return { ...state, itemDetail: action.payload };
        case CLEAR_ITEM_BY_ID:
            return { ...state, itemDetail: null };
        case SET_NEW_ITEM_LIST:
            return { ...state, itemList: [...state.itemList, ...action.payload] };
        default:
            return state;
    }
}