import { createContext, useState ,useEffect} from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// actual value that you want to access
export const UserContext=createContext({
 currentUser:null,
 setCurrentUser:()=>null


});

export const UserProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(null)
    const value={currentUser,setCurrentUser}
// =====================observer pattern
    useEffect(()=>{
   const unsubscribe= onAuthStateChangedListener((user)=>{
//    console.log(user)
   if(user){

        createUserDocumentFromAuth(user);
   }
   setCurrentUser(user)
   })
   return unsubscribe;
    },[])
    // ========================================
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}



// we are going to wrap entire application with this context in index.js

