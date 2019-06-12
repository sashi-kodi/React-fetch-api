import React, {Component} from 'react';
import UserComponent from './UserComponent';
import './UsersComponent.css';


class UsersComponent extends Component{
   constructor(props){
       super(props);
       this.state={users:null, errors:[]};
   }
    componentDidMount(){
        let url="https://jsonplaceholder.typicode.com/users";
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            this.setState({users: data, errors:[]});
        })
        .catch(error=>{
            console.log(error);
            this.setState({errors: [...this.state.errors, error.message]})
        })
    }
    
    render(){
        const {users,errors} = this.state;
       
        
        if(errors.length>0){
            return(
              <div className="error-message">
                   <div class="error-text">
                    <p>{errors}</p>
                    </div>
                </div>
            
            )
        }
        else{
             if (!users) return null;
            return(
            <section className="users-container">
        <table className="users-table table table-striped">
        <thead>
          <tr>
             <th>Name</th>
             <th>UserName </th>
               <th>Email</th>
             <th>Phone No </th>
           </tr>
        </thead>
        <tbody>
            {users.map(user=>(
             
              <UserComponent key={user.id} user={user}/>
            ))}
        </tbody>
        </table>
        </section>
            )
        }
        
        
       
    }
    
}
export default UsersComponent;