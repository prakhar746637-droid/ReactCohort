Context Api
   Just a heigher order functional components
   There are two things in context
             1. Consumer
      createContext()

             2. Provider 
       contextProvider = ({children})=>{
               return <Consumer.Provider>{children}
               <consumer.Provider>
       }
Example:->
     import { Children, createContext } from "react";

// consumer
const MyStore = createContext;

//provider
const ContextProvider = ({ Children }) => {
  return <MyStore.Provider>{Children}</MyStore.Provider>;
};