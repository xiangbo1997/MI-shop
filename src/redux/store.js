import {createStore,applyMiddleware}from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from './reducers'
let store;
if(process.env.NODE_ENV === 'development'){
    console.log('##3')
    store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))
}else{
    store = createStore(reducers,applyMiddleware(thunk))
}
export default store

