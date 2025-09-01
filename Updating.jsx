import React from "react";
class Updating extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            count:0
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log(`count updated from ${prevState.count}->${this.state.count}`)
        }
    }
    increment = ()=>{
        this.setState((prevState)=>({
            count: prevState.count + 1
        }))
    }
    render(){
        return(
            <>
            <h1>Counter Example</h1>
            <p>{this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
            </>
        )
    }
}
export default Updating