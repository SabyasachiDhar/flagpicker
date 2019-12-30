const innitialState = {
    continentName: '',
    isActive: false,
    countriesFlags: [],
    flagHistory: [],
    isChecked: false,
    checkedItems: new Map()
}

const falgPickerMain = (state = innitialState, action) =>{
    const newState = {...state};

    switch(action.type){
        case "AUTO_COMPLETE_CONTINENT_SELECT":
        return{
            ...state,
            continentName: action.continentName,
            countriesFlags: action.countriesFlags
        }
        break;

        case "GET_SELECTED_FLAG":
        return{
            ...state,
            flagHistory: state.flagHistory.concat(action.flagHistory),
            isChecked: action.isChecked,
            
        }
        break;

        case "CLEAR_SELECTED_FLAG_HISTORY":
        return{
            ...state,
            flagHistory: state.flagHistory = []
        }
        break;
    }

    return newState;
} 

export default falgPickerMain;