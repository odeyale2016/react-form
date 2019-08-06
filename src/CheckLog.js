import React from 'react'
class CheckLog extends React.Component{
    constructor(){
        super()
        this.state={
            isLoggedIn : true
        }
        this.logIn=this.logIn.bind(this)
    }
    logIn(){
        this.setState(prevState =>{
            return{
                isLoggedIn: !prevState.isLoggedIn
            }
        })
        
    }
    render(){
        let buttonText=this.state.isLoggedIn? "LOG OUT" : "LOG IN"
        let displayText=this.state.isLoggedIn? "LOGGED IN" : "LOGGED OUT"
        return(
            <div >
                <h1 >{displayText}</h1>
                <button type="submit" onClick={this.logIn}>{buttonText}</button> 
            </div>
            
        )
    }
}
export default CheckLog;