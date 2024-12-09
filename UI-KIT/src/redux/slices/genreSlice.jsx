// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'
// import { API_GENRE, API_KEY } from '../../constants/api'

// const initialState = {
//   value: [],
// }

// //axios.get("https://api.themoviedb.org/3/movie/changes?api_key=647f3a6468fff699dfb536767db54155")
// export const getGenre = createAsyncThunk('getGenres', async ()=>{
//     const res = await axios.get(`${API_GENRE}?api_key:${API_KEY}`)
//     console.log(res.data)
//     return res.data.genres;
// })

// export const genreSlice = createSlice({
//   name: 'genre',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => { //HTTP Request
//     builder.addCase(getGenre.fullfilled, (state, action) => {
        
//       })
// }})


// export const {  } = genreSlice.actions

// export default genreSlice.reducer