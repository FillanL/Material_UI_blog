import axios from "axios"

let baseURL = "http://localhost:3004"

export const createUser = (userObject) => async dispatch => {
    const options = {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            "accept": 'application/json',
            'Auth': "zxc"
        }
    }
    const promise = new Promise((resolve, reject) => {

        axios.post(`${baseURL}/user`, userObject, options)
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    dispatch({
                        type: "USER_CREATED",
                        payload: response.data === "created" ? true : false
                    })
                    // history.push("/admin/login")
                }
                return resolve(response)
            })
            .catch(error => {
                if (error.response) {
                    // const {data, status} = error.response
                    // if(status === 406) return {"error": "not acceptable inputs"}
                    dispatch({
                        type: "USER_CREATED",
                        payload: false
                    })
                    // history.push("/admin/signup")
                    console.log("SDfsd")
                    return resolve(error.response)

                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log("next")
            })
    })
    return promise
}

export const logInUser = (userObject) => dispatch => {
    let token = ""
    const options = {
        "credentials":"include",
        headers: {
            'Content-Type': 'application/json',
            "accept": 'application/json',
            'Authorization': "Bearer "+ token
        }
    }
    const promise = new Promise((resolve, reject) => {

        axios.post(`${baseURL}/user/auth`, userObject, options)
            .then(response => {
                console.log(response)
                // dispatch({
                //     type: "LOGIN_SUCCESS",
                //     payload: response
                // })
                return resolve(response)
            })
            .catch(error => {
                if (error.response) {
                    const { data, status } = error.response
                    // Request made and server responded
                    if (status === 406) {
                        console.log(data)
                        dispatch({
                            type: "LOGIN_ERROR",
                            payload: data
                        })
                    }
                    console.log(data)
                    resolve(data)
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    dispatch({
                        type: "LOGIN_ERROR",
                        payload: error.message
                    })
                }
                console.log(error, "error")
                resolve(error.response.data)
            })
    })
    return promise
}


export const refresh = async() => {
    console.log("mmmm refreshing")
    let token = ""
    const options = {
        "credentials":"include",
        headers: {
            'Content-Type': 'application/json',
            "accept": 'application/json',
            'Authorization': "Bearer "+ token
        },'withCredentials':true
    }
    const promise = new Promise((resolve, reject) => {

        axios.post(`${baseURL}/user/refreshToken`, options)
            .then(response => {
                console.log(response)
                return resolve(response)
            })
            .catch(error => {
                resolve(error.response.data)
            })

    })
    return promise
}