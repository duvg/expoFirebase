import React, { useEffect, useState } from 'react';
import { Text } from 'react-native-elements';
import GuestNavigation from './application/navigations/Guest';
import firebaseConfig from './application/utils/firebase';
import PreLoader from './application/components/PreLoader';
import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook';
import facebookConfig from './application/utils/facebook';



firebase.initializeApp(firebaseConfig);
export default function App() {

  let [statusUser, setStatusUser] = useState({ isLoggued: false, loaded: true});
  useEffect(() => {
    // Check Login firebase
    const checkuser = async () => {
      await firebase.auth().onAuthStateChanged((user) => {
        if(user !== null)
        {
          setStatusUser(
            {
              isLoggued: true, 
              loaded: true
            });
        }
        else
        {
          setStatusUser(
            {
            isLoggued: false,
            loaded: true
            });
        }
      });
    }

    checkuser();
    //firebase.auth().signOut();
    
  }, []);

  if( ! statusUser.loaded)
  {
    return(
      <PreLoader />
    );
  }
  
  if(statusUser.isLoggued)
  { 
    return(<Text>Logueado</Text>)
  } 
  else
  {
    return (
      <GuestNavigation />
    );
  }

  
}