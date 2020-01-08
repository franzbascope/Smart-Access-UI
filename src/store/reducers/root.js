import { combineReducers } from "redux";
import { UserReducer } from "./user";
import { CompanyReducer } from "./company";
import { MeetingsReducer } from "./meetings";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  UserReducer,
  CompanyReducer,
  MeetingsReducer
});

const rootPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: []
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
export default persistedReducer;
