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

const remove_user = () => {
    return (dispatch) => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            console.log("Successfully log out");
            dispatch({
                type: 'REMOVE_USER',
                user: { isLogin: false }
            })
        }).catch((error) => {
            // An error happened.
            let errorMessage = error.message;
            console.log("Log Out Error Message => ", errorMessage);
        });
    }
}

const restaurant_list = () => {
    return (dispatch) => {
        db.collection('users').onSnapshot(snapshot => {
            const restaurantList = [];    
            snapshot.forEach(doc => {
                if(doc.data().isRestaurant){
                    const obj = {id: doc.id, ...doc.data()}
                    restaurantList.push(obj);
                }
            })
            // console.log('Restaurant List', restaurantList);
            dispatch({
                type: 'RESTAURANT_LIST',
                restaurantList: restaurantList,
            })
        })
    }
}


export {
    update_user,
    remove_user,
    restaurant_list,
}