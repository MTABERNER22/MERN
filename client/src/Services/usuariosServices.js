export async function login(data){
    return fetch(`https://proyecto-api-53a1c99f417c.herokuapp.com/users/login/`,{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(data)
    })
    .then((res) => res.json())
 }

export async function create(data){
    return fetch(`https://proyecto-api-53a1c99f417c.herokuapp.com/users/`,{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(data)
    })
    .then((res) => res.json())
 }

