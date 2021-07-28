export const GET_ITEM = 'getItem';
export const SET_ITEM = 'setItem';

export const GET_ITEM_BY_ID = 'getItemById';
export const SET_ITEM_BY_ID = 'setItemById';

export const getItem = () => ({
    type: GET_ITEM
});

export const setItem = (payload) => ({
    type: SET_ITEM,
    payload
});

export const getItemById = () => ({
    type: GET_ITEM_BY_ID
});

export const setItemById = (payload) => ({
    type: SET_ITEM_BY_ID,
    payload
});

const initialState = {
    itemList: [],
    itemDetail: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEM:
            const { item } = action;
            return { ...state, itemList: state.itemList.push(item) };//* function add list of items to the array
        case SET_ITEM_BY_ID:
            return { ...state, itemDetail: item };//* function to add the item detail to object
        default:
            return state;
    }
}