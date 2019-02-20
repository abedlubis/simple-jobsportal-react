import db, {fbprovider, googleprovider} from '../../../scripts/config'

export function handleSignUp (email, password) {
    return async dispatch => {
        // console.log("masuk ke function signup   ")
        try{
            const result = await db.auth().createUserWithEmailAndPassword(email, password)
            localStorage.setItem('access_token', result.user.uid)
            dispatch({
                type: 'HANDLE_LOGIN',
                payload: true
            }) 
        }
        catch(error) {
            var errorMessage = error.message;
            console.log(errorMessage)
        }
    }
}
export function handleLoginManual (email, password) {
    return async dispatch => {
        try {
            const result = await  db.auth().signInWithEmailAndPassword(email, password)
            localStorage.setItem('access_token', result.user.uid)
            dispatch({
                type: 'HANDLE_LOGIN',
                payload: true
            })  
        } catch (error) {
            var errorMessage = error.message;
            console.log(errorMessage)
        }
    }
}

export function handleLoginFacebook () {
    console.log("masuk ke functionnya")
    return dispatch => {
        db.auth().signInWithPopup(fbprovider).then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.user.uid;
        //   console.log("tokennya dapat", result.user.uid)
          localStorage.setItem('access_token', token)
          dispatch({
              type: 'HANDLE_LOGIN',
              payload: true
          })
          dispatch({
              type: 'HANDLE_MODAL',
              payload: false
          })
        }).catch(function(error) {
          console.log(error)
        });
        
    }
}

export function handleLoginGoogle () {
    console.log("masuk ke functionnya")
    return dispatch => {
        db.auth().signInWithPopup(googleprovider).then(function(result) {
            // var token = result.credential.accessToken;
            // console.log(token,"====token")
            var user = result.user;
            console.log(user,"===user")
            localStorage.setItem('access_token', user.uid)
            dispatch({
                type: 'HANDLE_LOGIN',
                payload: true
            })
            // ...
          }).catch(function(error) {
            console.log(error,"==")
            // // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // // The email of the user's account used.
            // var email = error.email;
            // // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
        });
    }
}
export function handleLogout () {
    return dispatch =>{
        localStorage.removeItem('access_token')
        db.auth().signOut().then(function() {
            dispatch({
                type: 'HANDLE_LOGIN',
                payload: false
            })
        }).catch(function(error) {
            console.log(error)
        });
    }
}

export function checkLogin () {
    return dispatch => {
        db.auth().onAuthStateChanged(function(user) {
            if (user) {
              var email = user.email;
              console.log("ada user log in dengan email", email)
            } else {
                console.log("tidak ada user llogin")
            }
        });
        if(localStorage.getItem('access_token')){
            dispatch({
                type : 'HANDLE_CHECK_LOGIN',
                payload: true
            })
        }else{
            dispatch({
                type : 'HANDLE_CHECK_LOGIN',
                payload: false
            })
        }
    }
}

export function showModal () {
    return dispatch => {
        dispatch({
            type: 'HANDLE_MODAL',
            payload: true
        })
    }
}

export function hideModal () {
    return dispatch => {
        dispatch({
            type: 'HANDLE_MODAL',
            payload: false
        })
    }
}