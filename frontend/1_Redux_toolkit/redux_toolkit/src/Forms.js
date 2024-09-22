import React, { useState } from 'react';
import {useDispatch} from "react-redux"
import {updateName,deposite,withDraw,updateMobile,updateDebitTransaction,updateCreditTransaction} from "./store"

const Forms = () => {
    let [amount,setAmount]=useState("")
    let [name,setName]=useState('')
    let [mobile,setMobile]=useState('')

    let dispatch=useDispatch()

    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"500px",border:"2px solid green",padding:"10px"}}>

            <div className='mt-2' >
                <input type="text"
                        onChange={(e)=>setAmount(e.target.value)}
                        value={amount}
                        placeholder='Enter Amount'
                        className="form-control" aria-describedby="passwordHelpBlock"
                        
                />

                <button className='btn btn-primary mx-2 float-end'
                onClick={()=>{
                    
                    dispatch(deposite(amount));

                    dispatch(updateCreditTransaction({
                        type:"credit",
                        timeStamp:new Date(),
                        account:amount
                    }))

                    setAmount("")



                }}
                >Deposite</button>

                <button className='btn btn-danger mx-2 float-end'
                                onClick={()=>{dispatch(withDraw(amount));

                                    dispatch(updateDebitTransaction({
                                        type:"debit",
                                        timeStamp:new Date(),
                                        account:amount
                                    }))

                                    setAmount("")


                                }}
                >withDraw</button>
            </div>


            <div className='mt-2' >
                <input type="text"
                        onChange={(e)=>setName(e.target.value)}
                        value={name}
                        placeholder='Enter Name'
                        className="form-control" aria-describedby="passwordHelpBlock"
                        />

                <button className='btn btn-primary mx-2 float-end'
                onClick={()=>{dispatch(updateName(name));
                    setName("")
                }
            }
                >Update Name</button>
            </div>

            <div className='mt-2' >
                <input type="text"
                        onChange={(e)=>setMobile(e.target.value)}
                        value={mobile}
                        placeholder='Enter Mobile'
                        className="form-control" aria-describedby="passwordHelpBlock"/>

                <button className='btn btn-primary mx-2 float-end'
                                onClick={()=>{
                                    dispatch(updateMobile(mobile));
                                    setMobile("")
                                
                                }
                            }

                >Update Mobile</button>
            </div>



        </div>
    );
};

export default Forms;