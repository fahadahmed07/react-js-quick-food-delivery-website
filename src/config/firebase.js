import * as firebase from 'firebase';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBnLUHidIafVYqJ4nwPGn_uK5lLriGokwE",
    authDomain: "react-quick-food.firebaseapp.com",
    databaseURL: "https://react-quick-food.firebaseio.com",
    projectId: "react-quick-food",
    storageBucket: "react-quick-food.appspot.com",
    messagingSenderId: "775496944172",
    appId: "1:775496944172:web:c57dc1dbd0aa26dd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function signUp(userDetails) {
    return new Promise((resolve, reject) => {
        const { userName, userEmail, userPassword, userCity, userCountry, userGender, userAge, userProfileImage } = userDetails;
        firebase.auth().createUserWithEmailAndPassword(userDetails.userEmail, userDetails.userPassword).then((success) => {
            let user = firebase.auth().currentUser;
            var uid;
            if (user != null) {
                uid = user.uid;
            };
            firebase.storage().ref().child(`userProfileImage/${uid}/` + userProfileImage.name).put(userProfileImage).then((url) => {
                url.ref.getDownloadURL().then((success) => {
                    const userProfileImageUrl = success
                    const userDetailsForDb = {
                        userName: userName,
                        userEmail: userEmail,
                        userPassword: userPassword,
                        userCity: userCity,
                        userCountry: userCountry,
                        userGender: userGender,
                        userAge: userAge,
                        userUid: uid,
                        userProfileImageUrl: userProfileImageUrl,
                    }
                    db.collection("users").doc(uid).set(userDetailsForDb).then((docRef) => {
                        // console.log("Document written with ID: ", docRef.id);
                        resolve(docRef.id)
                    }).catch(function (error) {
                        console.error("Error adding document: ", error);
                        reject(error)
                    })
                }).catch((error) => {
                    // Handle Errors here.
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    console.log("Error in getDownloadURL function", errorMessage);
                    reject(errorMessage)
                })
            }).catch((error) => {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log("Error in Image Uploading", errorMessage);
                reject(errorMessage)
            })
        }).catch((error) => {
            var errorMessage = error.message;
            console.log("Error in Authentication", errorMessage);
            reject(errorMessage)
        })
    })
}


export default firebase;
export {
    signUp,
}






