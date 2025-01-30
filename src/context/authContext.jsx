import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signOut , signInWithEmailAndPassword } from "firebase/auth";
import {useState, useEffect, useContext, createContext} from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
}


export function AuthProvider(props){
    const {children} = props;

    const [globalUser, setGlobalUser] = useState(null);
    const [globalData , setGlobalData] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    function signup(email, password){

        return createUserWithEmailAndPassword(auth, email, password);
    }
    function login(email, password){
     
        return signInWithEmailAndPassword(auth, email, password);
    }
    function resetPassword(email){
        return sendPasswordResetEmail(auth, email);
    }
    function logout()  {

        setGlobalUser(null);
        setGlobalData(null);
        window.location.reload();
        return signOut(auth);
    }
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, async (user) => {
        setGlobalUser(user);  
        console.log(user);
        if(!user) {
                console.log("no active user");
                return;
            }
         
            try {
                setisLoading(true);
                //first we create a reference to the document (lablled json object) then we get the doc and then snapshot it
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                let firebseData = {

                }
                if(docSnap.exists()){
                    
                    firebseData = docSnap.data();
                    console.log("found user data", firebseData);

                }
                setGlobalData(firebseData);

            } catch (error) {
                console.log(error.message);
            }finally{
                setisLoading(false);

            }

        })
        return unsubscribe;
    }, [])
    const value = {globalUser , globalData, setGlobalData, isLoading, signup, login, resetPassword, logout};  
    return (
         <AuthContext.Provider value={value}>
            {children}
         </AuthContext.Provider>

    );
}