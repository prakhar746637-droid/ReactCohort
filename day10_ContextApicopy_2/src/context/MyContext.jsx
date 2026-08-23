// boilerPlate => const MyStore = createContext

import {createContext} from 'react'

// setup out blank store---
export const MyStore = createContext()


// Make a provoider of our store who handle data and serves to the customers
export const ContextProvider =({children})=>{
    return <MyStore.Provider>{children}</MyStore.Provider>
}