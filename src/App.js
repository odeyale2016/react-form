import React from 'react';
 
import './App.css';
import Conditional from './Conditional'
import Unread from './Unread'
import CheckLog from './CheckLog'
import Form from './Form'
class App extends React.Component{
constructor(){
  super()
  this.state={
    isLoading:true
  }
}
 componentDidMount(){
   setTimeout(() =>{
     this.setState({
       isLoading: false
     })
   }, 1500)

 }

//  componentWillReceiveProps(nextProps){

//  }

//  shouldComponentUpdate(nextProps, nextState){

//  }

//  componentWillUnmount(){

//  }
  render(){
     return(
    
<div>
  <Conditional isLoading={this.state.isLoading} />

  <Unread />
  <CheckLog />
  <Form />
</div>

    )
  }
}






// class App extends React.Component{
//   constructor(){
//     super()
//       this.state={
//         name:"Odeyale",
//         age: 28
//       }
    
//   }
//   render(){

//     return(
//     <div>
//       <h1> {this.state.name} </h1>
//       <h2>{this.state.age} Years Old</h2>
//     </div>
//     );
//   }
// }

// class Header extends React.Component{
//   render(){
//     return(
//       <header>
//        <p> Welcome, {this.props.username}</p>
//       </header>
//     )
//   }
// }

// class Greating extends React.Component{
//   render(){
//     const date= new Date();
//     const hours=date.getHours();
//     let timeOfDay
//     if (hours<12){
//        timeOfDay="Morning"
//     }else if(hours>=12 && hours<17){
//       timeOfDay="Afternoon"
//     }else{
//       timeOfDay="evening"
//     }

//     return(
//       <div>
//         <h2>{timeOfDay}</h2>
//       </div>
//     )
//   }
// }

export default App;
