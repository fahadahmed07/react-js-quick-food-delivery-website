import firebase from '../config/firebase';
const db = firebase.firestore();

const update_user = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                // console.log("update_user =>>", user.uid)
                db.collection('users').doc(user.uid).get().then((snapshot) => {
                    // console.log("snapshot.data =>>", snapshot.data());
                    dispatch({
                        type: 'SET_USER',
                        user: { ...user, ...snapshot.data(), isLogin: true }
                    })
                })
            } else {
                // No user is signed in.
            }

        });
    }
}


export {
    update_user,
}