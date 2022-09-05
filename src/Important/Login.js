import React from "react";
import axios from "axios";
import swal from 'sweetalert';

import {Redirect} from 'react-router';

class Login extends React.Component
{

    
    state={
        email:'',
        password:''
    }

    
    handleChange=(e)=>{

        this.setState({[e.target.name]:e.target.name});
    }

    
    handlSubmit=(e)=>{

        e.preventDefault();

        axios.post('https://reqres.in/api/login',{name:this.state.email,job:this.state.password})

        .then(response=>{

            swal('Success!','Registration Successful','success');
            console.log('res:',response.data);
            localStorage.setItem('user_id',response.data.token);
            this.props.history.push('/showdata');
        })

        .catch(error=>{

            swal('Sorry Failed!','Registration Failed','error');

            console.log(error)
        })
    }
    render(){

        if(localStorage.getItem('user_id'))
        return(

            <>
            <h3>Login PAge</h3>
            <form>

                EMAIL:
                <input type='text' name="email" onChange={this.handleChange}/>
                <br></br><br></br>

                PASSWORD:
                <input type='password' name="password" onChange={this.handleChange}/>

                <br></br><br></br>
                <input type='submit' name="btnsub" value='REGISTER' onChange={this.handleChange}/>
            </form>
            </>
        )
    }
}

