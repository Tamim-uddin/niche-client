import { useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState({});
    const [isloading, setisloading] = useState(false);
    const [autherror, setautherror] = useState('');
    const [admin, setadmin] = useState(false);

    const auth = getAuth();


    const registerUser = (email, password, name, history) => {
        setisloading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = {email, displayName: name};
                setuser(newUser);
                saveUser(email, name);
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    
                  }).catch((error) => {
                   
                  });

                history.push('/');                
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

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setadmin(data.admin))
    } , [user.email])

    const loginUser = (email, password, location, history) => {
        setisloading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               const redirect_uri = location.state?.from || '/allproducts';
               history.push(redirect_uri);
                
                setautherror('');
                
            })
            .catch((error) => {
                setautherror(error.message);
            })
            .finally(() => setisloading(false));

    }

    const saveUser = (email, displayName) => {
        const user = {email, displayName};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
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
        admin,
        logout,
        loginUser,
        isloading,
        autherror,
        registerUser
    }
}

export default useFirebase;