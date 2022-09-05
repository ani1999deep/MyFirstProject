import React from "react";
import axios from "axios";
import swal from 'sweetalert';

class Resgister1 extends React.Component
{

    state={
        email:'',
        password:''
    }

    handleChange=(e)=>{

        this.setState({[e.target.name]:[e.target.name]});
    }

    handlSubmit=(e)=>{

        e.preventDefault();

        axios.post('https://reqres.in/api/users',{name:this.state.email,job:this.state.password})

        .then(response=>{

            swal('Success!','Registration Successful','success');
            console.log('res:',response.data);
            localStorage.setItem('user_id',response.data.id);
            this.props.history.push('/login');
        })

        .catch(error=>{

            swal('Sorry Failed!','Registration Failed','error');

            console.log(error)
        })
    }

    render(){

        return(

            <>
            <h3>Please Registration</h3>
            <form>

                USERNAME:
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