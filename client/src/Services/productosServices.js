
export async function getAll(buscar) {
     return fetch(`https://proyecto-api-53a1c99f417c.herokuapp.com/productos/?buscar=${buscar}`)
     .then((res)=>res.json())
}


export async function getById(id){
  return fetch(`https://proyecto-api-53a1c99f417c.herokuapp.com/productos/${id}`)
     .then((res)=>res.json())
}


export async function createProductos(data,token){
  return fetch(`https://proyecto-api-53a1c99f417c.herokuapp.com/productos/`, {
      method:"POST",
      headers:{
        'Content-Type':"application/json",
        'x-access-token':token
    },
    body:JSON.stringify(data)
   })
.then((res) => res.json())
}

export async function update(id,data,token){
  return fetch(`https://proyecto-api-53a1c99f417c.herokuapp.com/productos/${id}`,{
      method:"PUT",
      headers:{
          'Content-Type':"application/json",
          'x-access-token':token
      },
      body:JSON.stringify(data)
  })
  .then((res) => res.json())
}

export async function remove(id,token){
  return fetch(`https://proyecto-api-53a1c99f417c.herokuapp.com/productos/${id}`,{
      method:"DELETE",
      headers:{
          'x-access-token':token
      }
  })
  .then((res) => res.json())
}
