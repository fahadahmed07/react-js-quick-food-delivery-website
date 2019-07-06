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
                        user: { ...snapshot.data(), isLogin: true }
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
                if (doc.data().isRestaurant) {
                    const obj = { id: doc.id, ...doc.data() }
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

const order_request = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // console.log("user uid => ", user.uid)
                db.collection('users').doc(user.uid).collection("orderRequest").onSnapshot(snapshot => {
                    const orderRequest = [];
                    snapshot.forEach(doc => {
                        const obj = { id: doc.id, ...doc.data() }
                        // console.log("Order Request From Action => ", obj)
                        orderRequest.push(obj)
                    })
                    dispatch({
                        type: 'ORDER_REQUEST',
                        orderRequest: orderRequest,
                    })
                })
            }
        });
    }
}

const my_order = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // console.log("user uid => ", user.uid)
                db.collection('users').doc(user.uid).collection("myOrder").onSnapshot(snapshot => {
                    const myOrder = [];
                    snapshot.forEach(doc => {
                        const obj = { id: doc.id, ...doc.data() }
                        // console.log("Order Request From Action => ", obj)
                        myOrder.push(obj)
                    })
                    dispatch({
                        type: 'MY_ORDER',
                        myOrder: myOrder,
                    })
                })
            }
        });
    }
}

const my_foods = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // console.log("user uid => ", user.uid)
                db.collection('users').doc(user.uid).collection("menuItems").onSnapshot(snapshot => {
                    const myFoods = [];
                    snapshot.forEach(doc => {
                        const obj = { id: doc.id, ...doc.data() }
                        // console.log("Order Request From Action => ", obj)
                        myFoods.push(obj)
                    })
                    dispatch({
                        type: 'MY_FOODS',
                        myFoods: myFoods,
                    })
                })
            }
        });
    }
}


export {
    update_user,
    remove_user,
    restaurant_list,
    order_request,
    my_order,
    my_foods,
}