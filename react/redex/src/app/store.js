// what is a store?

// store is an centralized place where all application status store
//only one store for one react

// Slice is a piece of redux state  + logic  fot upadting that state


// one feature = on slice


// const counterSlice = createSlice({
//     name : 'counter',
//     initialState,
//     reducers : {...}
// })

// what is reducer?
// reduces is an function  that upadte state on action steve


//action is an event that tell redux 

//selector is useed to read state from the store

import {configureStore} from '@redex/toolkit'
import counterReducer from '../features/counter/counterSlice'