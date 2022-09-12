import {  combineReducers } from "redux";
import AddReducer from "./AddReducer";
// import DemoReducer from "./DemoReducer";
// import{persistStore,persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import persistReducer from "redux-persist/es/persistReducer";

// const persistConfig ={
//   key:'main-root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig,rootReducer);
// const  store = createStore(persistedReducer,applyMiddleware());
// const Persistor= persistStore(store);



// export{Persistor};


const rootReducer = combineReducers({
  addReducer: AddReducer,
  // demo: DemoReducer
});
export default rootReducer;
