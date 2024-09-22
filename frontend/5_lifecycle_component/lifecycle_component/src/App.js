import React,{Component} from "react" 
import Child from "./Child"
class App extends Component{

  constructor(props){
    super(props)
    this.state={
      x:10,
      show:true
    }
  }



  render(){
    return(
      <>
      <h1>Component Life Cycle</h1>
      {
        this.state.show && (      <Child data={this.state.x}/>
        )
      }

      <button onClick={()=>this.setState({show:true})}>Show</button>
      <button onClick={()=>this.setState({show:false})}>Hide</button>
      <button onClick={()=>this.setState({x:this.state.x+10})}>Increment</button>

      </>
    )
  }
}
export default App