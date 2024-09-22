import {createSlice,configureStore,createAsyncThunk} from "@reduxjs/toolkit"

let initialData={
    users:[],
    status:"",
    error:false
    }

export let fetchUsers=createAsyncThunk("fetch/user",async ()=>{
    try{
        let response=await fetch("https://66e13ae6c831c8811b5423b2.mockapi.io/crud")
        let data=await response.json()
        console.log("fetch Data--->",data)
        return data
    }
    catch(error){
        return error
    }

})

export let insertUsers=createAsyncThunk("insert/user",async (data)=>{
    try{
        let response=await fetch("https://66e13ae6c831c8811b5423b2.mockapi.io/crud",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            data:JSON.stringify(data)
        })
        let datas=await response.json()
        console.log("fetch Data--->",datas)
        return data
    }
    catch(error){
        return error
    }
})



let userSlice=createSlice({
    name:"user",
    initialState:initialData,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.status="loading"
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.status="completed";
            state.users=action.payload
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.status="error";
            state.users=[];
            state.error=action.error.message
        })
        .addCase(insertUsers.pending,(state)=>{
            state.status="loading"
        })
        .addCase(insertUsers.fulfilled,(state,action)=>{
            state.status="completed";
            state.users.push(action.payload)
        })
        .addCase(insertUsers.rejected,(state,action)=>{
            state.status="error";
            state.users=[];
            state.error=action.error.message
        })
    }
})

let store=configureStore({
    reducer:{
        user:userSlice.reducer
    }
})

export default store;
