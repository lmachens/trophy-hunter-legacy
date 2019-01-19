import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import reducers from './reducers';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { clearStoreInterval } from './clearStore';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['account', 'connectionStatus', 'encyclopediaDialog', 'liveMatch']
};
const persistedReducer = persistReducer(persistConfig, reducers);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export const store = createStoreWithMiddleware(persistedReducer);
export const persistor = persistStore(store);

clearStoreInterval(store);
