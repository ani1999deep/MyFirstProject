import React from 'react'


import { BrowserRouter as Router,Route } from 'react-router-dom'

import Login from './Login'
import Profile from './Profile'

const AppOk=()=> {
  return (
    <div>
      <Router>
         
                  <Route exact path='/login' component={<Login/>}/>
                  <Route path='profile' component={<Profile/>}/>
            
      </Router>
    </div>
  )
}

export default AppOk
