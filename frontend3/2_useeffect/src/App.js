import React,{useState,useEffect} from 'react';

const App = () => {
  let [count,setCount]=useState(0)
  let [Product,setProduct]=useState([])
  let [error,setError]=useState("")
  let [loading,setLoading]=useState(false)
  let [button_dis,setButton]=useState(false)

  let url=`https://dummyjson.com/products?limit=10&skip=${count===0?0:count*10}`

  useEffect(() => {
    fetchData()
  }, [count])

  useEffect(()=>{
    if (Product.length===30){
    setButton(true)
    }
    

  },[Product])

  const fetchData=async ()=>{
    try{
      setLoading(true)
      let res=await fetch(url)
      let data=await res.json()
      if(data && data.products && data.products.length>0){
        // setProduct(data.products)
        setProduct([...Product,...data.products])
        setLoading(false)
      }
    }
    catch(error){
      setLoading(false)
      setError(error)
    }
  }

  console.log("Product Data--->",Product)


  return (
    <div>
      <h1>Images</h1>
      {
        Product.length>0?Product.map((item,i)=>
          <>
        <img key={i} src={item.thumbnail}/>
        </>
        
      ):null
      }
      <button  disabled={button_dis} onClick={()=>setCount(count+1)}>Increment</button>

      {
        button_dis&&<h1>Your Limit is Completed....</h1>
      }
    </div>
  );
};

export default App;