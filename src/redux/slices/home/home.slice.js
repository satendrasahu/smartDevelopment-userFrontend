import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    userName :"Satendra"
}

const homeSlice = createSlice({
    name :"homeSlice",
    initialState,
    reducers :{
        setUserName : (state, actions) => {
            return {
              ...state,
              userName: actions?.payload
            }
          },
    },
  
})

export const  {setUserName} = homeSlice.actions
export default homeSlice.reducer