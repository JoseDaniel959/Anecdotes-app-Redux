import { createSlice } from '@reduxjs/toolkit'
import AnecdotesService from '../services/AnecdotesService'

const anecdotesAtStart = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  const getId = () => (100000 * Math.random()).toFixed(0)
  
  const asObject = (anecdote) => {
    return {
      content: anecdote,
      id: getId(),
      votes: 0
    }
  }
  
  const InitialAnecdotes = anecdotesAtStart.map(asObject)


console.log(InitialAnecdotes)



//const initialFilterState = 'ALL'
const FilterSlice = createSlice({
    name:'Filter',
    initialState : 'ALL',
    reducers:{
        searchFilterElements(state,action){
            const StringToFilter = action.payload
            return StringToFilter
            //return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().search(StringToFilter) != -1)

        }
    }

})
export const AnecdoteReducer = createSlice({
    name:'Anecdote',
    initialState :[],
    reducers :{
        voteAnecdote(state,action){
            const id = action.payload
            return state.map(anecdote =>
                anecdote.id !== id
                  ? anecdote
                  : { ...anecdote, votes: anecdote.votes + 1 }
              )
        },
        createNote(state,action){
          const new_note = action.payload
          return [...state,new_note]

        },
        setAnecdotes(state, action) {
          return action.payload
        }
    }
})

export const NotificationReducer = createSlice({
  name:'notification',
  initialState:"off",
  reducers:{
    showNotification(state,action){
      const IDNotification = action.payload
    
      return IDNotification != "off" ? IDNotification : state

    }
  }
})


export const initializeAnecdotes = () => {
  return async dispatch => {
    const notes = await AnecdotesService.getAll()
    console.log("notasss",notes)
    dispatch(setAnecdotes(notes))
  }
}

export const postNewAnecdote = (content) => {
  return async dispatch =>{
    const newAnecdote = asObject(content)
    await AnecdotesService.postNote(newAnecdote)
    dispatch(createNote(newAnecdote))  
  }
}

export const updateVoteAnecdote = (prevAnecdote) => {
  return async dispatch =>{
    const votedAnecdote = {...prevAnecdote,votes:prevAnecdote.votes+1}
    console.log("pre note",votedAnecdote)
    dispatch(voteAnecdote(votedAnecdote.id))
    await AnecdotesService.putAnecdoteVote(votedAnecdote) }
}

console.log(InitialAnecdotes)
export const { searchFilterElements } = FilterSlice.actions
export default FilterSlice.reducer

export const { voteAnecdote,createNote,setAnecdotes } = AnecdoteReducer.actions;
export {asObject}

