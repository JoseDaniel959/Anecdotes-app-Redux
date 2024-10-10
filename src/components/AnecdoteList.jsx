import { useSelector, useDispatch } from 'react-redux'
//import {voteAnecdote} from '../reducers/anecdoteReducer'
import { voteAnecdote,updateVoteAnecdote} from '../reducers/store'
import { NotificationReducer } from '../reducers/store'
import Notification from './Notification'
const AnecdoteList = ()=>{
    const anecdotes = useSelector(state => {
      if (state.filter == "ALL"){
        console.log(state.anecdotes)
        return state.anecdotes
      }
      
      else if(state.filter != "ALL"){
        console.log(state.anecdotes.filter(anecdote => anecdote.content.search(state.filter)))
        return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().search(state.filter) != -1)

      }
    }) //This is like the useState. This is for getting the state 
    const dispatch = useDispatch() //The dispatch is in charged of calling the reducer function. (The reducer function is in the Provider component through props)
  
    const vote = (id) => {
      //dispatch(voteAnecdote(id))
      const votedAnecdote = anecdotes.filter(anecdote => anecdote.id == id )[0]
      //console.log("desde list",votedAnecdote)
     
      dispatch(updateVoteAnecdote(votedAnecdote))
      
      console.log(anecdotes.filter(anecdote => anecdote.id == id ))
      dispatch(NotificationReducer.actions.showNotification(anecdotes.filter(anecdote => anecdote.id == id )[0].content))
    }
  
  
    
    const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)
    return(
        <>
        <h2>Anecdotes</h2>
      <Notification></Notification>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
        
      )}
      </>
    )
}

export default AnecdoteList;