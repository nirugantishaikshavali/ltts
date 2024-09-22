import { Component } from "react";

class  Child extends Component{

    constructor(props){
        super(props);
        this.state={
            // count:this.props.data
            product:[]
        }
        console.log("Inside Constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("Inside getDerivedStateFromProps")
        return {
            count:props.data
        }

    }

    async componentDidMount(){
        console.log("Inside componentDidMount")

       let res=await fetch("https://jsonplaceholder.typicode.com/posts")
       let data=await res.json()
       console.log("Data--->",data)
       this.setState({...this.state,product:data})
    }


    shouldComponentUpdate(){
        console.log("Inside shouldComponentUpdate")

        return true
    }

    getSnapshotBeforeUpdate(){
        console.log("Inside getSnapshotBeforeUpdate")
        return true
    }

    componentDidUpdate(){
        console.log("Inside componentDidUpdate")

    }


    componentWillUnmount(){
        console.log("Inside componentDidUpdate")


    }




    
    render(){
        return(<>
        {
            console.log("Inside Render")
        }
        <h1>Child Component</h1>
        <p>{this.props.data}</p>
        <p>{this.state.count}</p>
        <p>{this.state.product.map((item)=>item.title)}</p>

        </>)
    }
}
export default Child