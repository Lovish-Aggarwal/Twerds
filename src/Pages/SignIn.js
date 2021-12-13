import React from 'react'

import firebase from "firebase/app"

import { Panel, Button, Icon, Alert } from 'rsuite'
import { auth, database } from '../misc/firebase'

import "../Styles/signIn.css"



const SignIn = () => {
  const signInWithProvider = async(provider)=>{

    try {
      const {additionalUserInfo,user} =  await auth.signInWithPopup(provider)
    //both are recieved by awaiting this signup (you can console log it )


     if(additionalUserInfo.isNewUser){
           
     await database.ref(`/profiles/${user.uid}`).set({  //firebase won't allow us to wirte 

      //in locked mode  so we have changes the security rules 

        name: user.displayName,
        createdAt : firebase.database.ServerValue.TIMESTAMP //user created at 
      })

     }

      Alert.success('SignIn Successfull',2000)
     
    } catch (err) {
      
       Alert.error(err.message,2000)
    }
    
   

    //auth is from firebase.js

    //acutally is 
    //firebase.auth().signInwithPopup etc.etc.
    //but the firebase.auth() is exported as auth from firebase.js

    
  }

   const onFacebookSignIn = ()=>{

    signInWithProvider(new firebase.auth.FacebookAuthProvider())

   }

   const onGoogleSignIn = ()=>{

    signInWithProvider(new firebase.auth.GoogleAuthProvider())

   }


  return (
    <div class="container">
       
   {/* it has 24 columns systems */}
      <div class="row">
         <div class= "col col-md-6 col-xs-12 offset-md-3" > 
   {/* 24 columns in smaller and md and above 12 columns  */}

         <Panel shaded className="panel">
           <div className="text-center" style={{margin:"70px"}}>
             <h1 style={{color:"white"}}> Twerds </h1>
             <h5 style={{color:"white"}}>Combine your werds at Twerds</h5>
           </div>

         <div className="mt-1">
           <Button block color="blue" onClick={onFacebookSignIn}>
             <Icon icon="facebook"/> Continue With Facebook 
           </Button>
  
           <Button block color="green" onClick={onGoogleSignIn}>
             <Icon icon="google"/> Continue With Google 
           </Button>

         </div>

         </Panel>
         </div>
      </div>
    
    </div>
  )
}

export default SignIn
