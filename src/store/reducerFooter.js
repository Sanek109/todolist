const ON_SHOW_FILTERS_CLICK = 'ON_SHOW_FILTERS_CLICK';
const ON_HIDE_FILTERS_CLICK = 'ON_HIDE_FILTERS_CLICK';

const initialState = {
    isHidden: false
}

const reducerFooter = (state = initialState, action) => {
    switch (action.type) {
        case ON_SHOW_FILTERS_CLICK:
            return {
                ...state,
                isHidden: true
            }

        case ON_HIDE_FILTERS_CLICK:
            return {
                ...state,
                isHidden: false
            }
    }
    return state;
}

export const onShowFiltersClick = () => {
    return {
        type: 'ON_SHOW_FILTERS_CLICK'
    }
}

export const onHideFiltersClick = () => {
    return {
        type: 'ON_HIDE_FILTERS_CLICK'
    }
}


export default reducerFooter;