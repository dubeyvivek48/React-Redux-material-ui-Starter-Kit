import InitialState from "../states/initial.state";
import ReduxActionEnum from "../../models/enums/ReduxActionEnum";

const  RootReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ReduxActionEnum.LOGIN_ACTION:
            return  {...state, loggedIn: true}
            break;

        default:
            return state;
    }


}

export default RootReducer;