portfolio ----> awwwards.com
----------------------------------------------------------------------------------------------------------------------------------------------
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

-----------------------------------------------------------------------------------------------------------------------------------------------

             useEffect hook
Use for handling side effects, example:-> useEffect(callback,[dependancy array])
if blank array -> [] -> only one time run
if                [count] -> jab bhi ciunt update hoga tab chalna

Components life cycle :-
   1. Mounting phase   --> Render
   1. updating phase   --> update ho raha hai
   1. unmountin phase  --> render tree se remove hoga