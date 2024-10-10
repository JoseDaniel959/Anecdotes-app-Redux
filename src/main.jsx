import ReactDOM from 'react-dom/client'
//import { createStore,combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import FilterReducer, { setAnecdotes } from './reducers/store'
//import { AnecdotesReducer,/*FilterReducer*/ } from './reducers/anecdoteReducer'
import  {AnecdoteReducer}  from './reducers/store'
import  {NotificationReducer} from './reducers/store'




//The code above use only redux
/*const reducer = combineReducers({
  anecdotes: AnecdotesReducer,
  filter: FilterReducer
})*/

//const store = createStore(reducer)


//configureStore can be used with the normal reducers (without the redux/toolkit library )
export const store = configureStore({
  reducer: {
    anecdotes: AnecdoteReducer.reducer,
    filter: FilterReducer,
    notification: NotificationReducer.reducer
  }
})

//AnecdotesService.getAll().then(anecdotes => store.dispatch(setAnecdotes(anecdotes))) this line is fetching the data without redux thunk

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)