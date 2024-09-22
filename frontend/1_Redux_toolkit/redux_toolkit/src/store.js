// import {createSlice,configureStore} from "@reduxjs/toolkit"
// const data={
//     balance:0,
//     fullName:"",
//     mobile:null
// }

// const transactions=[]


// const userSlice=createSlice({
//     name:"user",
//     initialState:data,
//     reducers:{
//         updateName:(state,action)=>{
//             state.fullName=action.payload
//         },
//         deposite:(state,action)=>{
//             state.balance+= +action.payload
//         },
//         withDraw:(state,action)=>{
//             state.balance+= -action.payload
//         },
//         updateMobile:(state,action)=>{
//             state.mobile=action.payload
//         }
//     }
// })

// const transactionSlice=createSlice({
//     name:"transaction",
//     initialState:transactions,
//     reducers:{
//         //WithDraw
//         updateDebitTransaction:(state,action)=>{
//             state.push(action.payload)
//         },
//         //Deposite
//         updateCreditTransaction:(state,action)=>{
//             state.push(action.payload)
//         }

//     }


// })

// export const store=configureStore({
//     reducer:{
//         user:userSlice.reducer,
//         transaction:transactionSlice.reducer
//     }
// })

// export const {updateName,deposite,withDraw,updateMobile}=userSlice.actions
// export const { updateDebitTransaction, updateCreditTransaction } = transactionSlice.actions;



import { createSlice, configureStore } from "@reduxjs/toolkit";

const data = {
    balance: 0,
    fullName: "",
    mobile: null
};

const transactions = [];

const userSlice = createSlice({
    name: "user",
    initialState: data,
    reducers: {
        updateName: (state, action) => {
            state.fullName = action.payload;
        },
        deposite: (state, action) => {
            state.balance += +action.payload;
        },
        withDraw: (state, action) => {
            state.balance += -action.payload;
        },
        updateMobile: (state, action) => {
            state.mobile = action.payload;
        }
    }
});

const transactionSlice = createSlice({
    name: "transaction",
    initialState: transactions,
    reducers: {
        updateDebitTransaction: (state, action) => {
            state.push(action.payload);
        },
        updateCreditTransaction: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        transaction: transactionSlice.reducer
    }
});

export const { updateName, deposite, withDraw, updateMobile } = userSlice.actions;
export const { updateDebitTransaction, updateCreditTransaction } = transactionSlice.actions;
