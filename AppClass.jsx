import React from "react";
class AppClass extends React.Component{
    state = {
        goOut : "yes"
    }
    toggle =() =>{
        this.setState(prevState => {
            return{
                goOut : prevState.goOut === "yes" ? "no" :"yes"
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Should I go tonight</h1>
                <div onClick={this.toggle}>
                    <h1>{this.state.goOut}</h1>
                </div>
            </div>
        )
    }
}
export default AppClass