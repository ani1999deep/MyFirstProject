import React, { useState } from 'react'


const Formvalidation = () => {

    const [user, setUser] = useState("")

    const [password, setPassword] = useState('')

    const [userErr, setUserErr] = useState(false)

    const [passErr, setPassErr] = useState(false)


    const loginHandle = (e) => {

        if (user.length < 3 || password.length < 3) {
            alert('type correct value')
        }
        else {

            alert('all is good:')
        }


        e.preventDefault()

    }


    // it is use get the data from user of user id

    const userHandler = (e) => {

        //  use the validation
        let item = e.target.value;

        if (item.length < 3) {

            // we also define state for checking error

            setUserErr(true)

            // console.log('Enter char greater than three')
        }
        else {

            setUserErr(false)
        }

        setUser(item)

        console.warn(e.target.value.length)
    }


    // It is used for password

    const userPasswordHandler = (e) => {


        let item = e.target.value;

        if (item.length < 3) {

            setPassword(true)
        }

        else {

            setPassword(false)
        }

        setPassword(item)

        console.warn(e.target.value.length)
    }
    return (
        <div className='ab'>
            <h1>Login</h1>



            {/* we define a function() for control the page for relaod-loginHandle */}

            <form onSubmit={loginHandle}>

                <input type='text' placeholder='Enter user id' onChange={userHandler} />{userErr ? <span>User id is not valid</span> : null}
                <br></br>
                <br></br>
                <input type='password' placeholder='Enter user password' onChange={userPasswordHandler} />{passErr? <span>User password is not valid</span> : null}
                <br></br>
                <br></br>
                <button type='submit'>Login</button>


            </form>
        </div>
    )
}

export default Formvalidation
