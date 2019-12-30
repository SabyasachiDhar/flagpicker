const innitialState = {
    continentName: '',
    isActive: false,
    countriesFlags: [],
    flagHistory: [],
    isChecked: false,
    checkedItems: new Map(),
    contryName: 'no name'
}

const falgPickerMain = (state = innitialState, action) =>{
    const newState = {...state};
    const actionItem = action;
    console.log("actionItem",actionItem);
    switch(action.type){
        case "AUTO_COMPLETE_CONTINENT_SELECT":
        return{
            ...state,
            continentName: action.continentName,
            countriesFlags: action.countriesFlags
        }
        break;

        case "GET_SELECTED_FLAG": 
        const check = state.flagHistory.filter((obj)=> obj.name === actionItem.flagHistory.name);
            console.log("check",check);
            if(check.length){
                if(!action.isChecked){
                    state.flagHistory = state.flagHistory.filter((obj)=> obj.name !=  actionItem.flagHistory.name)
                }
             }
             else{
                state.flagHistory = state.flagHistory.concat(action.flagHistory)
             }
         console.log("state flagHistory",state.flagHistory);

        return{
            ...state,
            flagHistory: state.flagHistory,
            isChecked: action.isChecked,
            countryName:action.countryName
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