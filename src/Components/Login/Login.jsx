import React, { Component } from 'react';
import "./Login.css"
import {Link} from "react-router-dom"
import { Redirect } from "react-router-dom";
// export class Login extends Component {
    
//     constructor(props)
//     {
//         super(props)
//         this.state={
//             EID:"",
//             Error:"",
//             // flag:false
//         }
//         // this.getID=this.getID.bind(this)
//     }
//      Valid()
//     {
//         if(!this.state.EID){
           
//         this.setState({Error:"Please enter employee ID"})
//         return false
//        }
       
//            return true
       
      
//     }
   
    
//     handleSubmit(e)
//     {
//         e.preventDefault();
//         // this.props.getId(e);
//     //    this.setState({flag:true})
      
//     // this.props.history.push({
//     //     pathname:"/article",

//     //     state:{
//     //         EID:this.state.EID
//     //     }
//     // })
// }
   

//     render() {
        
//         return (
           
//         <div className="parent-container">
//             <div className="cont">
//                 <div className="eid">
//                     <input type="text" name="EID"  placeholder="Enter employee ID" onChange={(e)=> this.props.getId(e)}  required/>
//                 </div>
                
//             <div>
//                <Link to="article"> <button className="Login_button" onClick={()=>this.handleSubmit} >Articles page </button></Link>
//              </div>   
//             </div>
//         </div>
//         );
//     }
// }

// export default Login;



export default function Login({getId}) {
    return (
       
               
        <div className="parent-container">
            <div className="cont">
                <div className="eid">
                    <input type="text" name="EID"  placeholder="Enter employee ID" onChange={(e)=>getId(e)}  required/>
                </div>
                
            <div>
               <Link to="/article"> <button className="Login_button"   >Articles page </button></Link>
             </div>   
            </div>
        </div>
        
        
    )
}



