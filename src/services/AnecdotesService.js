import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const postNote = async (data) =>{
  const response = await axios.post(baseUrl,data)
  return response.data
}

const putAnecdoteVote = async (data) =>{
  console.log("desde put",data)
  const response = await axios.put(baseUrl + '/' + data.id,data)
  return response.data
  
}
export default { getAll,postNote,putAnecdoteVote }