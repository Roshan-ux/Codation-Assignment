import {combineReducers, createStore,applyMiddleware} from 'redux'
// import CakeReducer from './Cake/CakeReducer'
// import IceCreamReducer from './IceCream/IceCreamReducer';

import thunk from 'redux-thunk'
import UserReducer from './User/UserReducer';

const rootReducer=combineReducers({
    // cake:CakeReducer,
    // iceCream:IceCreamReducer,
    user:UserReducer
})
const store=createStore(rootReducer,applyMiddleware(thunk))

export default store;