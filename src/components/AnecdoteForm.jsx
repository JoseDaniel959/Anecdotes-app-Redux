import { useDispatch } from 'react-redux'
import { asObject, createNote, postNewAnecdote } from '../reducers/store'
import AnecdotesService from '../services/AnecdotesService'
// import { createNote } from '../reducers/anecdoteReducer' //This method is withou redux's library

export const AnecdoteForm = () =>{
    const dispatch = useDispatch()
    const HandleCreateNoteButton =  async (event) =>{
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = " "
        dispatch(postNewAnecdote(content))
      }
    
    
    return(
        <>
            <h2>create new</h2>
            <form onSubmit={HandleCreateNoteButton}>
                <div><input name="anecdote" type='text'/></div>
                <button type="submit">create</button>
            </form>
        </>
    ) 
}

//export default AnecdoteForm