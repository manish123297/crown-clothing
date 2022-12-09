import {initializeApp} from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from "firebase/auth"
import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApFjkhJxatmVAK-Kui61pnLrWtwMS4R2Q",
    authDomain: "crwn-clothing-db-3b43f.firebaseapp.com",
    projectId: "crwn-clothing-db-3b43f",
    storageBucket: "crwn-clothing-db-3b43f.appspot.com",
    messagingSenderId: "379202923757",
    appId: "1:379202923757:web:de69b7210d7e6560c470e4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider=new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:"select_account"
  })

export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider)
export const db =getFirestore()
export const createUserDocumentFromAuth=async(userAuth)=>{
    const userDocRef=doc(db,'user',userAuth.user.uid)
    console.log(userDocRef)

    const userSnapshot=await getDoc(userDocRef)
    console.log(userSnapshot.exists())

    // if user data  does not exists
    // then create/set the document with the data from user in my collection
  if(!userSnapshot.exists()){
    const {displayName,email}=userAuth.user;
    const createAt=new Date();


    try{
        await setDoc(userDocRef,{displayName,email,createAt})
    }catch(error){
        console.log("error creating the user"+error)
    }

  }


    //if user data exists
    return userDocRef
    // return userDocRef 

}
