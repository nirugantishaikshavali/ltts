let url="http://127.0.0.1:9006/"

export const fetchData=async ()=>{
    let response=await fetch(url+"get_data")
    let data=await response.json()
    console.log("Response Data--->",data)
    return data
}


export const DelData=async (id)=>{
    let response=await fetch(url+"delete_data/"+id,{
        method:"Delete",
    })
    let data=await response.json()
    return data
}


export const AddData=async (data)=>{
    let response=await fetch(url+"insert_data",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    let res_data=await response.json()
    return res_data
}

export const updateData=async (id,data)=>{
    let response=await fetch(url+"update_data/"+id,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    let res_data=await response.json()
    return res_data
}