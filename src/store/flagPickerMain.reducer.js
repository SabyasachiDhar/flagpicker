const innitialState = {
    continentName: '',
    isActive: false
}

const falgPickerMain = (state = innitialState, action) =>{
    const newState = {...state};

    switch(action.type){
        case "AUTO_COMPLETE_CONTINENT_SELECT":
        return{
            ...state,
            continentName: action.continentName
        }
        break;
    }

    return newState;
} 

export default falgPickerMain;