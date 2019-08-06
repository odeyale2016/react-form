import React from 'react'
class Unread extends React.Component{
    constructor(){
        super()
        this.state={
            unreadmeassges: ["Welcome Kenny", "we need to see"]
        }
    }
    render(){
        return(
            <div>
              {this.state.unreadmeassges.length > 0 &&
                <h1>You have  {this.state.unreadmeassges.length} Unread messages</h1>}
            </div>
        )
    }
}

export default Unread;
