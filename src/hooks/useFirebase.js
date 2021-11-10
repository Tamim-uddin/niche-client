import { useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState({});
    const [isloading, setisloading] = useState(false);
    const [autherror, setautherror] = useState('');

    const auth = getAuth();


    const registerUser = (email, password, history) => {
        setisloading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                history.push('/');
                const user = userCredential.user;
                setautherror('');
            })
            .catch((error) => {
                
                setautherror(error.message);
                
            })
            .finally(() => setisloading(false));
    }

    useEffect( () => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {             
              setuser(user);
              
            } 
            else {
              setuser({});
            }
            setisloading(false);
          });
          return () => unsubscribed;
    } , []);

    const loginUser = (email, password, location, history) => {
        setisloading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               const redirect_uri = location.state?.from || '/allproducts';
               history.push(redirect_uri)
                const user = userCredential.user;
                setautherror('');
                
            })
            .catch((error) => {
                setautherror(error.message);
            })
            .finally(() => setisloading(false));

    }

    const logout = () => {
        setisloading(true);
        signOut(auth)
        .then(() => {
           
          })
          .catch((error) => {
            
          })
          .finally(() => setisloading(false));
    }

    return {
        user,
        logout,
        loginUser,
        isloading,
        autherror,
        registerUser
    }
}

export default useFirebase;