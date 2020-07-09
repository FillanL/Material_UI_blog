import axios from "axios"

let baseURL = "http://localhost:3004"

export const createUser= async (userObject)=>{
    axios.post(`${baseURL}/user`,userObject)
}
export const logInUser = async(userObject)=>{
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Auth':"zxc"
        }
    }
    axios.post(`${baseURL}/user/auth`, userObject, options)
    // .then(res => res.data)
    .then(res => console.log(res))
}