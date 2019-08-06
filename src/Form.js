import React from 'react'
import  './App.css'
class Form extends React.Component{
    constructor(){
        super()
        this.state={
            firstName: "",
            lastName: "",
            address: "",
            gender: "",
            qua: "",
            isFriendly: false
        }
        this.handleChange=this.handleChange.bind(this)
    }
   
    handleChange(event){
        const {name, value,type,checked} = event.target
        type==="checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }
    handleSubmit(){

    }
    render(){
        
        return(
     <form onSubmit={this.handleSubmit}>
            <input 
                type="text"
                name="firstName" 
                value={this.state.firstName} 
                placeholder="FirstName" 
                onChange={this.handleChange}>
            </input><p />
            <input
                type="text"
                name="lastName" 
                value={this.state.lastName} 
                placeholder="LasttName"
                onChange={this.handleChange}>
            </input><p />
            <textarea
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
            /><p/>
            <input 
            type="checkbox" 
            name="isFriendly"
            onChange={this.handleChange}
            checked={this.state.isFriendly} 
            
            />
            <label>Is Friendly?</label><p/>

            <input 
            type="radio" 
            name="gender"
            value="male"
            onChange={this.handleChange}
            checked={this.state.gender==="male"} 

            />
            <label>Male</label>
            <input 
            type="radio" 
            name="gender"
            value="female"
            onChange={this.handleChange}
            checked={this.state.gender==="female"} 

            />
            <label>Female</label><p />
            <label>Qualification:</label>
            <select name="qua" onChange={this.handleChange}>
                <option value="SSCE">SSCE</option>
                <option value="OND">OND</option>
                <option value="HND">HND</option>
                <option value="BSc.">BSc.</option>
            </select><p />
            <button>Submit</button>
            <hr />
            <h1>Output</h1>
            <h2>Your Fullname: {this.state.firstName} {this.state.lastName} </h2>
            <h2>Address: {this.state.address} </h2>
            <h2>Gender:
         {this.state.gender}</h2>
            <h2>Qualification:{this.state.qua}</h2>
            </form>
             
        )
    }
}
export default Form;