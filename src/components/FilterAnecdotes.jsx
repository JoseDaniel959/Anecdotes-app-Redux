//import {searchFilterElements} from '../reducers/anecdoteReducer'
import { searchFilterElements } from '../reducers/store'
import { useDispatch } from 'react-redux'
const FilterAnecdotes = () =>{
    const dispatch = useDispatch()
    const handleChange = (event) => {
        
        //console.log(event.target.value)
        dispatch(searchFilterElements((event.target.value).toLowerCase()))
      }
    
    return(
        <div>
            <h2>Anecdotes</h2>
            <p>Filter</p><input onChange={handleChange}></input>
        </div> 
    )
}


export default FilterAnecdotes;