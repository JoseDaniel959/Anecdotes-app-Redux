import { useDispatch } from 'react-redux'
import {AnecdoteForm} from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import FilterAnecdotes from './components/FilterAnecdotes'
import { initializeAnecdotes } from './reducers/store'
import { useEffect } from 'react'

const App = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(initializeAnecdotes())
  },[])
    return (
    <div>
      
      
      <FilterAnecdotes></FilterAnecdotes>
      <AnecdoteList></AnecdoteList>
      <AnecdoteForm></AnecdoteForm>
    </div>
  )
}

export default App