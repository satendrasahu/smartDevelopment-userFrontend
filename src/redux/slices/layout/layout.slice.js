import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    toggleSidebar : false
}

const layoutSlice = createSlice({
    name :"layoutSlice",
    initialState,
    reducers :{
        handleSidebar : (state, actions) => {
            return {
              ...state,
              toggleSidebar: actions?.payload
            }
          },
    },
  
})

export const  {handleSidebar} = layoutSlice.actions
export default layoutSlice.reducer