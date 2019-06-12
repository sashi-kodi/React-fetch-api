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
       
        
        return(
            <React.Fragment>
                {errors.length>0 &&

                   <div className="error-message">
                           <div class="error-text">
                            <p>{errors}</p>
                            </div>
                        </div>

                }
             {users ? 
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
            </section> : null
            
            }
           </React.Fragment> 
            
        )
       
    }
    
}
export default UsersComponent;