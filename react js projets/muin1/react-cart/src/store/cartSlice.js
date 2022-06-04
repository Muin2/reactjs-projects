const {createSlice} = require('@reduxjs/toolkit')
const initialState =[];
const cartSlice = createSlice({
 name: 'cart',
 initialState ,
 reducers: {                  //reducer are function -with the help we muted the state
     add( state,action){
         //u should not mute state in redux
         //but we can do it bc-we are calling a method 'createSlice'
         //with the help of createSlice we can directly muteded
         state.push(action.payload);
     }, // and reducer are pure function ,use to change state and action add(sate,action)
     remove(state,action){
    return state.filter((item)=> item.id !== action.payload);
     },
 }
})


export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;